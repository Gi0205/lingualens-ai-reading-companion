const rateBuckets = new Map();

const DEFAULT_DEEPSEEK_MODEL = "deepseek-v4-flash";
const DEFAULT_OPENAI_MODEL = "gpt-5.4-mini";
const RATE_LIMIT_WINDOW_MS = Number(process.env.RATE_LIMIT_WINDOW_MS || 60 * 60 * 1000);
const RATE_LIMIT_MAX_REQUESTS = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 30);
const MAX_INPUT_CHARS = Number(process.env.MAX_INPUT_CHARS || 50000);

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return sendJson(res, 204, {});
  }

  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  if (!hasAccess(req)) {
    return sendJson(res, 401, { error: "Access code required", statusCode: 401 });
  }

  const rateLimit = checkRateLimit(getClientIp(req));
  setRateLimitHeaders(res, rateLimit);
  if (!rateLimit.allowed) {
    return sendJson(res, 429, {
      error: "Rate limit exceeded. Please try again later.",
      statusCode: 429,
    });
  }

  try {
    const body = await readJsonBody(req);
    const provider = body.provider === "openai" ? "openai" : "deepseek";
    const input = String(body.input || "");
    const instructions = String(body.instructions || "");
    const model = String(body.model || "").trim() || (
      provider === "openai" ? DEFAULT_OPENAI_MODEL : DEFAULT_DEEPSEEK_MODEL
    );

    if (!input.trim()) {
      return sendJson(res, 400, { error: "Missing input", statusCode: 400 });
    }

    if (input.length > MAX_INPUT_CHARS) {
      return sendJson(res, 413, {
        error: `Input is too long. Maximum is ${MAX_INPUT_CHARS} characters.`,
        statusCode: 413,
      });
    }

    const text = provider === "openai"
      ? await callOpenAI({ model, instructions, input })
      : await callDeepSeek({ model, instructions, input });

    return sendJson(res, 200, { text });
  } catch (error) {
    const status = Number(error.status || error.statusCode || 500);
    return sendJson(res, status, {
      error: error.message || "AI service request failed",
      statusCode: status,
    });
  }
};

async function callDeepSeek({ model, instructions, input }) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    const error = new Error("DEEPSEEK_API_KEY is not set");
    error.status = 500;
    throw error;
  }

  const data = await postJson("https://api.deepseek.com/chat/completions", {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  }, {
    model,
    messages: [
      { role: "system", content: instructions },
      { role: "user", content: input },
    ],
    temperature: 0.2,
  });

  return data.choices?.[0]?.message?.content || "";
}

async function callOpenAI({ model, instructions, input }) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    const error = new Error("OPENAI_API_KEY is not set");
    error.status = 500;
    throw error;
  }

  const data = await postJson("https://api.openai.com/v1/responses", {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  }, {
    model,
    instructions,
    input,
  });

  return data.output_text || extractResponseText(data);
}

async function postJson(url, headers, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.error?.message || data.error || `Upstream HTTP ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return data;
}

function extractResponseText(data) {
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((item) => item.type === "output_text" && item.text)
    .map((item) => item.text)
    .join("\n");
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") return JSON.parse(req.body || "{}");

  let raw = "";
  for await (const chunk of req) {
    raw += chunk;
  }
  return raw ? JSON.parse(raw) : {};
}

function hasAccess(req) {
  const requiredCode = process.env.DEMO_ACCESS_CODE;
  if (!requiredCode) return true;
  return String(req.headers["x-demo-access-code"] || "") === requiredCode;
}

function checkRateLimit(ip) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    const next = {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
      remaining: Math.max(0, RATE_LIMIT_MAX_REQUESTS - 1),
      allowed: true,
    };
    rateBuckets.set(ip, next);
    cleanupRateBuckets(now);
    return next;
  }

  bucket.count += 1;
  bucket.remaining = Math.max(0, RATE_LIMIT_MAX_REQUESTS - bucket.count);
  bucket.allowed = bucket.count <= RATE_LIMIT_MAX_REQUESTS;
  return bucket;
}

function cleanupRateBuckets(now) {
  for (const [ip, bucket] of rateBuckets.entries()) {
    if (now > bucket.resetAt) {
      rateBuckets.delete(ip);
    }
  }
}

function setRateLimitHeaders(res, bucket) {
  res.setHeader("X-RateLimit-Limit", String(RATE_LIMIT_MAX_REQUESTS));
  res.setHeader("X-RateLimit-Remaining", String(bucket.remaining));
  res.setHeader("X-RateLimit-Reset", String(Math.ceil(bucket.resetAt / 1000)));
}

function getClientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "");
  return forwarded.split(",")[0].trim() || req.socket?.remoteAddress || "unknown";
}

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(status === 204 ? "" : JSON.stringify(payload));
}
