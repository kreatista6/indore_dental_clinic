"use client";

import { publicConfig } from "@/lib/env";
import { getWhatsAppUrl } from "@/lib/utils";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function WhatsAppFloat() {
  const url = getWhatsAppUrl(
    publicConfig.whatsappNumber,
    "Hello! I'd like to book an appointment at Indore Dental Hospital. Please let me know the available slots."
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat with us on WhatsApp"
    >
      {/* Pulse ring effect */}
      <span className="absolute inset-0 z-[-1] rounded-full bg-[#25D366] animate-ping opacity-75 duration-1000"></span>
      <WhatsappLogo weight="fill" size={32} />
    </a>
  );
}
