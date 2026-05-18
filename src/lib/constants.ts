import type { FAQ, StatItem, ClinicTiming, Testimonial } from "@/types";

export const CLINIC_NAME = "Indore Dental Hospital";
export const CLINIC_TAGLINE = "Dental • Aesthetics • Implants • Aligners";
export const CLINIC_SINCE = "2012";
export const CLINIC_ADDRESS = "Luvkush Market, Near Aurobindo Hospital, Indore";
export const CLINIC_PHONE = "+91 9977788837";
export const CLINIC_EMAIL = "indoredentalhospital@gmail.com";
export const CLINIC_MAP_URL = "https://goo.gl/maps/placeholder";

export const DOCTOR = {
  name: "डॉ. सुगंध श्रीवास्तव",
  nameEn: "Dr. Sugandh Shrivastava",
  title: "Maxillofacial Prosthodontist & Implantologist",
  titleHi: "मैक्सिलोफ़ेशियल प्रॉस्थोडोंटिस्ट एवं इंप्लांटोलॉजिस्ट",
  credentials: ["M.D.S.", "F.A.G.E. (Karnataka)", "F.W.C.L.I. (USA)", "P.G.C.O.I. (Israel)"],
};

export const CLINIC_TIMINGS: ClinicTiming[] = [
  { days: "Monday - Saturday", hours: "9:00 AM - 8:00 PM" },
  { days: "Sunday", hours: "10:00 AM - 2:00 PM (By Appointment)" }
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Contact", href: "/contact" }
];

export const TRUST_STATS: StatItem[] = [
  { value: 14, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "k+", label: "Happy Patients" },
  { value: 25, suffix: "k+", label: "Successful Treatments" },
  { value: 100, suffix: "+", label: "Advanced Tech Equipped" }
];

export const COMMON_FAQS: FAQ[] = [
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we provide emergency dental care during our regular business hours and have an on-call doctor for severe after-hours dental emergencies. Please call our emergency helpline immediately."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "For most patients, we recommend a routine check-up and professional cleaning every 6 months. However, if you have specific gum conditions or orthodontic appliances, we may suggest more frequent visits."
  },
  {
    question: "Do you offer flexible payment plans?",
    answer: "Absolutely. We believe premium dental care should be accessible. We offer EMI options on major credit cards and partner with healthcare finance providers for zero-interest payment plans on comprehensive treatments."
  },
  {
    question: "Is dental implant surgery painful?",
    answer: "Most patients report that getting a dental implant is less uncomfortable than a tooth extraction. We use advanced local anesthesia and offer conscious sedation options to ensure a completely pain-free, relaxed experience."
  },
  {
    question: "What safety protocols do you follow?",
    answer: "We adhere strictly to international sterilization standards. Our clinic features a dedicated class-B autoclave sterilization room, disposable barriers, and strict cross-infection control protocols for every patient."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Aarti Sharma",
    treatment: "Smile Makeover",
    rating: 5,
    review: "The level of care and attention to detail at Indore Dental Hospital is unmatched. Dr. Sugandh completely transformed my smile. The clinic feels more like a luxury wellness center than a dental office.",
    avatar: "https://i.pravatar.cc/150?u=aarti",
    date: "2 months ago"
  },
  {
    id: "t2",
    name: "Rahul Verma",
    treatment: "Dental Implants",
    rating: 5,
    review: "I was terrified of getting an implant, but the procedure was incredibly smooth and completely painless. The 3D scanning technology they use ensures perfect precision. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    date: "3 months ago"
  },
  {
    id: "t3",
    name: "Dr. Megha Singh",
    treatment: "Root Canal & Crown",
    rating: 5,
    review: "As a medical professional myself, I have high standards for hygiene and clinical protocols. This hospital exceeds them all. A seamless, highly professional experience from booking to treatment.",
    avatar: "https://i.pravatar.cc/150?u=megha",
    date: "1 week ago"
  },
  {
    id: "t4",
    name: "Sanjay Desai",
    treatment: "Full Mouth Rehabilitation",
    rating: 5,
    review: "After years of struggling with dental issues, I finally have a set of teeth I can be proud of. The entire team is compassionate and highly skilled. They restored my confidence completely.",
    avatar: "https://i.pravatar.cc/150?u=sanjay",
    date: "4 months ago"
  }
];
