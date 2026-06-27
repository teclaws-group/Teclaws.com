"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { SERVICES } from "@/lib/data";

const SERVICE_ID        = (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID           ?? "").trim();
const TEMPLATE_ID       = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID          ?? "").trim();
const TEMPLATE_ID_ADMIN = (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADMIN    ?? "").trim();
const PUBLIC_KEY        = (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY           ?? "").trim();

export function ContactForm() {
  const [status,   setStatus]   = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } =
    useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(data: ContactInput) {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErrorMsg("We couldn't send your message right now. Please try again or email us directly at teclawsgroup@gmail.com.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const name    = String(data.name    || "").trim() || "Anonymous";
    const email   = String(data.email   || "").trim() || "Not provided";
    const company = String(data.company || "").trim() || "Not provided";
    const service = String(data.service || "").trim() || "General Inquiry";
    const message = String(data.message || "").trim() || "No message provided";
    const initial = name.charAt(0).toUpperCase() || "T";

    // Produces e.g. "June 24, 2026 at 5:23 PM"
    const rawTime = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Nairobi",
      year:     "numeric",
      month:    "long",
      day:      "numeric",
      hour:     "numeric",
      minute:   "2-digit",
      hour12:   true,
    });
    const time = rawTime.replace(/,\s*(\d{1,2}:\d{2}\s*(AM|PM))/, " at $1");

    const payload = { initial, name, time, email, company, service, message };

    try {
      // Email A: customer confirmation (To: {{email}} set in template)
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, { publicKey: PUBLIC_KEY, blockHeadless: false });

      // Email B: internal notification (only when second template is configured)
      if (TEMPLATE_ID_ADMIN) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID_ADMIN, payload, { publicKey: PUBLIC_KEY, blockHeadless: false });
      }

      setStatus("success");
      reset();
    } catch (err: unknown) {
      const ejsStatus = (err as { status?: number })?.status;
      const ejsText   = (err as { text?:   string })?.text;
      const nativeMsg = err instanceof Error ? err.message : undefined;
      console.error("[EmailJS] Error", ejsStatus, ejsText ?? nativeMsg, err);
      setErrorMsg("We couldn't send your message right now. Please try again or email us directly at teclawsgroup@gmail.com.");
      setStatus("error");
    }
  }

  // ── Success ────────────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-12 text-center shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-primary">Message Received</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
          Thank you for contacting Teclaws. We&apos;ve received your message and will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-lg bg-white p-8 shadow-sm"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Company
          </label>
          <input
            {...register("company")}
            type="text"
            autoComplete="organization"
            placeholder="Your company name"
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">
            Service of interest
          </label>
          <select
            {...register("service")}
            className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
          >
            <option value="">Select a service…</option>
            {SERVICES.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your project, challenge, or what you're trying to achieve…"
          className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
