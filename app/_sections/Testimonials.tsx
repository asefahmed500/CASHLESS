"use client";

import { useState } from "react";

const TESTIMONIALS = [
  {
    initials: "MR",
    name: "MAYA R.",
    label: "LISBON — FREELANCER",
    quote: "Closed my bank account in week three. Haven't looked back since.",
  },
  {
    initials: "JT",
    name: "JORDAN T.",
    label: "TORONTO — ENGINEER",
    quote: "Sent rent to my landlord in Mexico in 8 seconds. Fee: 60 cents.",
  },
  {
    initials: "AB",
    name: "AICHA B.",
    label: "DUBAI — FOUNDER",
    quote: "Pay contractors in 12 countries from one app. My accountant finally loves me.",
  },
];

export default function Testimonials() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-neutral-50 px-16 py-8 border-t border-[#0a0e27]/20 min-h-screen scroll-mt-16 py-16">
      {/* Top strip */}
      <div className="flex justify-between items-center h-12">
        <div className="flex items-center gap-4">
          <span
            className="font-bold text-[#0a0e27] text-lg leading-7"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            CASHLESS
          </span>
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            SECTION 05 — TESTIMONIALS
          </span>
        </div>
        <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
          05 / 08
        </span>
      </div>
      <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

      {/* Headline */}
      <div className="flex flex-col items-center mt-12">
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 bg-[#FF4D00]" />
          <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
            REAL CASHLESS USERS
          </span>
        </div>
        <h2
          className="mt-6 font-bold text-[#0a0e27] text-center"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "72px",
            lineHeight: "0.95",
            letterSpacing: "-0.04em",
          }}
        >
          REAL
          <br />
          PEOPLE.
          <br />
          REAL
          <br />
          MOVES
        </h2>
      </div>

      {/* Testimonials grid */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={t.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="border-2 border-[#0a0e27] bg-neutral-50 p-8 flex flex-col transition-transform duration-200 ease-out"
            style={{
              minHeight: "380px",
              transform: hovered === i ? "translate(-2px, -2px)" : "translate(0, 0)",
              boxShadow: hovered === i ? "6px 6px 0 #0a0e27" : "none",
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-[#0a0e27] flex justify-center items-center">
                <span
                  className="font-bold text-[#fafafa] text-sm"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {t.initials}
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="font-bold text-[#0a0e27]"
                  style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "18px" }}
                >
                  {t.name}
                </span>
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px]">
                  {t.label}
                </span>
              </div>
            </div>

            <div className="bg-[#0a0e27]/20 w-full h-px mt-6" />

            {/* Quote */}
            <p className="mt-4 font-mono text-[#0a0e27] text-sm leading-6 max-w-[30ch]">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Footer */}
            <div className="mt-auto pt-6 flex items-center justify-between">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="w-2 h-2 bg-[#FF4D00]" />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#0a0e27] flex justify-center items-center">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1 4l2 2 4-4"
                      stroke="#fafafa"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px]">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
