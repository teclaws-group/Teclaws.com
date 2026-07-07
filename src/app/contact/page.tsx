import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/data";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

export const metadata: Metadata = {
  title: "Contact Teclaws | Book a Free Consultation",
  description:
    "Get in touch with Teclaws. Discuss your technology project, request a consultation, or ask a question. We respond within one business day.",
  openGraph: {
    title: "Contact Teclaws | Book a Free Consultation",
    description:
      "Ready to start a technology project? Book a free 30-minute consultation or send us a message. We respond within one business day.",
    url: "https://teclaws.com/contact",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Teclaws | Book a Free Consultation",
    description:
      "Book a free consultation or send us a message. We respond within one business day.",
  },
  alternates: { canonical: "https://teclaws.com/contact" },
};

const contactDetails = [
  { label: "Email",    value: CONTACT.email,    href: `mailto:${CONTACT.email}` },
  { label: "Phone",    value: CONTACT.phone,    href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
  { label: "Location", value: CONTACT.location, href: undefined },
  { label: "Response time", value: "Within 1 business day", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Project"
        description="Whether you have a defined project or just a problem you need help thinking through, we are happy to have an honest conversation about it."
      />

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            {/* Contact sidebar */}
            <div className="space-y-6">
              <Reveal>
                <div className="rounded-xl bg-white p-7 ring-1 ring-border">
                  <h2 className="font-display text-base font-semibold text-primary">Contact Details</h2>
                  <ul className="mt-5 space-y-5">
                    {contactDetails.map(({ label, value, href }) => (
                      <li key={label}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted/60">{label}</p>
                        {href ? (
                          <a href={href} className="mt-1 block text-sm text-foreground transition-colors hover:text-secondary">
                            {value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-foreground">{value}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="rounded-xl bg-white p-7 ring-1 ring-border">
                  <h2 className="font-display text-base font-semibold text-primary">Other Ways to Reach Us</h2>
                  <div className="mt-4 space-y-3">
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm font-medium text-foreground/70 ring-1 ring-border transition-colors hover:text-secondary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href={CONTACT.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm font-medium text-foreground/70 ring-1 ring-border transition-colors hover:text-secondary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm font-medium text-foreground/70 ring-1 ring-border transition-colors hover:text-secondary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                      </svg>
                      LinkedIn
                    </a>
                    <a
                      href={CONTACT.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg bg-background px-4 py-3 text-sm font-medium text-foreground/70 ring-1 ring-border transition-colors hover:text-secondary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="rounded-xl bg-secondary p-7 text-white">
                  <h2 className="font-display text-base font-semibold">Free Initial Consultation</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    We offer a 30-minute consultation at no charge. No pitch, no obligation. Just an honest conversation about your project and whether we are the right fit to help.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-white/90"
                  >
                    Book on Calendly
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.06}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why get in touch */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">What to Expect</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-primary sm:text-3xl">
                What Happens When You Get in Touch
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", title: "We review your enquiry", body: "Every enquiry is read by a senior team member, not filtered by an automated system. You will receive a personal response, not a template." },
              { step: "02", title: "We schedule a discovery call", body: "If your project is a potential fit, we will schedule a 30-minute call to understand your goals and give you an honest first assessment." },
              { step: "03", title: "We propose a way forward", body: "Following discovery, we propose a specific next step, whether that is a detailed scoping exercise, a pilot project, or a full engagement." },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} hover className="rounded-xl bg-background p-7 ring-1 ring-border">
                <span className="font-display text-4xl font-bold text-primary/10">{item.step}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick navigation to learn more */}
      <section className="bg-background py-14">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-center text-sm text-muted mb-6">Want to learn more before getting in touch?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Our Services", href: "/services" },
                { label: "AI and Automation", href: "/ai" },
                { label: "Our Process", href: "/process" },
                { label: "Industries We Serve", href: "/industries" },
                { label: "About Teclaws", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
