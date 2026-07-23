"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Phone, Mail, Lock, Eye, EyeOff } from "lucide-react";
import SignupHeader from "../_components/SignupHeader";

export default function SignUpPage() {
  const router = useRouter();
  const [showCountryPopover, setShowCountryPopover] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");

  const strength = (() => {
    if (!passwordValue) return 0;
    let s = 0;
    if (passwordValue.length >= 8) s++;
    if (/[A-Z]/.test(passwordValue)) s++;
    if (/\d/.test(passwordValue)) s++;
    if (/[^A-Za-z0-9]/.test(passwordValue)) s++;
    return s;
  })();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/signup/verify");
  };

  return (
    <div className="relative bg-neutral-50 flex flex-col min-h-screen overflow-hidden">
      <SignupHeader step={1} label="NEW ACCOUNT" />

      <div className="flex flex-1">
        {/* LEFT COLUMN */}
        <div className="w-[42%] relative flex px-16 pt-16 flex-col">
          <div className="flex items-center gap-4">
            <div className="bg-[#0a0e27] w-3 h-3" />
            <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              NEW ACCOUNT
            </span>
          </div>
          <div
            className="font-bold text-[#0a0e27] text-7xl leading-17 tracking-[-0.64px] mt-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <div>CREATE</div>
            <div>YOUR</div>
            <div>ACCOUNT.</div>
          </div>
          <div className="max-w-[40ch] font-mono text-[#0a0e27]/70 text-base leading-6 mt-6">
            Four steps. Two minutes. One card that works everywhere.
          </div>
          <div className="mt-auto pb-16">
            <div className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              ALREADY HAVE AN ACCOUNT?
            </div>
            <Link
              href="/"
              className="inline-block underline font-bold uppercase text-[#0a0e27] text-sm leading-5 mt-2 hover:text-[#ff4d00]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              LOG IN →
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[58%] relative flex px-16 pt-16 flex-col border-l border-[#0a0e27]/20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            {/* Phone */}
            <div className="relative">
              <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                PHONE NUMBER<span className="text-[#FF4D00]">*</span>
              </span>
              <div className="h-2" />
              <div className="relative bg-transparent border-[#0a0e27] border-2 border-solid flex items-center w-full h-14 focus-within:border-[#FF4D00] transition-colors">
                <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                  <Phone className="size-6 text-[#fafafa]" />
                </div>
                <input
                  placeholder="+1 555 482 9100"
                  className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                  defaultValue="+1 555 482 9100"
                  name="phone"
                  onFocus={() => setShowCountryPopover(true)}
                />
                <button
                  type="button"
                  onClick={() => setShowCountryPopover((v) => !v)}
                  className="shrink-0 cursor-pointer flex pl-2 pr-4 items-center gap-1 h-full"
                >
                  <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                    EN / +1
                  </span>
                </button>
              </div>
              {showCountryPopover && (
                <div className="z-10 shadow-[4px_4px_0_#0a0e27] bg-neutral-50 border-[#0a0e27] border-2 border-solid absolute right-0 top-[100px] w-52 mt-2">
                  {[
                    { code: "US / +1", active: true },
                    { code: "GB / +44" },
                    { code: "DE / +49" },
                    { code: "FR / +33" },
                  ].map((row, idx) => (
                    <button
                      key={row.code}
                      type="button"
                      onClick={() => setShowCountryPopover(false)}
                      className={`relative flex px-3 items-center h-8 w-full hover:bg-[#0a0e27]/5 ${
                        idx > 0 ? "border-t border-[#0a0e27]/30" : ""
                      }`}
                    >
                      {row.active && (
                        <div className="bg-[#FF4D00] absolute left-2 w-3 h-3" />
                      )}
                      <span className="font-mono uppercase text-[#0a0e27] text-xs leading-4 pl-6">
                        {row.code}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                EMAIL<span className="text-[#FF4D00]">*</span>
              </span>
              <div className="h-2" />
              <div className="relative bg-transparent border-[#0a0e27] border-2 border-solid flex items-center w-full h-14 focus-within:border-[#FF4D00] transition-colors">
                <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                  <Mail className="size-6 text-[#fafafa]" />
                </div>
                <input
                  placeholder="your@email.com"
                  className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                  name="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                PASSWORD<span className="text-[#FF4D00]">*</span>
              </span>
              <div className="h-2" />
              <div className="relative bg-transparent border-[#0a0e27] border-2 border-solid flex items-center w-full h-14 focus-within:border-[#FF4D00] transition-colors">
                <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                  <Lock className="size-6 text-[#fafafa]" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  name="password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="shrink-0 cursor-pointer bg-neutral-50 border-[#0a0e27] border-2 border-solid flex justify-center items-center w-14 h-14 hover:bg-[#0a0e27]/5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="size-6 text-[#0a0e27]" />
                  ) : (
                    <Eye className="size-6 text-[#0a0e27]" />
                  )}
                </button>
              </div>
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`w-6 h-1 ${
                      i <= strength ? "bg-[#0a0e27]" : "border border-[#0a0e27]/30"
                    }`}
                  />
                ))}
              </div>
              <div className="h-2" />
              <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                MIN 8 CHARS — 1 UPPERCASE — 1 NUMBER — 1 SYMBOL
              </span>
            </div>

            {/* Confirm password */}
            <div>
              <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                CONFIRM PASSWORD<span className="text-[#FF4D00]">*</span>
              </span>
              <div className="h-2" />
              <div className="relative bg-transparent border-[#0a0e27] border-2 border-solid flex items-center w-full h-14 focus-within:border-[#FF4D00] transition-colors">
                <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                  <Lock className="size-6 text-[#fafafa]" />
                </div>
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                  className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                  name="confirmPassword"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="shrink-0 cursor-pointer bg-neutral-50 border-[#0a0e27] border-2 border-solid flex justify-center items-center w-14 h-14 hover:bg-[#0a0e27]/5"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? (
                    <EyeOff className="size-6 text-[#0a0e27]" />
                  ) : (
                    <Eye className="size-6 text-[#0a0e27]" />
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="h-8" />
          <button
            type="button"
            onClick={() => router.push("/signup/verify")}
            className="relative shadow-[8px_8px_0_#FF4D00] bg-[#0a0e27] flex px-8 justify-between items-center w-full h-14 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
          >
            <span
              className="font-bold uppercase text-[#fafafa] text-sm leading-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              CONTINUE
            </span>
            <span
              className="font-bold text-[#fafafa] text-sm leading-5"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              →
            </span>
          </button>
          <div className="h-6" />
          <div className="bg-[#0a0e27]/20 w-full h-px" />
          <div className="h-4" />
          <span className="font-mono uppercase text-[#0a0e27]/50 text-[11px] tracking-[1.92px]">
            BY CONTINUING YOU AGREE TO OUR TERMS — PRIVACY — COOKIES
          </span>
        </div>
      </div>
    </div>
  );
}
