import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export const metadata: Metadata = {
  title: "Our Development Process | How We Deliver Technology Projects | Teclaws",
  description:
    "How Teclaws delivers technology projects: six structured stages from discovery and planning through development, testing, deployment, and ongoing support with defined deliverables.",
  openGraph: {
    title: "Our Development Process | Teclaws",
    description:
      "Six stages, each with defined inputs, activities, and outputs. You know exactly what is happening, what comes next, and what you will receive at every point.",
    url: "https://teclaws.com/process",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws Process" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Development Process | Teclaws",
    description:
      "How Teclaws delivers technology projects from discovery through ongoing support. Transparent, structured, and measurable.",
  },
  alternates: { canonical: "https://teclaws.com/process" },
};

const CALENDLY_URL = "https://calendly.com/teclawsgroup";

const DETAILED_STEPS = [
  {
    step: "01",
    title: "Discovery",
    duration: "1 to 2 weeks",
    description: "Every engagement begins with a structured discovery phase. We do not write requirements documents based on assumptions. We run dedicated sessions with your team to understand your business model, the specific problem you need to solve, your technical constraints, your existing systems, and the success criteria you will use to evaluate the outcome.",
    detail: "At the end of discovery, we produce a written summary of our understanding, including the problem statement, proposed solution scope, technical considerations, risks we have identified, and questions that require resolution before work begins. This document becomes the foundation for everything that follows.",
    deliverables: ["Problem statement document", "Proposed scope of work", "Risk and constraint register", "Technical assessment", "Open questions log"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80",
    imageAlt: "Planning and strategy session",
  },
  {
    step: "02",
    title: "Planning",
    duration: "1 to 2 weeks",
    description: "Once discovery is complete, we move into planning. This is where we make the key architectural and technical decisions that will shape the entire project. We select the technology stack, design the data model, define the system architecture, plan the integration points, and identify the build sequence that will deliver the most value earliest.",
    detail: "We produce a written technical proposal that includes the architecture design, technology choices and rationale, project timeline with milestones, team structure, communication cadence, and a clear statement of what is in and out of scope. Pricing is finalised at this stage. Nothing begins until this document is agreed.",
    deliverables: ["Architecture design document", "Technology stack decision record", "Project timeline and milestones", "Scope definition", "Final pricing and engagement terms"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80",
    imageAlt: "Software architecture and technical planning",
  },
  {
    step: "03",
    title: "Development",
    duration: "Varies by scope",
    description: "Development at Teclaws is structured around two-week sprints with clear goals, daily progress tracking, and end-of-sprint demonstrations. Every sprint produces working, tested software, not just code. You see progress continuously and can provide feedback at each sprint boundary.",
    detail: "Our development standards are enforced through tooling, not just policy. Every pull request is reviewed by at least one other engineer before it is merged. Automated tests run on every commit. Code that does not meet our standards does not ship. You have full access to the repository at all times.",
    deliverables: ["Working software at each sprint end", "Sprint demo recordings", "Updated progress tracker", "Code repository access", "Technical decision log"],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",
    imageAlt: "Active software development and coding",
  },
  {
    step: "04",
    title: "Testing",
    duration: "Continuous and pre-release",
    description: "Testing is not a phase that happens at the end of development. It runs continuously from the first sprint. Automated unit and integration tests are written alongside the code they test. Manual testing of user-facing features happens at each sprint end. Security testing, performance testing, and user acceptance testing occur in the dedicated testing sprint before release.",
    detail: "For security-sensitive applications, we conduct a full security review including dependency auditing, input validation testing, authentication and authorisation checks, and where appropriate, automated vulnerability scanning. We document all tests performed and the results, giving you a full record of what was tested and what was found.",
    deliverables: ["Automated test suite", "Testing report", "Security review findings", "Performance benchmark results", "User acceptance test outcomes"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    imageAlt: "Software testing and quality assurance",
  },
  {
    step: "05",
    title: "Deployment",
    duration: "1 to 3 days",
    description: "We deploy to production using automated pipelines that eliminate manual steps and the errors they introduce. All code that passes testing in staging is deployed to production through the same automated process, ensuring that what you tested is exactly what goes live. We use zero-downtime deployment strategies so your users experience no interruption.",
    detail: "Our deployment process includes pre-deployment checks, automated rollback capability, and post-deployment verification. We monitor the application closely in the hours immediately following deployment and are available to respond to any issues that emerge. You receive a deployment confirmation with a summary of what was released.",
    deliverables: ["Production deployment", "Deployment confirmation report", "Rollback procedure documentation", "Monitoring dashboard access", "Post-deployment check results"],
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80",
    imageAlt: "Cloud deployment and infrastructure",
  },
  {
    step: "06",
    title: "Support",
    duration: "Ongoing",
    description: "Delivery does not end at launch. We offer structured post-delivery support packages that cover monitoring, bug resolution, security patching, dependency updates, and performance optimisation. Your system is monitored continuously. Alerts are configured for critical metrics. You have a direct line to the engineers who built your product.",
    detail: "Support packages are tailored to your operational requirements. Some clients need light-touch maintenance with defined response times. Others need a dedicated resource available during business hours. We scope the support arrangement during the planning phase and include it in the overall engagement. There are no hidden charges or surprise invoices.",
    deliverables: ["24/7 uptime monitoring", "Incident response with defined SLAs", "Monthly maintenance reports", "Security patch management", "Feature development on request"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    imageAlt: "Infrastructure monitoring and support",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="A Process Designed to Eliminate Uncertainty"
        description="Six stages, each with defined inputs, activities, and outputs. You know exactly what is happening, what comes next, and what you will receive at every point in the engagement."
      />

      {DETAILED_STEPS.map((step, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={step.step}
            className={`py-24 sm:py-28 ${isEven ? "bg-white" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-16 ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="mb-6 flex items-baseline gap-4">
                    <span className="font-display text-6xl font-bold leading-none text-primary/10">{step.step}</span>
                    <div>
                      <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">{step.title}</h2>
                      <span className="mt-1 inline-block text-xs font-semibold uppercase tracking-widest text-secondary">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted">{step.description}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{step.detail}</p>
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted/60">Deliverables</p>
                    <div className="divide-y divide-border">
                      {step.deliverables.map((d) => (
                        <p key={d} className="py-2 text-sm text-foreground/70">{d}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.12}>
                  <ImageReveal
                    src={step.image}
                    alt={step.imageAlt}
                    className="h-64 sm:h-80 lg:h-[420px]"
                    delay={0.1}
                  />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-primary py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Standards</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">Built into Every Engagement</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
                These practices apply across every project regardless of size or timeline.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Weekly written updates", body: "Every Friday you receive a written summary of what was completed, what is in progress, and what is planned for the following week." },
              { title: "Documented decisions", body: "Every significant technical and product decision is documented with the options considered and the rationale for the choice made." },
              { title: "Version-controlled delivery", body: "All code lives in Git from the first commit. You have full access to the repository, the complete history, and all branching decisions." },
              { title: "Test before release", body: "No code ships to production without passing automated tests. Manual testing of user-facing features happens before every sprint demo." },
              { title: "Staged deployments", body: "Changes pass through a staging environment that mirrors production before going live. This catches environment-specific issues before they affect users." },
              { title: "Full handover documentation", body: "At project close, we deliver architecture diagrams, runbooks, API documentation, deployment guides, and a knowledge transfer session for your team." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07} hover className="rounded-xl bg-white/5 p-6">
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Ready to start a project?</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
              The first step is a no-commitment discovery call where we learn about your business and the problem you want to solve.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
            >
              Book a Discovery Call
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
