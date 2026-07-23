import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  LayoutGrid,
  CreditCard,
  Receipt,
  PieChart,
  Settings as SettingsIcon,
  Send,
  Wallet,
  Plus,
  Snowflake,
} from "lucide-react";
import Footer from "./_components/Footer";

const PARTNERS = [
  { name: "VISA", cat: "CARD NETWORK", hasIcon: true, underline: true },
  { name: "MASTERCARD", cat: "CARD NETWORK", hasIcon: "mc" },
  { name: "WISE", cat: "CROSS-BORDER" },
  { name: "STRIPE", cat: "PROCESSING" },
  { name: "APPLE PAY", cat: "WALLET" },
];

const WEEK_BARS = [
  { day: "MON", h: "h-4" },
  { day: "TUE", h: "h-6" },
  { day: "WED", h: "h-3" },
  { day: "THU", h: "h-12" },
  { day: "FRI", h: "h-2" },
  { day: "SAT", h: "h-8" },
  { day: "SUN", h: "h-6" },
];

const SIDEBAR_ITEMS = [
  { label: "OVERVIEW", Icon: LayoutGrid, active: true },
  { label: "CARDS", Icon: CreditCard },
  { label: "TRANSFERS", Icon: ArrowRight },
  { label: "BILLS", Icon: Receipt },
  { label: "BUDGETS", Icon: PieChart },
  { label: "SETTINGS", Icon: SettingsIcon },
];

export default function Home() {
  return (
    <div className="bg-white text-neutral-950 w-full">
      {/* HERO SECTION (Screen 1) */}
      <section className="relative bg-[linear-gradient(180deg,#fafafa_0%,#f4f4f0_100%)] text-[#0a0e27] w-full overflow-hidden">
        <div className="min-h-[1024px] flex flex-col">
          {/* Top nav */}
          <div className="z-30 bg-neutral-50 flex px-12 justify-between items-center w-full h-16">
            <span
              className="font-bold text-[#0a0e27] text-lg leading-7"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                letterSpacing: "-0.5px",
              }}
            >
              CASHLESS.
            </span>
            <div className="flex items-center gap-8">
              {["PRODUCT", "FEATURES"].map((label) => (
                <Link
                  key={label}
                  href="/"
                  className="font-mono uppercase text-[#0a0e27] text-xs leading-4 tracking-[1.2px] hover:text-[#ff4d00]"
                >
                  {label}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-1">
                <Link
                  href="/"
                  className="font-mono uppercase text-[#0a0e27] text-xs leading-4 tracking-[1.2px] hover:text-[#ff4d00]"
                >
                  PRICING
                </Link>
                <div className="bg-[#0a0e27] w-full h-px" />
              </div>
              {["SECURITY", "DOCS"].map((label) => (
                <Link
                  key={label}
                  href="/"
                  className="font-mono uppercase text-[#0a0e27] text-xs leading-4 tracking-[1.2px] hover:text-[#ff4d00]"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/signup"
                className="font-mono uppercase text-[#0a0e27] text-xs leading-4 tracking-[1.2px] hover:text-[#ff4d00]"
              >
                SIGN IN
              </Link>
              <Link
                href="/signup"
                className="relative font-bold uppercase shadow-[4px_4px_0_0_#FF4D00] rounded-full bg-[#0a0e27] text-[#fafafa] text-xs leading-4 tracking-[1.2px] flex px-5 justify-center items-center gap-2 h-9 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#FF4D00] transition-all"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="leading-none">GET STARTED</span>
                <ArrowRight className="size-3.5 shrink-0" />
              </Link>
            </div>
          </div>
          <div className="z-30 bg-[#0a0e27]/20 w-full h-px" />

          {/* Structural hairlines */}
          <div className="left-[55%] z-10 border-t-0 border-r-0 border-b-0 border-l border-solid border-[#0a0e27]/20 absolute top-16 bottom-0" />
          <div className="z-10 border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 absolute inset-x-0 top-[128px]" />
          <div className="left-[60%] z-10 border-t-0 border-r-0 border-b-0 border-l border-solid border-[#0a0e27]/20 absolute top-16 bottom-0" />

          {/* Hero content */}
          <div className="relative flex px-16 pt-24 pb-16 items-center w-full flex-1">
            <div className="flex items-center gap-12 w-full">
              {/* LEFT */}
              <div className="basis-[58%] flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <div className="inline-flex bg-neutral-50 border border-[#0a0e27] px-4 py-1.5 items-center gap-2">
                    <span className="leading-none font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.28px]">
                      Trusted by 500,000+ people worldwide
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h1
                    className="max-w-[640px] font-bold text-[#0a0e27] text-8xl leading-[91px]"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      letterSpacing: "-3.84px",
                    }}
                  >
                    YOUR CARD.
                    <br />
                    YOUR RULES.
                    <br />
                    ZERO BANK.
                  </h1>
                  <p className="max-w-[480px] font-mono text-[#0a0e27]/70 text-lg leading-[27px]">
                    Send, spend, and shop across 180+ countries — instantly and
                    securely.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href="/signup"
                    className="relative shadow-[8px_8px_0_0_#FF4D00] bg-[#0a0e27] text-[#fafafa] flex px-8 items-center gap-3 h-14 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
                  >
                    <div className="size-4 shrink-0 flex justify-center items-center">
                      <ArrowRight className="size-4 shrink-0" />
                    </div>
                    <span
                      className="leading-none font-bold uppercase text-sm leading-5 tracking-[1.28px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      GET STARTED
                    </span>
                  </Link>
                  <Link
                    href="#trust"
                    className="bg-transparent font-bold uppercase shadow-none text-[#0a0e27] text-sm leading-5 tracking-[1.28px] border-[#0a0e27] border-2 border-solid flex px-8 items-center gap-3 h-14 hover:bg-[#0a0e27] hover:text-[#fafafa] transition-colors"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    <div className="size-4 shrink-0 flex justify-center items-center">
                      <FileText className="size-4 shrink-0" />
                    </div>
                    <span className="leading-none">READ THE BRIEF</span>
                  </Link>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#0a0e27]" />
                    <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[0.64px]">
                      PCI DSS COMPLIANT
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-[#0a0e27]" />
                    <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[0.64px]">
                      BANK-GRADE ENCRYPTION
                    </span>
                  </div>
                </div>

                <div className="max-w-[560px] bg-[#0a0e27]/20 w-full h-px" />

                {/* Partner wordmarks */}
                <div className="max-w-[700px] flex flex-row flex-nowrap items-end gap-6 overflow-hidden">
                  <div className="shrink-0 whitespace-nowrap flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="size-4 shrink-0 bg-[#0a0e27] flex justify-center items-center">
                        <span
                          className="font-bold text-[#fafafa] text-[10px]"
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          V
                        </span>
                      </div>
                      <span
                        className="font-bold uppercase text-[#0a0e27] text-xs leading-4 tracking-[0.48px]"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        VISA
                      </span>
                    </div>
                    <div className="bg-[#0a0e27] w-full h-px" />
                  </div>
                  <div className="shrink-0 whitespace-nowrap flex items-center gap-2">
                    <div className="relative shrink-0 flex items-center w-5 h-3">
                      <div className="size-3 bg-[#0a0e27] absolute left-0 top-0" />
                      <div className="size-3 bg-[#0a0e27] absolute left-2 top-0" />
                    </div>
                    <span
                      className="font-bold uppercase text-[#0a0e27] text-xs leading-4 tracking-[0.48px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      MASTERCARD
                    </span>
                  </div>
                  {["WISE", "STRIPE", "APPLE PAY"].map((p) => (
                    <span
                      key={p}
                      className="font-bold uppercase text-[#0a0e27] text-xs leading-4 tracking-[0.48px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — Card mockup */}
              <div className="relative basis-[42%] flex justify-center items-center h-[560px]">
                <div
                  className="relative z-10 bg-[linear-gradient(135deg,#0a0e27_0%,#1a1f3a_100%)] shadow-[16px_16px_0_0_#FF4D00] border-[#0a0e27] border-2 border-solid flex p-8 flex-col justify-between overflow-hidden"
                  style={{ width: "480px", height: "300px", transform: "rotate(12deg)" }}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className="font-bold text-[#fafafa] text-2xl leading-8"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      CASHLESS
                    </span>
                    <div className="size-6 shrink-0 bg-[#FF4D00]" />
                  </div>
                  <div className="flex justify-center items-center gap-3">
                    {["4829", "0071", "4400", "0192"].map((group, i) => (
                      <div key={i} className="flex items-center">
                        {i > 0 && <div className="bg-neutral-50/30 w-px h-4 mx-3" />}
                        <span className="font-mono text-[#fafafa]/60 text-lg leading-6 tracking-widest">
                          {group}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-mono uppercase text-[#FF4D00] text-[10px] tracking-[1.2px]">
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
          </div>

          {/* BETA stamp */}
          <div className="z-20 bg-neutral-50 border border-[#0a0e27] flex absolute right-16 bottom-16 px-3 py-1.5 items-center gap-2">
            <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-wider">
              BETA 0.1
            </span>
          </div>
        </div>
      </section>

      {/* TRUST + DEMO BODY (Screen 10) */}
      <section
        id="trust"
        className="bg-[linear-gradient(180deg,#fafafa_0%,#f0f0ec_100%)] font-mono text-[#0a0e27] flex px-16 py-12 flex-col"
      >
        {/* Section header */}
        <div className="flex justify-between items-center h-12">
          <div className="flex items-center gap-4">
            <span
              className="font-bold text-[#0a0e27] text-lg leading-7"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              CASHLESS.
            </span>
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              SECTION 02 — TRUST
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
              02 / 03
            </span>
          </div>
        </div>
        <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

        {/* Trust block */}
        <div className="flex mt-8 flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              TRUSTED WORLDWIDE
            </span>
          </div>
          <div className="text-center mt-2">
            <h1
              className="font-bold text-[#0a0e27] text-4xl leading-[34px] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              BUILT ON
              <br />
              TRUST.
            </h1>
          </div>

          {/* Partner grid */}
          <div className="flex mt-6 gap-4 w-full">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="border-[#0a0e27] border-2 border-solid flex p-2 flex-col justify-center items-center flex-1 h-14"
              >
                <div className="flex items-center gap-2">
                  {p.hasIcon === true && (
                    <div className="size-4 shrink-0 bg-[#0a0e27] flex justify-center items-center">
                      <span
                        className="font-bold text-[#fafafa] text-[10px]"
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        V
                      </span>
                    </div>
                  )}
                  {p.hasIcon === "mc" && (
                    <div className="relative shrink-0 flex items-center w-5 h-3">
                      <div className="size-3 bg-[#0a0e27] absolute left-0 top-0" />
                      <div className="size-3 bg-[#0a0e27] absolute left-2 top-0" />
                    </div>
                  )}
                  <span
                    className="font-bold uppercase text-[#0a0e27] text-xl leading-6"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {p.name}
                  </span>
                </div>
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px] mt-1">
                  {p.cat}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 w-full">
          <div className="bg-[#0a0e27] w-3 h-3" />
        </div>

        {/* Live preview mockup */}
        <div className="mt-6">
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            LIVE PREVIEW — YOUR CARD IN CONTEXT
          </span>
          <div className="border-[#0a0e27] border-2 border-solid flex mt-3 flex-col overflow-hidden">
            {/* Browser chrome */}
            <div className="shrink-0 bg-[linear-gradient(180deg,#f5f5f2_0%,#e8e8e3_100%)] border-t-0 border-r-0 border-b-2 border-l-0 border-solid border-[#0a0e27] flex px-4 items-center gap-4 h-8">
              <div className="flex items-center gap-1.5">
                <div className="bg-[#0a0e27] w-3 h-3" />
                <div className="bg-[#0a0e27] w-3 h-3" />
                <div className="bg-[#FF4D00] w-12 h-3" />
              </div>
              <div className="border border-[#0a0e27]/30 flex px-3 items-center w-72 h-5">
                <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px]">
                  APP.CASHLESS.CARD/DASHBOARD
                </span>
              </div>
              <div className="bg-[#0a0e27] flex ml-auto justify-center items-center w-6 h-6">
                <span
                  className="font-bold text-[#fafafa] text-[9px]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  JR
                </span>
              </div>
            </div>

            {/* Content area */}
            <div className="bg-[linear-gradient(180deg,#fafafa_0%,#f5f5f0_100%)] flex flex-1">
              {/* Sidebar */}
              <div className="w-[20%] flex p-3 flex-col gap-1">
                <div className="flex mb-2 items-center gap-2">
                  <div className="bg-[#0a0e27] flex justify-center items-center w-8 h-8">
                    <span
                      className="font-bold text-[#fafafa] text-xs leading-4"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      C
                    </span>
                  </div>
                  <span
                    className="font-bold text-[#0a0e27] text-[9px] leading-4"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    CASHLESS
                  </span>
                </div>
                {SIDEBAR_ITEMS.map(({ label, Icon, active }) => (
                  <div
                    key={label}
                    className={`relative flex pl-2 items-center gap-2 h-8 ${
                      active ? "bg-[#0a0e27]/5" : ""
                    }`}
                  >
                    {active && (
                      <div
                        className="absolute left-0 inset-y-0 w-1"
                        style={{
                          background:
                            "linear-gradient(180deg, #FF4D00 0%, #cc3300 100%)",
                        }}
                      />
                    )}
                    <Icon
                      className={`size-3.5 ${active ? "text-[#0a0e27]" : "text-[#0a0e27]/70"}`}
                    />
                    <span
                      className={`font-mono uppercase text-[9px] tracking-[1px] ${
                        active ? "text-[#0a0e27]" : "text-[#0a0e27]/70"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="shrink-0 bg-[#0a0e27]/20 w-px" />

              {/* Center */}
              <div className="w-[50%] flex p-4 flex-col gap-3">
                <div>
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.5px]">
                    WELCOME BACK, JORDAN
                  </span>
                  <div className="items-baseline flex mt-1 gap-2">
                    <span
                      className="font-bold text-[#0a0e27] text-[28px] leading-8"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      $12,482.50
                    </span>
                    <span className="font-mono text-[#0a0e27]/50 text-[10px]">
                      TOTAL BALANCE
                    </span>
                  </div>
                </div>

                {/* Weekly spending chart */}
                <div className="border border-[#0a0e27]/20 p-3">
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px]">
                    WEEKLY SPENDING
                  </span>
                  <div className="flex mt-2 items-end gap-2 h-16">
                    {WEEK_BARS.map(({ day, h }) => (
                      <div key={day} className="flex flex-col items-center flex-1 gap-1">
                        <div
                          className={`w-full ${h}`}
                          style={{
                            background:
                              "linear-gradient(180deg, #0a0e27 0%, #2a2f4a 100%)",
                          }}
                        />
                        <span className="font-mono text-[#0a0e27]/60 text-[8px]">
                          {day}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex gap-2">
                  {[
                    { label: "SEND", Icon: Send },
                    { label: "PAY", Icon: Wallet },
                    { label: "TOP UP", Icon: Plus },
                    { label: "FREEZE", Icon: Snowflake },
                  ].map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="border border-[#0a0e27]/20 flex flex-col justify-center items-center flex-1 gap-1 h-12"
                    >
                      <Icon className="size-3.5 text-[#0a0e27]" />
                      <span className="font-mono uppercase text-[#0a0e27] text-[8px] tracking-[1px]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Recent transactions */}
                <div className="flex flex-col">
                  <div className="flex mb-1 justify-between items-center">
                    <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px]">
                      RECENT TRANSACTIONS
                    </span>
                    <span
                      className="underline font-mono uppercase text-[#0a0e27] text-[9px]"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      VIEW ALL →
                    </span>
                  </div>
                  {[
                    { name: "MERCHANT 01", amount: "$-9.99", positive: false },
                    { name: "SALARY", amount: "$+2,400.00", positive: true },
                    { name: "MERCHANT 02", amount: "$-14.50", positive: false },
                  ].map((t, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center h-7 border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 ${
                        idx === 2 ? "border-b-0" : ""
                      }`}
                    >
                      <div className="bg-[#0a0e27] w-4 h-4" />
                      <span className="font-mono uppercase text-[#0a0e27] text-[10px] ml-2">
                        {t.name}
                      </span>
                      <span
                        className={`font-mono text-[10px] ml-auto ${
                          t.positive ? "text-[#FF4D00]" : "text-[#0a0e27]"
                        }`}
                      >
                        {t.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 bg-[#0a0e27]/20 w-px" />

              {/* Right rail */}
              <div className="w-[30%] flex p-4 flex-col gap-3">
                {/* Mini card mockup */}
                <div
                  className="relative shadow-[6px_6px_0_0_#FF4D00] border-[#0a0e27] border-2 border-solid flex p-2 flex-col justify-between w-full h-20"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2a2f4a 100%)",
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className="font-bold text-[#fafafa] text-[9px] leading-4"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      CASHLESS
                    </span>
                    <div className="bg-[#FF4D00] w-2 h-2" />
                  </div>
                  <span className="font-mono text-[#fafafa]/70 text-[9px] leading-4">
                    4829 0071 4400 0192
                  </span>
                  <div className="flex justify-between items-end">
                    <span className="font-mono uppercase text-[#fafafa]/80 text-[7px]">
                      JORDAN RIVERA
                    </span>
                    <span
                      className="font-bold text-[#fafafa] text-[7px] leading-3"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      VISA
                    </span>
                  </div>
                </div>

                {/* Budget panel */}
                <div className="border border-[#0a0e27]/20 flex p-3 flex-col gap-2">
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px]">
                    BUDGET
                  </span>
                  <div className="items-baseline flex justify-between">
                    <span
                      className="font-bold text-[#0a0e27] text-sm leading-5"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      $820 / $1,200
                    </span>
                    <span className="font-mono text-[#0a0e27]/50 text-[8px]">
                      68%
                    </span>
                  </div>
                  <div className="bg-[#0a0e27]/10 w-full h-1.5">
                    <div
                      className="h-1.5"
                      style={{
                        width: "68%",
                        background:
                          "linear-gradient(90deg, #0a0e27 0%, #FF4D00 100%)",
                      }}
                    />
                  </div>
                </div>

                {/* Cards panel */}
                <div className="border border-[#0a0e27]/20 flex p-3 flex-col gap-2">
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1.5px]">
                    CARDS
                  </span>
                  <div className="flex justify-between items-center h-6">
                    <span className="font-mono uppercase text-[#0a0e27] text-[9px]">
                      DIGITAL •••• 0192
                    </span>
                    <div
                      className="w-2 h-2"
                      style={{
                        background:
                          "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #2a2f4a 100%)",
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center h-6">
                    <span className="font-mono uppercase text-[#0a0e27]/70 text-[9px]">
                      PHYSICAL •••• 7743
                    </span>
                    <div className="border border-[#0a0e27]/30 w-2 h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
