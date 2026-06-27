import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cloud & hosting, cybersecurity, software development, web development, mobile apps, DevOps, and technical consulting, delivered with technical rigour.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What We Deliver"
        description="Seven core technology disciplines, each delivered with the standards your business depends on."
      />

      {/* Services grid */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 2) * 0.07}
                hover
                className="rounded-lg bg-white p-8 shadow-sm"
              >
                <h2 className="font-display text-xl font-semibold text-primary">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-1.5 border-l-2 border-border pl-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted">
                      {feature}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Approach"
            title="What Sets Us Apart"
            description="We don't stack services for the sake of breadth. Each discipline we offer is one we've delivered, with results."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Full-cycle delivery",     description: "From initial discovery through deployment and ongoing support, we own the outcome end to end." },
              { title: "Transparent process",     description: "No surprises. You get regular updates, clear milestones, and honest communication throughout." },
              { title: "Measurable outcomes",     description: "We track delivery against real business metrics, not just feature completion." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} hover className="rounded-lg bg-background p-6">
                <h3 className="font-display text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
