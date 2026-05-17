import { Hero } from "@/components/home/Hero";
import { TrustStats } from "@/components/home/TrustStats";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { DoctorSection } from "@/components/home/DoctorSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { SmileGalleryPreview } from "@/components/home/SmileGalleryPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { AppointmentCTA } from "@/components/home/AppointmentCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { LocationSection } from "@/components/home/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStats />
      <ServicesOverview />
      <DoctorSection />
      <WhyChooseUs />
      <SmileGalleryPreview />
      <Testimonials />
      <AppointmentCTA />
      <FAQSection />
      <LocationSection />
    </>
  );
}
