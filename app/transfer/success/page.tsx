import Link from "next/link";
import { Check, X, ArrowRight, Share2, RefreshCw } from "lucide-react";

const DETAILS_ROWS = [
  ["RECIPIENT", "JANE ANDERSON"],
  ["ACCOUNT", "+1 555 218 4400 — CASHLESS"],
  ["NOTE", "RENT SPLIT — JULY"],
  ["REFERENCE", "#TXN-2026-0723-0148"],
  ["ARRIVES", "INSTANT — 2026.07.23 14:48 UTC"],
];

export default function TransferSuccessPage() {
  return (
    <div
      className="relative font-mono overflow-hidden flex items-center justify-center min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #1a1f3a 0%, #0a0e27 50%, #14182a 100%)",
      }}
    >
      {/* Soft radial overlay at 30% opacity */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1a1f3a 0%, #0a0e27 70%)",
          opacity: 0.3,
          width: "900px",
          height: "900px",
          borderRadius: "9999px",
        }}
      />

      {/* Modal */}
      <div className="relative z-10 shadow-[16px_16px_0_#FF4D00] bg-neutral-50 border-[#0a0e27] border-2 border-solid flex p-6 flex-col w-[720px] max-w-[95vw] h-[720px] max-h-[95vh]">
        {/* Header */}
        <div className="flex flex-row items-center w-full">
          <div className="size-8 shrink-0 bg-[#0a0e27] flex justify-center items-center">
            <Check className="size-5 text-[#fafafa]" strokeWidth={2.5} />
          </div>
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] ml-4">
            TRANSACTION COMPLETE — 2026.07.23 — 14:48 UTC
          </span>
          <Link
            href="/dashboard"
            className="size-8 shrink-0 bg-neutral-50 border-[#0a0e27] border-2 border-solid flex ml-auto justify-center items-center hover:bg-[#0a0e27]/5"
            aria-label="Close"
          >
            <X className="size-5 text-[#0a0e27]" strokeWidth={2.5} />
          </Link>
        </div>

        <div className="shrink-0 bg-[#0a0e27]/20 mt-4 w-full h-px" />

        {/* Eyebrow + Headline + Amount */}
        <div className="shrink-0 mt-5">
          <div className="flex items-center gap-2">
            <div className="size-3 shrink-0 bg-[#FF4D00]" />
            <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              SENT — CONFIRMED
            </span>
          </div>
          <div className="mt-3">
            <h1
              className="font-bold text-[#0a0e27] text-5xl leading-[46px] tracking-[-0.48px]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              MONEY
              <br />
              ON ITS WAY.
            </h1>
          </div>
          <div className="mt-4">
            <div className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              AMOUNT SENT
            </div>
            <div
              className="font-bold text-[#0a0e27] text-[56px] leading-13 tracking-[-0.48px] mt-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              $1,240.00
            </div>
            <div className="flex mt-2 items-center gap-2">
              <div className="size-3 shrink-0 bg-[#0a0e27]" />
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                DEBITED FROM CASHLESS — **** 4829 — AVAILABLE BALANCE $11,242.50
              </span>
            </div>
          </div>
        </div>

        {/* Details panel */}
        <div className="shrink-0 border-[#0a0e27] border-2 border-solid mt-5 w-full">
          {DETAILS_ROWS.map(([k, v], idx) => (
            <div
              key={k}
              className={`grid grid-cols-2 relative items-center h-8 ${
                idx < DETAILS_ROWS.length - 1
                  ? "border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20"
                  : ""
              }`}
            >
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] pl-4">
                {k}
              </span>
              <span className="font-mono text-[#0a0e27] text-[13px] border-t-0 border-r-0 border-b-0 border-l border-solid border-[#0a0e27]/20 flex pl-4 items-center h-full">
                {v}
              </span>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="shrink-0 flex mt-5 flex-row items-center gap-3">
          <Link
            href="/dashboard"
            className="shadow-[8px_8px_0_#FF4D00] font-bold uppercase bg-[#0a0e27] text-[#fafafa] text-sm leading-5 flex justify-center items-center flex-1 gap-3 h-14 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            DONE
            <ArrowRight className="size-4" />
          </Link>
          <button className="bg-transparent border-[#0a0e27] border-2 border-solid flex px-4 justify-center items-center flex-1 gap-3 h-14 hover:bg-[#0a0e27]/5 transition-colors">
            <Share2 className="size-4 text-[#0a0e27]" />
            <span
              className="font-bold uppercase text-[#0a0e27] text-xs leading-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              SHARE RECEIPT
            </span>
          </button>
          <button className="bg-transparent border-[#FF4D00] border-2 border-solid flex px-4 justify-center items-center flex-1 gap-3 h-14 hover:bg-[#ff4d00]/5 transition-colors">
            <RefreshCw className="size-4 text-[#FF4D00]" />
            <span
              className="font-bold uppercase text-[#FF4D00] text-xs leading-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              NEW TRANSFER
            </span>
          </button>
        </div>

        <div className="shrink-0 bg-[#0a0e27]/20 mt-5 w-full h-px" />
        <div className="shrink-0 text-center mt-3">
          <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
            AUTO-CLOSING IN 5s — PRESS ESC OR TAP OVERLAY TO DISMISS
          </span>
        </div>
      </div>
    </div>
  );
}
