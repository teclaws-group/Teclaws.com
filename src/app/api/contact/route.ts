// This route is kept for future server-side email sending.
// The contact form currently sends via EmailJS client-side SDK
// which uses Gmail OAuth2, no SMTP password required.
export async function POST() {
  return Response.json({ error: "Use the client-side EmailJS integration" }, { status: 405 });
}
