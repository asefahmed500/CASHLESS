import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Music,
  FileText,
  Repeat,
  BarChart2,
  Share2,
  EyeOff,
  AlertTriangle,
} from "lucide-react";

const DETAILS_ROWS = [
  ["MERCHANT", "SPOTIFY AB"],
  ["CATEGORY", "SUBSCRIPTION — MUSIC"],
  ["REFERENCE", "#SP-48-2026-0048"],
  ["CARD USED", "CASHLESS — **** 4829 (DIGITAL)"],
  ["TRANSACTION ID", "TXN-2026-0722-0048"],
  ["DATE — TIME", "2026.07.22 — 14:30 UTC"],
  ["LOCATION", "STOCKHOLM — SE (ONLINE)"],
];

const TIMELINE = [
  { label: "AUTHORIZED", time: "2026.07.22 — 14:30:08 UTC", done: true },
  { label: "SETTLED", time: "2026.07.22 — 14:30:11 UTC", done: false },
  { label: "POSTED", time: "2026.07.22 — 14:30:42 UTC", done: false },
];

const ACTIONS = [
  { label: "REPEAT PAYMENT", Icon: Repeat, danger: false },
  { label: "ADD TO BUDGET", Icon: BarChart2, danger: false },
  { label: "SHARE", Icon: Share2, danger: false },
  { label: "HIDE FROM LIST", Icon: EyeOff, danger: false },
  { label: "DISPUTE TRANSACTION", Icon: AlertTriangle, danger: true },
];

export default async function TransactionDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="font-mono bg-neutral-50 text-[#0a0e27] flex px-16 py-8 flex-col min-h-screen">
      {/* Top strip */}
      <div className="flex pb-3 justify-between items-end">
        <div className="flex items-end gap-4">
          <Link
            href="/"
            className="font-bold text-[#0a0e27] text-lg leading-7"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            CASHLESS
          </Link>
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            TRANSACTION — DETAILS
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            TXN-2026-0722-0048
          </span>
          <Link
            href="/dashboard"
            className="size-10 bg-[#0a0e27] flex justify-center items-center hover:bg-[#ff4d00] transition-colors"
            aria-label="Back to dashboard"
          >
            <ArrowLeft className="size-5 text-[#fafafa]" />
          </Link>
        </div>
      </div>

      <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex flex-1">
        {/* LEFT COLUMN (42%) */}
        <div className="w-[42%] border-t-0 border-r border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex pr-12 flex-col">
          <div className="flex pt-6 flex-col flex-1">
            <div className="flex items-center gap-4">
              <div className="size-3 bg-[#FF4D00]" />
              <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                EXPENSE — COMPLETED
              </span>
            </div>
            <div className="pt-3">
              <Link
                href="/dashboard"
                className="underline font-bold uppercase text-[#0a0e27] text-xs leading-4 hover:text-[#ff4d00]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                ← BACK TO TRANSACTIONS
              </Link>
            </div>
            <div className="pt-4">
              <h1
                className="font-bold text-[#0a0e27] text-[52px] leading-[49px] tracking-[-0.52px]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                SPOTIFY
                <br />
                PREMIUM
              </h1>
            </div>
            <div className="flex pt-3 items-center gap-3">
              <div className="size-6 bg-[#0a0e27] flex justify-center items-center">
                <Music className="size-3.5 text-[#fafafa]" />
              </div>
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                MONTHLY SUBSCRIPTION — MUSIC
              </span>
            </div>
            <div className="pt-6">
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                AMOUNT
              </span>
              <div className="pt-1">
                <span
                  className="font-bold text-[#0a0e27] text-[64px] leading-[58px] tracking-[-0.64px]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  −$9.99
                </span>
              </div>
              <div className="flex pt-2 items-center gap-2">
                <div className="size-3 bg-[#0a0e27]" />
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  RECURRING — MONTHLY — NEXT CHARGE 2026.08.22
                </span>
              </div>
            </div>
            <div className="border-[#0a0e27] border-2 border-solid mt-6 p-4 w-full">
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                STATUS — TIMELINE
              </span>
              <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 mt-2" />
              <div className="flex pt-2 flex-col">
                {TIMELINE.map((row) => (
                  <div
                    key={row.label}
                    className="border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex items-center gap-4 h-7 last:border-b-0"
                  >
                    <div
                      className={`size-3 shrink-0 ${
                        row.done ? "bg-[#0a0e27]" : "bg-transparent border border-[#0a0e27]/30"
                      }`}
                    />
                    <span className="font-mono uppercase text-[#0a0e27] text-xs leading-4 tracking-[1.92px]">
                      {row.label}
                    </span>
                    <span className="font-mono text-[#0a0e27]/70 text-xs leading-4 ml-auto">
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="pb-2">
            <Link
              href="/"
              className="cursor-pointer underline font-bold uppercase text-[#0a0e27] text-xs leading-4 hover:text-[#ff4d00]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              REPORT AN ISSUE →
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN (58%) */}
        <div className="w-[58%] flex pl-12 flex-col">
          <div className="flex pt-6 flex-col gap-5">
            {/* Details panel */}
            <div className="border-[#0a0e27] border-2 border-solid p-4 w-full">
              <div className="flex justify-between items-center h-6">
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  TRANSACTION DETAILS
                </span>
                <button
                  className="underline font-bold uppercase text-[#0a0e27] text-[11px] hover:text-[#ff4d00]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  COPY
                </button>
              </div>
              <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 mt-2" />
              <div className="flex pt-1 flex-col">
                {DETAILS_ROWS.map(([k, v]) => (
                  <div
                    key={k}
                    className="border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex items-center h-7 last:border-b-0"
                  >
                    <span className="w-[40%] font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                      {k}
                    </span>
                    <div className="bg-[#0a0e27]/20 w-px h-full" />
                    <span className="font-mono text-[#0a0e27] text-[13px] pl-4">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Receipt panel */}
            <div className="border-[#0a0e27] border-2 border-solid p-4 w-full">
              <div className="flex justify-between items-center">
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  RECEIPT
                </span>
                <span
                  className="font-bold uppercase text-[#FF4D00] text-[11px]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  AVAILABLE
                </span>
              </div>
              <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 mt-2" />
              <div className="flex pt-3 gap-4">
                <div className="shrink-0 border-[#0a0e27] border-2 border-solid flex flex-col justify-center items-center w-24 h-32">
                  <FileText className="size-5 text-[#0a0e27]" />
                  <span
                    className="font-bold uppercase text-[#0a0e27] text-xs leading-4 pt-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    PDF
                  </span>
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px] pt-1">
                    1 PAGE — 48KB
                  </span>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <button className="shadow-[4px_4px_0_#FF4D00] bg-[#0a0e27] flex justify-center items-center gap-2 h-10 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform">
                    <span
                      className="font-bold uppercase text-[#fafafa] text-xs leading-4"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      VIEW FULL RECEIPT
                    </span>
                    <ArrowRight className="size-4 text-[#fafafa]" />
                  </button>
                  <button className="bg-transparent border-[#0a0e27] border-2 border-solid flex justify-center items-center h-10 hover:bg-[#0a0e27]/5 transition-colors">
                    <span
                      className="font-bold uppercase text-[#0a0e27] text-xs leading-4"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      DOWNLOAD PDF
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Actions panel */}
            <div className="border-[#0a0e27] border-2 border-solid p-4 w-full">
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] flex items-center h-6">
                ACTIONS
              </span>
              <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 mt-2" />
              <div className="grid grid-cols-2 pt-3 gap-3">
                {ACTIONS.map(({ label, Icon, danger }) => (
                  <button
                    key={label || "hide"}
                    className={`bg-transparent ${
                      danger ? "border-[#FF4D00]" : "border-[#0a0e27]"
                    } border-2 border-solid flex px-4 items-center gap-3 h-11 hover:bg-[#0a0e27]/5 transition-colors text-left`}
                  >
                    <div className="size-6 shrink-0 bg-[#0a0e27] flex justify-center items-center">
                      <Icon className="size-3.5 text-[#fafafa]" />
                    </div>
                    <span
                      className="font-bold uppercase text-[#0a0e27] text-[13px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
