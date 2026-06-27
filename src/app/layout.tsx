import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";

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
    "Teclaws delivers cloud infrastructure, cybersecurity, software development, DevOps, and technical consulting services for businesses across Kenya and East Africa.",
  keywords: [
    "Software Development Kenya",
    "Cloud Hosting Kenya",
    "Cybersecurity Nairobi",
    "DevOps Infrastructure Kenya",
    "Technology Consultancy Kenya",
    "Web Development Nairobi",
    "Mobile App Development Kenya",
    "IT Services East Africa",
    "Software Company Nairobi",
    "Enterprise Technology Kenya",
  ],
  authors: [{ name: "Teclaws" }],
  creator: "Teclaws",
  icons: {
    icon: "/the-teclaw-logo.png",
    apple: "/the-teclaw-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Teclaws",
    title: "Teclaws | Enterprise Technology Solutions",
    description:
      "Cloud, cybersecurity, software development, and infrastructure services for businesses across Kenya and East Africa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teclaws | Enterprise Technology Solutions",
    description:
      "Cloud, cybersecurity, software development, and infrastructure services for businesses across Kenya and East Africa.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Teclaws",
  url: siteUrl,
  description:
    "Teclaws is a technology company based in Nairobi, Kenya, delivering cloud infrastructure, cybersecurity, software development, and DevOps solutions for businesses across East Africa.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: ["https://www.linkedin.com/company/teclaws"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${display.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBubble />
      </body>
    </html>
  );
}
