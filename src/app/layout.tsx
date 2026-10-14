import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { PageLoader } from "@/components/ui/PageLoader";
import { PostHogAnalytics } from "@/components/analytics/PostHogAnalytics";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://teclaws.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Teclaws | Enterprise Technology Solutions",
    template: "%s | Teclaws",
  },
  description:
    "Teclaws delivers cloud infrastructure, cybersecurity, software development, DevOps, and AI solutions for businesses worldwide. Enterprise-grade technology with transparent delivery.",
  keywords: [
    "Software Development",
    "Cloud Infrastructure",
    "Cybersecurity Services",
    "DevOps Engineering",
    "AI Solutions",
    "Enterprise Technology",
    "Web Development",
    "Mobile App Development",
    "Technical Consulting",
    "Digital Transformation",
    "Software Development Kenya",
    "Technology Consultancy Nairobi",
  ],
  authors: [{ name: "Teclaws" }],
  creator: "Teclaws",
  icons: {
    icon: "/the-teclaw-logo.png",
    apple: "/the-teclaw-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Teclaws",
    title: "Teclaws | Enterprise Technology Solutions",
    description:
      "Cloud, cybersecurity, software development, AI, and infrastructure services for businesses worldwide. Premium delivery, transparent pricing, measurable outcomes.",
    images: [{ url: "/the-teclaw-logo.png", width: 800, height: 800, alt: "Teclaws" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teclaws | Enterprise Technology Solutions",
    description:
      "Cloud, cybersecurity, software development, AI, and infrastructure services for businesses worldwide.",
    images: ["/the-teclaw-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large" },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Teclaws",
  url: siteUrl,
  logo: `${siteUrl}/the-teclaw-logo.png`,
  description:
    "Teclaws is a technology company based in Nairobi, delivering cloud infrastructure, cybersecurity, software development, AI, and DevOps solutions for businesses worldwide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-141-414-255",
    contactType: "customer service",
    email: "teclawsgroup@gmail.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/teclaws",
    "https://www.instagram.com/teclawsgroup/",
  ],
  foundingDate: "2026",
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${display.variable} h-full`}>
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="flex min-h-full flex-col antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBubble />
        <PostHogAnalytics />
      </body>
    </html>
  );
}
