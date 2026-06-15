module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return sendJson(res, 405, { error: "Method not allowed" });
  }

  return sendJson(res, 200, {
    ok: true,
    providers: {
      deepseek: Boolean(process.env.DEEPSEEK_API_KEY),
      openai: Boolean(process.env.OPENAI_API_KEY),
    },
    requiresAccessCode: Boolean(process.env.DEMO_ACCESS_CODE),
    rateLimit: {
      windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 60 * 60 * 1000),
      maxRequests: Number(process.env.RATE_LIMIT_MAX_REQUESTS || 30),
    },
  });
};

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}
