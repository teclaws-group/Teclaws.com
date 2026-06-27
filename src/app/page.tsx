import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroSection } from "@/components/ui/HeroSection";
import { SERVICES, INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Enterprise Technology Solutions | Teclaws",
  description:
    "Teclaws delivers cloud infrastructure, cybersecurity, software development, DevOps, and technical consulting for businesses across Kenya and East Africa.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Services */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Services"
            title="What We Build"
            description="A focused set of technology services, each delivered with technical rigour and a clear focus on business outcomes."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service, i) => (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.07}
                hover
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Industries"
            title="Sectors We Serve"
            description="Relevant experience across key industries throughout Kenya and East Africa."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry, i) => (
              <Reveal
                key={industry.name}
                delay={(i % 4) * 0.06}
                hover
                className="rounded-lg bg-background p-5"
              >
                <h3 className="text-sm font-semibold text-primary">{industry.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {industry.description}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/industries"
              className="text-sm font-semibold text-secondary transition-colors hover:text-secondary-dark"
            >
              Learn more about our industry focus
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
