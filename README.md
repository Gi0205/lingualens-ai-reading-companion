# LinguaLens AI Reading Companion

LinguaLens is an AI-assisted reading companion for language learners and technical readers. It lets users upload a text/PDF document, read it in the browser, select words or passages, and ask an AI assistant for translation, contextual explanation, full-document summaries, and follow-up discussion.

Live demo:

https://lingualens-ai-reading-companion-jfe.vercel.app

Repository:

https://github.com/Gi0205/lingualens-ai-reading-companion

## Features

- Upload `.txt`, `.md`, simple `.html`, and selectable-text `.pdf` files.
- Render PDFs with PDF.js using canvas + selectable text layers.
- Select words, sentences, or paragraphs and generate AI explanations.
- Translate selected text with stricter prompts that avoid unnecessary reasoning sections.
- Summarize nearby context or summarize the whole uploaded document.
- Chat with the AI about the selected passage or current document.
- Save notes with quote, context, model, provider, language, and AI explanation.
- Highlight selected text and remove highlights by selecting the same highlight again.
- Export notes as Markdown or DOCX.
- Switch UI language and explanation language independently.
- Use DeepSeek or OpenAI through a backend API proxy.
- Online demo supports an access code and simple rate limiting.

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- PDF rendering: PDF.js
- Local backend: PowerShell `HttpListener`
- Online backend: Vercel Serverless Functions
- AI providers: DeepSeek API / OpenAI API
- Deployment: Vercel
- Storage: browser `localStorage`

## Architecture

```text
User selects text in the reader
-> app.js builds a task-specific prompt
-> /api/chat receives the request
-> backend calls DeepSeek or OpenAI with the server-side API key
-> AI response is returned to the browser
-> the chat panel displays the explanation
```

The API key is never stored in frontend code. In local development, it is read from the PowerShell session. In production, it is stored as a Vercel environment variable.

## Local Development

Go to the project directory:

```powershell
cd C:\Users\魏文君\ai-reading-companion
```

Run with DeepSeek:

```powershell
$env:DEEPSEEK_API_KEY="your DeepSeek API key"
powershell -ExecutionPolicy Bypass -File .\run.ps1 -Port 8808
```

Run with OpenAI:

```powershell
$env:OPENAI_API_KEY="your OpenAI API key"
powershell -ExecutionPolicy Bypass -File .\run.ps1 -Port 8808
```

Open:

```text
http://127.0.0.1:8808
```

## Vercel Deployment

Import this GitHub repository into Vercel and set the following environment variables:

```text
DEEPSEEK_API_KEY=your DeepSeek API key
DEMO_ACCESS_CODE=your demo access code
RATE_LIMIT_MAX_REQUESTS=30
RATE_LIMIT_WINDOW_MS=3600000
```

Optional:

```text
OPENAI_API_KEY=your OpenAI API key
MAX_INPUT_CHARS=50000
```

Notes:

- If `DEMO_ACCESS_CODE` is set, the online demo shows an access-code input.
- If `DEMO_ACCESS_CODE` is not set, anyone with the URL can call the AI API.
- The current rate limiter is an in-memory demo-level limiter. A production system should use Redis, Upstash, Supabase, Cloudflare KV, or another shared store.

## PDF Support

LinguaLens uses PDF.js to render PDF pages visually while overlaying a selectable text layer. This means users can keep the original page layout and still select text for AI explanation.

Current limitations:

- Works best with PDFs that contain selectable text.
- Scanned-image PDFs are not supported yet.
- OCR support is planned as a future improvement.
- Very large PDFs may need lazy page rendering and page navigation controls in a production version.

## Prompt Design

The prompts are designed to reduce hallucination:

- The assistant must use only the selected text, nearby context, document source text, and recent chat shown in the prompt.
- If the text does not provide enough evidence, the assistant should say the information is not available in the text.
- The assistant should not add background knowledge, examples, causes, author intent, or names unless they appear in the provided text.
- Translation prompts ask for natural translation and avoid unnecessary literal-vs-natural comparison unless the user explicitly asks for it.

## Security Notes

Do not commit these values to GitHub:

```text
DEEPSEEK_API_KEY
OPENAI_API_KEY
DEMO_ACCESS_CODE
.env
private books or personal PDFs
```

The included `.gitignore` excludes `.env`.

## Roadmap

- Lazy rendering and page navigation for large PDFs.
- OCR fallback for scanned PDFs.
- EPUB support with `epub.js`.
- Searchable notes and note tags.
- Persistent user accounts and database-backed notes.
- Stronger production rate limiting.
- RAG-based chapter-level Q&A for long documents.

## Portfolio Summary

This project demonstrates a full-stack AI product workflow:

- frontend interaction design for reading and selection-based AI assistance
- document parsing and PDF rendering
- prompt design for translation and context-aware explanation
- API proxy design to protect model provider keys
- online deployment with access control and rate limiting
- exportable notes for practical user workflows
