import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL } from "@/lib/constants";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div>
      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
            Terms of Use
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
          <p className="text-sm text-[var(--color-text-muted)] mt-2">Last updated: June 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="text-[var(--color-text-muted)] space-y-6">

            <Section title="1. Acceptance of Terms">
              <p>
                By accessing or using the website of {CLINIC_NAME} (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </Section>

            <Section title="2. Medical Disclaimer">
              <p>
                The content on this website is provided for general informational purposes only. It is not intended to constitute professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified dentist or other qualified health provider with any questions you may have regarding a dental condition.
              </p>
              <p className="mt-3">
                Never disregard professional medical advice or delay in seeking it because of something you have read on this website. Reliance on any information provided on this website is solely at your own risk.
              </p>
            </Section>

            <Section title="3. Appointment Booking">
              <p>
                By submitting an appointment request through our website, you agree to provide accurate, current, and complete information. Submission of an appointment request does not guarantee availability. We will contact you to confirm your appointment within a reasonable timeframe.
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>You must be at least 18 years of age to book an appointment online. If you are under 18, a parent or guardian must submit the request on your behalf.</li>
                <li>We reserve the right to cancel or reschedule appointments at our discretion.</li>
                <li>We are not responsible for missed appointments or failure to receive appointment reminders.</li>
              </ul>
            </Section>

            <Section title="4. User Conduct">
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>Use the website for any unlawful purpose or in violation of any applicable laws.</li>
                <li>Submit false, misleading, or fraudulent information.</li>
                <li>Attempt to gain unauthorised access to any part of the website or its systems.</li>
                <li>Interfere with the proper functioning of the website, including introducing viruses or malicious code.</li>
                <li>Use any automated means (bots, scrapers, etc.) to access or collect data from the website without our prior written consent.</li>
              </ul>
            </Section>

            <Section title="5. Intellectual Property">
              <p>
                All content on this website — including text, graphics, logos, images, videos, software, and design — is the property of {CLINIC_NAME} or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our prior written permission.
              </p>
            </Section>

            <Section title="6. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, {CLINIC_NAME} shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use this website, including but not limited to errors, omissions, interruptions, or delays in operation.
              </p>
            </Section>

            <Section title="7. External Links">
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
              </p>
            </Section>

            <Section title="8. Privacy">
              <p>
                Your use of this website is also governed by our <Link href="/privacy-policy" className="text-[var(--color-primary)] underline">Privacy Policy</Link>, which explains how we collect, use, and protect your personal information.
              </p>
            </Section>

            <Section title="9. Changes to Terms">
              <p>
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after any changes constitutes acceptance of the new terms.
              </p>
            </Section>

            <Section title="10. Governing Law">
              <p>
                These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Indore, Madhya Pradesh.
              </p>
            </Section>

            <Section title="11. Contact">
              <p>
                If you have any questions about these Terms of Use, please contact us:
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
