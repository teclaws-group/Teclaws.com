import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Technology solutions for education, healthcare, finance, government, retail, logistics, and SMEs across Kenya and East Africa.",
};

export default function IndustriesPage() {
  const industryProjectMap: Record<string, string[]> = {
    Education:   ["Learning management systems", "Student portals", "Fee management systems", "Library software"],
    Healthcare:  ["Patient management systems", "Telemedicine platforms", "Clinic scheduling", "Health records"],
    Finance:     ["Fintech platforms", "Payment integrations", "Financial dashboards", "Loan management"],
    Government:  ["Citizen portals", "E-government services", "Document management", "Reporting systems"],
    Retail:      ["E-commerce platforms", "Inventory systems", "Point of sale", "Loyalty programs"],
    Logistics:   ["Fleet management", "Route optimization", "Delivery tracking", "Warehouse systems"],
    SMEs:        ["Business management software", "CRM systems", "Accounting integration", "Workflow automation"],
  };

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sectors We Serve"
        description="Deep experience across seven key industries, with an understanding of the operational challenges unique to each."
      />

      {/* Industries list */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((industry, i) => {
              const examples = industryProjectMap[industry.name] ?? [];
              return (
                <Reveal
                  key={industry.name}
                  delay={(i % 2) * 0.07}
                  hover
                  className="rounded-lg bg-white p-8 shadow-sm"
                >
                  <h2 className="font-display text-xl font-semibold text-primary">
                    {industry.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {industry.description}
                  </p>
                  {examples.length > 0 && (
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted/70">
                        What we build
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {examples.map((ex) => (
                          <span
                            key={ex}
                            className="rounded-sm border border-border bg-background px-2.5 py-1 text-xs text-foreground"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
