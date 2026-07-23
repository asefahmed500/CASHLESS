import Link from "next/link";
import {
  Search,
  Bell,
  Settings,
  ArrowLeftRight,
  FileCheck,
  CirclePlus,
  Snowflake,
  Music,
  ShoppingCart,
  Briefcase,
  Car,
  RotateCcw,
} from "lucide-react";

const QUICK_ACTIONS = [
  { label: "SEND", sublabel: "TO ANYONE", Icon: ArrowLeftRight, danger: false, href: "/transfer/success" },
  { label: "PAY BILL", sublabel: "UTILITIES — RENT", Icon: FileCheck, danger: false, href: "/transactions/1" },
  { label: "TOP UP", sublabel: "ADD FUNDS", Icon: CirclePlus, danger: false, href: "/signup/card" },
  { label: "FREEZE", sublabel: "LOCK CARD", Icon: Snowflake, danger: true, href: "/transactions/1" },
];

const TRANSACTIONS = [
  { merchant: "SPOTIFY PREMIUM", category: "SUBSCRIPTION", date: "2026.07.22", amount: "−$9.99", positive: false, Icon: Music },
  { merchant: "WHOLE FOODS MARKET", category: "GROCERIES", date: "2026.07.21", amount: "−$82.40", positive: false, Icon: ShoppingCart },
  { merchant: "SALARY — ACME CORP", category: "INCOME", date: "2026.07.20", amount: "+$4,200.00", positive: true, Icon: Briefcase },
  { merchant: "UBER TRIP", category: "TRANSPORT", date: "2026.07.20", amount: "−$14.50", positive: false, Icon: Car },
  { merchant: "REFUND — AMAZON", category: "REFUND", date: "2026.07.19", amount: "+$32.99", positive: true, Icon: RotateCcw },
];

const SPENDING_ROWS = [
  { label: "GROCERIES", amount: "$482.20", color: "bg-[#0a0e27]" },
  { label: "TRANSPORT", amount: "$318.40", color: "bg-[#0a0e27]/50" },
  { label: "DINING", amount: "$240.00", color: "bg-[#FF4D00]" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50 text-[#0a0e27] p-16 w-full">
      <div className="flex flex-col">
        {/* Top strip */}
        <div className="flex pb-6 justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-bold text-lg leading-7 tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              CASHLESS
            </Link>
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              DASHBOARD
            </span>
          </div>
          <div className="border-[#0a0e27] border-2 border-solid flex px-3 items-center gap-2 w-80 h-10">
            <Search className="size-4 shrink-0 text-[#0a0e27]" />
            <input
              placeholder="SEARCH — TRANSACTIONS — PEOPLE — MERCHANTS"
              className="bg-transparent outline-none font-mono uppercase text-[#0a0e27]/40 text-[11px] tracking-[1.92px] w-full h-full"
              defaultValue=""
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-[#0a0e27] flex justify-center items-center w-10 h-10 hover:bg-[#ff4d00] transition-colors">
              <Bell className="size-5 text-[#fafafa]" />
            </button>
            <button className="bg-[#0a0e27] flex justify-center items-center w-10 h-10 hover:bg-[#ff4d00] transition-colors">
              <Settings className="size-5 text-[#fafafa]" />
            </button>
            <button className="bg-[#FF4D00] flex justify-center items-center w-10 h-10">
              <span
                className="font-bold text-center text-[#fafafa] text-sm leading-5"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                JR
              </span>
            </button>
          </div>
        </div>

        <div className="bg-[#0a0e27]/20 w-full h-px" />

        <div className="flex pt-12">
          {/* LEFT COLUMN (68%) */}
          <div className="w-[68%] border-t-0 border-r-2 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex pr-12 flex-col">
            {/* Welcome + balance row */}
            <div className="flex gap-8">
              <div className="w-[55%] flex flex-col">
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  WELCOME BACK
                </span>
                <span
                  className="leading-none font-bold text-[28px] mt-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  JORDAN RIVERA
                </span>
                <div className="bg-[#0a0e27]/20 mt-12 w-full h-px" />
                <div className="flex mt-6 flex-col">
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                    TOTAL BALANCE
                  </span>
                  <span
                    className="leading-none font-bold text-[64px] tracking-[-0.48px] mt-1"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    $12,482.50
                  </span>
                  <div className="flex mt-2 items-center gap-2">
                    <div className="bg-[#0a0e27] flex justify-center items-center w-3 h-3">
                      <span className="text-[6px] leading-none text-[#fafafa]">▲</span>
                    </div>
                    <span className="font-mono uppercase text-[11px] tracking-[1.92px]">
                      +$482.20 THIS MONTH
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[45%] relative flex pt-2 justify-center items-start">
                <div className="relative shadow-[12px_12px_0_0_#FF4D00] bg-[#0a0e27] border-[#0a0e27] border-2 border-solid flex p-4 flex-col justify-between w-[300px] h-[190px]">
                  <div className="flex justify-between items-start relative">
                    <span
                      className="font-bold text-[#fafafa] text-lg leading-7"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      CASHLESS
                    </span>
                    <div className="bg-[#FF4D00] absolute right-0 top-0 w-1.5 h-1.5" />
                  </div>
                  <div className="font-mono text-center text-[#fafafa]/70 text-sm leading-5">
                    **** 4829
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-mono uppercase text-[#fafafa]/80 text-[10px]">
                      JORDAN RIVERA
                    </span>
                    <span
                      className="font-bold text-[#fafafa] text-xs leading-4"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      VISA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0e27]/20 mt-12 w-full h-px" />

            {/* Quick actions */}
            <div className="flex mt-8 flex-col">
              <div className="flex justify-between items-center">
                <span className="font-mono uppercase text-[11px] tracking-[1.92px]">
                  QUICK ACTIONS
                </span>
                <Link
                  href="/"
                  className="underline font-bold uppercase text-[11px] hover:text-[#ff4d00]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  VIEW ALL →
                </Link>
              </div>
              <div className="grid grid-cols-4 mt-4 gap-4">
                {QUICK_ACTIONS.map(({ label, sublabel, Icon, danger, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className={`${
                      danger ? "" : "border-[#0a0e27] border-2 border-solid"
                    } flex p-4 flex-col justify-between h-24 text-left hover:bg-[#0a0e27]/5 transition-colors`}
                    style={danger ? { border: "2px solid #FF4D00" } : undefined}
                  >
                    <div className="bg-[#0a0e27] flex justify-center items-center w-8 h-8">
                      <Icon className="size-[18px] text-[#fafafa]" />
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="font-bold uppercase text-sm leading-5 text-[#0a0e27]"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {label}
                      </span>
                      <span className="font-mono uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px] mt-1">
                        {sublabel}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-[#0a0e27]/20 mt-12 w-full h-px" />

            {/* Recent transactions */}
            <div className="flex mt-8 flex-col">
              <div className="flex justify-between items-center">
                <span className="font-mono uppercase text-[11px] tracking-[1.92px]">
                  RECENT TRANSACTION
                </span>
                <Link
                  href="/"
                  className="underline font-bold uppercase text-[11px] hover:text-[#ff4d00]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  VIEW ALL →
                </Link>
              </div>
              <div className="flex mt-4 flex-col">
                {TRANSACTIONS.map(({ merchant, category, date, amount, positive, Icon }, idx) => (
                  <Link
                    key={merchant}
                    href={`/transactions/${idx + 1}`}
                    className={`border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex items-center gap-4 h-14 hover:bg-[#0a0e27]/5`}
                  >
                    <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-10 h-10">
                      <Icon className="size-5 text-[#fafafa]" />
                    </div>
                    <div className="min-w-0 flex flex-col">
                      <span
                        className="truncate font-bold text-sm leading-5"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {merchant}
                      </span>
                      <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                        {category}
                      </span>
                    </div>
                    <span className="whitespace-nowrap font-mono uppercase text-[#0a0e27]/70 text-[11px] ml-auto">
                      {date}
                    </span>
                    <span
                      className={`shrink-0 font-bold text-right text-base leading-6 ml-4 w-24 ${
                        positive ? "text-[#FF4D00]" : "text-[#0a0e27]"
                      }`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {amount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (32%) */}
          <div className="w-[32%] flex pl-12 flex-col gap-8">
            {/* Spending panel */}
            <div className="border-[#0a0e27] border-2 border-solid flex p-6 flex-col">
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                SPENDING — JUL 2026
              </span>
              <span
                className="font-bold text-[32px] mt-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                $1,248.40
              </span>
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px] mt-2">
                OF $2,000 BUDGET
              </span>
              <div className="border-[#0a0e27] border-2 border-solid mt-4 p-0 w-full h-4">
                <div className="w-[62%] bg-[#0a0e27] h-full" />
              </div>
              <div className="flex mt-6 flex-col">
                {SPENDING_ROWS.map(({ label, amount, color }, idx) => (
                  <div
                    key={label}
                    className={`border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex items-center h-6 ${
                      idx === 0 ? "border-t-1" : ""
                    }`}
                  >
                    <div className={`shrink-0 ${color} w-2 h-2`} />
                    <span className="font-mono uppercase text-[11px] tracking-[1.92px] ml-2">
                      {label}
                    </span>
                    <span
                      className="font-mono text-xs leading-4 ml-auto"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                    >
                      {amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards panel */}
            <div className="border-[#0a0e27] border-2 border-solid flex p-6 flex-col">
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                YOUR CARDS — 02
              </span>
              <div className="flex mt-4 flex-col gap-3">
                {[
                  { name: "JORDAN R — DIGITAL", num: "**** 4829", active: true },
                  { name: "JORDAN R — PHYSICAL", num: "**** 7102", active: false },
                ].map((card) => (
                  <button
                    key={card.num}
                    className="cursor-pointer border-[#0a0e27] border-2 border-solid flex p-2 items-center h-14 hover:bg-[#0a0e27]/5 text-left"
                  >
                    <div className="relative shrink-0 bg-[#0a0e27] w-10 h-6">
                      <div className="bg-[#FF4D00] absolute right-0 top-0 w-1.5 h-1.5" />
                    </div>
                    <div className="min-w-0 flex ml-3 flex-col">
                      <span
                        className="truncate font-bold text-sm leading-5"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {card.name}
                      </span>
                      <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px]">
                        {card.num}
                      </span>
                    </div>
                    <span
                      className={`ml-auto w-3 h-3 ${
                        card.active ? "bg-[#0a0e27]" : "border border-[#0a0e27]/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <Link
                href="/signup/card"
                className="underline font-bold uppercase text-[11px] mt-4 hover:text-[#ff4d00]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                + ADD NEW CARD →
              </Link>
            </div>

            {/* Support panel */}
            <div className="border-[#0a0e27] border-2 border-solid flex p-6 flex-col">
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                NEED HELP?
              </span>
              <Link
                href="/"
                className="underline font-bold uppercase text-sm leading-5 mt-3 hover:text-[#ff4d00]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                CHAT WITH US →
              </Link>
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] mt-2">
                CALL +1 555 482 HELP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
