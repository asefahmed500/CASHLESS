import Link from "next/link";
import {
  ArrowRight,
  Check,
  Download,
  Share2,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

const SUMMARY_ROWS = [
  ["ACCOUNT HOLDER", "JORDAN RIVERA"],
  ["PHONE", "+1 555 482 9100"],
  ["CARD TYPE", "DIGITAL — INSTANT"],
  ["CARD NAME", "JORDAN RIVERA"],
  ["CARD NUMBER", "**** **** **** 4829"],
];

const PROTECTION_ROWS = [
  { Icon: ShieldCheck, text: "YOUR CARD IS PROTECTED BY AES-256 ENCRYPTION" },
  { Icon: Zap, text: "INSTANT ACTIVATION — READY TO USE NOW" },
  { Icon: Globe, text: "ACCEPTED WORLDWIDE, ONLINE & IN-STORE" },
];

const NEXT_STEPS = [
  "VERIFY YOUR EMAIL — CHECK YOUR INBOX",
  "ADD FUNDS — LINK A BANK ACCOUNT OR CARD",
  "ENABLE 2FA — SECURE YOUR ACCOUNT",
];

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen font-mono bg-neutral-50 text-[#0a0e27] flex p-16 flex-col w-full">
      {/* Top strip */}
      <div className="items-baseline flex pb-4 justify-between">
        <div className="items-baseline flex gap-6">
          <Link
            href="/"
            className="font-bold text-[#0a0e27] text-lg leading-7"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            CASHLESS.
          </Link>
          <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            STEP 04 / 04 — COMPLETE
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#0a0e27] w-6 h-2" />
            <div className="bg-[#0a0e27] w-6 h-2" />
            <div className="bg-[#0a0e27] w-6 h-2" />
            <div className="bg-[#0a0e27] w-6 h-2" />
          </div>
          <div className="bg-[#0a0e27] flex justify-center items-center w-6 h-6">
            <Check className="size-4 text-[#fafafa]" strokeWidth={3} />
          </div>
        </div>
      </div>
      <div className="bg-[#0a0e27]/20 w-full h-px" />

      <div className="flex pt-24 flex-1 gap-12">
        {/* LEFT COLUMN */}
        <div className="w-[42%] flex flex-col">
          <div className="flex items-center gap-4">
            <div className="shrink-0 bg-[#FF4D00] w-3 h-3" />
            <span className="leading-none uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              ACCOUNT CREATED — 2026.07.23 — 14:48 UTC
            </span>
          </div>
          <div className="pt-6">
            <h1
              className="font-bold text-[#0a0e27] text-[88px] leading-21 tracking-[-0.64px]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              YOUR CARD
              <br />
              IS READY.
            </h1>
          </div>
          <div className="max-w-[50ch] pt-6">
            <p className="text-[#0a0e27]/70 text-base leading-6">
              Your digital card is live and ready to use. We've sent the card
              details and a welcome guide to your inbox.
            </p>
          </div>

          {/* Summary panel */}
          <div className="pt-8">
            <div className="border-[#0a0e27] border-2 border-solid flex p-6 flex-col gap-4">
              <div className="items-baseline flex justify-between">
                <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  ORDER CONFIRMATION
                </span>
                <span className="uppercase text-[#0a0e27]/70 text-[11px]">
                  #A1B2-C3D4-E5F6
                </span>
              </div>
              <div className="bg-[#0a0e27]/20 w-full h-px" />
              <div className="flex flex-col">
                {SUMMARY_ROWS.map(([k, v], idx) => (
                  <div
                    key={k}
                    className={`border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex justify-between items-center h-8 ${
                      idx === SUMMARY_ROWS.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <span className="w-1/3 uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                      {k}
                    </span>
                    <div className="bg-[#0a0e27]/20 w-px h-full" />
                    <span
                      className={`w-2/3 text-right text-[#0a0e27] text-sm leading-5 ${
                        k === "CARD NUMBER"
                          ? "font-bold text-base"
                          : ""
                      }`}
                      style={
                        k === "CARD NUMBER"
                          ? { fontFamily: "var(--font-space-grotesk)" }
                          : undefined
                      }
                    >
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-8">
            <Link
              href="/dashboard"
              className="font-bold uppercase shadow-[8px_8px_0_0_#FF4D00] bg-[#0a0e27] text-[#fafafa] text-sm leading-5 flex justify-center items-center gap-3 w-full h-14 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              GO TO DASHBOARD
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Secondary actions */}
          <div className="flex pt-4 gap-4">
            <button className="w-1/2 font-bold uppercase text-[#0a0e27] text-[10px] leading-4 border-[#0a0e27] border-2 border-solid flex justify-center items-center gap-2 h-12 hover:bg-[#0a0e27]/5">
              <Download className="size-3 text-[#0a0e27]" />
              DOWNLOAD CARD
            </button>
            <button className="w-1/2 font-bold uppercase text-[#FF4D00] text-[10px] leading-4 border-[#FF4D00] border-2 border-solid flex justify-center items-center gap-2 h-12 hover:bg-[#ff4d00]/5">
              <Share2 className="size-3 text-[#FF4D00]" />
              SHARE REFERRAL
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[58%] flex flex-col">
          {/* Large card mockup */}
          <div
            className="relative shrink-0 shadow-[24px_24px_0_0_#FF4D00] bg-[#0a0e27] flex p-8 flex-col justify-between"
            style={{ width: "540px", height: "340px" }}
          >
            <div className="flex justify-between items-start">
              <span
                className="font-bold text-[#fafafa] text-3xl leading-9"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                CASHLESS
              </span>
              <div className="bg-[#FF4D00] w-8 h-8" />
            </div>
            <div className="flex justify-center items-center gap-4">
              {["4829", "0071", "4400", "0192"].map((g, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && <div className="bg-neutral-50/30 w-px h-6 mx-4" />}
                  <span className="font-mono text-[#fafafa] text-2xl leading-8">
                    {g}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1">
                <span
                  className="font-bold text-[#fafafa] text-lg leading-7"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  JORDAN RIVERA
                </span>
                <span className="uppercase text-[#FF4D00] text-[10px] tracking-[1.92px]">
                  A/C WORLDWIDE
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[#fafafa]/70 text-xs leading-4">12 / 28</span>
                <span
                  className="font-bold text-[#fafafa] text-lg leading-7"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  VISA
                </span>
              </div>
            </div>
          </div>

          {/* Protection rows */}
          <div className="flex pt-8 flex-col gap-4">
            {PROTECTION_ROWS.map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-4 h-6">
                <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-6 h-6">
                  <Icon className="size-3 text-[#fafafa]" />
                </div>
                <span className="text-[#0a0e27] text-[13px]">{text}</span>
              </div>
            ))}
          </div>

          {/* What's next panel */}
          <div className="pt-8">
            <div
              className="border-[#0a0e27] border-2 border-solid flex p-6 flex-col gap-4"
              style={{ width: "540px" }}
            >
              <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                WHAT'S NEXT
              </span>
              <div className="flex flex-col">
                {NEXT_STEPS.map((step, idx) => (
                  <div
                    key={step}
                    className={`border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex py-3 items-center gap-4 h-12 ${
                      idx === NEXT_STEPS.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-6 h-6">
                      <span
                        className="font-bold text-[#fafafa] text-sm leading-5"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {idx + 1}
                      </span>
                    </div>
                    <span className="text-[#0a0e27] text-[13px]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
