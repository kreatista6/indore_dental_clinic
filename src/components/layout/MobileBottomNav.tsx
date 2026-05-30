"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Stethoscope, Images, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: House },
  { label: "Services", href: "/services", icon: Stethoscope },
  { label: "Gallery", href: "/smile-gallery", icon: Images },
  { label: "About", href: "/about", icon: User },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--color-border)] bg-white/95 backdrop-blur-lg md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}>
      <div className="flex items-center justify-between px-2 py-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-[11px] font-medium transition-colors",
                isActive
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]"
              )}
            >
              <Icon className={isActive ? "h-5 w-5" : "h-5 w-5"} />
              {item.label}
            </Link>
          );
        })}


      </div>
    </nav>
  );
}
