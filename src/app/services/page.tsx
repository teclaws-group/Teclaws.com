import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technology Services | Cloud, Security, Software, DevOps | Teclaws",
  description:
    "Cloud hosting, cybersecurity, software development, web development, mobile apps, DevOps, and technical consulting delivered with technical rigour and measurable outcomes.",
  openGraph: {
    title: "Technology Services | Teclaws",
    description:
      "Seven core technology disciplines delivered with engineering standards, transparency, and commercial focus for businesses worldwide.",
    url: "https://teclaws.com/services",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Services | Teclaws",
    description:
      "Cloud, cybersecurity, software development, mobile apps, DevOps, and technical consulting worldwide.",
  },
  alternates: { canonical: "https://teclaws.com/services" },
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
  "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
];

const SERVICE_IMAGE_ALTS = [
  "Cloud infrastructure and data center",
  "Cybersecurity monitoring dashboard",
  "Software development and coding environment",
  "Web development interface",
  "Mobile application development",
  "DevOps automation pipeline",
  "Technical consulting and architecture",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What We Deliver and How We Deliver It"
        description="Seven core technology disciplines, each delivered with the engineering standards, transparency, and commercial focus your business depends on."
      />

      {SERVICES.map((service, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.title}
            className={`py-24 sm:py-28 ${isEven ? "bg-white" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="mb-4 h-1 w-10 rounded-full bg-secondary" />
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {service.features.join(", ")}.
                  </p>
                </Reveal>

                <Reveal delay={0.12}>
                  <ImageReveal
                    src={SERVICE_IMAGES[i] ?? SERVICE_IMAGES[0]}
                    alt={SERVICE_IMAGE_ALTS[i] ?? service.title}
                    className="h-64 sm:h-80 lg:h-[420px]"
                    delay={0.1}
                  />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* What sets us apart */}
      <section className="bg-primary py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Our Approach</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">What Sets Us Apart</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
                We do not stack services for the sake of breadth. Each discipline we offer is one we have delivered with results, and we bring the same rigour to each one.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Full-cycle ownership", description: "From initial discovery through deployment and ongoing support, we own the outcome end to end. No handoffs, no excuses." },
              { title: "Transparent progress", description: "You receive regular written updates, clear milestones, and honest communication throughout. No surprises at invoice time." },
              { title: "Measurable outcomes", description: "We track delivery against real business metrics, not just feature completion. The goal is value, not activity." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} hover className="rounded-xl bg-white/5 p-7">
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI callout */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-white p-10 shadow-sm lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <Reveal>
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary">AI and Automation</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
                  Looking for AI-powered solutions?
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  We offer dedicated AI and automation services covering LLM integration, retrieval-augmented generation, intelligent workflow automation, predictive analytics, computer vision, and responsible AI governance.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <Link
                  href="/ai"
                  className="whitespace-nowrap inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
                >
                  Explore AI Services
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Not sure which service fits your needs?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Book a free discovery call and we will assess your situation honestly and recommend the right approach for your business.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-secondary transition-colors hover:bg-white/90"
            >
              Book a Free Consultation
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
