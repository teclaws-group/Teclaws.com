import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products | Teclaws",
  description:
    "Explore purpose-built products from Teclaws, including Neer — the complete POS and ERP for businesses to manage sales, inventory, eTIMS, M-Pesa, and staff.",
  openGraph: {
    title: "Products | Teclaws",
    description:
      "Purpose-built products designed to solve real business challenges. Explore Neer — the complete POS and ERP for all businesses.",
    url: "https://teclaws.com/products",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Teclaws",
    description:
      "Explore Teclaws products, including Neer — the complete POS and ERP for all businesses.",
  },
  alternates: { canonical: "https://teclaws.com/products" },
};

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/teclawsgroup";

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Purpose-Built Products for Real Business Challenges"
        description="Each product we build is designed to solve a specific operational problem, backed by the same engineering standards we bring to every client engagement."
      />

      {PRODUCTS.map((product, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={product.name}
            className={`py-24 sm:py-28 ${isEven ? "bg-white" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Reveal>
                  <div className="mb-4 h-1 w-10 rounded-full bg-secondary" />
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-lg font-semibold text-secondary">
                    {product.tagline}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {product.description}
                  </p>
                  <div className="mt-8">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
                    >
                      Visit Product
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="flex h-64 items-center justify-center rounded-2xl bg-background sm:h-80 lg:h-[420px]">
                    <span className="text-6xl font-display font-bold text-primary/10">
                      {product.name}
                    </span>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Want to see Neer in action?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
              Book a free walkthrough to see how Neer can streamline your sales, inventory, eTIMS compliance, and staff management from one dashboard.
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
