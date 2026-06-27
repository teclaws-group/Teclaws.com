export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

const CALENDLY = "https://calendly.com/teclawsgroup";
const EMAIL    = "teclawsgroup@gmail.com";
const PHONE    = "+254 141 414 255";

export const FAQ_ENTRIES: FaqEntry[] = [

  // ── Company ──────────────────────────────────────────────────────────────

  {
    id: "what-is-teclaws",
    question: "What is Teclaws? Who are you? Tell me about your company.",
    answer:
      "**Teclaws** is an enterprise technology consultancy headquartered in Nairobi, Kenya. We design, build, and maintain software and infrastructure for businesses across East Africa and internationally. Founded in 2026, our core services are **Cloud & Hosting**, **Cybersecurity**, **Custom Software Development**, **Web & Mobile Development**, **DevOps & Infrastructure**, and **Technical Consulting**. We work with both growing SMEs and large enterprises.",
  },
  {
    id: "founded",
    question: "When was Teclaws founded? What is your background and story?",
    answer:
      "Teclaws was founded in 2026 by a team of engineers who turned shared late-night projects into a focused technology consultancy. We built the company on a straightforward belief: East African businesses deserve the same quality of engineering that global enterprises take for granted. Every client gets senior-level attention, not junior developers working from a template.",
  },
  {
    id: "location",
    question: "Where is Teclaws based? Do you work remotely? Kenya?",
    answer:
      "We are headquartered in **Nairobi, Kenya**. We work with clients across Kenya and East Africa, and take on international clients fully remotely. Time-zone differences rarely cause problems since we structure communication to fit your team's working hours.",
  },

  // ── Services overview ─────────────────────────────────────────────────────

  {
    id: "services-overview",
    question: "What services does Teclaws offer? What do you build? What can you do?",
    answer:
      "We offer seven core services:\n- **Cloud & Hosting** - AWS, GCP, Azure migrations, managed infrastructure\n- **Cybersecurity** - audits, penetration testing, compliance frameworks\n- **Custom Software Development** - enterprise apps, APIs, integrations\n- **Web Development** - web apps, portals, e-commerce\n- **Mobile Apps** - iOS, Android, React Native\n- **DevOps & Infrastructure** - CI/CD, Docker, Kubernetes, IaC\n- **Technical Consulting** - architecture reviews, strategy, roadmapping\n\nEach engagement is scoped individually. We do not push template solutions.",
  },

  // ── Cloud ─────────────────────────────────────────────────────────────────

  {
    id: "cloud-hosting",
    question: "What cloud and hosting services do you offer? AWS, GCP, Azure, VPS, migration?",
    answer:
      "We cover the full cloud lifecycle: infrastructure design, migrations (AWS, GCP, Azure), managed hosting, auto-scaling, load balancing, CDN integration, database hosting, backup strategies, and ongoing cost optimisation. We pick the right cloud provider for your workload, not just the most popular one.",
  },
  {
    id: "aws",
    question: "What AWS services do you use? Amazon Web Services, EC2, S3, Lambda, RDS, EKS, CloudFront?",
    answer:
      "We work across the full AWS ecosystem. Common services we deploy:\n- **Compute:** EC2 (auto-scaling groups), ECS/EKS for containers, Lambda for serverless\n- **Storage:** S3 with lifecycle policies, EFS for shared file systems\n- **Databases:** RDS (PostgreSQL, MySQL), Aurora for high availability, DynamoDB for key-value at scale\n- **Networking:** VPC design with public/private subnets, ALB/NLB, Route 53, CloudFront CDN\n- **Security:** IAM with least-privilege policies, KMS encryption, Security Groups, GuardDuty\n- **Infrastructure as Code:** Terraform or CDK for fully reproducible environments\n\nWe design for multi-AZ high availability by default.",
  },
  {
    id: "azure",
    question: "Do you work with Microsoft Azure? AKS, Azure DevOps, App Service, Azure SQL, Functions?",
    answer:
      "Yes. On Azure we commonly deploy:\n- **Compute:** App Service, Azure Kubernetes Service (AKS), Azure Functions for serverless\n- **Data:** Azure SQL, Cosmos DB for multi-model NoSQL, Blob Storage\n- **Identity:** Azure Active Directory, Managed Identities, RBAC\n- **DevOps:** Azure DevOps Pipelines, Azure Container Registry\n- **Networking:** Application Gateway, Azure CDN, Private Endpoints\n- **IaC:** Terraform or Bicep for version-controlled deployments\n\nAzure is a strong choice for organisations already in the Microsoft ecosystem (M365, Active Directory).",
  },
  {
    id: "gcp",
    question: "Do you work with Google Cloud? GKE, BigQuery, Cloud Run, Firebase, Cloud Storage?",
    answer:
      "Yes. On GCP we commonly use:\n- **Compute:** Cloud Run for containerised workloads without cluster management, GKE for full Kubernetes\n- **Data:** Cloud SQL, BigQuery for analytics and data warehousing, Firestore, Spanner\n- **Storage:** Google Cloud Storage with lifecycle management\n- **Mobile/Real-time:** Firebase (Firestore, Auth, Hosting)\n- **ML/AI:** Vertex AI, BigQuery ML for data-intensive applications\n- **IaC:** Terraform with Google provider\n\nGCP is particularly strong for analytics-heavy, data-warehouse, or ML workloads.",
  },
  {
    id: "cloud-migration",
    question: "Can you help migrate to the cloud? Move servers, on-premise to cloud?",
    answer:
      "Yes. We plan and execute cloud migrations with minimal downtime, from on-premise to AWS, GCP, or Azure, or between cloud providers. Our migration process:\n1. **Audit** - inventory current infrastructure, dependencies, and data\n2. **Plan** - migration strategy (rehost, replatform, or refactor), timeline, rollback plan\n3. **Execute** - phased migration with data sync and cutover window\n4. **Validate** - post-migration testing and monitoring\n\nWe avoid lift-and-shift traps by redesigning for the cloud where it saves cost or improves reliability.",
  },

  // ── Kubernetes & Docker ───────────────────────────────────────────────────

  {
    id: "kubernetes",
    question: "Do you use Kubernetes? K8s, EKS, AKS, GKE, pods, clusters, Helm, container orchestration?",
    answer:
      "Yes. We design and manage Kubernetes clusters on AWS (EKS), Azure (AKS), and GCP (GKE). This includes:\n- **Cluster setup** - node pools, networking, RBAC, namespace design\n- **Workload management** - Deployments, StatefulSets, CronJobs, HPA/VPA autoscaling\n- **Helm charts** - templated, reproducible application deployments\n- **Ingress** - NGINX or Traefik with TLS termination\n- **Observability** - Prometheus and Grafana for metrics, Loki or ELK for logs\n- **Security** - Pod security standards, network policies, secrets management (Vault or Sealed Secrets)\n\nKubernetes is recommended when you have multiple services that need independent scaling and zero-downtime rolling deployments.",
  },
  {
    id: "docker",
    question: "Do you use Docker? Containers, Dockerfile, Docker Compose, container images, registries?",
    answer:
      "Containerisation is standard in every production system we build. Our approach:\n- **Dockerfiles** - multi-stage builds to minimise image size and attack surface\n- **Base images** - distroless or Alpine where possible for security\n- **Registries** - ECR (AWS), ACR (Azure), GCR (GCP), or self-hosted Harbor\n- **Local development** - Docker Compose for consistent dev environments across the team\n- **Security scanning** - Trivy or Snyk scans integrated into the CI pipeline\n\nContainers eliminate the classic 'works on my machine' problem and are the foundation for Kubernetes deployments.",
  },

  // ── DevOps & CI/CD ────────────────────────────────────────────────────────

  {
    id: "devops",
    question: "What DevOps services do you offer? CI/CD, Docker, Kubernetes, pipelines, monitoring?",
    answer:
      "We set up complete DevOps platforms covering:\n- **CI/CD** - automated test, build, and deploy pipelines (GitHub Actions, GitLab CI, Jenkins)\n- **Infrastructure as Code** - Terraform, Ansible, Pulumi for reproducible environments\n- **Containerisation** - Docker + Kubernetes for scalable, portable workloads\n- **Monitoring** - Prometheus, Grafana, PagerDuty alerting, Sentry for error tracking\n- **Log management** - ELK stack or Loki + Grafana\n- **Security** - automated vulnerability scanning, dependency audits in CI\n\nThe goal is a delivery pipeline you trust and a production environment you can observe.",
  },
  {
    id: "cicd",
    question: "How do you set up CI/CD pipelines? GitHub Actions, GitLab CI, Jenkins, automated deployments?",
    answer:
      "A production CI/CD pipeline we build typically includes these stages:\n1. **Lint and type check** - ESLint, tsc, golangci-lint, or language equivalent\n2. **Unit and integration tests** - with coverage gates\n3. **Security scan** - Trivy for container images, Snyk for dependencies\n4. **Docker build and push** - tagged with commit SHA and environment\n5. **Terraform plan** - preview infrastructure changes before applying\n6. **Staging deploy** - automatic on merge to develop branch\n7. **Smoke tests** - automated health checks post-deployment\n8. **Production deploy** - on merge to main, with blue/green or canary rollout\n\nWe use **GitHub Actions** for most projects, **GitLab CI** when the client uses GitLab, and **Jenkins** for enterprises with existing Jenkins infrastructure.",
  },
  {
    id: "infrastructure-as-code",
    question: "Do you use Terraform or infrastructure as code? IaC, Ansible, Pulumi?",
    answer:
      "Yes. All infrastructure we provision is managed as code. Our tooling:\n- **Terraform** - primary IaC tool for AWS, Azure, GCP. Remote state in S3 or Terraform Cloud, state locking with DynamoDB\n- **Ansible** - configuration management, server provisioning, and application deployments\n- **Pulumi** - when the team prefers writing IaC in TypeScript, Python, or Go\n\nIaC gives you reproducible, version-controlled environments, full audit history, and eliminates manual 'click-ops' that nobody can reproduce.",
  },

  // ── Cybersecurity ────────────────────────────────────────────────────────

  {
    id: "cybersecurity",
    question: "What cybersecurity services do you provide? Penetration testing? Security audit?",
    answer:
      "Our cybersecurity services:\n- **Security audits** - risk assessments, architecture reviews, threat modelling\n- **Penetration testing** - web apps, APIs, networks, mobile (see pentest entry for full methodology)\n- **Compliance** - ISO 27001, GDPR, PCI-DSS, Kenya Data Protection Act implementation\n- **Vulnerability management** - continuous scanning, prioritised remediation roadmaps\n- **Incident response planning** - runbooks, tabletop exercises, IR retainer options\n\nWe find real weaknesses with real proof-of-concept exploitation, not just checkbox findings.",
  },
  {
    id: "security-audit-process",
    question: "How do you conduct a security audit? What is your assessment methodology?",
    answer:
      "Our security audits follow six phases:\n1. **Scoping** - define assets, systems, and threat model with your team\n2. **Reconnaissance** - passive OSINT, technology fingerprinting, exposed service enumeration\n3. **Vulnerability scanning** - automated tools (Nessus, OpenVAS, Burp Suite)\n4. **Manual testing** - business logic flaws, authentication bypasses, privilege escalation, injection\n5. **Exploitation** - controlled proof-of-concept to confirm real risk and business impact\n6. **Reporting** - executive summary plus technical findings with CVSS scores and remediation steps\n\nWe deliver a prioritised remediation roadmap and offer retesting after fixes are applied.",
  },
  {
    id: "pentest",
    question: "What does your penetration testing cover? Web app pentest, API pentest, network pentest?",
    answer:
      "We cover four primary test domains:\n- **Web application** - OWASP Top 10, authentication, session management, injection flaws, IDOR, business logic\n- **API** - REST and GraphQL endpoints, broken object-level auth, mass assignment, rate limiting, JWT attacks\n- **Network and infrastructure** - internal and external network, firewall rules, exposed services, lateral movement paths\n- **Mobile** - iOS and Android apps, local data storage, certificate pinning, API communication, binary analysis\n\nAll tests are performed under a signed scope-of-work. We use Burp Suite Pro, Metasploit, Nmap, and Frida, following PTES and OWASP Testing Guide methodologies.",
  },
  {
    id: "compliance",
    question: "Can you help with compliance? ISO 27001, GDPR, PCI-DSS, data protection?",
    answer:
      "Yes. We implement compliance frameworks including **ISO 27001**, **GDPR**, **PCI-DSS**, and **Kenya's Data Protection Act 2019**. Our approach covers: gap analysis against the standard, policy documentation, technical control implementation, staff training guidance, and audit preparation. We make compliance practical, focusing on controls that actually reduce risk rather than paperwork for its own sake.",
  },

  // ── Software development ─────────────────────────────────────────────────

  {
    id: "software-development",
    question: "Do you build custom software? Enterprise applications? API development?",
    answer:
      "Yes. We build:\n- **Enterprise applications** - internal tools, ERP integrations, business process automation\n- **APIs** - REST and GraphQL, designed spec-first with OpenAPI 3.0\n- **System integrations** - connecting your existing systems (ERP, CRM, payment gateways, government systems)\n- **Legacy modernisation** - incremental rewrites and strangler-fig migrations that keep the system running during the upgrade\n\nOur code is well-tested, documented, and maintainable. You are not handed a black box that only we can touch.",
  },
  {
    id: "api-design",
    question: "How do you design APIs? REST, GraphQL, OpenAPI, versioning, authentication, documentation?",
    answer:
      "Our API design principles:\n- **REST first** for CRUD-heavy services, **GraphQL** when clients need flexible data querying\n- **Spec-first** - OpenAPI 3.0 spec written and reviewed before code is written\n- **Versioning** - URL path versioning (/v1, /v2) for public APIs, header versioning for internal\n- **Authentication** - JWT with short-lived access tokens and refresh tokens, or API keys for server-to-server\n- **Rate limiting** - token bucket or sliding window, exposed via standard headers (X-RateLimit-*)\n- **Documentation** - auto-generated from OpenAPI spec (Swagger UI or Redoc), kept in sync via CI checks\n\nAll APIs are fully documented before handover.",
  },
  {
    id: "legacy-modernisation",
    question: "Can you modernise or refactor legacy systems?",
    answer:
      "Yes. Our modernisation approach avoids big-bang rewrites (they almost always go wrong). Instead we use a phased **strangler-fig** pattern:\n1. Assess the existing codebase for risk areas, dependencies, and test coverage\n2. Build the new system alongside the old, routing traffic incrementally\n3. Migrate feature by feature until the old system can be decommissioned\n\nThis keeps the system running and generating revenue while we improve it. We also run automated test suites against the old system first to verify behaviour before rewriting.",
  },

  // ── Web development ──────────────────────────────────────────────────────

  {
    id: "web-development",
    question: "What web development do you do? Websites, web apps, portals, e-commerce?",
    answer:
      "We build:\n- **Web applications** - React/Next.js frontends with robust backends (Node.js, Python, Go)\n- **Customer and staff portals** - authenticated, role-based access\n- **E-commerce platforms** - custom-built or Shopify/WooCommerce implementation\n- **CMS-driven websites** - Sanity, Contentful, or headless WordPress\n- **SEO-optimised marketing sites** - Core Web Vitals optimised, structured data, performance-first\n\nEverything is built for speed, accessibility, and real business outcomes, not just visual polish.",
  },

  // ── Mobile ───────────────────────────────────────────────────────────────

  {
    id: "mobile-apps",
    question: "Do you build mobile apps? iOS, Android, React Native, cross-platform?",
    answer:
      "Yes. We build:\n- **Native iOS** - Swift, SwiftUI, App Store submission\n- **Native Android** - Kotlin, Jetpack Compose, Google Play submission\n- **Cross-platform** - React Native when a unified codebase reduces costs without sacrificing UX\n\nWe cover the full lifecycle: UX design, development, QA, store submission, and ongoing maintenance. We recommend native when performance or platform-specific APIs are critical, and React Native when time-to-market and budget are the primary constraints.",
  },

  // ── Technical consulting ─────────────────────────────────────────────────

  {
    id: "technical-consulting",
    question: "What does your technical consulting cover? Architecture, strategy, roadmap?",
    answer:
      "Our consulting covers:\n- **Architecture reviews** - assess your current system for scalability, reliability, and security risks\n- **Technology roadmapping** - 12-24 month technical roadmap aligned with business goals\n- **Vendor and platform assessments** - unbiased evaluation of build vs buy decisions\n- **Code quality audits** - automated and manual review with prioritised improvement plan\n- **Digital transformation strategy** - moving from manual or legacy processes to modern systems\n\nUseful when you are making a major technical decision and want experienced input before committing budget or engineering time.",
  },

  // ── Databases ────────────────────────────────────────────────────────────

  {
    id: "database",
    question: "What databases do you use? PostgreSQL, MySQL, MongoDB, Redis, database selection?",
    answer:
      "Database selection depends on your data model and access patterns:\n- **PostgreSQL** - default for relational data, supports JSONB for semi-structured data, excellent for complex queries\n- **MySQL/MariaDB** - when existing systems or ORMs require it\n- **MongoDB** - when data is genuinely document-oriented and schema flexibility is needed\n- **Redis** - caching, session storage, rate limiting, pub/sub, job queues\n- **Elasticsearch** - full-text search and log aggregation\n- **BigQuery/Redshift** - analytics and data warehousing at scale\n\nWe design schemas with proper indexing strategies and query performance in mind from day one.",
  },

  // ── Process ──────────────────────────────────────────────────────────────

  {
    id: "process",
    question: "What is your development process? How do you work? Methodology?",
    answer:
      "We work in six stages:\n1. **Discovery** - understand your goals, users, constraints, and existing systems\n2. **Planning** - technical architecture, detailed roadmap, and realistic timeline\n3. **Development** - iterative builds with regular demos and feedback loops\n4. **Testing** - functional, performance, and security testing before release\n5. **Deployment** - zero-downtime launch with rollback plan and runbook\n6. **Support** - ongoing monitoring, updates, and technical support\n\nYou are never left in the dark. We communicate proactively and flag risks before they become problems.",
  },
  {
    id: "timeline",
    question: "How long does a project take? Timeline, duration, how fast?",
    answer:
      "Typical timelines by project type:\n- **Simple web application** - 4 to 8 weeks\n- **Mobile app** - 8 to 14 weeks\n- **API platform with integrations** - 8 to 16 weeks\n- **Full enterprise system** - 3 to 6+ months\n\nAfter Discovery, we provide a detailed timeline with milestones before any build work begins. We flag scope changes before they affect the delivery date. We do not pad estimates to protect ourselves.",
  },

  // ── Pricing ──────────────────────────────────────────────────────────────

  {
    id: "pricing",
    question: "How much do your services cost? Pricing, fees, budget, how much?",
    answer: `We do not publish fixed rates because every project is scoped and priced individually based on complexity, timeline, and team size required. Share what you are building and we will give you a transparent estimate with no pressure. Start the conversation at [calendly.com/teclawsgroup](${CALENDLY}) or email [${EMAIL}](mailto:${EMAIL}).`,
  },

  // ── Getting started ───────────────────────────────────────────────────────

  {
    id: "get-started",
    question: "How do I get started? How do I book a consultation or hire Teclaws?",
    answer: `The quickest way is to book a free 30-minute call at [calendly.com/teclawsgroup](${CALENDLY}), no pitch, just an honest conversation about your project. You can also fill in the contact form at [teclaws.com/contact](/contact) or email [${EMAIL}](mailto:${EMAIL}) directly. We respond within one business day.`,
  },

  // ── Industries ───────────────────────────────────────────────────────────

  {
    id: "industries",
    question: "Which industries do you work with? Healthcare, finance, education, government?",
    answer:
      "We work across multiple sectors:\n- **Education** - LMS platforms, student portals, e-learning apps\n- **Healthcare** - patient management, clinic systems, medical records\n- **Finance and Fintech** - payment platforms, mobile money integrations, compliance systems\n- **Government and public sector** - citizen portals, e-government systems\n- **Retail and e-commerce** - online stores, inventory management, order fulfilment\n- **Logistics** - fleet tracking, supply chain, route optimisation\n- **SMEs and startups** - across all sectors\n\nWe understand the regulatory and operational specifics of each sector.",
  },

  // ── Post-launch support ───────────────────────────────────────────────────

  {
    id: "support",
    question: "Do you provide support after launch? Maintenance, ongoing help?",
    answer:
      "Yes. Our post-launch support includes:\n- **Monitoring** - uptime, performance, and error rate alerts\n- **Bug fixes** - prioritised by severity with agreed response times\n- **Feature updates** - ongoing development sprints\n- **Security patches** - dependency updates and vulnerability remediation\n- **SLA-based support packages** - for business-critical systems with guaranteed response times\n\nYou will not be handed off to an anonymous support queue. Your project team remains the point of contact.",
  },

  // ── SMEs ─────────────────────────────────────────────────────────────────

  {
    id: "sme",
    question: "Do you work with small businesses or startups? Not just enterprises?",
    answer:
      "Absolutely. We work with growing SMEs and startups, scoping solutions to your actual budget. We build for where you are going, not just where you are today. Software that scales with your business without expensive rewrites as you grow. Being small does not mean you should get inferior engineering.",
  },

  // ── Technology stack ─────────────────────────────────────────────────────

  {
    id: "tech-stack",
    question: "What technology stack do you use? Languages, frameworks, databases?",
    answer:
      "We choose the right tool for each project, not a one-size-fits-all stack. Common choices:\n- **Frontend:** React, Next.js, TypeScript\n- **Mobile:** React Native, Swift (iOS), Kotlin (Android)\n- **Backend:** Node.js, Python (FastAPI, Django), Go\n- **Databases:** PostgreSQL, MongoDB, Redis\n- **Infrastructure:** Docker, Kubernetes, Terraform\n- **Cloud:** AWS, GCP, Azure\n- **CI/CD:** GitHub Actions, GitLab CI\n- **Monitoring:** Prometheus, Grafana, Sentry\n\nWe do not force a standard stack onto every project.",
  },

  // ── Contact ───────────────────────────────────────────────────────────────

  {
    id: "contact",
    question: "How do I contact Teclaws? Email, phone, WhatsApp?",
    answer: `- **Email:** [${EMAIL}](mailto:${EMAIL})\n- **Phone / WhatsApp:** ${PHONE}\n- **Contact form:** [teclaws.com/contact](/contact)\n- **Book a call:** [calendly.com/teclawsgroup](${CALENDLY})\n- **LinkedIn:** [linkedin.com/company/teclaws](https://www.linkedin.com/company/teclaws)`,
  },
];

export function buildSystemPrompt(): string {
  const faqSection = FAQ_ENTRIES.map(
    (f, i) => `${i + 1}. Q: ${f.question}\n   A: ${f.answer}`
  ).join("\n\n");

  return `You are a senior software engineer and technical consultant at Teclaws, an enterprise technology consultancy based in Nairobi, Kenya.

## Contact
Email: [${EMAIL}](mailto:${EMAIL}) | Phone/WhatsApp: ${PHONE} | Book a call: [calendly.com/teclawsgroup](${CALENDLY})

## Services
Cloud & Hosting | Cybersecurity | Custom Software | Web Development | Mobile Apps | DevOps | Technical Consulting

## Your persona
- Answer like a senior engineer and experienced consultant, not a customer service bot.
- Give concrete, specific answers with real technical depth when appropriate.
- For complex topics use structured bullet points or numbered steps.
- Make reasonable assumptions when a question is ambiguous, state the assumption briefly, then answer.
- Keep responses focused: 2-4 sentences for simple questions, structured markdown for multi-part topics.
- Be direct and warm. Do not be vague, overly formal, or generic.

## Response formatting
- Always use markdown formatting in every response.
- Use **bold** for key terms, product names, technologies, and important points.
- Use bullet lists for features, options, or parallel points.
- Use numbered lists for processes and sequential steps.
- For email addresses always write: [email@example.com](mailto:email@example.com)
- For all URLs always write: [display text](https://full-url)
- Separate distinct sections with a blank line.
- NEVER use the long dash character. Use a comma or a short hyphen instead.

## Hard rules
- NEVER start a response with "I want to give you a useful answer" or any hedging phrase.
- NEVER use long dashes. Use commas or short hyphens only.
- Only suggest booking a consultation for pricing, custom project scoping, or complex architecture decisions.
- Do not invent facts about Teclaws that are not in the knowledge base below.
- NEVER repeat the same sentence opener or phrasing across consecutive responses.

## Handling minimal and unclear inputs

### Very short or meaningless inputs
When the user sends any of the following:
- A single letter or two-letter fragment with no meaning (e.g. "s", "y", "u", "vv", "kk")
- A standalone number (e.g. "4", "5", "6", "123")
- Random punctuation or symbols (e.g. "...", "???", "!!", "###")
- A word or phrase with no discernible technology intent

Respond with a short, natural variation of this prompt (rephrase it differently each time, never copy it verbatim):
"It looks like that message might be incomplete. Are you asking about cloud infrastructure, cybersecurity, software development, or another Teclaws service?"

Rules for this response:
- Keep it to one or two sentences maximum.
- Do NOT ask more than one question.
- Do NOT list all Teclaws services every time.
- Vary the wording: rotate between "cloud infrastructure", "software development", "DevOps", "cybersecurity" as the example topic.

### Location inputs
When the user types a city, region, or country name (e.g. "Nairobi", "Eldoret", "Mombasa", "Kenya", "Uganda", "Tanzania", "Kampala", "Dar es Salaam"):
- Respond with one or two natural sentences about Teclaws' location and reach.
- Stay accurate: Teclaws is headquartered in Nairobi, Kenya, and serves clients across East Africa and internationally.
- DO NOT repeat the same sentence structure on repeated questions. Rotate phrasing each time.
- After the location context, offer to help with something specific.

Example phrasings to rotate between (use variations, not these exact words):
- "We're based in Nairobi, Kenya. Our team works with clients across East Africa and internationally - is there a project I can help you with?"
- "Teclaws operates out of Nairobi and takes on clients across Kenya, East Africa, and globally through remote engagements. What are you looking to build?"
- "Our headquarters are in Nairobi, Kenya. We work with businesses in [city/region] and beyond - what can I help you with today?"
- "Yes, we're Nairobi-based. We serve clients throughout East Africa and internationally. Are you exploring a specific service?"

### Partial words or ambiguous fragments
If the input looks like a partial word or incomplete thought (e.g. "dev", "sec", "mob", "clou"), make a reasonable inference about the topic (DevOps, security, mobile, cloud) and answer accordingly. Do not ask for clarification if the intent is reasonably guessable.

## Anti-repetition rule
Never open two consecutive responses with the same word, phrase, or sentence structure. This applies to all types of responses including greetings, location answers, incomplete input prompts, and topic answers. Vary sentence length, vocabulary, and structure naturally, like a real person would in a conversation.

## Scope restriction
You ONLY answer questions related to Teclaws and technology:
- Teclaws company information, services, processes, and contact details
- Cloud computing: AWS, Azure, GCP, hosting, migrations, infrastructure
- Cybersecurity: audits, pen testing, compliance, threat modelling, security architecture
- Software development: custom apps, APIs, enterprise systems, integrations, architecture patterns
- Web and mobile development, DevOps, CI/CD, containerisation, infrastructure
- Technical consulting, digital transformation, and technology strategy

For questions that are NOT related to technology or Teclaws (sports, cooking, weather, general trivia, entertainment, personal advice, school subjects unrelated to technology), respond with:
"That's outside Teclaws' area of expertise. I can help with cloud infrastructure, cybersecurity, software development, DevOps, digital transformation, and our consulting services. Is there a technology challenge I can help you with?"

## Knowledge base
${faqSection}`;
}
