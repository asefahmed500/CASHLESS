"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Calendar,
  ChevronDown,
  IdCard,
  Globe,
  Briefcase,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function DetailsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-neutral-50 flex p-16 flex-col">
      {/* Top strip */}
      <div className="border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex pb-6 justify-between items-end">
        <div className="flex items-end gap-4">
          <Link
            href="/"
            className="font-bold text-[#0a0e27] text-lg leading-7"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            CASHLESS
          </Link>
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            STEP 03 / 04
          </span>
        </div>
        <div className="flex items-end gap-1">
          <div className="bg-[#FF4D00] w-3 h-3" />
          <div className="bg-[#0a0e27] w-6 h-2" />
          <div className="bg-[#0a0e27] w-6 h-2" />
          <div className="border border-[#0a0e27]/30 w-6 h-2" />
        </div>
      </div>

      <div className="flex flex-1">
        {/* LEFT COLUMN */}
        <div className="w-[42%] border-t-0 border-r border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex pr-12 flex-col">
          <div className="flex pt-16 flex-col flex-1">
            <div className="flex items-center gap-2">
              <div className="bg-[#FF4D00] w-3 h-3" />
              <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                KYC — IDENTITY CHECK
              </span>
            </div>
            <div className="mt-6">
              <h1
                className="font-bold text-[#0a0e27] text-7xl leading-17 tracking-[-0.64px]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                COMPLETE
                <br />
                YOUR
                <br />
                PROFILE
              </h1>
            </div>
            <p className="max-w-[40ch] font-mono text-[#0a0e27]/70 text-base leading-6 mt-6">
              We need a few more details to verify your identity. Encrypted.
              Never shared.
            </p>

            {/* Trust strip */}
            <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 mt-8">
              <div className="border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex items-center gap-2 h-8">
                <div className="shrink-0 bg-[#FF4D00] w-3 h-3" />
                <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  AES-256 ENCRYPTED
                </span>
              </div>
              <div className="border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex items-center gap-2 h-8">
                <div className="shrink-0 bg-[#0a0e27] w-2 h-2" />
                <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  PCI DSS COMPLIANT
                </span>
              </div>
              <div className="flex items-center gap-2 h-8">
                <div className="shrink-0 bg-[#0a0e27] w-2 h-2" />
                <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  AUDITED ANNUALLY
                </span>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Link
                href="/signup/verify"
                className="underline font-bold uppercase text-[#0a0e27] text-xs leading-4 hover:text-[#ff4d00]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                ← BACK TO OTP
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[58%] flex pl-12 pt-16 flex-col">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/signup/card");
            }}
          >
            {/* Row 1: Name + DOB */}
            <div className="grid grid-cols-2 gap-x-6">
              <div className="flex flex-col">
                <label className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  FULL NAME<span className="text-[#FF4D00]">*</span>
                </label>
                <div className="border-[#0a0e27] border-2 border-solid flex mt-2 items-center h-14 focus-within:border-[#FF4D00] transition-colors">
                  <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <User className="size-6 text-[#fafafa]" />
                  </div>
                  <input
                    placeholder="Jordan Rivera"
                    className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                    name="fullName"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  DATE OF BIRTH<span className="text-[#FF4D00]">*</span>
                </label>
                <div className="border-[#0a0e27] border-2 border-solid flex mt-2 items-center h-14 focus-within:border-[#FF4D00] transition-colors">
                  <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <Calendar className="size-6 text-[#fafafa]" />
                  </div>
                  <input
                    placeholder="DD / MM / YYYY"
                    className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                    name="dob"
                  />
                  <div className="shrink-0 bg-neutral-50 border-t-0 border-r-0 border-b-0 border-l-2 border-solid border-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <ChevronDown className="size-6 text-[#0a0e27]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Government ID */}
            <div className="flex mt-6 flex-col">
              <label className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                GOVERNMENT ID NUMBER<span className="text-[#FF4D00]">*</span>
              </label>
              <div className="border-[#0a0e27] border-2 border-solid flex mt-2 items-center h-14 focus-within:border-[#FF4D00] transition-colors">
                <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                  <IdCard className="size-6 text-[#fafafa]" />
                </div>
                <input
                  placeholder="Passport / National ID / Driver's License"
                  className="bg-transparent outline-none font-mono text-[#0a0e27] text-sm leading-5 px-4 flex-1 h-full"
                  name="govId"
                />
              </div>
              <p className="font-mono uppercase text-[#0a0e27]/50 text-[10px] tracking-[1.92px] mt-1">
                WE ACCEPT — PASSPORT — NATIONAL ID — DRIVER'S LICENSE
              </p>
            </div>

            {/* Row 3: Country + Occupation */}
            <div className="grid grid-cols-2 mt-6 gap-x-6">
              <div className="flex flex-col">
                <label className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  COUNTRY OF RESIDENCE<span className="text-[#FF4D00]">*</span>
                </label>
                <div className="border-[#FF4D00] border-2 border-solid flex mt-2 items-center h-14">
                  <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <Globe className="size-6 text-[#fafafa]" />
                  </div>
                  <input
                    placeholder="United States"
                    className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                    defaultValue="United States"
                    name="country"
                  />
                  <div className="shrink-0 bg-neutral-50 border-t-0 border-r-0 border-b-0 border-l-2 border-solid border-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <ChevronDown className="size-6 text-[#0a0e27]" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                  OCCUPATION
                </label>
                <div className="border-[#0a0e27] border-2 border-solid flex mt-2 items-center h-14 focus-within:border-[#FF4D00] transition-colors">
                  <div className="shrink-0 bg-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <Briefcase className="size-6 text-[#fafafa]" />
                  </div>
                  <input
                    placeholder="Select occupation"
                    className="bg-transparent outline-none font-mono text-[#0a0e27] text-base leading-6 px-4 flex-1 h-full"
                    name="occupation"
                  />
                  <div className="shrink-0 bg-neutral-50 border-t-0 border-r-0 border-b-0 border-l-2 border-solid border-[#0a0e27] flex justify-center items-center w-14 h-14">
                    <ChevronDown className="size-6 text-[#0a0e27]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Address */}
            <div className="flex mt-6 flex-col">
              <label className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
                ADDRESS
              </label>
              <div className="border-[#0a0e27] border-2 border-solid flex mt-2 h-24 focus-within:border-[#FF4D00] transition-colors">
                <div className="shrink-0 bg-[#0a0e27] flex pt-4 justify-center items-start w-14 h-14">
                  <MapPin className="size-6 text-[#fafafa]" />
                </div>
                <textarea
                  placeholder="Street address, city, postal code, country"
                  className="bg-transparent outline-none resize-none font-mono text-[#0a0e27] text-base leading-6 px-4 py-3 flex-1 h-full"
                  name="address"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="shadow-[8px_8px_0_#FF4D00] bg-[#0a0e27] flex px-8 justify-center items-center gap-3 w-full h-14 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
              >
                <span
                  className="font-bold uppercase text-[#fafafa] text-sm leading-5"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  CONTINUE
                </span>
                <ArrowRight className="size-4 text-[#fafafa]" />
              </button>
              <div className="border-t border-r-0 border-b-0 border-l-0 border-solid border-[#0a0e27]/20 mt-4 pt-2">
                <p className="font-mono uppercase text-[#0a0e27]/50 text-[11px] leading-5 tracking-[1.92px]">
                  BY CONTINUING YOU CERTIFY YOUR INFORMATION IS ACCURATE — FALSE
                  STATEMENTS MAY RESULT IN ACCOUNT CLOSURE
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
