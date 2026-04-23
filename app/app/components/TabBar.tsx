"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Heute", icon: "🏠" },
  { href: "/bestand", label: "Bestand", icon: "📦" },
  { href: "/gerichte", label: "Gerichte", icon: "🍽️" },
  { href: "/woche", label: "Woche", icon: "📊" },
];

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[430px] justify-around pt-2 pb-6">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-1 px-3 text-[11px] ${
                active ? "text-[var(--primary)]" : "text-[var(--text-dim)]"
              }`}
            >
              <span className="text-[22px] leading-none">{tab.icon}</span>
              <span className="font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
