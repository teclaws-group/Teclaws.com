export const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "AI",         href: "/ai" },
  { label: "Products",   href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Process",    href: "/process" },
  { label: "Contact",    href: "/contact" },
];

export const CONTACT = {
  email:    "teclawsgroup@gmail.com",
  phone:    "+254 141 414 255",
  whatsapp: "https://wa.me/254141414255",
  facebook: "https://www.facebook.com/people/Teclaws/61574743811709/",
  linkedin: "https://www.linkedin.com/company/teclaws",
  instagram: "https://www.instagram.com/teclawsgroup/",
  calendly: "https://calendly.com/teclawsgroup",
  location: "Nairobi, Kenya",
};

export interface Service {
  title: string;
  description: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Cloud & Hosting",
    description: "Scalable cloud infrastructure and managed hosting built for performance, resilience, and cost efficiency.",
    features: ["Cloud migration & setup", "Managed hosting", "Load balancing & auto-scaling", "CDN & performance optimization"],
  },
  {
    title: "Cybersecurity",
    description: "Protect your business with security assessments, threat monitoring, and compliance implementation.",
    features: ["Security audits & assessments", "Penetration testing", "Compliance frameworks", "Incident response planning"],
  },
  {
    title: "Software Development",
    description: "Custom enterprise software built to your specification, maintainable, tested, and built to last.",
    features: ["Enterprise applications", "System integrations", "API development & design", "Legacy modernization"],
  },
  {
    title: "Web Development",
    description: "Professional web applications and platforms built for speed, accessibility, and business results.",
    features: ["Web applications & portals", "E-commerce platforms", "CMS development", "SEO & performance"],
  },
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for iOS and Android built for reliability and usability.",
    features: ["iOS & Android development", "Cross-platform (React Native)", "Offline-first architecture", "App store deployment"],
  },
  {
    title: "DevOps & Infrastructure",
    description: "Automate your delivery pipeline and manage infrastructure with confidence and precision.",
    features: ["CI/CD pipeline setup", "Docker & Kubernetes", "Infrastructure as code", "Monitoring & alerting"],
  },
  {
    title: "Technical Consulting",
    description: "Strategic technology guidance to help you make the right architecture and platform decisions.",
    features: ["Architecture review", "Technology roadmapping", "Vendor & platform assessment", "Digital transformation strategy"],
  },
];

export interface Industry {
  name: string;
  description: string;
}

export const INDUSTRIES: Industry[] = [
  { name: "Education",   description: "Learning management systems, student portals, and institutional software." },
  { name: "Healthcare",  description: "Patient management, clinic systems, and health information platforms." },
  { name: "Finance",     description: "Secure fintech platforms, payment systems, and financial dashboards." },
  { name: "Government",  description: "Citizen portals, e-government systems, and public sector platforms." },
  { name: "Retail",      description: "E-commerce, inventory management, and omnichannel retail solutions." },
  { name: "Logistics",   description: "Fleet tracking, route optimization, and supply chain management." },
  { name: "SMEs",        description: "Scalable business software tailored for growing small and medium enterprises." },
];

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
}

export const PRODUCTS: Product[] = [
  {
    name: "Neer",
    tagline: "The Complete POS & ERP for All Businesses",
    description:
      "Stop juggling disjointed systems. Seamlessly manage sales, multi-shop inventory, automated KRA eTIMS receipting, M-Pesa integrations, and staff shifts from one powerful dashboard.",
    url: "https://neer.co.ke/",
  },
];

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: "Discovery",   description: "We listen, research, and define your goals, constraints, and success criteria before writing a single line of code." },
  { step: 2, title: "Planning",    description: "We translate requirements into a clear technical roadmap, architecture plan, and project timeline." },
  { step: 3, title: "Development", description: "We build iteratively with clean, well-tested, and maintainable code, delivering progress continuously." },
  { step: 4, title: "Testing",     description: "We rigorously test for functionality, performance, security, and edge cases before any release." },
  { step: 5, title: "Deployment",  description: "We ship to production with automated pipelines, zero-downtime deploys, and full observability." },
  { step: 6, title: "Support",     description: "We provide ongoing monitoring, maintenance, and technical support to keep your product running." },
];

export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "7", label: "Industries Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Coverage" },
];

export const TECHNOLOGIES = [
  {
    category: "Cloud Platforms",
    items: ["AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Vercel"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Go", "Java", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Prometheus"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
  },
  {
    category: "Security",
    items: ["OWASP", "SOC 2", "ISO 27001", "Penetration Testing", "SIEM"],
  },
];

export const CASE_STUDIES = [
  {
    tag: "Cloud Migration",
    title: "Financial Services Platform Migrated to AWS",
    description:
      "A regional financial services firm running on aging on-premises infrastructure needed to migrate to the cloud without service disruption. We architected a phased AWS migration strategy, reducing infrastructure costs by 38% while improving availability to 99.97%.",
    outcome: "38% cost reduction, 99.97% uptime",
    industry: "Finance",
  },
  {
    tag: "Software Development",
    title: "Healthcare Patient Management System",
    description:
      "A private hospital network required a unified patient records and appointment management platform across six locations. We delivered a HIPAA-aligned system integrating billing, scheduling, and clinical notes within four months.",
    outcome: "6 facilities unified, 40% admin time saved",
    industry: "Healthcare",
  },
  {
    tag: "DevOps & Infrastructure",
    title: "E-Commerce CI/CD Overhaul",
    description:
      "A growing retail platform was experiencing slow, error-prone deployments that blocked their product team. We rebuilt their delivery pipeline with automated testing, containerised deployments, and zero-downtime releases, cutting deploy time from hours to minutes.",
    outcome: "Deploy time reduced from 3 hrs to 8 min",
    industry: "Retail",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Teclaws brought structure to a project that felt impossible. Their team communicated clearly at every stage and delivered exactly what they promised. We now have a system our staff actually want to use.",
    name: "Operations Director",
    company: "Healthcare Technology Group",
    industry: "Healthcare",
  },
  {
    quote:
      "Our AWS migration could have gone wrong in a dozen ways. Teclaws planned every step, kept downtime to zero, and reduced our monthly cloud spend significantly. I wouldn't hesitate to work with them again.",
    name: "Head of Technology",
    company: "Regional Financial Institution",
    industry: "Finance",
  },
  {
    quote:
      "What sets Teclaws apart is that they talk to us like a partner, not a vendor. They pushed back when our requirements needed rethinking and ultimately built something far better than what we originally asked for.",
    name: "Chief Executive",
    company: "Logistics Technology Company",
    industry: "Logistics",
  },
];

export const FAQ = [
  {
    question: "What types of businesses does Teclaws work with?",
    answer:
      "We work with businesses across industries including finance, healthcare, education, government, logistics, retail, and growing SMEs. Our engagements range from early-stage startups building their first product to established enterprises modernising legacy systems.",
  },
  {
    question: "Where is Teclaws based and do you work with international clients?",
    answer:
      "We are headquartered in Nairobi, Kenya, and serve clients globally. We work with international organisations across multiple markets and welcome projects from any location.",
  },
  {
    question: "How does a typical engagement begin?",
    answer:
      "Every engagement starts with a structured discovery session to understand your business objectives, current technical landscape, and constraints. From there, we produce a clear technical proposal and timeline before any work begins.",
  },
  {
    question: "Do you offer ongoing support after a project is delivered?",
    answer:
      "Yes. We offer structured post-delivery support and maintenance packages covering monitoring, updates, bug resolution, and performance optimisation. The scope is agreed during the project planning phase.",
  },
  {
    question: "How do you handle security across your deliverables?",
    answer:
      "Security is embedded from the first line of code, not bolted on at the end. Every project includes a threat-modelling phase, code-level security review, dependency auditing, and hardened deployment configurations aligned to OWASP and relevant compliance frameworks.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "Pricing depends on the scope, complexity, and timeline of each project. We provide fixed-price proposals for well-defined scopes and time-and-materials arrangements for iterative or evolving projects. Book a consultation to discuss your specific requirements.",
  },
];

export const WHY_US = [
  {
    title: "Engineering-First Culture",
    description:
      "We do not outsource. Every project is built by our in-house engineers who hold themselves to high quality standards, write maintainable code, and take ownership of outcomes.",
  },
  {
    title: "Transparent Delivery",
    description:
      "You always know where your project stands. We use structured project communication, weekly progress updates, and clear escalation paths with no surprises at the end.",
  },
  {
    title: "Security by Design",
    description:
      "Security is not a checkbox. We embed threat modelling, code review, and compliance alignment into every phase of development from discovery through deployment.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We build relationships, not just software. Our post-delivery support, honest advice, and willingness to challenge requirements set us apart from transactional vendors.",
  },
];

export const ABOUT = {
  story: "Founded in 2026 by a group of university friends passionate about technology, Teclaws was built to help businesses solve real operational challenges through well-engineered software. What started as collaborative late-night projects has grown into a focused technology consultancy serving clients across Kenya and internationally.",
  mission: "To deliver reliable, well-engineered technology solutions that help businesses operate efficiently and grow sustainably, built with precision, maintained with care.",
  vision: "To become a globally recognised technology partner, known for technical excellence, transparent delivery, and measurable client outcomes.",
  values: [
    { title: "Technical Excellence",         description: "We hold ourselves to high engineering standards. Reliable, maintainable, and well-tested work is non-negotiable." },
    { title: "Client Outcomes",              description: "We measure success by the business value we deliver, not just the features we ship." },
    { title: "Transparent Communication",    description: "Clear and honest communication throughout every engagement, no surprises, no ambiguity." },
    { title: "Continuous Improvement",       description: "We invest in our team's skills and processes to stay current with a rapidly evolving technology landscape." },
  ],
};
