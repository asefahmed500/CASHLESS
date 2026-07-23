"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HelpCircle, MessageCircle } from "lucide-react";

export default function VerifyPage() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(["4", "8", "", "", "", ""]);
  const [activeIdx, setActiveIdx] = useState(2);
  const [secondsLeft, setSecondsLeft] = useState(48);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputs.current[2]?.focus();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) {
      inputs.current[i + 1]?.focus();
      setActiveIdx(i + 1);
    }
    if (next.every((d) => d)) {
      setTimeout(() => router.push("/signup/details"), 300);
    }
  };

  const handleKeyDown = (i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (otp[i]) {
        const next = [...otp];
        next[i] = "";
        setOtp(next);
      } else if (i > 0) {
        inputs.current[i - 1]?.focus();
        setActiveIdx(i - 1);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasted)) {
      setOtp(pasted.split(""));
      inputs.current[5]?.focus();
      setActiveIdx(5);
      setTimeout(() => router.push("/signup/details"), 300);
    }
  };

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, "0")}:${(s % 60).toString().padStart(2, "0")}`;

  const isComplete = otp.every((d) => d);
  const enteredCount = otp.filter((d) => d).length;

  return (
    <div className="relative font-mono bg-neutral-50 text-[#0a0e27] p-12 min-h-screen">
      {/* Top strip */}
      <div className="flex justify-between items-center h-8">
        <div className="items-baseline flex gap-4">
          <Link
            href="/"
            className="font-bold text-[#0a0e27] text-lg leading-7"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            CASHLESS.
          </Link>
          <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            STEP 02 / 04
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-[#0a0e27] w-3 h-3" />
            <div className="bg-[#0a0e27] w-3 h-3" />
            <div className="border border-[#0a0e27]/30 w-3 h-3" />
            <div className="border border-[#0a0e27]/30 w-3 h-3" />
          </div>
          <div className="border-[#0a0e27] border-2 border-solid flex flex-col justify-center items-center gap-1 w-16 h-16">
            <span className="uppercase text-[#0a0e27] text-[10px] tracking-[1.92px]">
              BETA
            </span>
            <span
              className="font-bold text-[#0a0e27] text-2xl leading-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              0.1
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

      <div className="flex relative">
        {/* LEFT COLUMN */}
        <div className="relative w-[42%] flex pr-12 pt-8 flex-col min-h-[760px]">
          <div className="items-baseline flex gap-2 w-full">
            <div className="bg-[#0a0e27] w-3 h-3" />
            <span className="uppercase text-[#0a0e27] text-[11px] leading-3 tracking-[1.92px]">
              OTP REQUIRED
            </span>
          </div>

          {/* CODE SENT TO panel */}
          <div className="border-[#0a0e27] border-2 border-solid flex mt-4 p-4 justify-between items-center w-full">
            <div className="flex flex-col gap-1">
              <span className="uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px]">
                CODE SENT TO
              </span>
              <span className="text-[#0a0e27] text-base">+1 555 482 9100</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px]">
                EXPIRES IN
              </span>
              <span
                className="font-bold text-[#FF4D00] text-lg leading-6"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                9:48
              </span>
            </div>
          </div>

          {/* Headline */}
          <div
            className="mt-6 w-full font-bold text-[#0a0e27]"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "52px",
              lineHeight: "49px",
              letterSpacing: "-0.32px",
            }}
          >
            <div>VERIFY</div>
            <div>YOUR</div>
            <div>PHONE.</div>
          </div>

          <div className="max-w-[42ch] text-[#0a0e27]/70 text-sm leading-6 mt-4 w-full">
            We sent a 6-digit code to{" "}
            <span className="text-[#0a0e27]">+1 555 482 9100</span>. It expires
            in 10 minutes.
          </div>

          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="border-[#0a0e27] border-2 border-solid flex mt-4 justify-center items-center gap-2 w-full h-12 hover:bg-[#0a0e27]/5 transition-colors"
          >
            <span
              className="font-bold uppercase text-[#0a0e27] text-xs leading-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              ← EDIT PHONE NUMBER
            </span>
          </button>

          {/* Bottom-pinned help block */}
          <div className="absolute left-0 bottom-8 mt-auto pr-12 w-full">
            <div className="border-[#0a0e27] border-2 border-solid flex justify-center items-center w-10 h-10">
              <HelpCircle className="size-5 text-[#0a0e27]" />
            </div>
            <div className="mt-3">
              <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                NEED HELP?
              </span>
            </div>
            <div className="mt-1">
              <a
                href="mailto:support@cashless.app"
                className="lowercase text-[#0a0e27] text-[11px] hover:text-[#ff4d00]"
              >
                support@cashless.app
              </a>
            </div>
          </div>
        </div>

        {/* Vertical divider */}
        <div className="relative bg-[#0a0e27]/20 w-px" />

        {/* RIGHT COLUMN */}
        <div className="relative w-[58%] flex pl-12 pt-8 flex-col">
          {/* OTP boxes */}
          <div className="grid grid-cols-6 gap-2 w-fit">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el) => {
                  inputs.current[i] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={handlePaste}
                onFocus={() => setActiveIdx(i)}
                className={`flex justify-center items-center w-16 h-16 text-center font-bold text-[#0a0e27] text-2xl border-2 transition-colors focus:outline-none bg-transparent ${
                  activeIdx === i ? "border-[#FF4D00]" : "border-[#0a0e27]"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              />
            ))}
          </div>

          {/* Hint */}
          <div className="mt-3">
            <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              ENTER THE 6-DIGIT CODE — AUTO-SUBMITS ON COMPLETE
            </span>
          </div>
          <div className="mt-2">
            <span className="text-[#0a0e27]/50 text-[11px] leading-4">
              Use your keyboard to type, or paste the full code — it will
              auto-fill each box.
            </span>
          </div>

          <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

          {/* Timer + Resend bar */}
          <div className="grid grid-cols-2 border-[#0a0e27] border-2 border-solid mt-4 w-full h-16">
            <div className="border-t-0 border-r border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex flex-col justify-center items-center gap-1 h-full">
              <span className="leading-none uppercase text-[#0a0e27]/70 text-[10px] tracking-[1.92px]">
                RESEND IN
              </span>
              <span
                className="leading-none font-bold text-[#FF4D00] text-3xl leading-9"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {formatTime(secondsLeft)}
              </span>
            </div>
            <div className="relative flex justify-center items-center h-full overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, #0a0e27 0px, #0a0e27 1px, transparent 1px, transparent 8px)",
                }}
              />
              <button
                type="button"
                disabled={secondsLeft > 0}
                onClick={() => setSecondsLeft(60)}
                className={`relative leading-none font-bold uppercase text-xs ${
                  secondsLeft > 0
                    ? "text-[#0a0e27]/40 cursor-not-allowed"
                    : "text-[#0a0e27] underline"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                RESEND CODE
              </button>
            </div>
          </div>

          {/* Verify button — guaranteed-visible text */}
          <button
            onClick={() => router.push("/signup/details")}
            disabled={!isComplete}
            className={`font-bold uppercase bg-[#0a0e27] flex justify-center items-center gap-3 w-full h-14 mt-6 transition-all shadow-[4px_4px_0_#FF4D00] ${
              isComplete
                ? "hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0_#FF4D00] cursor-pointer"
                : "cursor-not-allowed"
            }`}
            style={{
              fontFamily: "var(--font-space-grotesk)",
              color: "#fafafa",
              fontSize: "14px",
              letterSpacing: "0.08em",
              opacity: isComplete ? 1 : 0.95,
            }}
          >
            <span style={{ color: "#fafafa" }}>VERIFY</span>
            <span style={{ color: "#fafafa" }}>→</span>
          </button>

          <div className="mt-2">
            <span className="uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
              {enteredCount} OF 6 DIGITS ENTERED
            </span>
          </div>

          <div className="bg-[#0a0e27]/20 mt-4 w-full h-px" />

          {/* Fine print */}
          <div className="grid grid-cols-2 mt-2">
            <button className="text-left border-t-0 border-r border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex pr-6 py-1 flex-col justify-center gap-1 hover:bg-[#0a0e27]/5">
              <div className="uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
                NEED HELP?
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="size-3 text-[#0a0e27]" />
                <span
                  className="underline font-bold uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  TAP TO CHAT
                </span>
              </div>
            </button>
            <div className="flex pl-6 justify-end items-center">
              <span className="uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                ATTEMPT 01 / 05
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
