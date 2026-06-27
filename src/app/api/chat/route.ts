import { buildSystemPrompt } from "@/lib/knowledge-base";

interface Message { role: string; content: string; }

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY ?? "";
const DEEPSEEK_URL     = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_MODEL   = "deepseek-chat";

const EMAIL = "teclawsgroup@gmail.com";

// Map internal roles to DeepSeek/OpenAI roles.
function toDeepSeekMessages(messages: Message[]) {
  return messages.map(m => ({
    role:    m.role === "assistant" ? "assistant" : "user",
    content: m.content,
  }));
}

async function callDeepSeek(messages: Message[]): Promise<string> {
  const body = {
    model: DEEPSEEK_MODEL,
    messages: [
      { role: "system", content: buildSystemPrompt() },
      ...toDeepSeekMessages(messages),
    ],
    max_tokens:   1200,
    temperature:  0.65,
    top_p:        0.9,
    stream:       false,
  };

  const res = await fetch(DEEPSEEK_URL, {
    method:  "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err    = await res.json().catch(() => ({}));
    const status = res.status;
    const msg    = (err as { error?: { message?: string } })?.error?.message ?? "";
    if (status === 401) throw new Error("Invalid or missing DeepSeek API key");
    if (status === 402) throw new Error("DeepSeek account balance is insufficient");
    if (status === 422) throw new Error(`DeepSeek request error: ${msg}`);
    if (status === 429) throw new Error("DeepSeek rate limit hit, please try again shortly");
    if (status >= 500)  throw new Error(`DeepSeek server error ${status}`);
    throw new Error(`DeepSeek API error ${status}: ${msg}`);
  }

  const data = await res.json();
  const text  = (data?.choices?.[0]?.message?.content ?? "").trim();
  if (!text) throw new Error("Empty response from DeepSeek");
  return text;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ response: "Please send a message." }, { status: 400 });
    }

    if (!DEEPSEEK_API_KEY || DEEPSEEK_API_KEY === "your_deepseek_api_key_here") {
      console.error("[DeepSeek] API key not configured");
      return Response.json(
        { response: `The AI assistant is not configured. Reach us at ${EMAIL}.` },
        { status: 503 },
      );
    }

    const response = await callDeepSeek(messages);
    return Response.json({ response });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[DeepSeek] Error:", msg);

    if (msg.includes("rate limit"))    return Response.json({ response: "AI is briefly rate-limited. Try again in a moment, or reach us at " + EMAIL + "." });
    if (msg.includes("balance"))       return Response.json({ response: "AI service issue. Contact us at " + EMAIL + "." });
    if (msg.includes("API key"))       return Response.json({ response: "AI configuration error. Contact us at " + EMAIL + "." });

    return Response.json({ response: `Something went wrong. Reach us directly at ${EMAIL}.` });
  }
}
