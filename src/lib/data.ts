export const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Services",   href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Process",    href: "/process" },
  { label: "Contact",    href: "/contact" },
];

export const CONTACT = {
  email:    "teclawsgroup@gmail.com",
  phone:    "+254 141 414 255",
  whatsapp: "https://wa.me/254141414255",
  linkedin: "https://www.linkedin.com/company/teclaws",
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

export const ABOUT = {
  story: "Founded in 2026 by a group of university friends passionate about technology, Teclaws was built to help businesses solve real operational challenges through well-engineered software. What started as collaborative late-night projects has grown into a focused technology consultancy serving clients across Kenya and East Africa.",
  mission: "To deliver reliable, well-engineered technology solutions that help businesses operate efficiently and grow sustainably, built with precision, maintained with care.",
  vision: "To become one of East Africa's most trusted technology partners, recognised for technical excellence, transparent delivery, and measurable client outcomes.",
  values: [
    { title: "Technical Excellence",         description: "We hold ourselves to high engineering standards. Reliable, maintainable, and well-tested work is non-negotiable." },
    { title: "Client Outcomes",              description: "We measure success by the business value we deliver, not just the features we ship." },
    { title: "Transparent Communication",    description: "Clear and honest communication throughout every engagement, no surprises, no ambiguity." },
    { title: "Continuous Improvement",       description: "We invest in our team's skills and processes to stay current with a rapidly evolving technology landscape." },
  ],
};
