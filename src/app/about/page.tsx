import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { ABOUT } from "@/lib/data";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

export const metadata: Metadata = {
  title: "About Teclaws | Engineering Philosophy and Values",
  description:
    "Learn about Teclaws, our engineering-first culture, the standards we hold every project to, and the values that guide how we work with clients worldwide.",
  openGraph: {
    title: "About Teclaws | Engineering Philosophy and Values",
    description:
      "Engineering-first technology consultancy delivering cloud, software, cybersecurity, and AI solutions for businesses worldwide.",
    url: "https://teclaws.com/about",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Teclaws | Engineering Philosophy and Values",
    description:
      "Engineering-first technology consultancy delivering premium technology solutions for businesses worldwide.",
  },
  alternates: { canonical: "https://teclaws.com/about" },
};


export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Teclaws"
        title="Who We Are and How We Think"
        description="A technology consultancy built on the belief that software quality directly determines business outcomes. We hold that belief at every stage of every project."
      />

      {/* Origin Story */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Our Origin</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Built from Frustration with How Software Gets Delivered
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                {ABOUT.story}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We experienced firsthand how talented engineers and ambitious business owners kept failing to produce lasting results together. The gap was not technical capability. It was communication, process discipline, and a genuine understanding of what each side needed from the other.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Teclaws was built to close that gap. We operate with the technical depth of an engineering team and the commercial awareness of a business partner. That combination is rare, and it is what we bring to every engagement.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
              >
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80"
                alt="Software development environment"
                className="h-64 sm:h-80 lg:h-[480px]"
                delay={0.1}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80"
                alt="Code and technology abstract"
                className="h-64 sm:h-80 lg:h-[480px]"
                delay={0.08}
              />
            </Reveal>

            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Our Beliefs</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                The Principles That Shape Every Decision We Make
              </h2>
              <div className="mt-6 space-y-4">
                {[
                  {
                    title: "Complexity is the enemy of reliability",
                    body: "Every layer of unnecessary complexity is a liability. We favour straightforward architectures that do exactly what is required, with room to grow when growth demands it.",
                  },
                  {
                    title: "Speed built on a weak foundation is not speed",
                    body: "We resist pressure to ship fast at the cost of quality. Moving quickly matters, but only when the code underneath can support it. Shortcuts taken in month one are paid back with interest in month six.",
                  },
                  {
                    title: "Technology should be invisible to the end user",
                    body: "The best software is the kind that users do not think about. It works reliably, responds predictably, and gets out of the way so people can focus on their actual work.",
                  },
                  {
                    title: "A project is not finished at launch",
                    body: "Launch is a milestone, not an ending. The real work of keeping a system healthy, secure, and aligned with business needs continues long after the first deployment.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.06}>
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                      <p className="text-sm font-semibold text-primary">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Technical Standards</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Non-Negotiable Standards on Every Project We Deliver
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                We hold ourselves to specific, measurable standards that are built into the way we work, not aspirational values we display on a wall. These standards apply to every project regardless of size, timeline, or budget.
              </p>
              <div className="mt-8 divide-y divide-white/10">
                {[
                  "All code reviewed by a second engineer before merge",
                  "Automated test coverage for every critical business path",
                  "Architecture documentation delivered with the project",
                  "Security review completed before production deployment",
                  "Performance benchmarks tested against realistic load",
                  "Dependency audit performed and vulnerabilities resolved",
                  "Deployment runbook provided for client handover",
                  "Environment parity maintained between staging and production",
                ].map((standard) => (
                  <p key={standard} className="py-2.5 text-sm text-white/70">{standard}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80"
                alt="Abstract code and data visualization"
                className="h-64 sm:h-96 lg:h-[520px]"
                delay={0.1}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Purpose</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Mission and Vision
              </h2>
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal hover className="rounded-2xl bg-background p-10">
              <div className="mb-4 h-1 w-10 rounded-full bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Mission</span>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-primary">
                {ABOUT.mission}
              </p>
            </Reveal>
            <Reveal delay={0.09} hover className="rounded-2xl bg-background p-10">
              <div className="mb-4 h-1 w-10 rounded-full bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Vision</span>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-primary">
                {ABOUT.vision}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Core Values</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                The Standards We Hold Ourselves To
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-base leading-relaxed text-muted">
                These are not aspirational values. They are the practical standards we apply on every project, with every client, regardless of scope or timeline.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {ABOUT.values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={(i % 2) * 0.08}
                hover
                className="rounded-xl bg-white p-8 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Where we're going */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
                alt="Global technology and digital innovation"
                className="h-64 sm:h-80 lg:h-[420px]"
                delay={0.08}
              />
            </Reveal>

            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Looking Forward</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Building a Technology Company Trusted by Businesses Worldwide
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Our ambition is to be the technology partner that businesses worldwide think of first when they have an important problem to solve. Not because we are the largest, but because we are consistently the most reliable, the most transparent, and the most technically capable.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We are investing deeply in AI and machine learning capability, expanding our infrastructure expertise to support global deployments, and building the team and processes that will allow us to take on increasingly complex and consequential work.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
              >
                Start a conversation with us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
