"use client";

import { ArrowRight, Send, CreditCard, Vault } from "lucide-react";
import { useState } from "react";

const FEATURES = [
  {
    number: "01",
    title: "SEND",
    body: "Push money to anyone, anywhere, in seconds. Flat 0.5% fee. No intermediaries.",
    Icon: Send,
  },
  {
    number: "02",
    title: "SPEND",
    body: "Tap to pay in-store, online, or in-app. Works everywhere Visa is accepted — 180+ countries.",
    Icon: CreditCard,
  },
  {
    number: "03",
    title: "SAVE",
    body: "Hold 40+ currencies. Auto-convert at mid-market rates. Earn 3.5% APY on idle balances.",
    Icon: Vault,
  },
];

export default function Features() {
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
            SECTION 03 — FEATURES
          </span>
        </div>
        <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
          03 / 08
        </span>
      </div>
      <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

      {/* Headline */}
      <div className="flex flex-col items-center mt-12">
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 bg-[#FF4D00]" />
          <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
            WHY CASHLESS
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
          EVERY MOVE,
          <br />
          ENGINEERED
        </h2>
        <p className="mt-6 font-mono text-[#0a0e27]/70 text-base leading-6 max-w-[60ch] text-center">
          Three pillars. Zero compromise. Built for people who actually move money.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {FEATURES.map((f, i) => (
          <div
            key={f.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="border-2 border-[#0a0e27] bg-neutral-50 p-8 flex flex-col transition-transform duration-200 ease-out"
            style={{
              minHeight: "360px",
              transform: hovered === i ? "translate(-4px, -4px)" : "translate(0, 0)",
              boxShadow: hovered === i ? "8px 8px 0 #FF4D00" : "none",
            }}
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-[#0a0e27] flex justify-center items-center">
              <f.Icon className="size-6 text-[#fafafa]" />
            </div>

            {/* Number */}
            <span className="mt-6 font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              {f.number}
            </span>

            {/* Title */}
            <h3
              className="mt-2 font-bold uppercase text-[#0a0e27]"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "28px",
                letterSpacing: "-0.02em",
              }}
            >
              {f.title}
            </h3>

            {/* Body */}
            <p className="mt-4 font-mono text-[#0a0e27]/70 text-sm leading-6 max-w-[30ch]">
              {f.body}
            </p>

            {/* Footer */}
            <div className="mt-auto pt-6">
              <div className="bg-[#0a0e27]/20 w-full h-px mb-3" />
              <button
                className="font-bold uppercase text-[#0a0e27] text-[12px] underline underline-offset-4 hover:text-[#FF4D00] transition-colors"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                LEARN MORE →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
