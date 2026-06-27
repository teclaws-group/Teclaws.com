import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT } from "@/lib/data";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Teclaws. Reach out to discuss your technology project, request a consultation, or ask a question.",
};

const contactDetails = [
  { label: "Email",    value: CONTACT.email,    href: `mailto:${CONTACT.email}` },
  { label: "Phone",    value: CONTACT.phone,    href: `tel:${CONTACT.phone}` },
  { label: "Location", value: CONTACT.location, href: undefined },
  { label: "Response", value: "Within 1 business day", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a project in mind or want to learn more about what we do? Reach out and we'll respond within one business day."
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr]">

            {/* Contact info */}
            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-primary">Contact Details</h2>
                <ul className="mt-5 space-y-5">
                  {contactDetails.map(({ label, value, href }) => (
                    <li key={label}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted/70">{label}</p>
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

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="font-display text-lg font-semibold text-primary">Connect With Us</h2>
                <div className="mt-4 flex gap-5">
                  <a
                    href={CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-secondary transition-colors hover:text-secondary-dark"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-secondary transition-colors hover:text-secondary-dark"
                  >
                    WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  Prefer a quicker back-and-forth? Message us on WhatsApp or connect on LinkedIn.
                </p>
              </div>

              <div className="rounded-lg bg-secondary p-6">
                <h2 className="font-display text-base font-semibold text-white">
                  Free Initial Consultation
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  We offer a 30-minute consultation at no charge, no pitch, no commitment. Just an honest conversation about your project.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-secondary transition-colors hover:bg-white/90"
                >
                  Book Consultation
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
