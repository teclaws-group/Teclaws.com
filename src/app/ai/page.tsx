import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { ImageReveal } from "@/components/ui/ImageReveal";

export const metadata: Metadata = {
  title: "AI and Automation Services | Teclaws",
  description:
    "Practical AI strategy, LLM integration, intelligent automation, predictive analytics, computer vision, and responsible AI deployment for enterprise businesses worldwide.",
  openGraph: {
    title: "AI and Automation Services | Teclaws",
    description:
      "Production-grade AI systems that solve real operational problems. Strategy, LLM integration, agents, MLOps, and responsible AI governance for global businesses.",
    url: "https://teclaws.com/ai",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI and Automation Services | Teclaws",
    description:
      "Practical AI that creates measurable business value. LLM integration, agents, predictive analytics, and MLOps.",
  },
  alternates: { canonical: "https://teclaws.com/ai" },
};

const CALENDLY_URL = "https://calendly.com/teclawsgroup";


function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function AIPage() {
  return (
    <>
      <PageHero
        eyebrow="AI and Automation"
        title="Practical AI That Creates Measurable Business Value"
        description="We design, build, and deploy artificial intelligence systems that solve real operational problems. Not experimental prototypes. Production-grade systems that earn their place in your business."
      />

      {/* 1. AI Strategy */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">AI Strategy</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Before We Write AI Code, We Help You Identify Where AI Actually Creates ROI
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Most organisations approach AI backwards: they decide to adopt AI and then search for a use case. This is how AI projects fail. We approach it differently. We start with your operations, your bottlenecks, your data, and your costs, and work backwards to identify where AI creates genuine financial or operational return.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Our AI strategy engagement produces a prioritised roadmap of AI opportunities specific to your business. Each opportunity is assessed for technical feasibility, data availability, estimated ROI, implementation complexity, and organisational readiness. You leave with a clear, honest picture of where to invest first and why.
              </p>
              <div className="mt-8 divide-y divide-border">
                {[
                  "Business process audit to identify automation opportunities",
                  "Data availability and quality assessment",
                  "ROI modelling for each AI opportunity",
                  "Technology stack recommendation",
                  "Phased implementation roadmap",
                  "Risk and governance assessment",
                ].map((item) => (
                  <p key={item} className="py-2.5 text-sm leading-relaxed text-foreground/70">{item}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80"
                alt="Artificial intelligence strategy and planning"
                className="h-64 sm:h-96 lg:h-[500px]"
                delay={0.1}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. LLM Integration and RAG */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80"
                alt="Large language model integration and neural processing"
                className="h-64 sm:h-96 lg:h-[500px]"
                delay={0.08}
              />
            </Reveal>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">LLM Integration and RAG</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Connect Your Organisation's Knowledge to Powerful Language Models
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Large language models like GPT-4 and Claude are extraordinarily capable but they do not know anything about your business, your documents, your policies, or your data. Retrieval-Augmented Generation (RAG) solves this. By connecting a language model to a vector database containing your organisation's knowledge, we create systems that can accurately answer questions, generate content, and make decisions based on your specific context.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We build RAG systems for knowledge management, internal document search, customer support automation, compliance document analysis, and technical documentation assistance. Every system includes citation of source documents, so users can verify the information they receive rather than trusting a black box.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { title: "Document ingestion pipelines", desc: "PDFs, Word files, web content, databases indexed automatically" },
                  { title: "Semantic search", desc: "Find information by meaning, not just keywords" },
                  { title: "Citation and sourcing", desc: "Every AI response linked to the source document" },
                  { title: "Multi-model support", desc: "GPT-4, Claude, Gemini, or open-source alternatives" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-xs font-semibold text-primary">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Intelligent Workflow Automation */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Workflow Automation</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Eliminate Repetitive Work and Free Your Team for High-Value Tasks
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/65">
                Intelligent workflow automation goes beyond simple rule-based triggers. We build systems that can read and understand documents, extract structured data from unstructured inputs, make routing decisions based on content, and handle exceptions that would trip up simple rule systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Practical applications we have built include: invoice processing systems that extract, validate, and route for approval without human intervention; document classification pipelines that sort thousands of files into the correct categories with human-level accuracy; customer email triage that routes enquiries to the right department and drafts initial responses; and data synchronisation systems that keep multiple platforms in sync without manual exports and imports.
              </p>
              <div className="mt-9 grid grid-cols-2 gap-y-2.5 gap-x-6">
                {[
                  "Invoice and receipt processing",
                  "Document classification",
                  "Email triage and response drafting",
                  "Data extraction from PDFs",
                  "Approval workflow automation",
                  "Report generation",
                  "CRM data enrichment",
                  "Compliance document review",
                ].map((item) => (
                  <p key={item} className="text-sm text-white/70">{item}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=80"
                alt="Intelligent automation and workflow systems"
                className="h-64 sm:h-96 lg:h-[500px]"
                delay={0.1}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. AI Agents and Assistants */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&q=80"
                alt="AI agents and autonomous systems"
                className="h-64 sm:h-80 lg:h-[480px]"
                delay={0.08}
              />
            </Reveal>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">AI Agents</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Autonomous AI Systems That Reason, Plan, and Act
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                AI agents are systems that can take multi-step actions to accomplish a goal, not just respond to a single question. A well-designed agent can receive a high-level instruction, break it into steps, execute each step by calling tools or APIs, handle errors and unexpected situations, and deliver a completed result.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We build agents for research automation, competitive monitoring, data collection and analysis, code review assistance, customer service, and internal knowledge management. We design agent systems with appropriate guardrails, human-in-the-loop checkpoints for consequential decisions, and comprehensive logging so you have full visibility into what the system did and why.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Customer service agents", desc: "Handle common enquiries, escalate complex cases, maintain conversation context across sessions" },
                  { title: "Research agents", desc: "Monitor competitors, aggregate market data, summarise industry developments" },
                  { title: "Internal productivity agents", desc: "Answer HR questions, retrieve company policies, help onboard new staff" },
                  { title: "Code review agents", desc: "Review pull requests, flag security issues, suggest improvements automatically" },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl bg-background p-4 shadow-sm">
                    <p className="text-sm font-semibold text-primary">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Predictive Analytics and Computer Vision */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal hover className="flex flex-col rounded-2xl bg-white p-10 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Predictive Analytics</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-primary">
                Predict What Will Happen Before It Happens
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                Predictive analytics transforms historical data into forward-looking intelligence. We build machine learning models that forecast demand to optimise inventory, predict customer churn before it happens, detect fraud in real time, estimate creditworthiness for lending decisions, and identify equipment failure before it occurs. The models we build are trained on your data and validated against your historical outcomes, not generic benchmarks.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                We use established approaches including regression, classification, time-series forecasting, and ensemble methods. We explain how each model makes its predictions and provide confidence measures alongside outputs, so your team can make informed decisions rather than blindly following algorithmic recommendations.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted/60">Applications</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Demand forecasting, churn prediction, fraud detection, credit scoring, predictive maintenance, sales forecasting.
              </p>
            </Reveal>

            <Reveal delay={0.09} hover className="flex flex-col rounded-2xl bg-primary p-10 text-white">
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Computer Vision</span>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight">
                AI That Can See, Read, and Understand Visual Information
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">
                Computer vision enables software to interpret and act on visual information: documents, images, and video streams. We build document OCR pipelines that extract structured data from handwritten and printed forms with high accuracy, quality inspection systems that detect defects in manufacturing and logistics, identity verification systems that process government-issued documents, and visual monitoring systems for security and compliance applications.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Our computer vision work covers both cloud-based inference for high-volume batch processing and edge deployment for applications that require low latency or operate in environments with limited connectivity.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-white/40">Applications</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Document OCR, quality inspection, identity verification, medical imaging analysis, video monitoring, receipt scanning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. NLP */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Natural Language Processing</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                Turn Unstructured Text Into Structured Business Intelligence
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                Most organisations generate enormous volumes of unstructured text: customer feedback, support tickets, social media mentions, contracts, reports, emails, and meeting notes. NLP systems transform this raw text into structured data that can be analysed, acted on, and fed into other systems.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We build sentiment analysis systems that monitor customer satisfaction across channels, entity extraction pipelines that pull names, dates, amounts, and key terms from contracts and documents, text classification systems that categorise support tickets by topic and urgency, and multilingual processing pipelines for organisations operating across diverse languages and global markets.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-y-2.5 gap-x-6">
                {[
                  "Sentiment analysis",
                  "Entity extraction",
                  "Document summarisation",
                  "Text classification",
                  "Intent detection",
                  "Multilingual processing",
                  "Contract analysis",
                  "Topic modelling",
                ].map((item) => (
                  <p key={item} className="text-sm text-foreground/70">{item}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                alt="Natural language processing and data analytics"
                className="h-64 sm:h-80 lg:h-[480px]"
                delay={0.1}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Responsible AI */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <Reveal delay={0.1}>
              <ImageReveal
                src="https://images.unsplash.com/photo-1509475826633-fed498b4f09d?w=1200&q=80"
                alt="Responsible AI governance and monitoring"
                className="h-64 sm:h-80 lg:h-[480px]"
                delay={0.08}
              />
            </Reveal>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Responsible AI</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
                AI Systems That Are Explainable, Fair, and Governed
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                AI systems that make consequential decisions must be held to a higher standard than those that simply automate routine tasks. We build responsible AI into our systems through explainability mechanisms, bias detection and mitigation, data privacy controls, access governance, and audit logging.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Explainability means providing human-readable explanations for why the system made a specific decision, not just the decision itself. This is particularly important in regulated industries like finance and healthcare where decisions must be justifiable to regulators and customers.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                We also implement AI governance frameworks that define who can use AI systems, what they can use them for, how outputs are reviewed and validated, and how the system is monitored for drift and degradation over time.
              </p>
              <div className="mt-8 divide-y divide-border">
                {[
                  "Model explainability and interpretability",
                  "Bias detection and fairness testing",
                  "Data privacy by design",
                  "Role-based access to AI capabilities",
                  "Audit logs for all AI decisions",
                  "Model performance monitoring and drift detection",
                ].map((item) => (
                  <p key={item} className="py-2.5 text-sm leading-relaxed text-foreground/70">{item}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Model Deployment and Monitoring */}
      <section className="bg-primary py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">MLOps</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">From Model to Production: Full MLOps Support</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/60">
                Getting an AI model working in a notebook is not the same as running it reliably in production at scale. We handle the full deployment and operations lifecycle so your AI investments remain effective over time.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Containerised model serving", desc: "Models packaged as containers for consistent deployment across environments with version control and rollback capability." },
              { title: "API design and versioning", desc: "Clean, well-documented APIs that make AI capabilities accessible to your applications and integrations." },
              { title: "Performance monitoring", desc: "Continuous tracking of inference latency, throughput, error rates, and resource utilisation." },
              { title: "Model drift detection", desc: "Automated alerts when model performance degrades due to changes in input data distribution over time." },
              { title: "Retraining pipelines", desc: "Automated workflows to retrain models on new data and promote updated models through staging to production." },
              { title: "Cost optimisation", desc: "Intelligent batching, caching, and model quantisation to reduce inference costs without sacrificing quality." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.07} hover className="rounded-xl bg-white/5 p-6">
                <h3 className="font-display text-sm font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Industry AI Use Cases */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Industry Applications</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-primary sm:text-4xl">AI That Fits Your Industry Context</h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
                The most effective AI applications are calibrated to the specific workflows, data sources, and constraints of a particular industry.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { industry: "Finance", uses: ["Credit risk modelling", "Transaction fraud detection", "Automated KYC document review", "Loan application processing", "Regulatory reporting automation"] },
              { industry: "Healthcare", uses: ["Clinical document summarisation", "Appointment no-show prediction", "Medical coding assistance", "Patient triage automation", "Insurance pre-authorisation"] },
              { industry: "Education", uses: ["Automated marking and feedback", "Student progress prediction", "Personalised learning pathways", "Administrative query handling", "Plagiarism and AI content detection"] },
              { industry: "Retail", uses: ["Demand and inventory forecasting", "Product recommendation engines", "Dynamic pricing optimisation", "Customer service chatbots", "Visual search and similar products"] },
              { industry: "Logistics", uses: ["Intelligent route optimisation", "Delivery ETA prediction", "Fleet maintenance forecasting", "Damage detection from photos", "Document processing at borders"] },
              { industry: "Government", uses: ["Citizen query routing", "Document classification and filing", "Fraud detection in applications", "Sentiment analysis on public feedback", "Automated report generation"] },
            ].map((item, i) => (
              <Reveal key={item.industry} delay={(i % 3) * 0.07} hover className="rounded-xl bg-background p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">{item.industry}</p>
                <div className="space-y-1.5">
                  {item.uses.map((use) => (
                    <p key={use} className="text-xs text-foreground/70">{use}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Get started</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to Put AI to Work in Your Business?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
              Start with an AI strategy consultation. We will assess your processes, data, and goals and give you a clear, honest view of where AI creates the most value for your organisation.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-sm font-semibold text-secondary transition-colors hover:bg-white/90"
              >
                Book an AI Strategy Call <ArrowRight />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Send us a message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
