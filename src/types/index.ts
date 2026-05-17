/* =============================================
   Indore Dental Hospital — TypeScript Interfaces
   ============================================= */

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  heroImage: string;
  benefits: string[];
  procedure: ProcedureStep[];
  faqs: FAQ[];
  featured?: boolean;
  category: ServiceCategory;
}

export interface ProcedureStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ServiceCategory =
  | "cosmetic"
  | "restorative"
  | "preventive"
  | "orthodontic"
  | "surgical";

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  review: string;
  avatar: string;
  date: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readTime: string;
}

export type BlogCategory =
  | "oral-health"
  | "cosmetic"
  | "implants"
  | "pediatric"
  | "orthodontic"
  | "tips";

export interface GalleryItem {
  id: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  treatment: string;
  description: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
  timings: ClinicTiming[];
}

export interface ClinicTiming {
  days: string;
  hours: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TeamMember {
  name: string;
  title: string;
  qualifications: string[];
  image: string;
  bio: string;
}
