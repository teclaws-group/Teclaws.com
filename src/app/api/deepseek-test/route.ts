const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY ?? "";
const DEEPSEEK_URL     = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_MODEL   = "deepseek-chat";

export async function GET() {
  if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === "your_deepseek_api_key_here") {
    return Response.json(
      { ok: false, error: "DEEPSEEK_API_KEY is not set in .env" },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(DEEPSEEK_URL, {
      method:  "POST",
      headers: {
        "Content-Type":  "application/json",
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model:       DEEPSEEK_MODEL,
        messages:    [{ role: "user", content: 'Reply with exactly: "Hello, DeepSeek is connected and working correctly."' }],
        max_tokens:  30,
        temperature: 0,
        stream:      false,
      }),
    });

    if (!res.ok) {
      const err    = await res.json().catch(() => ({}));
      const status = res.status;
      const msg    = (err as { error?: { message?: string } })?.error?.message ?? "";

      if (status === 401) return Response.json({ ok: false, error: "Invalid API key. Check DEEPSEEK_API_KEY in your .env file." }, { status: 401 });
      if (status === 402) return Response.json({ ok: false, error: "Insufficient balance. Top up at https://platform.deepseek.com" }, { status: 402 });
      if (status === 429) return Response.json({ ok: false, error: "Rate limit hit. Try again shortly." }, { status: 429 });
      if (status >= 500)  return Response.json({ ok: false, error: `DeepSeek server error ${status}` }, { status });
      return Response.json({ ok: false, error: `API error ${status}: ${msg}`, details: err }, { status });
    }

    const data     = await res.json();
    const response = (data?.choices?.[0]?.message?.content ?? "").trim();

    if (!response) {
      return Response.json({ ok: false, error: "DeepSeek responded but returned empty content" }, { status: 502 });
    }

    return Response.json({
      ok:     true,
      response,
      model:  DEEPSEEK_MODEL,
      usage:  data?.usage ?? null,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json(
      { ok: false, error: "Network failure or unreachable endpoint", details: msg },
      { status: 500 },
    );
  }
}
