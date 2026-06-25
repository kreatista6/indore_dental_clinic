import type { FAQ, StatItem, ClinicTiming, Testimonial } from "@/types";

export const CLINIC_NAME = "Indore Dental Hospital";
export const CLINIC_TAGLINE = "Dental • Aesthetics • Implants • Aligners";
export const CLINIC_SINCE = "2012";
export const CLINIC_ADDRESSES = [
  { name: "Sunshine Dental Care", address: "1/3 Prakash Nagar, 3 Batti Chouraha, Ujjain" },
  { name: "Sunshine Medicare Hospital", address: "101 Siddhivinayak Trade Centre, Shaheed Park, Freeganj, Ujjain" },
  { name: "Indore Dental Hospital", address: "Luvkush Market, Near Aurobindo Hospital, Indore" }
];
export const CLINIC_PHONE = "+91 9977788837";
export const CLINIC_EMAIL = "indoredentalhospital@gmail.com";
export const CLINIC_MAP_URL = "https://maps.app.goo.gl/P6srcdCGpqoh2r1j6?g_st=ic";

export const DOCTOR = {
  name: "Dr. Sugandh Shrivastava",
  nameEn: "Dr. Sugandh Shrivastava",
  title: "Maxillofacial Prosthodontist & Implantologist",
  titleHi: "Maxillofacial Prosthodontist & Implantologist",
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
  { value: 1, suffix: " Lakh+", label: "Happy Patients" },
  { value: 50, suffix: "k+", label: "Successful Treatments" },
  { value: 100, suffix: "+", label: "Advanced Tech Equipped" }
];

export const COMMON_FAQS: FAQ[] = [
  {
    question: "Is the treatment painful at Indore Dental Hospital?",
    answer: "Absolutely not. We use the latest pain-free anaesthesia techniques and numbing protocols before any procedure. Most of our patients are pleasantly surprised by how comfortable their experience is — even for treatments like root canals and implants."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book via our website's appointment form, call us directly at +91 9977788837, or send us a WhatsApp message. We typically confirm your slot within a few hours and maintain zero waiting time for scheduled appointments."
  },
  {
    question: "How much do dental treatments cost in Indore?",
    answer: "Our treatments are priced to offer premium quality at fair, transparent costs. We provide a detailed treatment plan with full pricing before starting any procedure — no hidden charges, ever. We also offer flexible payment options for longer treatments."
  },
  {
    question: "What makes Indore Dental Hospital different from other clinics?",
    answer: "Dr. Shrivastava's international training (USA, Israel, Karnataka), our hospital-grade sterilization, 3D digital technology, and 14+ years of trusted care set us apart. We've helped over 15,000 patients — and our results speak for themselves."
  },
  {
    question: "Do you treat children as well as adults?",
    answer: "Yes! We offer dedicated paediatric dental care in a gentle, child-friendly environment. From the first tooth to teenage braces, we make dental visits a positive experience for children of all ages."
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
