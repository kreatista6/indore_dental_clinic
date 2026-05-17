import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { EConsultFloat } from "@/components/layout/EConsultFloat";
import { CLINIC_NAME } from "@/lib/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${CLINIC_NAME} | Premium Dental Care`,
  description: "Advanced, pain-free dental treatments in Indore. Implants, smile makeovers, and comprehensive care.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preload" href="/molar_tooth.glb" as="fetch" crossOrigin="anonymous" />
        {/* React Scan — dev only, never ships to production */}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-scan/dist/auto.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col relative selection:bg-[var(--color-primary)] selection:text-white">
        <Navbar />
        <main className="flex-1 pt-24 w-full max-w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <EConsultFloat />
      </body>
    </html>
  );
}
