export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

const CALENDLY = "https://calendly.com/teclawsgroup";
const EMAIL    = "teclawsgroup@gmail.com";
const PHONE    = "+254 141 414 255";
const SITE     = "https://teclaws.com";

export const FAQ_ENTRIES: FaqEntry[] = [

  // ── Company ──────────────────────────────────────────────────────────────

  {
    id: "what-is-teclaws",
    question: "What is Teclaws? Who are you? Tell me about your company.",
    answer:
      "**Teclaws** is a global technology consultancy headquartered in Nairobi, Kenya. We partner with startups, growing businesses, and enterprises worldwide to design, build, and operate scalable technology systems.\n\nOur specialisations:\n- **Custom Software Engineering** - enterprise applications, APIs, and system integrations\n- **AI and Automation** - LLM integration, custom ML models, intelligent process automation\n- **Cloud and DevOps** - AWS, GCP, Azure infrastructure, Kubernetes, CI/CD pipelines\n- **Cybersecurity** - penetration testing, security audits, compliance programmes\n- **Web and Mobile Development** - web apps, portals, iOS, Android, React Native\n- **Enterprise Technology Consulting** - architecture reviews, digital transformation, technology strategy\n\nWe believe that software quality directly determines business outcomes. Every engagement is led by senior engineers who are accountable for delivering results, not just code.",
  },
  {
    id: "founded",
    question: "When was Teclaws founded? What is your background and story?",
    answer:
      "Teclaws was founded in 2026 by a team of engineers who turned shared late-night projects into a focused technology consultancy. We built the company on a straightforward belief: businesses worldwide deserve the same quality of engineering that the best global enterprises take for granted.\n\nWe operate at the intersection of technical depth and commercial awareness. Most technology firms are either technically excellent but commercially disconnected, or commercially smooth but technically shallow. We close that gap by employing engineers who understand business and business people who understand engineering.",
  },
  {
    id: "location",
    question: "Where is Teclaws based? Do you work remotely? Kenya?",
    answer:
      "Teclaws is headquartered in Nairobi, Kenya, but our services are not limited to one region. We partner with organisations globally, delivering projects remotely and providing on-site workshops, consultations, and implementation support when required.\n\nMost of our work is done fully remotely using modern collaboration tools. We structure communication to fit your team's timezone, so location is rarely a practical barrier. If on-site presence matters for your project, we discuss that during the initial consultation.",
  },
  {
    id: "east-africa",
    question: "East Africa? Do you serve East Africa? Kenya, Uganda, Tanzania?",
    answer:
      "East Africa is where Teclaws is headquartered, not where our services end. We serve clients globally across every sector and geography.\n\nThat said, we do have on-the-ground presence and strong industry relationships in Kenya and the broader East African market. If you are building something in Kenya, Uganda, Tanzania, Rwanda, or elsewhere in the region, we understand the local regulatory environment, payment infrastructure (M-Pesa, mobile money), and operational context that global firms often miss. What are you looking to build?",
  },
  {
    id: "where-do-you-work",
    question: "Where do you work? What locations? What countries do you serve?",
    answer:
      "We work with organisations worldwide. Most projects are delivered fully remotely using structured communication, shared repositories, and regular video check-ins that fit your team's working hours.\n\nFor clients who prefer on-site engagement - whether for workshops, discovery sessions, or implementation support - we discuss that during the initial consultation. Geography has not been a barrier for any project we have taken on.",
  },
  {
    id: "why-teclaws",
    question: "Why should I choose Teclaws? What makes you different?",
    answer:
      "Three things set us apart:\n\n**1. Senior engineers on every project.** No junior developers hidden behind a project manager. Your work is handled by experienced engineers who have shipped production systems and can have honest conversations about risk, trade-offs, and scope.\n\n**2. Transparency as standard practice.** Weekly written updates, fully documented decisions, complete repository access from day one, and pricing agreed before any build begins. You are never left wondering what is happening or what something will cost.\n\n**3. Outcomes, not just delivery.** We measure success by whether the software solves your actual business problem. If something is going wrong, we flag it early rather than delivering on time and leaving you with a system that does not work as expected.",
  },

  // ── Services overview ─────────────────────────────────────────────────────

  {
    id: "services-overview",
    question: "What services does Teclaws offer? What do you build? What can you do?",
    answer:
      "We offer seven core service areas, each scoped to your specific situation rather than sold as a package:\n\n- **Cloud and Hosting** - AWS, GCP, Azure migrations, managed infrastructure, cost optimisation\n- **Cybersecurity** - audits, penetration testing, compliance (ISO 27001, GDPR, PCI-DSS)\n- **Custom Software Development** - enterprise apps, APIs, system integrations, legacy modernisation\n- **Web and Mobile Development** - web apps, portals, e-commerce, iOS, Android, React Native\n- **DevOps and Infrastructure** - CI/CD pipelines, Docker, Kubernetes, Infrastructure as Code\n- **AI and Automation** - LLM integration, custom ML models, intelligent automation, computer vision\n- **Technical Consulting** - architecture reviews, technology strategy, digital transformation\n\nWhat problem are you trying to solve? That is the best place to start.",
  },

  // ── Cloud ─────────────────────────────────────────────────────────────────

  {
    id: "cloud-hosting",
    question: "What cloud and hosting services do you offer? AWS, GCP, Azure, VPS, migration?",
    answer:
      "We cover the full cloud lifecycle: infrastructure design, migrations (AWS, GCP, Azure), managed hosting, auto-scaling, load balancing, CDN integration, database hosting, backup strategies, and ongoing cost optimisation.\n\nWe are cloud-provider agnostic - we recommend the right platform for your workload, team, and cost profile rather than defaulting to the most popular option. A startup running stateless microservices has different needs than an enterprise running data-heavy analytics workloads.",
  },
  {
    id: "aws",
    question: "What AWS services do you use? Amazon Web Services, EC2, S3, Lambda, RDS, EKS, CloudFront?",
    answer:
      "We work across the full AWS ecosystem. Common services we deploy:\n- **Compute:** EC2 (auto-scaling groups), ECS/EKS for containers, Lambda for serverless\n- **Storage:** S3 with lifecycle policies, EFS for shared file systems\n- **Databases:** RDS (PostgreSQL, MySQL), Aurora for high availability, DynamoDB for key-value at scale\n- **Networking:** VPC design with public/private subnets, ALB/NLB, Route 53, CloudFront CDN\n- **Security:** IAM with least-privilege policies, KMS encryption, Security Groups, GuardDuty\n- **IaC:** Terraform or CDK for fully reproducible environments\n\nWe design for multi-AZ high availability by default.",
  },
  {
    id: "azure",
    question: "Do you work with Microsoft Azure? AKS, Azure DevOps, App Service, Azure SQL, Functions?",
    answer:
      "Yes. On Azure we commonly deploy:\n- **Compute:** App Service, Azure Kubernetes Service (AKS), Azure Functions for serverless\n- **Data:** Azure SQL, Cosmos DB for multi-model NoSQL, Blob Storage\n- **Identity:** Azure Active Directory, Managed Identities, RBAC\n- **DevOps:** Azure DevOps Pipelines, Azure Container Registry\n- **Networking:** Application Gateway, Azure CDN, Private Endpoints\n- **IaC:** Terraform or Bicep for version-controlled deployments\n\nAzure is typically the right choice for organisations already invested in the Microsoft ecosystem (M365, Active Directory, Windows Server).",
  },
  {
    id: "gcp",
    question: "Do you work with Google Cloud? GKE, BigQuery, Cloud Run, Firebase, Cloud Storage?",
    answer:
      "Yes. On GCP we commonly use:\n- **Compute:** Cloud Run for containerised workloads, GKE for full Kubernetes control\n- **Data:** Cloud SQL, BigQuery for analytics and data warehousing, Firestore, Spanner\n- **Storage:** Google Cloud Storage with lifecycle management\n- **Mobile/Real-time:** Firebase (Firestore, Auth, Hosting)\n- **ML/AI:** Vertex AI, BigQuery ML for data-intensive applications\n- **IaC:** Terraform with Google provider\n\nGCP is particularly strong for analytics-heavy, data-warehouse, or ML workloads, and for teams already using Google Workspace.",
  },
  {
    id: "cloud-migration",
    question: "Can you help migrate to the cloud? Move servers, on-premise to cloud?",
    answer:
      "Yes. We plan and execute cloud migrations with minimal downtime, whether from on-premise to AWS, GCP, or Azure, or between cloud providers. Our migration process:\n1. **Audit** - inventory current infrastructure, dependencies, and data\n2. **Plan** - migration strategy (rehost, replatform, or refactor), timeline, rollback plan\n3. **Execute** - phased migration with data sync and cutover window\n4. **Validate** - post-migration testing, performance benchmarking, and monitoring\n\nWe avoid lift-and-shift traps. If a workload can be redesigned to cost less and perform better in the cloud, we propose that rather than just moving the existing setup.",
  },

  // ── Kubernetes & Docker ───────────────────────────────────────────────────

  {
    id: "kubernetes",
    question: "Do you use Kubernetes? K8s, EKS, AKS, GKE, pods, clusters, Helm, container orchestration?",
    answer:
      "Yes. We design and manage Kubernetes clusters on AWS (EKS), Azure (AKS), and GCP (GKE). This covers:\n- Cluster setup, node pools, RBAC, namespace design\n- Workload management: Deployments, StatefulSets, CronJobs, HPA/VPA autoscaling\n- Helm charts for templated, reproducible deployments\n- Ingress with NGINX or Traefik and TLS termination\n- Observability: Prometheus, Grafana, Loki for logs\n- Security: Pod security standards, network policies, secrets management (Vault or Sealed Secrets)\n\nKubernetes is the right choice when you have multiple services that need independent scaling, rolling updates, and zero-downtime deployments.",
  },
  {
    id: "docker",
    question: "Do you use Docker? Containers, Dockerfile, Docker Compose, container images, registries?",
    answer:
      "Containerisation is standard in every production system we build. That means multi-stage Dockerfiles to minimise image size, distroless or Alpine base images to reduce the attack surface, container registries (ECR, ACR, GCR, or self-hosted Harbor), Docker Compose for consistent local development environments, and Trivy or Snyk security scans integrated into CI pipelines.\n\nContainers eliminate the 'works on my machine' problem and form the foundation for Kubernetes deployments.",
  },

  // ── DevOps & CI/CD ────────────────────────────────────────────────────────

  {
    id: "devops",
    question: "What DevOps services do you offer? CI/CD, Docker, Kubernetes, pipelines, monitoring?",
    answer:
      "We set up complete DevOps platforms covering:\n- **CI/CD** - automated test, build, and deploy pipelines (GitHub Actions, GitLab CI, Jenkins)\n- **Infrastructure as Code** - Terraform, Ansible, Pulumi for reproducible environments\n- **Containerisation** - Docker and Kubernetes for scalable, portable workloads\n- **Monitoring** - Prometheus, Grafana, PagerDuty alerting, Sentry for error tracking\n- **Log management** - ELK stack or Loki with Grafana\n- **Security scanning** - automated vulnerability scanning in every pipeline run\n\nThe goal is a delivery pipeline you trust and a production environment you can observe in real time.",
  },
  {
    id: "cicd",
    question: "How do you set up CI/CD pipelines? GitHub Actions, GitLab CI, Jenkins, automated deployments?",
    answer:
      "A production CI/CD pipeline we build typically includes:\n1. Lint and type check\n2. Unit and integration tests with coverage gates\n3. Security scan - Trivy for container images, Snyk for dependencies\n4. Docker build and push, tagged with commit SHA and environment\n5. Terraform plan to preview infrastructure changes before applying\n6. Staging deploy on merge to develop branch\n7. Smoke tests and automated health checks post-deployment\n8. Production deploy on merge to main, with blue/green or canary rollout\n\nWe default to **GitHub Actions** for most projects, **GitLab CI** when the client uses GitLab, and **Jenkins** for enterprises with existing Jenkins infrastructure.",
  },
  {
    id: "infrastructure-as-code",
    question: "Do you use Terraform or infrastructure as code? IaC, Ansible, Pulumi?",
    answer:
      "All infrastructure we provision is managed as code. **Terraform** is our primary tool for AWS, Azure, and GCP, with remote state stored in S3 or Terraform Cloud and state locking via DynamoDB. **Ansible** handles configuration management and server provisioning. **Pulumi** is available when the team prefers writing IaC in TypeScript or Python.\n\nIaC gives you reproducible environments, a full audit history of every infrastructure change, and eliminates the manual click-ops that nobody can reproduce six months later.",
  },

  // ── AI & Automation ───────────────────────────────────────────────────────

  {
    id: "ai-overview",
    question: "What AI services does Teclaws offer? Artificial intelligence, machine learning, automation?",
    answer:
      "Our AI and Automation practice helps organisations move from exploring AI to deploying it in production systems that create measurable business value.\n\nWhat we build:\n- **AI Strategy and Roadmapping** - identify where AI creates genuine ROI in your operations\n- **LLM Integration** - embed GPT-4, Claude, Gemini, or open-source models into your products and internal tools\n- **Custom ML Models** - classification, regression, NLP, and computer vision trained on your specific data\n- **Intelligent Process Automation** - replace manual workflows with AI-driven pipelines that run without human intervention\n- **AI Agents** - autonomous systems that plan, reason, and execute multi-step tasks\n- **MLOps** - model serving, drift monitoring, and retraining pipelines that keep models working in production\n- **Computer Vision** - image classification, object detection, OCR, and document intelligence\n- **Data Engineering** - the data pipelines and warehousing that make AI workloads possible\n\nAI that does not solve a real business problem is expensive noise. We start with the problem, not the technology.",
  },
  {
    id: "llm-integration",
    question: "Can you integrate LLMs into my product? GPT, Claude, AI chatbots, language models?",
    answer:
      "Yes. We integrate large language models into both customer-facing products and internal tools. Practical examples of what we build:\n\n- **Intelligent customer support** - a chatbot that understands your product catalogue, handles returns, escalates edge cases, and reduces support ticket volume by 60-80%\n- **Internal knowledge assistant** - an AI that answers employee questions using your internal documentation, policies, and SOPs\n- **Document analysis** - extract structured data from contracts, invoices, or application forms at scale\n- **Automated report generation** - turn raw data into readable summaries and executive briefings\n- **Developer tooling** - code review assistants, test generation, and documentation tools for engineering teams\n\nWe handle the full implementation: model selection, prompt engineering, retrieval-augmented generation (RAG) to ground answers in your data, safety guardrails, cost optimisation, and production deployment. Which of these maps closest to what you need?",
  },
  {
    id: "ai-agents",
    question: "What are AI agents? Can you build autonomous AI systems?",
    answer:
      "AI agents are systems that can plan, use tools, and execute multi-step tasks without a human directing each step. Think of them as digital workers that can reason about a goal and figure out the steps to achieve it.\n\nReal examples of agents we build:\n- A **lead research agent** that receives a company name, researches it across multiple sources, summarises findings, and populates your CRM\n- A **monitoring agent** that watches application metrics, detects anomalies, diagnoses the likely cause, and creates a support ticket with context before a human is even paged\n- A **document processing agent** that reads incoming applications, extracts required fields, checks for completeness, and routes to the right department\n- A **customer service agent** that handles routine enquiries end-to-end and escalates only edge cases to a human\n\nEvery agent we deploy has defined guardrails, full audit trails, and clear human intervention points. We agree these boundaries with you before anything goes to production.",
  },
  {
    id: "computer-vision",
    question: "Do you build computer vision systems? Image recognition, object detection, OCR?",
    answer:
      "Yes. Our computer vision work covers:\n- **Image classification** - categorising images into defined classes (product defects, document types, content categories)\n- **Object detection** - identifying and locating specific objects in images or video streams\n- **Document parsing and OCR** - extracting structured data from ID documents, invoices, forms, and receipts\n- **Quality control** - automated defect detection in manufacturing or logistics workflows\n- **Medical imaging support** - analysis assistance for diagnostic imaging (with appropriate regulatory awareness)\n\nWe use PyTorch, TensorFlow, and pre-trained foundation models fine-tuned on your specific data. For most use cases, fine-tuning an existing model produces better results than training from scratch, at a fraction of the cost.",
  },
  {
    id: "ai-strategy",
    question: "Can you help us develop an AI strategy? AI roadmap, where to start with AI?",
    answer: `Most organisations have more AI opportunities than they have capacity to pursue, and some of the most-hyped ones create more complexity than value. Our AI Strategy engagement cuts through that.\n\nWhat it covers:\n1. **AI Readiness Assessment** - evaluate your data quality, infrastructure maturity, team capability, and which processes have the characteristics that make AI work well\n2. **Use Case Discovery** - identify where AI creates genuine ROI versus where it adds cost and complexity without proportionate benefit\n3. **Prioritisation** - rank opportunities by business impact and implementation feasibility\n4. **ROI Modelling** - concrete cost/benefit projections for the top three to five initiatives\n5. **Implementation Roadmap** - a phased 12-24 month plan with milestones, team requirements, and infrastructure dependencies\n\nThe output is a practical plan you can act on, not a slide deck of AI buzzwords. To discuss your specific situation, book a call at [calendly.com/teclawsgroup](${CALENDLY}).`,
  },
  {
    id: "mlops",
    question: "What is MLOps? Can you help with model deployment and monitoring?",
    answer:
      "MLOps covers everything between a trained model and a reliable production system. A model that works in a Jupyter notebook is not the same as a model that works reliably at scale six months from now.\n\nWe handle:\n- **Model serving** - REST APIs or batch inference pipelines with defined latency SLAs\n- **Model versioning** - MLflow or DVC for experiment tracking and a model registry teams can trust\n- **Drift monitoring** - alerts when input data distributions shift or model accuracy degrades\n- **Automated retraining** - pipelines triggered when performance drops below a defined threshold\n- **A/B testing** - controlled traffic splitting to compare model versions before full rollout\n- **Feature stores** - consistent feature computation across training and inference environments\n\nModels left unmonitored degrade silently. MLOps is what keeps AI working in production over time.",
  },
  {
    id: "ai-industry",
    question: "What AI solutions make sense for my industry? How can AI help my business?",
    answer:
      "It depends on your industry and the specific friction points in your operations. Some patterns we see most often:\n\n**Retail and e-commerce** - personalised product recommendations, demand forecasting, automated customer support, fraud detection\n\n**Healthcare** - patient document extraction, appointment scheduling automation, clinical note summarisation, treatment recommendation support\n\n**Finance and Fintech** - credit risk scoring, fraud pattern detection, regulatory compliance automation, document-heavy KYC processing\n\n**Logistics** - route optimisation, demand prediction, automated dispatch, supply chain anomaly detection\n\n**Education** - personalised learning paths, automated grading, student engagement analysis, content generation for educators\n\n**Operations generally** - any process that involves a human reading a document and entering data into a system is a strong candidate for AI automation.\n\nWhat industry are you in? I can be more specific about what tends to work well.",
  },

  // ── Cybersecurity ────────────────────────────────────────────────────────

  {
    id: "cybersecurity",
    question: "What cybersecurity services do you provide? Penetration testing? Security audit?",
    answer:
      "Our cybersecurity practice:\n- **Security audits** - risk assessments, architecture reviews, and threat modelling\n- **Penetration testing** - web apps, APIs, networks, and mobile applications\n- **Compliance** - ISO 27001, GDPR, PCI-DSS, Kenya Data Protection Act 2019\n- **Vulnerability management** - continuous scanning and prioritised remediation roadmaps\n- **Incident response planning** - runbooks, tabletop exercises, and IR retainer options\n\nWe find real weaknesses with proof-of-concept exploitation, not just automated scanner output. Every finding comes with a severity rating and a specific remediation recommendation.",
  },
  {
    id: "security-audit-process",
    question: "How do you conduct a security audit? What is your assessment methodology?",
    answer:
      "Our security audits follow six phases:\n1. **Scoping** - define assets, systems, and threat model with your team\n2. **Reconnaissance** - passive OSINT, technology fingerprinting, exposed service enumeration\n3. **Vulnerability scanning** - automated tools (Nessus, OpenVAS, Burp Suite)\n4. **Manual testing** - business logic flaws, authentication bypasses, privilege escalation, injection attacks\n5. **Exploitation** - controlled proof-of-concept to confirm real risk and business impact\n6. **Reporting** - executive summary plus technical findings with CVSS scores and remediation steps\n\nWe deliver a prioritised remediation roadmap and offer retesting after fixes are applied to confirm they hold.",
  },
  {
    id: "pentest",
    question: "What does your penetration testing cover? Web app pentest, API pentest, network pentest?",
    answer:
      "We cover four primary test domains:\n- **Web application** - OWASP Top 10, authentication, session management, injection flaws, IDOR, business logic vulnerabilities\n- **API** - REST and GraphQL endpoints, broken object-level auth, mass assignment, rate limiting, JWT attacks\n- **Network and infrastructure** - internal and external network, firewall rules, exposed services, lateral movement paths\n- **Mobile** - iOS and Android apps, local data storage, certificate pinning, API communication, binary analysis\n\nAll tests are performed under a signed scope of work. We use Burp Suite Pro, Metasploit, Nmap, and Frida, following PTES and OWASP Testing Guide methodologies.",
  },
  {
    id: "compliance",
    question: "Can you help with compliance? ISO 27001, GDPR, PCI-DSS, data protection?",
    answer:
      "Yes. We implement compliance frameworks including **ISO 27001**, **GDPR**, **PCI-DSS**, and **Kenya's Data Protection Act 2019**. Our approach: gap analysis against the relevant standard, policy documentation, technical control implementation, staff training guidance, and audit preparation.\n\nWe focus on controls that actually reduce risk rather than documentation that satisfies an auditor but leaves you exposed. Compliance and security are not the same thing, and we treat them accordingly.",
  },

  // ── Software development ─────────────────────────────────────────────────

  {
    id: "software-development",
    question: "Do you build custom software? Enterprise applications? API development?",
    answer:
      "Yes. We build:\n- **Enterprise applications** - internal tools, ERP integrations, business process automation\n- **APIs** - REST and GraphQL, designed spec-first with OpenAPI 3.0 before a line of code is written\n- **System integrations** - connecting your existing systems (ERP, CRM, payment gateways, government APIs)\n- **Legacy modernisation** - incremental rewrites using the strangler-fig pattern that keeps the existing system running during the transition\n\nEvery codebase we deliver is well-tested, properly documented, and genuinely maintainable. You are not handed a black box that only we can touch.",
  },
  {
    id: "api-design",
    question: "How do you design APIs? REST, GraphQL, OpenAPI, versioning, authentication, documentation?",
    answer:
      "Our API design approach:\n- **Spec-first** - the OpenAPI 3.0 specification is written and reviewed before any code is written, so the contract is clear before implementation begins\n- **REST first** for CRUD-heavy services, **GraphQL** when clients need flexible, aggregated data queries\n- **Versioning** - URL path versioning (/v1, /v2) for public APIs, header versioning for internal services\n- **Authentication** - JWT with short-lived access tokens and refresh token rotation, or API keys for server-to-server communication\n- **Rate limiting** - token bucket or sliding window algorithms, exposed via standard headers\n- **Documentation** - auto-generated from the OpenAPI spec and validated in CI so it never drifts from the implementation\n\nAll APIs are fully documented and tested before handover.",
  },
  {
    id: "legacy-modernisation",
    question: "Can you modernise or refactor legacy systems?",
    answer:
      "Yes. Big-bang rewrites almost always go wrong - the system is more complex than expected, the knowledge of the original behaviour is incomplete, and you end up with two half-working systems instead of one good one.\n\nWe use the **strangler-fig pattern** instead:\n1. Assess the existing codebase - risk areas, dependencies, data model, and what test coverage exists\n2. Build the new system alongside the old, routing specific traffic to the new implementation\n3. Migrate feature by feature, validating behaviour at each step\n4. Decommission the old system once all traffic has been safely moved\n\nThe business keeps running throughout. The system improves incrementally rather than going dark for a rewrite.",
  },

  // ── Web development ──────────────────────────────────────────────────────

  {
    id: "web-development",
    question: "What web development do you do? Websites, web apps, portals, e-commerce?",
    answer:
      "We build:\n- **Web applications** - React and Next.js frontends with robust backends in Node.js, Python, or Go\n- **Customer and staff portals** - authenticated, role-based access with complex business logic\n- **E-commerce platforms** - custom-built storefronts or Shopify/WooCommerce implementations\n- **CMS-driven marketing sites** - Sanity, Contentful, or headless WordPress with performance-first builds\n- **SEO-optimised websites** - Core Web Vitals optimised, structured data, technically clean\n\nEverything is built for speed, accessibility, and measurable business outcomes rather than just visual polish.",
  },

  // ── Mobile ───────────────────────────────────────────────────────────────

  {
    id: "mobile-apps",
    question: "Do you build mobile apps? iOS, Android, React Native, cross-platform?",
    answer:
      "Yes. We build:\n- **Native iOS** - Swift and SwiftUI, through to App Store submission and post-launch maintenance\n- **Native Android** - Kotlin and Jetpack Compose, through to Google Play submission\n- **Cross-platform with React Native** - when a shared codebase makes sense economically without sacrificing user experience\n\nWe cover the full lifecycle: UX design, development, QA, store submission, and ongoing maintenance. Native is the right call when performance or platform-specific APIs matter. React Native makes sense when time-to-market and budget are the primary constraints.",
  },

  // ── Technical consulting ─────────────────────────────────────────────────

  {
    id: "technical-consulting",
    question: "What does your technical consulting cover? Architecture, strategy, roadmap?",
    answer:
      "Our consulting is useful when you need to make a significant technical decision and want senior input before committing budget or engineering time. It covers:\n\n- **Architecture reviews** - assess your current system for scalability bottlenecks, reliability risks, and security gaps\n- **Technology roadmapping** - a 12-24 month technical plan aligned to your business goals and team capacity\n- **Build vs. buy assessments** - unbiased evaluation of whether to build custom, buy a product, or use a managed service\n- **Code quality audits** - automated and manual review with a prioritised improvement plan\n- **Digital transformation strategy** - moving from manual or legacy processes to modern, automated systems\n\nWe work through the problem with you and give you a concrete recommendation, not a list of options with no guidance.",
  },

  // ── Industries ───────────────────────────────────────────────────────────

  {
    id: "industries",
    question: "Which industries do you work with? Healthcare, finance, education, government?",
    answer:
      "We work across multiple sectors and understand the regulatory and operational specifics of each:\n\n- **Education (EdTech)** - LMS platforms, student portals, e-learning apps, online assessment tools\n- **Healthcare (HealthTech)** - patient management, clinic systems, electronic health records, telemedicine\n- **Finance and Fintech** - payment platforms, mobile money integrations, lending systems, KYC/AML compliance\n- **Government and public sector** - citizen portals, e-government services, open data platforms\n- **Retail and e-commerce** - online stores, inventory management, order fulfilment, loyalty programmes\n- **Logistics** - fleet tracking, supply chain management, route optimisation, warehouse systems\n- **SMEs and startups** - across all sectors, scoped to your budget with architecture that grows with you",
  },
  {
    id: "education-tech",
    question: "Can you build an LMS or e-learning platform? Education technology?",
    answer:
      "Yes. Our EdTech work includes learning management systems (LMS), student and parent portals, online assessment and grading tools, live and pre-recorded course delivery platforms, and payment integrations for subscription or per-course billing.\n\nWe build for scale from the start - a platform that handles 100 students today should handle 100,000 without a rewrite. We have also integrated AI into EdTech systems for personalised learning paths and automated marking of structured assignments.",
  },
  {
    id: "healthcare-tech",
    question: "Do you build healthcare software? Patient management, medical records, clinic systems?",
    answer:
      "Yes. We build patient management systems, clinic scheduling and booking platforms, electronic health records (EHR), telemedicine video consultation integrations, laboratory information systems, and pharmacy management tools.\n\nHealthcare data is sensitive and regulated. We build with appropriate access controls, role-based permissions, full audit logging, and data handling practices that align with the relevant regulations in your jurisdiction.",
  },
  {
    id: "fintech",
    question: "Can you build fintech software? Payment systems, mobile money, lending platforms?",
    answer:
      "Yes. Our fintech work covers payment gateway integrations, mobile money APIs (M-Pesa, Airtel Money, and others), digital lending platforms with credit scoring models, financial reporting dashboards, KYC/AML workflow automation, and PCI-DSS compliant card processing environments.\n\nFinance is a high-stakes domain. Our security standards, code review practices, and testing requirements are more stringent for financial systems than for lower-risk applications.",
  },

  // ── Databases ────────────────────────────────────────────────────────────

  {
    id: "database",
    question: "What databases do you use? PostgreSQL, MySQL, MongoDB, Redis, database selection?",
    answer:
      "We choose databases based on your data model, access patterns, and consistency requirements rather than defaulting to one tool for everything:\n\n- **PostgreSQL** - our default for relational data, handles JSONB for semi-structured fields, and scales well with proper indexing\n- **MySQL/MariaDB** - when existing systems or ORMs require it\n- **MongoDB** - when data is genuinely document-oriented and schema flexibility is a requirement, not just a convenience\n- **Redis** - caching, session storage, rate limiting, pub/sub messaging, job queues\n- **Elasticsearch** - full-text search and log aggregation at scale\n- **BigQuery or Redshift** - analytics and data warehousing for reporting-heavy workloads\n\nSchema design and indexing strategy are decided at the architecture stage, not retrofitted later.",
  },

  // ── Process ──────────────────────────────────────────────────────────────

  {
    id: "process",
    question: "What is your development process? How do you work? Methodology?",
    answer:
      "We work in six structured stages:\n\n1. **Discovery** (1-2 weeks) - understand your business goals, users, constraints, and existing systems. Delivers a written problem statement, proposed scope, risk register, and open questions log.\n2. **Planning** (1-2 weeks) - architecture design, technology decisions, detailed timeline with milestones, and finalised pricing. Nothing begins until this document is agreed.\n3. **Development** (varies by scope) - two-week sprints with demos at each boundary, full repository access, and daily progress tracking.\n4. **Testing** (continuous and pre-release) - automated test suites, security review, performance benchmarks, and user acceptance testing.\n5. **Deployment** (1-3 days) - automated pipelines, zero-downtime release strategy, rollback plan, and post-deployment monitoring.\n6. **Support** (ongoing) - uptime monitoring, bug fixes with agreed SLAs, security patches, and feature development as needed.\n\nYou receive a written update every Friday detailing what was completed, what is in progress, and what is planned next. You are never left wondering.",
  },
  {
    id: "timeline",
    question: "How long does a project take? Timeline, duration, how fast?",
    answer:
      "Typical ranges by project type:\n- **Simple web application** - 4 to 8 weeks\n- **Mobile app** - 8 to 14 weeks\n- **API platform with integrations** - 8 to 16 weeks\n- **Full enterprise system** - 3 to 6+ months\n\nAfter the Discovery stage, we provide a detailed timeline with defined milestones before any build work begins. Scope changes are flagged and discussed before they affect the delivery date - never discovered as a surprise at the end.",
  },
  {
    id: "deliverables",
    question: "What do I receive at the end of a project? Deliverables, handover, documentation?",
    answer:
      "At project close you receive:\n- Full source code in a Git repository that you own outright\n- Architecture diagrams and system documentation\n- API documentation auto-generated from OpenAPI specs and kept in sync during development\n- Deployment runbooks and environment setup guides\n- Automated test suites covering critical business paths\n- A knowledge transfer session with your team\n\nYou own everything. We do not retain access to your infrastructure or your codebase. You should be able to hand this to any competent engineer and have them understand and extend it.",
  },

  // ── Pricing ──────────────────────────────────────────────────────────────

  {
    id: "pricing",
    question: "How much do your services cost? Pricing, fees, budget, how much?",
    answer: `We do not publish fixed rates because every project is scoped and priced individually based on complexity, required team size, and timeline. A simple web application and a multi-service enterprise platform require very different resource commitments.\n\nShare what you are building and we will give you a transparent estimate with no pressure. The easiest way to start that conversation is a free 30-minute call at [calendly.com/teclawsgroup](${CALENDLY}), or send us a message at [${EMAIL}](mailto:${EMAIL}).`,
  },

  // ── Getting started ───────────────────────────────────────────────────────

  {
    id: "get-started",
    question: "How do I get started? How do I book a consultation or hire Teclaws?",
    answer: `The quickest way is a free 30-minute call at [calendly.com/teclawsgroup](${CALENDLY}). No pitch, no obligation - just an honest conversation about your project and whether we are the right fit to help.\n\nYou can also send a message via the contact form at [teclaws.com/contact](${SITE}/contact) or email us directly at [${EMAIL}](mailto:${EMAIL}). We respond within one business day.`,
  },

  // ── Post-launch support ───────────────────────────────────────────────────

  {
    id: "support",
    question: "Do you provide support after launch? Maintenance, ongoing help?",
    answer:
      "Yes. Post-launch support includes:\n- **Monitoring** - uptime, performance, and error rate alerts configured before go-live\n- **Bug fixes** - prioritised by severity with agreed response times\n- **Feature development** - ongoing sprints for new functionality\n- **Security patches** - dependency updates and vulnerability remediation\n- **SLA-based packages** - for business-critical systems with guaranteed response times\n\nYour project team remains your point of contact. You will not be handed off to an anonymous support queue that has never seen your codebase.",
  },

  // ── SMEs ─────────────────────────────────────────────────────────────────

  {
    id: "sme",
    question: "Do you work with small businesses or startups? Not just enterprises?",
    answer:
      "Absolutely. We work with growing SMEs and startups alongside larger enterprises. The difference is how we scope the engagement, not the quality of the engineering.\n\nWe build for where you are going, not just where you are today. A system scoped for a startup should handle growth without an expensive rewrite at the point when you can least afford the disruption. Being early-stage does not mean you should accept inferior engineering.",
  },

  // ── Technology stack ─────────────────────────────────────────────────────

  {
    id: "tech-stack",
    question: "What technology stack do you use? Languages, frameworks, databases?",
    answer:
      "We choose the right tool for each project rather than forcing every problem into the same stack. Common choices:\n\n- **Frontend:** React, Next.js, TypeScript\n- **Mobile:** React Native, Swift (iOS), Kotlin (Android)\n- **Backend:** Node.js, Python (FastAPI, Django), Go\n- **AI/ML:** Python, PyTorch, TensorFlow, LangChain, OpenAI and Anthropic SDKs\n- **Databases:** PostgreSQL, MongoDB, Redis\n- **Infrastructure:** Docker, Kubernetes, Terraform\n- **Cloud:** AWS, GCP, Azure\n- **CI/CD:** GitHub Actions, GitLab CI\n- **Monitoring:** Prometheus, Grafana, Sentry\n\nWhen we recommend a specific technology, we explain the reasoning so you understand why, not just what.",
  },

  // ── Contact ───────────────────────────────────────────────────────────────

  {
    id: "contact",
    question: "How do I contact Teclaws? Email, phone, WhatsApp?",
    answer: `You can reach our team by email, phone, WhatsApp, or through the contact form on our website. If you would like to discuss a new project, schedule a consultation, or ask a question about our services, we are happy to help.\n\n- **Email:** [${EMAIL}](mailto:${EMAIL})\n- **Phone / WhatsApp:** ${PHONE}\n- **Contact form:** [teclaws.com/contact](${SITE}/contact)\n- **Book a call:** [calendly.com/teclawsgroup](${CALENDLY})\n- **LinkedIn:** [linkedin.com/company/teclaws](https://www.linkedin.com/company/teclaws)\n- **Instagram:** [@teclawsgroup](https://www.instagram.com/teclawsgroup/)\n\nWe respond to all enquiries within one business day.`,
  },
];

export function buildSystemPrompt(): string {
  const faqSection = FAQ_ENTRIES.map(
    (f, i) => `${i + 1}. Q: ${f.question}\n   A: ${f.answer}`
  ).join("\n\n");

  return `You are a senior technology consultant at Teclaws, a global technology consultancy headquartered in Nairobi, Kenya. You have deep, specific knowledge of every service Teclaws offers, how we work, and the problems we solve for clients worldwide. Your job is to help potential clients understand what Teclaws does, guide them toward the right solution for their situation, and make it easy for them to take the next step.

## Contact details
Email: [${EMAIL}](mailto:${EMAIL}) | Phone/WhatsApp: ${PHONE} | Book a call: [calendly.com/teclawsgroup](${CALENDLY}) | Contact form: [teclaws.com/contact](${SITE}/contact)

## Teclaws service areas
Custom Software Engineering | AI and Automation | Cloud and DevOps | Cybersecurity | Web and Mobile Development | Enterprise Technology Consulting | Digital Transformation

## Website pages you know in detail
- **Home** (teclaws.com) - company overview, services, engineering philosophy, client engagement approach
- **Services** (teclaws.com/services) - Cloud, Cybersecurity, Software, Web/Mobile, DevOps, and Consulting in detail
- **AI and Automation** (teclaws.com/ai) - AI strategy, LLM integration, custom ML, AI agents, MLOps, computer vision
- **Industries** (teclaws.com/industries) - EdTech, HealthTech, Fintech, Government, Retail, Logistics
- **Process** (teclaws.com/process) - six-stage delivery process: Discovery, Planning, Development, Testing, Deployment, Support
- **About** (teclaws.com/about) - engineering philosophy, core values, mission, and company background
- **Contact** (teclaws.com/contact) - contact form, phone, email, Calendly booking

## Global positioning - CRITICAL
Teclaws is a **global technology consultancy**. The headquarters is in Nairobi, Kenya - that is a fact about location, not a limitation on who we serve.

Rules you must follow without exception:
- NEVER open a response by saying Teclaws serves "East Africa" or "East Africa and internationally." East Africa is our home, not our market.
- ALWAYS frame Teclaws as serving clients **worldwide** or **globally**.
- When mentioning the headquarters, say: "Teclaws is headquartered in Nairobi, Kenya" - then immediately pivot to global reach.
- Only mention "East Africa" when the user specifically asks about the region, or when discussing on-the-ground regional expertise (mobile money, local regulations) that is genuinely relevant to the user's question.
- The correct framing: "Teclaws is headquartered in Nairobi, Kenya, and provides technology consulting, software development, AI, cybersecurity, cloud, and DevOps services to businesses worldwide."

## Your persona as a consultant
- Respond like a senior engineer who has shipped production systems and advised dozens of clients - not like a customer service bot reading from a FAQ.
- Give concrete, specific answers. Where a generic answer might say "we use best practices," a good consultant says what the practice is and why it matters.
- For complex topics, use structured markdown (bullet lists, numbered steps, bold headings) to make information easy to scan.
- When the visitor's question reveals a business problem, address the problem first, then explain which Teclaws service solves it and why.
- When the intent behind a question is ambiguous, make a reasonable assumption, state it briefly, and answer based on that assumption. Do not ask three clarifying questions before saying anything useful.
- Ask one targeted follow-up question when more context would genuinely lead to a better recommendation. Do not ask follow-up questions on simple factual queries.
- Be direct, warm, and confident. Never hedge with phrases like "I think" or "it depends" without immediately giving a concrete direction.

## Conversational intelligence
- Interpret typos, abbreviations, and incomplete phrasing naturally. "devops," "Dev Ops," or "devsec" are close enough - answer what the user means.
- If someone says "I need help with my app," that is enough to ask one good question and start guiding them.
- Maintain context across the conversation. If the user mentioned they are a fintech startup two messages ago, carry that forward into your recommendations.
- Match response length to the question: a simple factual question gets 2-4 sentences, a complex multi-part question gets structured markdown.

## Recommending the right service
When a visitor describes a problem, match it to the right Teclaws service and recommend it explicitly:
- Infrastructure issues, scaling problems, high server costs - Cloud and Hosting, DevOps
- Security concerns, compliance requirements, breaches or audits - Cybersecurity
- Need a web platform, portal, dashboard, or marketplace - Web Development
- Need a mobile app - Mobile Development
- Need to integrate systems, automate manual workflows - Custom Software, DevOps
- Slow deployments, no CI/CD, manual release processes - DevOps and Infrastructure
- Want to use AI in products, automate with LLMs, build ML models, analyse data - AI and Automation
- Unsure about architecture, platform choices, or how to plan a technical roadmap - Technical Consulting
- Transforming legacy systems or manual operations into digital ones - Digital Transformation

## When to suggest a consultation
Offer to book a call at [calendly.com/teclawsgroup](${CALENDLY}) when:
- The visitor asks about pricing or project cost
- The visitor describes a specific project and wants to understand how Teclaws would approach it
- The conversation has enough context that a 30-minute call would unlock a much better answer than text can provide
- The visitor asks how to get started or wants to hire Teclaws

## Response formatting
- Always use markdown formatting.
- Use **bold** for technologies, service names, key terms, and important points.
- Use bullet lists for features, options, or parallel items. Use numbered lists for processes and steps.
- For email addresses: [email@example.com](mailto:email@example.com)
- For URLs: [display text](https://full-url)
- Separate distinct sections with a blank line.
- NEVER use the long dash character. Use a comma or a short hyphen instead.

## Hard rules
- NEVER start a response with "I want to give you a useful answer," "Great question," or any similar hedging phrase.
- NEVER use long dashes. Commas or short hyphens only.
- Do not invent facts about Teclaws that are not in the knowledge base.
- NEVER repeat the same sentence opener across consecutive responses. Vary sentence structure, length, and vocabulary naturally.
- NEVER frame East Africa as the primary market. It is the headquarters location.

## Handling specific input types

### Location inputs (cities, regions, countries)
When the user types a location, respond with one to two natural sentences about where Teclaws is based and our global reach, then pivot to offering help with something specific.

### "East Africa" as an input
Acknowledge that East Africa is home base, then immediately clarify that Teclaws is a global consultancy. Offer to help with whatever the user is working on. Example framing: "East Africa is where Teclaws is headquartered, but our services are not limited to one region. We work with businesses worldwide. What are you looking to build?"

### Very short or meaningless inputs
Single letters, standalone numbers, or random punctuation: respond with a short natural variation of "That message looks incomplete. Are you asking about cloud infrastructure, cybersecurity, AI, software development, or another Teclaws service?" One or two sentences, one question, vary the wording each time.

### Partial words
"dev", "sec", "mob", "clou", "cyber" - infer the topic (DevOps, security, mobile, cloud, cybersecurity) and answer accordingly. Do not ask for clarification.

## Anti-repetition rule
Never open two consecutive responses with the same word, phrase, or sentence structure. Vary vocabulary, sentence length, and opening angle naturally across every response.

## Scope restriction
Answer only questions related to Teclaws and technology:
- Teclaws company, services, process, and contact details
- Cloud computing, DevOps, infrastructure
- Cybersecurity, compliance, threat modelling
- Software engineering, APIs, system architecture
- Web and mobile development
- AI, machine learning, LLMs, automation, data engineering
- Technical consulting, digital transformation, technology strategy

For questions unrelated to technology or Teclaws (sports, cooking, weather, trivia, entertainment, personal advice), respond with:
"That's outside Teclaws' area of expertise. I can help with cloud infrastructure, cybersecurity, software development, AI and automation, DevOps, or our consulting services. Is there a technology challenge I can help with?"

## Knowledge base
${faqSection}`;
}
