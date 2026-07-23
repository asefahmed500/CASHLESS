import Link from "next/link";

const FOOTER_COLUMNS = [
  {
    title: "PRODUCT",
    links: ["DIGITAL CARD", "PHYSICAL CARD", "PRICING", "SECURITY", "ROADMAP", "CHANGELOG"],
  },
  {
    title: "COMPANY",
    links: ["ABOUT", "BLOG", "CAREERS", "PRESS", "CONTACT", "BRAND"],
  },
  {
    title: "RESOURCES",
    links: ["HELP CENTER", "DEVELOPERS", "STATUS", "COMMUNITY", "API DOCS", "SYSTEM"],
  },
  {
    title: "LEGAL",
    links: ["TERMS", "PRIVACY", "COOKIES", "COMPLIANCE", "LICENSES", "DMCA"],
  },
];

const COMPLIANCE_PHRASES = [
  "AES-256 ENCRYPTED",
  "PCI DSS COMPLIANT",
  "AUDITED ANNUALLY",
];

const SOCIALS = [
  { letter: "X" },
  { letter: "G" },
  { letter: "in", small: true },
  { icon: "message" as const },
  { icon: "rss" as const },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-50 text-[#0a0e27] w-full overflow-hidden">
      {/* Content layer */}
      <div className="relative z-2 flex px-16 pt-12 flex-col w-full">
        {/* Section header row */}
        <div className="items-baseline flex pb-6 justify-between">
          <div className="items-baseline flex gap-4">
            <Link
              href="/"
              className="font-bold text-[#0a0e27] text-lg leading-7"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              CASHLESS.
            </Link>
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] self-center">
              SECTION 03 — FOOTER
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#top"
              className="underline font-bold uppercase text-[#0a0e27] text-[11px] self-center hover:text-[#ff4d00]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              ← BACK TO TOP
            </Link>
            <div className="size-8 shrink-0 bg-[#0a0e27] flex justify-center items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 19V5M5 12l7-7 7 7"
                  stroke="#fafafa"
                  strokeWidth="2"
                  strokeLinecap="square"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0e27]/20 w-full h-px" />

        {/* 4-column link grid */}
        <div className="relative z-3 grid grid-cols-4 mt-12">
          {FOOTER_COLUMNS.map((col, idx) => {
            const isLast = idx === FOOTER_COLUMNS.length - 1;
            return (
              <div
                key={col.title}
                className={`bg-neutral-50 pl-6 pr-0 ${
                  !isLast
                    ? "border-t-0 border-r border-b-0 border-l-0 border-solid border-[#0a0e27]/20"
                    : ""
                }`}
              >
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  {col.title}
                </span>
                <div className="flex mt-4 flex-col">
                  {col.links.map((link, linkIdx) => {
                    const isLastLink = linkIdx === col.links.length - 1;
                    return (
                      <div
                        key={link}
                        className={`flex items-center h-8 bg-neutral-50 ${
                          !isLastLink
                            ? "border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20"
                            : ""
                        }`}
                      >
                        <Link
                          href="/"
                          className="font-bold uppercase text-[#0a0e27] text-[13px] hover:text-[#ff4d00] transition-colors"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {link} →
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CASHLESS watermark band — dedicated vertical space so it's always visible */}
        <div
          aria-hidden
          className="relative z-1 flex items-center justify-center pointer-events-none select-none overflow-visible my-8"
          style={{ minHeight: "200px" }}
        >
          <span
            className="whitespace-nowrap font-bold text-center"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "220px",
              lineHeight: "200px",
              letterSpacing: "-9px",
              color: "rgba(10, 14, 39, 0.22)",
            }}
          >
            CASHLESS
          </span>
        </div>

        {/* Meta + social rows */}
        <div className="relative z-4 flex flex-col">
          <div className="bg-[#0a0e27]/20 w-full h-px" />

          {/* Meta row */}
          <div className="relative z-4 bg-neutral-50 flex mt-4 py-2 items-center w-full">
            <span className="whitespace-nowrap font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              © 2026 CASHLESS CARD INC.
            </span>
            <div className="flex mx-auto items-center">
              {COMPLIANCE_PHRASES.map((phrase, idx) => (
                <div key={phrase} className="flex items-center">
                  {idx > 0 && (
                    <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] mx-4">
                      —
                    </span>
                  )}
                  <div className="size-3 shrink-0 bg-[#0a0e27] self-center" />
                  <span className="whitespace-nowrap font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] ml-2">
                    {phrase}
                  </span>
                </div>
              ))}
            </div>
            <span className="whitespace-nowrap font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              BUILD 0.1 — 2026.07.23
            </span>
          </div>

          {/* Social row */}
          <div className="relative z-4 bg-neutral-50 flex mt-6 pb-8 items-center w-full">
            <div className="flex items-center gap-3">
              {SOCIALS.map((s, idx) => (
                <SocialSquare key={idx} letter={s.letter} small={s.small} icon={s.icon} />
              ))}
            </div>
            <Link
              href="/"
              className="underline font-bold uppercase text-[#0a0e27] text-[13px] ml-auto self-center hover:text-[#ff4d00]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              SUBSCRIBE TO UPDATES →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialSquare({
  letter,
  small,
  icon,
}: {
  letter?: string;
  small?: boolean;
  icon?: "message" | "rss";
}) {
  return (
    <Link
      href="/"
      className="size-12 shrink-0 bg-[#0a0e27] flex justify-center items-center hover:bg-[#ff4d00] transition-colors"
    >
      {letter && (
        <span
          className={`leading-none font-bold text-[#fafafa] ${
            small ? "text-base" : "text-lg"
          }`}
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {letter}
        </span>
      )}
      {icon === "message" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
            stroke="#fafafa"
            strokeWidth="2"
            strokeLinecap="square"
          />
        </svg>
      )}
      {icon === "rss" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16"
            stroke="#fafafa"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <circle cx="5" cy="19" r="1" fill="#fafafa" />
        </svg>
      )}
    </Link>
  );
}
