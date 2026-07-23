"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "PRODUCT", href: "/" },
  { label: "FEATURES", href: "/" },
  { label: "PRICING", href: "/", active: true },
  { label: "SECURITY", href: "/" },
  { label: "DOCS", href: "/" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="h-16 border-b border-[#0a0e27]/20 flex items-center px-16 bg-[#fafafa] sticky top-0 z-50">
      {/* Brand */}
      <Link href="/" className="font-display font-bold text-[18px] text-[#0a0e27]">
        CASHLESS.
      </Link>

      {/* Center nav */}
      <nav className="mx-auto flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`label !text-[#0a0e27]/70 hover:!text-[#0a0e27] transition-colors ${
              link.active ? "underline underline-offset-4 decoration-[1px] !text-[#0a0e27]" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Link
          href="/signup"
          className="label !text-[#0a0e27] underline underline-offset-4 decoration-[1px] hover:!text-[#ff4d00]"
        >
          SIGN IN
        </Link>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 h-9 px-4 bg-[#0a0e27] text-[#fafafa] font-display font-bold text-[11px] uppercase tracking-[0.08em] shadow-[4px_4px_0_#ff4d00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#ff4d00] transition-all"
        >
          GET STARTED <span>→</span>
        </Link>
      </div>
    </header>
  );
}
