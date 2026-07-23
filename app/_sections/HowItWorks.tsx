"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    label: "STEP 01 — SIGN UP",
    title: "CREATE YOUR ACCOUNT",
    body: "Enter your phone, email, and password. Verify the OTP we send by SMS. Total time: 60 seconds.",
  },
  {
    label: "STEP 02 — GET YOUR CARD",
    title: "PICK YOUR CARD",
    body: "Choose digital (instant, free) or physical (7–10 day mail, $15 fee). Customize the name on the card. Lock it down with 2FA.",
  },
  {
    label: "STEP 03 — START SPENDING",
    title: "TAP. PAY. DONE",
    body: "Add funds via bank transfer, debit card, or another Cashless user. Tap to pay anywhere Visa is accepted.",
  },
];

export default function HowItWorks() {
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
            SECTION 04 — HOW IT WORKS
          </span>
        </div>
        <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
          04 / 08
        </span>
      </div>
      <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

      <div className="flex pt-12 gap-12">
        {/* LEFT COLUMN (42%) */}
        <div className="w-[42%] flex flex-col pr-12 border-r border-[#0a0e27]/20">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-[#FF4D00]" />
            <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              GET STARTED IN 120 SECONDS
            </span>
          </div>
          <h2
            className="mt-6 font-bold text-[#0a0e27]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "72px",
              lineHeight: "0.95",
              letterSpacing: "-0.04em",
            }}
          >
            THREE
            <br />
            STEPS
          </h2>
          <p className="mt-6 font-mono text-[#0a0e27]/70 text-base leading-6 max-w-[40ch]">
            No bank visits. No paperwork. No waiting. From signup to first tap in
            under two minutes.
          </p>
        </div>

        {/* RIGHT COLUMN (58%) */}
        <div className="w-[58%] flex flex-col pl-12">
          <div className="flex flex-col">
            {STEPS.map((step, idx) => (
              <div
                key={step.label}
                className={`flex gap-6 ${
                  idx < STEPS.length - 1 ? "border-b border-[#0a0e27]/20" : ""
                } py-6`}
              >
                {/* Numbered square */}
                <div className="w-16 h-16 shrink-0 bg-[#0a0e27] flex justify-center items-center">
                  <span
                    className="font-bold text-[#fafafa]"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "28px",
                    }}
                  >
                    {idx + 1}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                    {step.label}
                  </span>
                  <h3
                    className="mt-2 font-bold text-[#0a0e27]"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "32px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 font-mono text-[#0a0e27]/70 text-sm leading-6 max-w-[50ch]">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA banner */}
      <div className="mt-8 border-2 border-[#0a0e27] p-8 flex items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 bg-[#FF4D00]" />
            <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              READY?
            </span>
          </div>
          <h3
            className="mt-2 font-bold text-[#0a0e27]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "48px",
              letterSpacing: "-0.04em",
              lineHeight: "0.95",
            }}
          >
            GO
            <br />
            CASHLESS
          </h3>
        </div>
        <div className="flex flex-col items-end gap-3">
          <Link
            href="/signup"
            className="bg-[#0a0e27] text-[#fafafa] px-8 h-14 flex items-center justify-center gap-3 font-bold uppercase shadow-[8px_8px_0_#FF4D00] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "14px",
              letterSpacing: "0.08em",
            }}
          >
            GET STARTED <ArrowRight className="size-4" />
          </Link>
          <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
            NO CREDIT CHECK — NO PAPERWORK — CANCEL ANYTIME
          </span>
        </div>
      </div>
    </section>
  );
}
