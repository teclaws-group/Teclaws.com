import type { MetadataRoute } from "next";

const siteUrl = "https://teclaws.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,                   lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/services`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/industries`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/process`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/privacy`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteUrl}/terms`,        lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteUrl}/cookies`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];
}
