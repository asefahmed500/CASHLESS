"use client";

import Link from "next/link";
import { useState } from "react";

const TIERS = [
  {
    name: "PERSONAL",
    price: "$0",
    suffix: "/MONTH",
    features: [
      "DIGITAL CARD — INSTANT",
      "0.5% FX FEE — MID-MARKET",
      "SEND TO 180+ COUNTRIES",
      "ACH / WIRE / DEBIT TOP-UP",
      "24/7 IN-APP SUPPORT",
    ],
    cta: "START FREE →",
    href: "/signup",
    popular: false,
    accent: false,
  },
  {
    name: "PRO",
    price: "$8",
    suffix: "/MONTH",
    features: [
      "EVERYTHING IN PERSONAL",
      "0.25% FX FEE — PRIORITY",
      "PHYSICAL CARD INCLUDED",
      "3.5% APY ON IDLE BALANCES",
      "DEDICATED SUPPORT LINE",
    ],
    cta: "GO PRO →",
    href: "/signup",
    popular: true,
    accent: false,
  },
  {
    name: "BUSINESS",
    price: "CUSTOM",
    suffix: "— LET'S TALK",
    features: [
      "EVERYTHING IN PRO",
      "0.1% FX FEE — VOLUME",
      "MULTI-USER ACCESS — UP TO 50",
      "API ACCESS — WEBHOOKS",
      "DEDICATED ACCOUNT MANAGER",
    ],
    cta: "CONTACT SALES →",
    href: "/",
    popular: false,
    accent: true,
  },
];

export default function Pricing() {
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
            SECTION 06 — PRICING
          </span>
        </div>
        <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
          06 / 08
        </span>
      </div>
      <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

      {/* Headline */}
      <div className="flex flex-col items-center mt-12">
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 bg-[#FF4D00]" />
          <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
            PRICING THAT DOESN'T PENALIZE YOU FOR GROWING
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
          PAY
          <br />
          FLAT.
          <br />
          KEEP
          <br />
          MORE
        </h2>
      </div>

      {/* Pricing grid */}
      <div className="grid grid-cols-3 gap-6 mt-12">
        {TIERS.map((tier, i) => (
          <div
            key={tier.name}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`relative border-2 ${
              tier.accent ? "border-[#FF4D00]" : "border-[#0a0e27]"
            } bg-neutral-50 p-8 flex flex-col transition-transform duration-200 ease-out`}
            style={{
              minHeight: "520px",
              transform: hovered === i ? "translate(-4px, -4px)" : "translate(0, 0)",
              boxShadow:
                tier.popular
                  ? "12px 12px 0 #FF4D00"
                  : hovered === i
                  ? "4px 4px 0 #0a0e27"
                  : "none",
            }}
          >
            {/* Badge for popular tier */}
            {tier.popular && (
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="w-3 h-3 bg-[#FF4D00]" />
                <span
                  className="font-mono uppercase text-[#FF4D00] text-[10px] tracking-[1.92px]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  MOST POPULAR
                </span>
              </div>
            )}

            {/* Tier label */}
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              {tier.name}
            </span>

            {/* Price */}
            <div
              className="mt-2 font-bold text-[#0a0e27]"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "56px",
                lineHeight: "1",
                letterSpacing: "-0.02em",
              }}
            >
              {tier.price}
            </div>
            <span className="mt-1 font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              {tier.suffix}
            </span>

            <div className="bg-[#0a0e27]/20 w-full h-px mt-6" />

            {/* Features */}
            <ul className="mt-6 flex flex-col gap-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-2 h-2 shrink-0 bg-[#0a0e27]" />
                  <span className="font-mono text-[#0a0e27] text-[13px] leading-5">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto pt-8">
              <Link
                href={tier.href}
                className={`block w-full h-14 flex items-center justify-center font-bold uppercase transition-all ${
                  tier.popular
                    ? "bg-[#0a0e27] text-[#fafafa] shadow-[8px_8px_0_#FF4D00] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00]"
                    : tier.accent
                    ? "bg-transparent border-2 border-[#FF4D00] text-[#FF4D00] hover:bg-[#FF4D00]/5"
                    : "bg-transparent border-2 border-[#0a0e27] text-[#0a0e27] hover:bg-[#0a0e27]/5"
                }`}
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                }}
              >
                {tier.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
