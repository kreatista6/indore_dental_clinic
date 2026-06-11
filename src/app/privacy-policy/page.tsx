import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div>
      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] space-y-6">

            <Section title="1. Introduction">
              <p>
                {CLINIC_NAME} (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, phone number, email address, and any other details you provide through our appointment form or contact forms.</li>
                <li><strong>Health Information:</strong> Details about your dental concerns, treatment preferences, and medical history that you voluntarily share with us.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and browsing behaviour collected through cookies and similar technologies.</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process and confirm appointment requests.</li>
                <li>To communicate with you regarding your appointments, treatment options, and follow-up care.</li>
                <li>To send you relevant health information, promotional materials, and clinic updates — only with your explicit consent.</li>
                <li>To improve our website, services, and patient experience.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </Section>

            <Section title="4. Legal Basis for Processing (GDPR)">
              <p>
                If you are located in the European Economic Area (EEA), our legal basis for collecting and using your personal information depends on the data concerned and the context in which we collect it. We rely on the following legal bases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consent:</strong> You have given us explicit permission to process your data for a specific purpose (e.g., sending marketing communications).</li>
                <li><strong>Contractual Necessity:</strong> Processing is necessary for the performance of a service you have requested (e.g., booking an appointment).</li>
                <li><strong>Legal Obligation:</strong> We are required to process your data to comply with applicable laws.</li>
                <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, provided it does not override your rights.</li>
              </ul>
            </Section>

            <Section title="5. Data Sharing and Disclosure">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers (e.g., email delivery services like Resend) who assist us in operating our website and serving our patients, under strict confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> If required by law or in response to valid legal requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity.</li>
              </ul>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including for satisfying any legal, accounting, or reporting requirements. Appointment-related data is typically retained for a period of 3 years from your last interaction with us.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data, subject to certain exceptions.</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your personal data.</li>
                <li><strong>Data Portability:</strong> Request transfer of your data to another service provider.</li>
                <li><strong>Objection:</strong> Object to the processing of your personal data for direct marketing purposes.</li>
                <li><strong>Withdrawal of Consent:</strong> Withdraw your consent at any time where we rely on consent to process your data.</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at <a href={`mailto:${CLINIC_EMAIL}`} className="text-[var(--color-primary)] underline">{CLINIC_EMAIL}</a>.
              </p>
            </Section>

            <Section title="8. Cookies">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. We use Google Analytics to understand how visitors interact with our website; this data is anonymised where possible.
              </p>
            </Section>

            <Section title="9. Data Security">
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. Our website uses HTTPS encryption, and access to patient data is restricted to authorised personnel only.
              </p>
            </Section>

            <Section title="10. Third-Party Links">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </Section>

            <Section title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last updated&quot; date. We encourage you to review this policy periodically.
              </p>
            </Section>

            <Section title="12. Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
              </p>
              <div className="bg-[var(--color-bg)] p-6 rounded-2xl border border-[var(--color-border)] mt-4 space-y-2">
                <p><strong>{CLINIC_NAME}</strong></p>
                <p>{CLINIC_ADDRESS}</p>
                <p>Phone: <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, "")}`} className="text-[var(--color-primary)] underline">{CLINIC_PHONE}</a></p>
                <p>Email: <a href={`mailto:${CLINIC_EMAIL}`} className="text-[var(--color-primary)] underline">{CLINIC_EMAIL}</a></p>
              </div>
            </Section>

          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3">{title}</h2>
      <div className="leading-relaxed">{children}</div>
    </div>
  );
}
