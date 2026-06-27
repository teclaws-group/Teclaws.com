export async function GET() {
  const isPlaceholder = (v: string | undefined) =>
    !v || v.startsWith("your_") || v.endsWith("_here");

  const emailjsServiceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailjsPublicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const calendlyUrl       = process.env.NEXT_PUBLIC_CALENDLY_URL;
  const deepseekApiKey    = process.env.DEEPSEEK_API_KEY;

  const emailjsOk   = !isPlaceholder(emailjsServiceId)
    && !isPlaceholder(emailjsTemplateId)
    && !isPlaceholder(emailjsPublicKey);
  const deepseekOk  = !isPlaceholder(deepseekApiKey);

  const services = {
    emailjs: {
      configured: emailjsOk,
      status:     emailjsOk ? "ok" : "missing_keys",
      label:      "Contact form (EmailJS)",
    },
    calendly: {
      configured: !isPlaceholder(calendlyUrl),
      status:     isPlaceholder(calendlyUrl) ? "missing_url" : "ok",
      label:      "Book Consultation (Calendly)",
    },
    deepseek: {
      configured: deepseekOk,
      status:     deepseekOk ? "ok" : "missing_key",
      label:      "AI chat bubble (DeepSeek)",
    },
  };

  const criticalOk = services.emailjs.configured
    && services.calendly.configured
    && services.deepseek.configured;

  return Response.json(
    {
      status:    criticalOk ? "ok" : "degraded",
      timestamp: new Date().toISOString(),
      services,
    },
    { status: criticalOk ? 200 : 503 },
  );
}
