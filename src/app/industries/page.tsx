import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export const metadata: Metadata = {
  title: "Industries We Serve | Technology Solutions by Sector | Teclaws",
  description:
    "Technology solutions for education, healthcare, finance, government, retail, logistics, and SMEs. Deep sector expertise tailored to your industry's requirements.",
  openGraph: {
    title: "Industries We Serve | Teclaws",
    description:
      "Seven industries, each with distinct regulatory environments and technology requirements. We understand the difference and build accordingly.",
    url: "https://teclaws.com/industries",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws Industries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Teclaws",
    description:
      "Technology solutions for education, healthcare, finance, government, retail, logistics, and SMEs worldwide.",
  },
  alternates: { canonical: "https://teclaws.com/industries" },
};

const CALENDLY_URL = "https://calendly.com/teclawsgroup";

interface IndustrySection {
  name: string;
  image: string;
  imageAlt: string;
  challenge: string;
  approach: string;
  detail: string;
  builds: string[];
  tag: string;
}

const INDUSTRY_SECTIONS: IndustrySection[] = [
  {
    name: "Education",
    tag: "EdTech",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
    imageAlt: "Educational technology platform interface",
    challenge: "Educational institutions manage large volumes of student data, fee collections, academic records, and staff administration across systems that are often disconnected, manual, or outdated. The result is administrative overload, error-prone data management, and poor visibility for leadership.",
    approach: "We build unified, institution-wide software that connects student records, fee management, academic tracking, staff payroll, and reporting into a single coherent platform. Our systems are built to work reliably across varying connectivity conditions, including offline-first mobile access for areas with limited internet.",
    detail: "We have delivered solutions for primary schools, secondary schools, universities, vocational training centres, and online learning providers. Each context has different regulatory requirements, user populations, and operational workflows, and we tailor our approach accordingly.",
    builds: ["Learning management systems", "Student information systems", "Fee and payment portals", "Library management", "Examination management", "E-learning platforms", "Parent and guardian portals"],
  },
  {
    name: "Healthcare",
    tag: "HealthTech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    imageAlt: "Healthcare data analytics and monitoring",
    challenge: "Healthcare providers face a persistent challenge: critical patient information is fragmented across paper records, disconnected software systems, and individual practitioner knowledge. This fragmentation creates risk, increases administrative burden, and limits the quality of care that facilities can deliver.",
    approach: "We build clinical and administrative software that connects patient data across departments, facilities, and care episodes. Our healthcare systems prioritise data accuracy, access control, and audit trails because the consequences of errors are serious. We design for clinical workflows, not administrative convenience, and we work with clinical staff to validate that systems support rather than complicate their practice.",
    detail: "We understand the regulatory environment for healthcare data. Our systems are designed with appropriate access controls, data retention policies, and audit logging to support compliance with healthcare privacy requirements across different jurisdictions.",
    builds: ["Patient management systems", "Electronic health records", "Appointment scheduling", "Telemedicine platforms", "Laboratory information systems", "Pharmacy management", "Insurance claims processing"],
  },
  {
    name: "Finance",
    tag: "FinTech",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    imageAlt: "Financial technology and analytics infrastructure",
    challenge: "Financial services businesses face a dual pressure: the need to move fast enough to compete in a rapidly evolving market, and the need to maintain the security, compliance, and reliability that financial operations demand. Most off-the-shelf software cannot satisfy both requirements simultaneously.",
    approach: "We design financial systems from a security-first perspective. Every architecture decision is evaluated against the risk it introduces. Our fintech work covers payment integrations, mobile money APIs, core banking interfaces, lending platforms, and financial analytics. We implement compliance controls aligned with relevant financial regulations and international standards.",
    detail: "We have worked with SACCOs, microfinance institutions, insurance companies, digital lenders, and payment service providers. Each has distinct compliance requirements, transaction volumes, and risk profiles. We apply the appropriate level of rigour to each context.",
    builds: ["Fintech platform development", "Payment gateway integration", "Mobile money APIs", "Loan management systems", "Financial dashboards", "Fraud detection systems", "SACCO management software"],
  },
  {
    name: "Government",
    tag: "GovTech",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    imageAlt: "Digital government infrastructure and cloud systems",
    challenge: "Government institutions are under increasing pressure to deliver citizen services digitally, reduce paper-based processes, and provide greater transparency in how public resources are managed. Legacy systems, procurement constraints, and internal capacity limitations make this transformation difficult without a capable technology partner.",
    approach: "We approach government technology with an understanding of the unique requirements of public sector projects: procurement compliance, accessibility mandates, transparency obligations, and the need to serve citizens with widely varying digital literacy and connectivity. We build systems that prioritise reliability and simplicity over novelty.",
    detail: "We have delivered systems for national and county level institutions. We have worked with sensitive citizen data and understand the regulatory and security obligations this creates. We work with government IT teams to ensure knowledge transfer and internal capability development alongside delivery.",
    builds: ["Citizen service portals", "E-government platforms", "Document management systems", "Revenue collection systems", "Asset management", "Reporting and analytics platforms", "Permit and licensing systems"],
  },
  {
    name: "Retail",
    tag: "RetailTech",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    imageAlt: "Retail technology and digital commerce",
    challenge: "Retail businesses are navigating a significant shift: customers who expect seamless digital experiences, inventory management challenges across distributed locations, and competitive pressure from both local and international e-commerce players. Managing this complexity with manual or fragmented systems is no longer viable.",
    approach: "We build retail technology that connects online and physical commerce channels, manages inventory across multiple locations in real time, and gives business owners the visibility they need to make informed decisions. Our e-commerce platforms are optimised for local payment methods and delivery logistics, not adapted from templates built for different markets.",
    detail: "We work with retailers ranging from single-location specialty stores to multi-branch chains and wholesale distributors. The operational needs of each are different, and we design systems that fit the actual workflow rather than requiring the business to adapt to the software.",
    builds: ["E-commerce platforms", "Inventory management systems", "Point of sale software", "Loyalty and rewards programmes", "Supplier and procurement management", "Omnichannel customer management", "Sales analytics dashboards"],
  },
  {
    name: "Logistics",
    tag: "LogTech",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    imageAlt: "Logistics and supply chain infrastructure",
    challenge: "Logistics businesses operate in complex environments: variable road infrastructure, diverse regulatory requirements across borders, fuel price volatility, and customer expectations for real-time visibility into deliveries. Coordinating this complexity without the right technology leads to inefficiency, cost overruns, and customer dissatisfaction.",
    approach: "We build logistics technology that provides real-time visibility across the entire supply chain from dispatch to delivery. Our systems handle fleet management, driver communication, customer notifications, route optimisation, and operational analytics in a unified platform designed for real-world logistics realities.",
    detail: "We work with last-mile delivery companies, freight forwarders, logistics aggregators, and corporate fleet operators. We understand the operational differences across different cities and regions, and we build systems that account for local conditions rather than applying a generic template.",
    builds: ["Fleet management systems", "Route optimisation software", "Delivery tracking platforms", "Warehouse management", "Cross-border logistics software", "Driver mobile applications", "Supply chain analytics"],
  },
  {
    name: "SMEs",
    tag: "Business Software",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    imageAlt: "Business productivity and management software",
    challenge: "Small and medium enterprises often find themselves in a difficult position with technology: enterprise software is too expensive and complex for their scale, but standard tools are too generic for their specific industry and workflows. The result is a patchwork of spreadsheets, messaging apps, and disconnected tools that limit growth.",
    approach: "We design business software specifically for the operational reality of growing businesses. Our work starts with understanding the actual workflows and bottlenecks in the business before writing any code. We build only what creates value, keep systems simple enough for non-technical staff to operate confidently, and design for the connectivity and device constraints typical of the environment.",
    detail: "We have built business management software for manufacturing companies, service businesses, professional practices, trading companies, and hospitality operators. Every deployment is preceded by a process mapping exercise to ensure the software reflects the actual business.",
    builds: ["Business management platforms", "CRM and sales pipeline tools", "HR and payroll systems", "Accounting software integration", "Workflow automation", "Reporting and business intelligence", "Customer communication systems"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Deep Expertise Across the Sectors That Matter"
        description="Seven industries, each with distinct regulatory environments, operational realities, and technology requirements. We understand the difference and build accordingly."
      />

      {INDUSTRY_SECTIONS.map((industry, i) => {
        const isEven = i % 2 === 0;
        return (
          <section
            key={industry.name}
            className={`py-24 sm:py-28 ${isEven ? "bg-white" : "bg-background"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${!isEven ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="mb-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-secondary">{industry.tag}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                    {industry.name}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">{industry.challenge}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted">{industry.approach}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{industry.detail}</p>
                  <div className="mt-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted/70">What we build</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.builds.map((item) => (
                        <span key={item} className={`rounded-md px-3 py-1.5 text-xs font-medium text-foreground/70 shadow-sm ${isEven ? "bg-background" : "bg-white"}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.12}>
                  <ImageReveal
                    src={industry.image}
                    alt={industry.imageAlt}
                    className="h-64 sm:h-80 lg:h-[440px]"
                    delay={0.1}
                  />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-primary py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Do not see your industry listed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/65">
              Our core competencies in cloud, security, software development, and DevOps apply across virtually any sector. Get in touch and we will tell you honestly whether we are the right fit.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-secondary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-secondary-dark"
              >
                Book a Consultation
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Send a message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
