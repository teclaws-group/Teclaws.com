import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PROCESS_STEPS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Teclaws delivers technology projects, from discovery and planning through development, testing, deployment, and ongoing support.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Work"
        title="Our Delivery Process"
        description="A structured, repeatable process that keeps projects on track and clients informed at every stage."
      />

      {/* Steps */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="flex gap-6 rounded-lg bg-white p-8 shadow-sm">
                  <div className="shrink-0">
                    <span className="font-display text-5xl font-bold text-border leading-none select-none">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-1">
                    <h2 className="font-display text-xl font-bold text-primary">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Principles"
            title="Built into Every Engagement"
            description="These aren't aspirational values, they're practical standards we apply on every project."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              { title: "Weekly progress reviews",     body: "Regular check-ins keep stakeholders informed and allow us to course-correct early when needed." },
              { title: "Documented decisions",        body: "Every significant technical and product decision is documented, giving you a full audit trail." },
              { title: "Version-controlled delivery", body: "All code lives in Git from day one. You always have full access to the history and current state." },
              { title: "Test before release",         body: "We don't deploy untested code. Automated and manual tests run before anything ships to production." },
              { title: "Staged deployments",          body: "Changes go through staging environments before reaching production, reducing the risk of incidents." },
              { title: "Handover documentation",      body: "At project close, we provide runbooks, architecture diagrams, and deployment guides for your team." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07} hover className="rounded-lg bg-background p-6">
                <h3 className="font-display text-base font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
