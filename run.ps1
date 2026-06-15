param(
  [int]$Port = 8787
)

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Prefix = "http://127.0.0.1:$Port/"
$ServerVersion = "2026-06-15-deepseek-fix-2"

Add-Type -AssemblyName System.Web
Add-Type -AssemblyName System.Net.Http

function Write-JsonResponse {
  param(
    [System.Net.HttpListenerContext]$Context,
    [int]$StatusCode,
    [hashtable]$Body
  )

  $json = $Body | ConvertTo-Json -Depth 20
  $bytes = [System.Text.Encoding]::UTF8.GetBytes($json)
  $Context.Response.StatusCode = $StatusCode
  $Context.Response.ContentType = "application/json; charset=utf-8"
  $Context.Response.ContentLength64 = $bytes.Length
  $Context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
}

function Get-MimeType {
  param([string]$Path)

  switch ([System.IO.Path]::GetExtension($Path).ToLowerInvariant()) {
    ".html" { "text/html; charset=utf-8" }
    ".css" { "text/css; charset=utf-8" }
    ".js" { "application/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".svg" { "image/svg+xml" }
    ".png" { "image/png" }
    ".jpg" { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    default { "application/octet-stream" }
  }
}

function Read-RequestJson {
  param([System.Net.HttpListenerRequest]$Request)

  $memory = New-Object System.IO.MemoryStream
  $Request.InputStream.CopyTo($memory)
  $raw = [System.Text.Encoding]::UTF8.GetString($memory.ToArray())
  if ([string]::IsNullOrWhiteSpace($raw)) {
    return @{}
  }
  return $raw | ConvertFrom-Json
}

function Get-ResponseText {
  param($ApiResponse)

  if ($ApiResponse.output_text) {
    return [string]$ApiResponse.output_text
  }

  $parts = New-Object System.Collections.Generic.List[string]
  foreach ($item in @($ApiResponse.output)) {
    foreach ($content in @($item.content)) {
      if ($content.text) {
        $parts.Add([string]$content.text)
      }
    }
  }

  return ($parts -join "`n").Trim()
}

function Get-UpstreamError {
  param($Exception)

  $statusCode = 500
  $message = $Exception.Message

  if ($Exception.Response -and $Exception.Response.StatusCode) {
    $statusCode = [int]$Exception.Response.StatusCode
    try {
      $stream = $Exception.Response.GetResponseStream()
      if ($stream) {
        $reader = New-Object System.IO.StreamReader($stream, [System.Text.Encoding]::UTF8)
        $body = $reader.ReadToEnd()
        if (-not [string]::IsNullOrWhiteSpace($body)) {
          $message = "$message $body"
        }
      }
    } catch {
      $message = $Exception.Message
    }
  } elseif ($Exception.Message -match "^HTTP\s+(\d{3})\s+") {
    $statusCode = [int]$Matches[1]
    $message = $Exception.Message
  }

  return @{
    statusCode = $statusCode
    message = $message
  }
}

function Invoke-JsonPost {
  param(
    [string]$Uri,
    [hashtable]$Headers,
    [string]$Body
  )

  $client = [System.Net.Http.HttpClient]::new()
  try {
    foreach ($name in $Headers.Keys) {
      if ($name -eq "Authorization") {
        $client.DefaultRequestHeaders.Authorization =
          [System.Net.Http.Headers.AuthenticationHeaderValue]::Parse($Headers[$name])
      } else {
        $client.DefaultRequestHeaders.TryAddWithoutValidation($name, $Headers[$name]) | Out-Null
      }
    }

    $content = [System.Net.Http.StringContent]::new($Body, [System.Text.Encoding]::UTF8, "application/json")
    $response = $client.PostAsync($Uri, $content).Result
    $bytes = $response.Content.ReadAsByteArrayAsync().Result
    $text = [System.Text.Encoding]::UTF8.GetString($bytes)

    if (-not $response.IsSuccessStatusCode) {
      throw "HTTP $([int]$response.StatusCode) $($response.ReasonPhrase): $text"
    }

    return $text | ConvertFrom-Json
  } finally {
    $client.Dispose()
  }
}

function Invoke-OpenAIChat {
  param($Payload)

  if ([string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
    throw "OPENAI_API_KEY is not set in this PowerShell session."
  }

  $model = if ($Payload.model) { [string]$Payload.model } else { "gpt-5.4-mini" }
  $body = @{
    model = $model
    instructions = [string]$Payload.instructions
    input = [string]$Payload.input
  } | ConvertTo-Json -Depth 20

  $headers = @{
    "Authorization" = "Bearer $env:OPENAI_API_KEY"
  }

  $apiResponse = Invoke-JsonPost `
    -Uri "https://api.openai.com/v1/responses" `
    -Headers $headers `
    -Body $body

  return @{
    text = Get-ResponseText $apiResponse
    id = [string]$apiResponse.id
  }
}

function Invoke-DeepSeekChat {
  param($Payload)

  if ([string]::IsNullOrWhiteSpace($env:DEEPSEEK_API_KEY)) {
    throw "DEEPSEEK_API_KEY is not set in this PowerShell session."
  }

  $model = if ($Payload.model) { [string]$Payload.model } else { "deepseek-v4-flash" }
  $body = @{
    model = $model
    messages = @(
      @{
        role = "system"
        content = [string]$Payload.instructions
      },
      @{
        role = "user"
        content = [string]$Payload.input
      }
    )
    stream = $false
  } | ConvertTo-Json -Depth 20

  $headers = @{
    "Authorization" = "Bearer $env:DEEPSEEK_API_KEY"
  }

  $apiResponse = Invoke-JsonPost `
    -Uri "https://api.deepseek.com/chat/completions" `
    -Headers $headers `
    -Body $body

  return @{
    text = [string]$apiResponse.choices[0].message.content
    id = [string]$apiResponse.id
  }
}

function Invoke-ModelChat {
  param($Payload)

  $provider = if ($Payload.provider) { [string]$Payload.provider } else { "openai" }
  switch ($provider.ToLowerInvariant()) {
    "deepseek" { return Invoke-DeepSeekChat $Payload }
    default { return Invoke-OpenAIChat $Payload }
  }
}

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($Prefix)

try {
  $listener.Start()
} catch [System.Net.HttpListenerException] {
  Write-Host ""
  Write-Host "Could not start LinguaLens at $Prefix"
  Write-Host "This usually means the app is already running on that port."
  Write-Host ""
  Write-Host "Try one of these:"
  Write-Host "  1. Open $Prefix in your browser if you only wanted to use the running app."
  Write-Host "  2. Start on another port, for example:"
  Write-Host "     powershell -ExecutionPolicy Bypass -File .\run.ps1 -Port 8790"
  Write-Host ""
  throw
}

Write-Host ""
Write-Host "LinguaLens is running at $Prefix"
Write-Host "Press Ctrl+C to stop."
if ([string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)) {
  Write-Host "OPENAI_API_KEY is not set. The UI will run in local demo mode."
}
Write-Host ""

try {
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $path = [System.Web.HttpUtility]::UrlDecode($request.Url.AbsolutePath)

    try {
      if ($request.HttpMethod -eq "OPTIONS") {
        Write-JsonResponse $context 200 @{ ok = $true }
        continue
      }

      if ($path -eq "/api/health") {
        Write-JsonResponse $context 200 @{
          ok = $true
          version = $ServerVersion
          hasApiKey = -not [string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)
          providers = @{
            openai = -not [string]::IsNullOrWhiteSpace($env:OPENAI_API_KEY)
            deepseek = -not [string]::IsNullOrWhiteSpace($env:DEEPSEEK_API_KEY)
          }
        }
        continue
      }

      if ($path -eq "/api/chat" -and $request.HttpMethod -eq "POST") {
        $payload = Read-RequestJson $request
        $result = Invoke-ModelChat $payload
        Write-JsonResponse $context 200 $result
        continue
      }

      if ($path -eq "/") {
        $path = "/index.html"
      }

      $relative = $path.TrimStart("/")
      $safeRelative = $relative -replace "/", [System.IO.Path]::DirectorySeparatorChar
      $filePath = Join-Path $Root $safeRelative
      $resolved = [System.IO.Path]::GetFullPath($filePath)

      if (-not $resolved.StartsWith($Root, [System.StringComparison]::OrdinalIgnoreCase)) {
        Write-JsonResponse $context 403 @{ error = "Forbidden" }
        continue
      }

      if (-not [System.IO.File]::Exists($resolved)) {
        Write-JsonResponse $context 404 @{ error = "Not found" }
        continue
      }

      $bytes = [System.IO.File]::ReadAllBytes($resolved)
      $context.Response.StatusCode = 200
      $context.Response.ContentType = Get-MimeType $resolved
      $context.Response.ContentLength64 = $bytes.Length
      $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
      $upstreamError = Get-UpstreamError $_.Exception
      Write-JsonResponse $context $upstreamError.statusCode @{
        error = $upstreamError.message
        statusCode = $upstreamError.statusCode
      }
    } finally {
      $context.Response.OutputStream.Close()
    }
  }
} finally {
  $listener.Stop()
  $listener.Close()
}
