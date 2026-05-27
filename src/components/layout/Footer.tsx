import Link from "next/link";
import Image from "next/image";
import { CLINIC_NAME, CLINIC_ADDRESS, CLINIC_PHONE, CLINIC_EMAIL, NAV_LINKS } from "@/lib/constants";
import { SERVICES_DATA } from "@/lib/services-data";
import { FacebookLogo, InstagramLogo, TwitterLogo, MapPin, Phone, Envelope } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-primary)] text-white pt-24 pb-12">
      {/* Background abstract shape */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Indore Dental Hospital"
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold tracking-tight text-white">Indore Dental</span>
                <span className="text-xs font-medium text-white/70 tracking-wide">Hospital</span>
              </div>
            </Link>
            <p className="text-sm text-white/90 max-w-sm">
              Providing premium, pain-free dental care in Indore with advanced technology and compassionate specialists.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-[var(--color-primary)]">
                <FacebookLogo size={20} weight="fill" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-[var(--color-primary)]">
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a href="#" aria-label="Twitter / X" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-[var(--color-primary)]">
                <TwitterLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-white/90 transition-colors hover:text-white">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services — split into two columns for all 12 */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/90 transition-colors hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-white/90">
                <MapPin size={20} className="shrink-0 text-[var(--color-accent)]" />
                <span>{CLINIC_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <Phone size={20} className="shrink-0 text-[var(--color-accent)]" />
                <a href={`tel:${CLINIC_PHONE.replace(/\s+/g, '')}`} className="hover:text-white">{CLINIC_PHONE}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/90">
                <Envelope size={20} className="shrink-0 text-[var(--color-accent)]" />
                <a href={`mailto:${CLINIC_EMAIL}`} className="hover:text-white">{CLINIC_EMAIL}</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/80">
          <p>© {new Date().getFullYear()} {CLINIC_NAME}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
