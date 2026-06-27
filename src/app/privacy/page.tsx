import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy | Teclaws",
  description: "How Teclaws collects, uses, and protects your personal information.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-semibold text-primary mb-3">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how Teclaws Limited collects, uses, stores, and protects your personal information when you use our website or engage our services."
      />
      <div className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-10 text-xs text-muted">Last updated: June 2026</p>

          <Section title="1. Who We Are">
            <p>
              Teclaws Limited (&ldquo;Teclaws&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is a technology company registered and operating in Nairobi, Kenya. We provide cloud infrastructure, cybersecurity, software development, DevOps, and technical consulting services to businesses across Kenya and East Africa.
            </p>
            <p>
              Our registered contact address for data-related enquiries is: <a href="mailto:teclawsgroup@gmail.com" className="text-secondary hover:underline">teclawsgroup@gmail.com</a>.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect information in the following ways:</p>
            <p><strong className="text-foreground">Information you provide directly:</strong> When you submit our contact form, book a consultation, or communicate with us by email or phone, we collect your name, email address, phone number, company name, and the details of your enquiry.</p>
            <p><strong className="text-foreground">Information collected automatically:</strong> When you visit our website, we may collect technical information including your IP address, browser type, device type, operating system, referring URLs, pages visited, and the time and duration of your visit. This information is collected through standard server logs and analytics tools.</p>
            <p><strong className="text-foreground">Cookies and similar technologies:</strong> We use cookies to operate and improve our website. Please see our Cookie Policy for details.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your personal information to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Respond to your enquiries and provide the services you have requested</li>
              <li>Send you information relevant to a current or potential engagement</li>
              <li>Administer and improve our website and services</li>
              <li>Comply with our legal obligations</li>
              <li>Detect and prevent fraud or abuse</li>
            </ul>
            <p>We do not use your information for unsolicited marketing communications without your consent.</p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>We process your personal information on the following legal bases:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Contract:</strong> Processing necessary to fulfil a service agreement or take steps at your request prior to entering into a contract.</li>
              <li><strong className="text-foreground">Legitimate interests:</strong> Processing for our legitimate business interests, such as improving our services and communicating with potential clients, where these interests are not overridden by your rights.</li>
              <li><strong className="text-foreground">Legal obligation:</strong> Processing required to comply with applicable law.</li>
              <li><strong className="text-foreground">Consent:</strong> Where we have obtained your explicit consent, which you may withdraw at any time.</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing and Disclosure">
            <p>We do not sell, rent, or trade your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong className="text-foreground">Service providers:</strong> Trusted third-party services that help us operate our business, including email delivery, scheduling (Calendly), and analytics. These providers are bound by contractual obligations to protect your data.</li>
              <li><strong className="text-foreground">Legal authorities:</strong> Where required by law, court order, or regulatory authority.</li>
              <li><strong className="text-foreground">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </Section>

          <Section title="6. Data Retention">
            <p>We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, to maintain our business records, and to comply with our legal obligations. Client project records are typically retained for seven years. Website enquiry data is retained for up to three years unless you request earlier deletion.</p>
          </Section>

          <Section title="7. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to our legal obligations)</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:teclawsgroup@gmail.com" className="text-secondary hover:underline">teclawsgroup@gmail.com</a>. We will respond within 30 days.</p>
          </Section>

          <Section title="8. Security">
            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, disclosure, alteration, or destruction. These measures include encrypted data transmission (HTTPS), access controls, and regular security reviews. No method of transmission over the internet is completely secure; we cannot guarantee absolute security.</p>
          </Section>

          <Section title="9. Third-Party Links">
            <p>Our website may contain links to third-party websites, including LinkedIn, Instagram, Calendly, and WhatsApp. We are not responsible for the privacy practices of these services and encourage you to review their respective privacy policies.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The updated policy will be posted on this page with a revised &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.</p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <address className="not-italic">
              <p>Teclaws Limited</p>
              <p>Nairobi, Kenya</p>
              <p>Email: <a href="mailto:teclawsgroup@gmail.com" className="text-secondary hover:underline">teclawsgroup@gmail.com</a></p>
              <p>Phone: +254 141 414 255</p>
            </address>
          </Section>
        </div>
      </div>
    </>
  );
}
