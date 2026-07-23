"use client";

import { useState } from "react";

const FAQS = [
  {
    num: "01",
    q: "IS MY MONEY SAFE?",
    a: "Funds are held in segregated accounts at FDIC-insured partner banks. All card data is AES-256 encrypted. We're PCI DSS Level 1 certified and audited annually by Big Four firms.",
  },
  {
    num: "02",
    q: "HOW FAST ARE TRANSFERS?",
    a: "Cashless-to-Cashless transfers settle in under 10 seconds. Bank-outs land in 1-2 business days depending on the receiving country and rails. Crypto-rail withdrawals arrive within 30 minutes.",
  },
  {
    num: "03",
    q: "WHAT IF I LOSE MY CARD?",
    a: "Freeze instantly from the app — one tap, all transactions blocked. Order a replacement from the same screen; digital replacement arrives in 30 seconds, physical ships in 7-10 days.",
  },
  {
    num: "04",
    q: "DO YOU CHARGE FX FEES?",
    a: "Mid-market rate, plus 0.5% on Personal and 0.25% on Pro. No spread games, no hidden fees. The rate you see on the transfer screen is the rate you pay.",
  },
  {
    num: "05",
    q: "CAN I USE THIS WITHOUT A BANK?",
    a: "Yes. Top up with another Cashless user, accept crypto deposits, or load cash at 80,000+ partner locations worldwide. We don't require a linked bank account to operate.",
  },
  {
    num: "06",
    q: "WHICH COUNTRIES?",
    a: "Cards work in 180+ countries wherever Visa is accepted. Domestic transfers are live in 42 countries. Cross-border transfers work everywhere by default. See the full list in the app.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

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
            SECTION 07 — FAQ
          </span>
        </div>
        <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
          07 / 08
        </span>
      </div>
      <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

      {/* Headline */}
      <div className="flex flex-col items-center mt-12">
        <div className="flex items-center gap-4">
          <span className="w-3 h-3 bg-[#FF4D00]" />
          <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
            ANSWERED, NOT EVASIVELY
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
          QUESTIONS.
          <br />
          ANSWERED
        </h2>
      </div>

      {/* FAQ grid — 2-column accordion */}
      <div className="grid grid-cols-2 gap-8 mt-12">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          return (
            <button
              key={faq.num}
              onClick={() => setOpen(isOpen ? null : i)}
              className={`border-2 border-[#0a0e27] bg-neutral-50 p-6 text-left transition-all duration-300 ease-out ${
                isOpen ? "shadow-[6px_6px_0_#FF4D00]" : "shadow-none hover:shadow-[4px_4px_0_#0a0e27]"
              }`}
              style={{
                transform: isOpen ? "translate(-3px, -3px)" : "translate(0, 0)",
              }}
              aria-expanded={isOpen}
            >
              {/* Number marker */}
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 bg-[#FF4D00]" />
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px]">
                  {faq.num}
                </span>
                {/* Expand/collapse indicator */}
                <div className="ml-auto w-6 h-6 border-2 border-[#0a0e27] flex items-center justify-center">
                  <span
                    className="font-bold text-[#0a0e27] transition-transform duration-300"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                    }}
                  >
                    +
                  </span>
                </div>
              </div>

              {/* Question */}
              <h3
                className="mt-3 font-bold uppercase text-[#0a0e27]"
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "16px",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.2",
                }}
              >
                {faq.q}
              </h3>

              {/* Hairline */}
              <div className="bg-[#0a0e27]/20 w-full h-px mt-3" />

              {/* Answer — smooth expand/collapse */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxHeight: isOpen ? "200px" : "0",
                  opacity: isOpen ? 1 : 0,
                  marginTop: isOpen ? "12px" : "0",
                }}
              >
                <p className="font-mono text-[#0a0e27]/70 text-[13px] leading-6 max-w-[40ch]">
                  {faq.a}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
