import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy | Teclaws",
  description: "How Teclaws uses cookies and similar technologies on our website.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-semibold text-primary mb-3">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

type CookieRow = { name: string; type: string; purpose: string; duration: string };

function CookieTable({ cookies }: { cookies: CookieRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl ring-1 ring-border mt-4">
      <table className="w-full text-xs">
        <thead className="bg-background">
          <tr>
            {["Name", "Type", "Purpose", "Duration"].map((h) => (
              <th key={h} className="px-4 py-3 text-left font-semibold text-primary border-b border-border">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-border">
          {cookies.map((row) => (
            <tr key={row.name}>
              <td className="px-4 py-3 font-mono text-foreground/70">{row.name}</td>
              <td className="px-4 py-3 text-muted">{row.type}</td>
              <td className="px-4 py-3 text-muted">{row.purpose}</td>
              <td className="px-4 py-3 text-muted whitespace-nowrap">{row.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const COOKIES: CookieRow[] = [
  { name: "_next_session", type: "Essential", purpose: "Maintains your session state across page navigation", duration: "Session" },
  { name: "_ga", type: "Analytics", purpose: "Google Analytics: distinguishes users for traffic measurement", duration: "2 years" },
  { name: "_ga_*", type: "Analytics", purpose: "Google Analytics: stores and counts page view sessions", duration: "2 years" },
  { name: "calendly_*", type: "Functional", purpose: "Calendly booking widget, enables consultation scheduling", duration: "Session / 30 days" },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description="This policy explains how Teclaws Limited uses cookies and similar tracking technologies on our website and what choices you have."
      />
      <div className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-10 text-xs text-muted">Last updated: June 2026</p>

          <Section title="1. What Are Cookies?">
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow the site to remember information about your visit — such as your preferred language or session state — making your next visit easier and the site more useful to you.
            </p>
            <p>
              In addition to cookies, we may use similar technologies such as web beacons, pixel tags, and local storage for similar purposes. All of these are referred to collectively as &ldquo;cookies&rdquo; in this policy.
            </p>
          </Section>

          <Section title="2. How We Use Cookies">
            <p>We use cookies for the following purposes:</p>
            <p><strong className="text-foreground">Essential cookies</strong> are necessary for the website to function and cannot be disabled. They include session management and security functions.</p>
            <p><strong className="text-foreground">Analytics cookies</strong> help us understand how visitors interact with our website by collecting and reporting information anonymously. We use Google Analytics for this purpose. This data helps us improve the site&apos;s content and performance.</p>
            <p><strong className="text-foreground">Functional cookies</strong> enable enhanced functionality such as the Calendly consultation booking widget embedded on our site.</p>
          </Section>

          <Section title="3. Cookies We Use">
            <p>The following cookies may be set when you visit our website:</p>
            <CookieTable cookies={COOKIES} />
          </Section>

          <Section title="4. Third-Party Cookies">
            <p>Some cookies on our site are placed by third-party services we use. These include:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Google Analytics:</strong> Used to measure website traffic and user behaviour. Google&apos;s privacy policy applies to this data. You can opt out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
              <li><strong className="text-foreground">Calendly:</strong> Our consultation booking widget may set cookies when loaded. Calendly&apos;s privacy policy governs this data.</li>
            </ul>
            <p>We do not control cookies set by third-party services and are not responsible for their content or privacy practices.</p>
          </Section>

          <Section title="5. Managing Your Cookie Preferences">
            <p>You can control and manage cookies in several ways:</p>
            <p><strong className="text-foreground">Browser settings:</strong> Most browsers allow you to refuse or delete cookies through their settings. Please note that disabling essential cookies may affect the functionality of our website. Refer to your browser&apos;s help documentation for instructions.</p>
            <p><strong className="text-foreground">Opt-out tools:</strong> For analytics cookies, you may use the Google Analytics opt-out tool linked above.</p>
            <p>Withdrawing your consent to non-essential cookies will not affect the lawfulness of any processing carried out prior to your withdrawal.</p>
          </Section>

          <Section title="6. Changes to This Policy">
            <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed. The &ldquo;Last updated&rdquo; date at the top indicates when this policy was last revised.</p>
          </Section>

          <Section title="7. Contact Us">
            <p>If you have questions about our use of cookies, please contact us at:</p>
            <address className="not-italic">
              <p>Teclaws Limited, Nairobi, Kenya</p>
              <p>Email: <a href="mailto:teclawsgroup@gmail.com" className="text-secondary hover:underline">teclawsgroup@gmail.com</a></p>
            </address>
          </Section>
        </div>
      </div>
    </>
  );
}
