import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service | Teclaws",
  description: "The terms and conditions governing use of Teclaws services and website.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-semibold text-primary mb-3">{title}</h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Please read these terms carefully before using our website or engaging Teclaws Limited for technology services. By accessing our website or entering into a service agreement, you agree to be bound by these terms."
      />
      <div className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-10 text-xs text-muted">Last updated: June 2026</p>

          <Section title="1. About These Terms">
            <p>
              These Terms of Service govern your use of the Teclaws website at teclaws.com (the &ldquo;Site&rdquo;) and the technology services provided by Teclaws Limited (&ldquo;Teclaws&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). Teclaws is a technology company incorporated and operating in Nairobi, Kenya.
            </p>
            <p>
              Separate service agreements or statements of work may supplement or supersede these terms for specific engagements. In the event of conflict, the specific service agreement prevails.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>By accessing this Site, you agree that you will:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use the Site only for lawful purposes and in accordance with these terms</li>
              <li>Not attempt to gain unauthorised access to any part of the Site or its infrastructure</li>
              <li>Not use the Site to transmit harmful, offensive, or unlawful content</li>
              <li>Not reproduce, distribute, or create derivative works from our content without express written permission</li>
            </ul>
            <p>We reserve the right to restrict or terminate access to the Site at our discretion and without notice for conduct that violates these terms or applicable law.</p>
          </Section>

          <Section title="3. Services">
            <p>Teclaws provides technology services including cloud infrastructure, cybersecurity, software development, web and mobile development, DevOps, and technical consulting. The specific scope, deliverables, timelines, and pricing for each engagement are governed by a separate written agreement (Statement of Work or Service Agreement) between Teclaws and the client.</p>
            <p>We reserve the right to decline or discontinue any engagement at our discretion, particularly if the requested work conflicts with applicable law or our Acceptable Use Policy.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p><strong className="text-foreground">Our content:</strong> All content on this Site, including text, graphics, logos, and design, is owned by or licensed to Teclaws and is protected by applicable intellectual property laws. You may not use our content without prior written permission.</p>
            <p><strong className="text-foreground">Client deliverables:</strong> Intellectual property rights in custom software and other deliverables developed for a client are governed by the applicable service agreement. Unless otherwise agreed in writing, upon full payment, clients receive the agreed licence or ownership rights to the custom deliverables.</p>
            <p><strong className="text-foreground">Third-party components:</strong> Deliverables may incorporate open-source software or third-party components. These are subject to their respective licences, which will be disclosed in the project documentation.</p>
          </Section>

          <Section title="5. Payment Terms">
            <p>Payment terms for service engagements are specified in the applicable service agreement. Unless otherwise agreed:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Invoices are due within 14 days of the invoice date</li>
              <li>Late payments may attract interest at a rate specified in the service agreement</li>
              <li>We reserve the right to suspend services for accounts with overdue balances</li>
            </ul>
          </Section>

          <Section title="6. Confidentiality">
            <p>Both parties agree to treat as confidential any non-public information disclosed in the course of an engagement that is designated as confidential or that a reasonable person would understand to be confidential. This obligation does not apply to information that is publicly available, independently developed, or required to be disclosed by law.</p>
          </Section>

          <Section title="7. Limitation of Liability">
            <p>To the maximum extent permitted by applicable law, Teclaws shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Site or services, including lost profits, data loss, or business interruption.</p>
            <p>Our total cumulative liability for any claims arising under a service agreement shall not exceed the total fees paid by the client to Teclaws in the three months preceding the claim, unless otherwise agreed in writing.</p>
          </Section>

          <Section title="8. Warranties and Disclaimers">
            <p>The Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied. We do not warrant that the Site will be uninterrupted, error-free, or free of harmful components.</p>
            <p>For service engagements, any warranties are specified in the applicable service agreement. We stand behind the quality of our work and will remedy material defects identified within the warranty period defined in the service agreement.</p>
          </Section>

          <Section title="9. Governing Law and Disputes">
            <p>These terms and any disputes arising from them are governed by the laws of Kenya. Any disputes that cannot be resolved informally shall be referred to the courts of Kenya, and both parties submit to the jurisdiction of those courts.</p>
            <p>We encourage you to contact us directly to resolve any concerns before pursuing formal legal action.</p>
          </Section>

          <Section title="10. Changes to These Terms">
            <p>We may update these Terms of Service from time to time. Material changes will be indicated by a revised &ldquo;Last updated&rdquo; date. Continued use of the Site after changes are posted constitutes acceptance of the revised terms.</p>
          </Section>

          <Section title="11. Contact">
            <p>If you have questions about these Terms of Service, please contact us at:</p>
            <address className="not-italic">
              <p>Teclaws Limited</p>
              <p>Nairobi, Kenya</p>
              <p>Email: <a href="mailto:teclawsgroup@gmail.com" className="text-secondary hover:underline">teclawsgroup@gmail.com</a></p>
            </address>
          </Section>
        </div>
      </div>
    </>
  );
}
