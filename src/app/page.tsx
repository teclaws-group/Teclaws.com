import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { HeroSection } from "@/components/ui/HeroSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Enterprise Technology Solutions | Teclaws",
  description:
    "Teclaws delivers cloud infrastructure, cybersecurity, software development, DevOps, and AI solutions for businesses worldwide. Enterprise-grade delivery, transparent pricing.",
  openGraph: {
    title: "Enterprise Technology Solutions | Teclaws",
    description:
      "Cloud, cybersecurity, software development, AI, and infrastructure services for businesses worldwide. Premium delivery, measurable outcomes.",
    url: "https://teclaws.com",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Technology Solutions | Teclaws",
    description:
      "Cloud, cybersecurity, software development, AI, and infrastructure services for businesses worldwide.",
  },
  alternates: { canonical: "https://teclaws.com" },
};

const CALENDLY_URL = "https://calendly.com/teclawsgroup";

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}


export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* ── 1. How We Solve Business Challenges ── Text Left, Image Right */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                The Problem We Solve
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Most Technology Projects Fail Before the First Line of Code
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Businesses invest significantly in technology and frequently end up with systems that do not work as intended, cost far more than projected, or cannot be maintained without the original vendor. The failure point is almost never the idea. It is the quality of execution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We built Teclaws to address this gap directly. Every engagement begins with a rigorous discovery phase where we understand your business context, constraints, and success criteria. We then build with the precision and discipline that enterprise-grade systems demand.
              </p>
              <div className="mt-8 divide-y divide-border">
                {[
                  "Requirements translated into working, documented software",
                  "Timelines honoured through structured project management",
                  "Systems built to be maintained long after delivery",
                ].map((point) => (
                  <p key={point} className="py-2.5 text-sm leading-relaxed text-muted">{point}</p>
                ))}
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-md bg-secondary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
              >
                Start a Conversation <ArrowRight />
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
                alt="AI and engineering precision"
                className="h-72 rounded-2xl shadow-xl sm:h-96 lg:h-[480px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Our Engineering Philosophy ── Image Left, Text Right */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80"
                alt="Software engineer reviewing code"
                className="h-72 rounded-2xl shadow-xl sm:h-96 lg:h-[500px]"
              />
            </Reveal>

            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Engineering Philosophy
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Code Quality Is Not a Feature. It Is the Foundation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                We believe that the quality of software directly determines the velocity of your business. Poorly architected systems create compounding technical debt that slows every new feature, inflates maintenance costs, and eventually forces a full rewrite. We refuse to build that way.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Every engineer on our team is expected to produce code that can be understood, extended, and operated by someone who did not write it. This is enforced through structured code review, test coverage requirements, and architecture sign-off before any code reaches production.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Code Review", desc: "Every pull request reviewed before merge" },
                  { label: "Test Coverage", desc: "Automated tests for all critical paths" },
                  { label: "Documentation", desc: "Architecture and API docs included in delivery" },
                  { label: "Refactoring", desc: "Regular code health maintenance across engagements" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl bg-background p-4 shadow-sm">
                    <p className="text-xs font-semibold text-primary">{item.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Building Software That Scales ── Text Left, Image Right */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Built for Scale
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                The Architecture Decisions You Make Today Shape Your Limits Tomorrow
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Many businesses build for their current scale and pay a steep price when they grow. A system designed to handle 500 users that suddenly serves 50,000 will fail in unpredictable ways, often at the worst possible moment. We design scalable systems from the first architectural decision.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Horizontal scaling, database optimisation, efficient API design, and distributed architecture are not advanced topics we add later. They are considerations we raise in the planning phase, budget for in the project, and build into your system from day one.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-y-2 gap-x-6">
                {[
                  "Horizontal auto-scaling",
                  "Database query optimisation",
                  "Distributed system design",
                  "Load testing before launch",
                  "Caching strategy built in",
                  "Performance monitoring",
                ].map((item) => (
                  <p key={item} className="text-sm text-white/70">{item}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                alt="Server infrastructure and data centre"
                className="h-72 rounded-2xl shadow-2xl sm:h-96 lg:h-[480px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. Innovation Through AI ── Image Left, Text Right */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
                alt="Artificial intelligence and machine learning"
                className="h-72 rounded-2xl shadow-xl sm:h-96 lg:h-[500px]"
              />
            </Reveal>

            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                AI and Automation
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                AI Creates Business Value When It Is Applied to the Right Problems
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Most organisations hear about artificial intelligence as an abstract trend. We approach it differently. Before writing a single line of AI code, we identify the specific workflows in your business where automation creates measurable financial or operational value.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                This might be an intelligent document processing pipeline that eliminates weeks of manual data entry, a recommendation engine that increases average order value, or a predictive maintenance system that reduces equipment downtime. We build AI systems that earn their place in your operations.
              </p>
              <Link
                href="/ai"
                className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
              >
                Explore our AI services <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. Security as Competitive Advantage ── Text Left, Image Right */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Security by Design
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Security Is a Competitive Advantage, Not Just a Compliance Requirement
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Businesses that get security right have a story to tell their clients, their partners, and their regulators. Security failures destroy trust in ways that are almost impossible to recover from. A single breach can cost a business not just money but its reputation and client relationships.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We treat security as a first-class design requirement embedded from the architecture phase. Not as a checklist completed before launch. This approach means your systems are hardened against real-world attack patterns, aligned with relevant compliance frameworks, and designed to detect and respond to threats before they become incidents.
              </p>
              <div className="mt-8 divide-y divide-border">
                {[
                  "Threat modelling before architecture is finalised",
                  "OWASP Top 10 addressed in every web deliverable",
                  "Penetration testing on staging before production",
                  "Incident response playbooks delivered with the product",
                ].map((point) => (
                  <p key={point} className="py-2.5 text-sm leading-relaxed text-muted">{point}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
                alt="Cybersecurity monitoring and protection"
                className="h-72 rounded-2xl shadow-xl sm:h-96 lg:h-[480px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6. How We Engage Clients ── Image Left, Text Right */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&q=80"
                alt="Enterprise technology infrastructure"
                className="h-72 rounded-2xl shadow-xl sm:h-96 lg:h-[500px]"
              />
            </Reveal>

            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Client Engagement
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                We Listen Before We Build, and We Deliver Before We Invoice
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Every engagement begins with a discovery phase. We ask questions about your business, your operations, your constraints, and your goals before we make a single technical recommendation. This is how we avoid building the right software for the wrong problem.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                From there, we produce a written proposal with clear scope, realistic timelines, and transparent pricing. Nothing is ambiguous. Throughout delivery, you receive regular written updates from a single point of contact who understands both the business context and the technical details.
              </p>
              <div className="mt-9 flex flex-col gap-3">
                {[
                  { num: "01", title: "Discovery", desc: "Deep-dive into your business, goals, and constraints" },
                  { num: "02", title: "Proposal", desc: "Clear scope, timeline, and pricing with no ambiguity" },
                  { num: "03", title: "Delivery", desc: "Regular updates, early demos, zero surprises" },
                  { num: "04", title: "Handover", desc: "Full documentation, training, and ongoing support" },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4 rounded-xl bg-white p-4 shadow-sm">
                    <span className="font-display text-2xl font-bold text-primary/15 leading-none mt-0.5">{step.num}</span>
                    <div>
                      <p className="text-sm font-semibold text-primary">{step.title}</p>
                      <p className="text-xs leading-relaxed text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7. Technology That Drives Growth ── Text Left, Image Right */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                Business Growth
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                The Best Technology Investments Create Measurable Business Returns
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Technology projects are not successful because they were delivered on time. They are successful because they created a return for the business. We keep this in mind from the first discovery conversation to the final handover. Every architectural decision is evaluated against the business case it supports.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Whether we are eliminating hours of manual work through automation, opening a new revenue channel with an API integration, reducing infrastructure spend through cloud optimisation, or enabling a business to onboard ten times more clients through improved software, we measure our success in outcomes.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-sm font-semibold text-secondary transition-colors hover:bg-white/90"
                >
                  Book a Consultation <ArrowRight />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Send us a message
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="Business analytics and growth data"
                className="h-72 rounded-2xl shadow-2xl sm:h-96 lg:h-[480px]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8. Future-Ready Infrastructure ── Image Left, Text Right */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ParallaxImage
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="Cloud computing and global infrastructure"
                className="h-72 rounded-2xl shadow-xl sm:h-96 lg:h-[500px]"
              />
            </Reveal>

            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Infrastructure
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Infrastructure That Grows With Your Business and Costs Less to Operate
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Cloud-native infrastructure is not just a technical decision. It is a financial strategy. Businesses that move to well-designed cloud architectures consistently see reduced operational costs, improved reliability, and dramatically faster time to deploy new capabilities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We design and manage infrastructure across AWS, Google Cloud, and Microsoft Azure. Our approach focuses on right-sizing resources, eliminating waste, automating routine operations, and building observability into every layer so your team always knows what is happening and why.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["AWS", "Google Cloud", "Azure", "Terraform", "Kubernetes", "Docker"].map((tech) => (
                  <div key={tech} className="rounded-lg bg-background px-3 py-2.5 text-center text-xs font-semibold text-foreground/70 shadow-sm">
                    {tech}
                  </div>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
              >
                View infrastructure services <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-start lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">FAQ</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Common Questions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Answers to the questions we hear most often from organisations evaluating a technology partner.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
              >
                Ask us directly <ArrowRight />
              </Link>
            </Reveal>
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* ── Instagram / Follow Journey ── */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-black p-10 text-center lg:p-16">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40">Follow our journey</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Behind the build at Teclaws
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Follow us on Instagram for a look at our team, our process, and the projects we are working on across the world.
              </p>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @teclawsgroup on Instagram
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Get started</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-5xl">
                Ready to build something that lasts?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
                Every engagement starts with a structured consultation. Tell us what you are trying to solve, and we will give you an honest assessment of how we can help.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-secondary px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
                >
                  Book a Free Consultation <ArrowRight />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-secondary/40 hover:text-secondary"
                >
                  Send us a message
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
