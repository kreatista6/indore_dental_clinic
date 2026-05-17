import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { LocationSection } from "@/components/home/LocationSection";

export default function ContactPage() {
  return (
    <div className="pb-0">
      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            We&apos;re here to answer any questions you have. Book a consultation or reach out to our support team.
          </p>
        </div>
      </section>

      <AppointmentCTA />
      <LocationSection />
    </div>
  );
}
