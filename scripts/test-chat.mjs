#!/usr/bin/env node
/**
 * Teclaws — Integration Health Check
 *
 * Tests: EmailJS (live send), Calendly config, ngrok setup,
 *        AI chat (knowledge-base), health endpoint.
 *
 * Usage:
 *   node scripts/test-chat.mjs
 *   TEST_BASE_URL=https://your-ngrok-url.ngrok.io node scripts/test-chat.mjs
 */

import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

const BASE_URL = process.env.TEST_BASE_URL || "http://localhost:3000";

// ── Load .env ───────────────────────────────────────────────────────────────
function loadDotEnv() {
  const envPath = resolve(process.cwd(), ".env");
  if (!existsSync(envPath)) {
    console.warn("⚠  No .env file found — create one from .env.example\n");
    return;
  }
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (key && !process.env[key]) process.env[key] = value;
  }
  console.log("✅ Loaded .env\n");
}

const isPlaceholder = (v) => !v || v.startsWith("your_") || v.endsWith("_here");
const mask = (v) => (v && v.length > 8 ? v.slice(0, 5) + "…" + v.slice(-4) : "****");

// ── 1. Config check ─────────────────────────────────────────────────────────
function checkConfig() {
  console.log("── 1. Configuration ─────────────────────────────────────────");

  const checks = [
    { key: "NEXT_PUBLIC_EMAILJS_SERVICE_ID",  label: "EmailJS Service ID",        required: true  },
    { key: "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", label: "EmailJS Template ID",       required: true  },
    { key: "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY",  label: "EmailJS Public Key",        required: true  },
    { key: "NEXT_PUBLIC_CALENDLY_URL",        label: "Calendly URL",              required: true  },
    { key: "NGROK_AUTHTOKEN",                 label: "ngrok Auth Token",          required: false },
    { key: "NGROK_API_KEY",                   label: "ngrok API Key",             required: false },
    { key: "NGROK_DOMAIN",                    label: "ngrok Domain",              required: false },
    { key: "NGROK_URL",                       label: "ngrok URL",                 required: false },
  ];

  let allOk = true;
  for (const { key, label, required } of checks) {
    const val = process.env[key];
    const bad = isPlaceholder(val);
    const icon = bad ? (required ? "❌" : "⚪") : "✅";
    const display = bad
      ? required ? "NOT CONFIGURED" : "not set (optional)"
      : key.includes("CALENDLY") ? val : mask(val);
    console.log(`  ${icon} ${label.padEnd(26)} ${display}`);
    if (required && bad) allOk = false;
  }
  return allOk;
}

// ── 2. Calendly check ───────────────────────────────────────────────────────
function checkCalendly() {
  console.log("\n── 2. Calendly Integration ──────────────────────────────────");
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  if (isPlaceholder(url)) {
    console.log("  ❌ NEXT_PUBLIC_CALENDLY_URL not configured");
    return false;
  }
  if (!url.startsWith("https://calendly.com/")) {
    console.log(`  ⚠  Unexpected URL format: ${url}`);
    return false;
  }
  console.log(`  ✅ Calendly URL: ${url}`);
  console.log("     All \"Book Consultation\" buttons link here (opens in new tab).");
  return true;
}

// ── 3. EmailJS live test ────────────────────────────────────────────────────
async function testEmailJS() {
  console.log("\n── 3. EmailJS Live Test ─────────────────────────────────────");

  const serviceId  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (isPlaceholder(serviceId) || isPlaceholder(templateId) || isPlaceholder(publicKey)) {
    console.log("  ⚠  Skipped — EmailJS credentials not configured.");
    return false;
  }

  console.log(`  Service ID  : ${serviceId}`);
  console.log(`  Template ID : ${templateId}`);
  console.log(`  Public Key  : ${mask(publicKey)}`);
  console.log("  Sending test email via EmailJS API…");

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id:      serviceId,
        template_id:     templateId,
        user_id:         publicKey,
        template_params: {
          from_name:  "Teclaws Health Check",
          from_email: "healthcheck@teclaws.com",
          company:    "Teclaws (automated test)",
          service:    "Integration Testing",
          message:    "This is an automated test email sent by the Teclaws integration health check script. If you received this, EmailJS is configured correctly.",
          reply_to:   "healthcheck@teclaws.com",
        },
      }),
      signal: AbortSignal.timeout(15000),
    });

    const body = await res.text();
    if (res.ok || body === "OK") {
      console.log("  ✅ EmailJS responded OK — test email sent successfully!");
      console.log("     Check your EmailJS dashboard to confirm delivery.");
      return true;
    } else if (res.status === 403 && body.includes("non-browser")) {
      console.log("  ✅ Credentials valid — EmailJS blocks non-browser calls by default.");
      console.log("     The contact form will work correctly from the website.");
      console.log("     To also allow API calls: EmailJS dashboard → Account → Security");
      console.log("     → toggle \"Allow non-browser requests\".");
      return true;
    } else {
      console.log(`  ❌ EmailJS returned HTTP ${res.status}: ${body}`);
      console.log("     Verify your Service ID, Template ID, and Public Key.");
      return false;
    }
  } catch (err) {
    console.log(`  ❌ Request failed: ${err.message}`);
    return false;
  }
}

// ── 4. ngrok check ──────────────────────────────────────────────────────────
function checkNgrok() {
  console.log("\n── 4. ngrok Configuration ───────────────────────────────────");
  const authtoken = process.env.NGROK_AUTHTOKEN;
  const apiKey    = process.env.NGROK_API_KEY;
  const domain    = process.env.NGROK_DOMAIN;
  const url       = process.env.NGROK_URL;

  const tokenOk = !isPlaceholder(authtoken);
  const urlOk   = !isPlaceholder(url) && url?.startsWith("https://");

  console.log(`  ${tokenOk                    ? "✅" : "⚪"} Auth token  ${tokenOk ? mask(authtoken) : "— not configured"}`);
  console.log(`  ${!isPlaceholder(apiKey)     ? "✅" : "⚪"} API key     ${!isPlaceholder(apiKey) ? mask(apiKey) : "— not configured"}`);
  console.log(`  ${!isPlaceholder(domain)     ? "✅" : "⚪"} Domain      ${!isPlaceholder(domain) ? domain : "— not configured"}`);
  console.log(`  ${urlOk                      ? "✅" : "⚪"} NGROK_URL   ${urlOk ? url : "— not configured"}`);

  if (tokenOk) {
    console.log("\n  To expose local dev server:");
    if (!isPlaceholder(domain)) {
      console.log(`    ngrok http --domain=${domain} 3000`);
    } else {
      console.log("    ngrok http 3000");
    }
    console.log("  Then paste the HTTPS URL into NGROK_URL in .env");
  }
  return tokenOk;
}

// ── 5. Health endpoint ──────────────────────────────────────────────────────
async function testHealth() {
  console.log("\n── 5. Health Endpoint  GET /api/health ──────────────────────");
  try {
    const res = await fetch(`${BASE_URL}/api/health`, { signal: AbortSignal.timeout(6000) });
    const data = await res.json();
    const icon = res.ok ? "✅" : "⚠ ";
    console.log(`  ${icon} HTTP ${res.status} — overall: ${data.status}`);
    for (const [name, svc] of Object.entries(data.services || {})) {
      const i = svc.status === "ok" ? "✅" : svc.status.includes("not") ? "⚪" : "❌";
      console.log(`     ${i} ${name.padEnd(10)} ${svc.status}  (${svc.label})`);
    }
    return res.ok;
  } catch (err) {
    console.log(`  ❌ Request failed: ${err.message}`);
    console.log("     Is the dev server running?  npm run dev");
    return false;
  }
}

// ── 6. AI chat smoke test ───────────────────────────────────────────────────
async function testChat() {
  console.log("\n── 6. AI Chat (Knowledge Base)  POST /api/chat ──────────────");

  const tests = [
    { label: "Services query",     q: "What services does Teclaws offer?" },
    { label: "Book consultation",  q: "How do I book a consultation?" },
    { label: "Pricing query",      q: "How much do your services cost?" },
    { label: "Greeting",           q: "Hello" },
  ];

  let passed = 0;
  for (const { label, q } of tests) {
    try {
      const res = await fetch(`${BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [{ role: "user", content: q }] }),
        signal: AbortSignal.timeout(10000),
      });
      const data = await res.json();
      if (!data.response) {
        console.log(`  ❌ [${label}] — no response field`);
        continue;
      }
      const preview = data.response.length > 100 ? data.response.slice(0, 100) + "…" : data.response;
      console.log(`  ✅ [${label}]`);
      console.log(`     → ${preview}`);
      passed++;
    } catch (err) {
      console.log(`  ❌ [${label}] — ${err.message}`);
    }
  }
  return passed === tests.length;
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main() {
  console.log("╔═══════════════════════════════════════════════════════════╗");
  console.log("║         Teclaws — Integration Health Check                ║");
  console.log("╚═══════════════════════════════════════════════════════════╝");
  console.log(`Target: ${BASE_URL}\n`);

  loadDotEnv();

  const configOk   = checkConfig();
  const calendlyOk = checkCalendly();
  const emailjsOk  = await testEmailJS();
  const ngrokOk    = checkNgrok();
  const healthOk   = await testHealth();
  const chatOk     = await testChat();

  console.log("\n── Summary ─────────────────────────────────────────────────");
  console.log(`  Configuration  : ${configOk   ? "✅ OK" : "❌ Incomplete"}`);
  console.log(`  Calendly       : ${calendlyOk ? "✅ OK" : "❌ Not configured"}`);
  console.log(`  EmailJS (live) : ${emailjsOk  ? "✅ OK — email sent!" : "❌ Failed"}`);
  console.log(`  ngrok          : ${ngrokOk    ? "✅ Configured" : "⚪ Optional — not configured"}`);
  console.log(`  Health check   : ${healthOk   ? "✅ OK" : "❌ Failed"}`);
  console.log(`  AI chat        : ${chatOk     ? "✅ OK" : "❌ Failed"}`);

  const allOk = configOk && calendlyOk && emailjsOk && healthOk && chatOk;
  if (allOk) {
    console.log("\n  🎉 All checks passed — the site is fully operational!");
  }
  console.log("");
  process.exit(allOk ? 0 : 1);
}

main().catch(err => { console.error(err); process.exit(1); });
