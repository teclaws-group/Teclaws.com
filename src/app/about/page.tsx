import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT } from "@/lib/data";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Teclaws, our story, mission, vision, and the values that guide every project we deliver.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        description="A focused technology consultancy built on technical excellence, honest communication, and outcomes that matter."
      />

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Built by Engineers, for Business"
                align="left"
              />
              <p className="mt-6 text-base leading-relaxed text-muted">
                {ABOUT.story}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We work across cloud, security, software development, and infrastructure, keeping our focus tight so we can deliver at the highest standard in each area.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
              >
                Book Consultation
              </a>
            </div>
            <div className="flex items-center justify-center rounded-xl bg-background p-10">
              <Image
                src="/teclaw.jpeg"
                alt="Teclaws team"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-lg bg-white p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Our Mission
              </span>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-primary">
                {ABOUT.mission}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="rounded-lg bg-white p-8 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                Our Vision
              </span>
              <p className="mt-4 font-display text-xl font-semibold leading-relaxed text-primary">
                {ABOUT.vision}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Core Values"
            title="How We Work"
            description="The principles that guide every engagement, every decision, and every line of code we deliver."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ABOUT.values.map((value, i) => (
              <Reveal
                key={value.title}
                delay={(i % 2) * 0.08}
                hover
                className="rounded-lg bg-background p-7"
              >
                <h3 className="font-display text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
