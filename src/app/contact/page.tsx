import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { LocationSection } from "@/components/home/LocationSection";

export default function ContactPage() {
  return (
    <div className="pb-0">
      <section className="bg-[var(--color-bg)] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-3">
            We&apos;d Love to Hear From You
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Book an appointment, ask us a question, or just come in for a chat — we&apos;re always happy to help.
          </p>
        </div>
      </section>

      <AppointmentCTA />
      <LocationSection />
    </div>
  );
}
