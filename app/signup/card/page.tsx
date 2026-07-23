"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Upload } from "lucide-react";

const COLOR_OPTIONS = [
  { id: "black", className: "bg-[#0a0e27]" },
  { id: "orange", className: "bg-[#ff4d00]" },
  {
    id: "diagonal",
    className: "bg-neutral-50",
    pattern: "diagonal",
  },
  {
    id: "stripes",
    className: "bg-neutral-50",
    pattern: "stripes",
  },
  { id: "outline", className: "bg-[#0a0e27]", outline: true },
];

const SUMMARY = [
  ["TYPE", "DIGITAL"],
  ["DELIVERY", "INSTANT"],
  ["FEE", "$0"],
];

const DIGITAL_BULLETS = ["ONLINE & MOBILE PAY", "TAP TO PAY", "ZERO FEES"];
const PHYSICAL_BULLETS = ["IN-STORE PURCHASES", "ATM WITHDRAWALS", "MAIL DELIVERY"];

export default function CardPage() {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<"digital" | "physical">("digital");
  const [selectedColor, setSelectedColor] = useState("black");
  const [cardName, setCardName] = useState("JORDAN RIVERA");

  return (
    <div
      className="min-h-screen bg-neutral-50 text-[#0a0e27] flex p-16 flex-col"
      style={{ fontFamily: "var(--font-ibm-plex-mono), monospace" }}
    >
      {/* Top strip */}
      <div className="flex pb-4 justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-bold text-lg leading-7"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            CASHLESS.
          </Link>
          <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
            STEP 04 / 04
          </span>
        </div>
        <div className="relative bg-[#FF4D00] w-3 h-3" />
      </div>

      <div className="flex pt-16 flex-1">
        {/* LEFT COLUMN */}
        <div className="w-[42%] border-t-0 border-r border-b-0 border-l-0 border-solid border-[#0a0e27]/20 flex pr-12 flex-col">
          <div className="flex items-center gap-4">
            <span className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px]">
              FINAL STEP — PICK YOUR CARD
            </span>
          </div>
          <div className="pt-6">
            {["CUSTOMIZE", "YOUR", "CARD."].map((word) => (
              <div
                key={word}
                className="font-bold text-[#0a0e27] text-7xl leading-17 tracking-[-0.64px]"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                {word}
              </div>
            ))}
          </div>
          <div className="max-w-[40ch] font-mono text-[#0a0e27]/70 text-base leading-6 pt-6">
            Digital ships instantly. Physical arrives in 7–10 days. Both work
            everywhere.
          </div>

          {/* Order summary */}
          <div className="flex pt-6 items-center gap-4">
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              ORDER SUMMARY
            </span>
          </div>
          <div className="pt-3">
            <div className="border-[#0a0e27] border-2 border-solid flex p-4 flex-col">
              {SUMMARY.map(([k, v]) => (
                <div
                  key={k}
                  className="min-h-8 border-t-0 border-r-0 border-b border-l-0 border-solid border-[#0a0e27]/20 flex py-2 justify-between items-center gap-2 last:border-b-0"
                >
                  <span className="shrink-0 font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                    {k}
                  </span>
                  <span className="truncate font-mono text-[#0a0e27] text-xs leading-4">
                    {selectedCard === "digital"
                      ? v
                      : k === "TYPE"
                      ? "PHYSICAL"
                      : k === "DELIVERY"
                      ? "7-10 DAYS"
                      : "$15"}
                  </span>
                </div>
              ))}
              <div className="min-h-8 flex py-2 justify-between items-center gap-2">
                <span className="shrink-0 font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
                  TOTAL
                </span>
                <span
                  className="truncate font-bold text-[#0a0e27] text-base leading-6"
                  style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
                >
                  {selectedCard === "digital" ? "$0" : "$15"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="pt-4">
              <Link
                href="/signup/details"
                className="underline font-bold uppercase text-[#0a0e27] text-xs leading-4 hover:text-[#ff4d00]"
                style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
              >
                ← BACK TO DETAILS
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-[58%] flex pl-12 flex-col">
          {/* Card option tiles */}
          <div className="flex gap-6">
            <CardTile
              type="digital"
              selected={selectedCard === "digital"}
              onClick={() => setSelectedCard("digital")}
              bullets={DIGITAL_BULLETS}
              subtitle="INSTANT — FREE"
            />
            <CardTile
              type="physical"
              selected={selectedCard === "physical"}
              onClick={() => setSelectedCard("physical")}
              bullets={PHYSICAL_BULLETS}
              subtitle="7-10 DAYS — $15 FEE"
            />
          </div>

          {/* Card name */}
          <div className="pt-5">
            <div className="font-mono uppercase text-[#0a0e27] text-[11px] tracking-[1.92px] flex items-center gap-1">
              <span>NAME ON CARD</span>
              <span className="text-[#FF4D00]">*</span>
            </div>
            <div className="relative pt-2">
              <input
                placeholder="NAME"
                maxLength={20}
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className="bg-transparent font-mono text-[#0a0e27] text-sm leading-5 border-[#0a0e27] border-2 border-solid pl-4 pr-16 w-full h-11 focus:outline-none focus:border-[#FF4D00]"
              />
              <span className="top-1/2 -translate-y-1/2 whitespace-nowrap font-mono uppercase text-[#0a0e27]/70 text-[10px] absolute right-3">
                {cardName.length}/20
              </span>
            </div>
          </div>

          {/* Color picker */}
          <div className="pt-5">
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              CARD COLOR
            </span>
            <div className="flex pt-2 gap-2">
              {COLOR_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedColor(opt.id)}
                  className={`cursor-pointer ${opt.className} border-[#0a0e27] border-2 border-solid flex justify-center items-center w-8 h-8 ${
                    opt.outline ? "ring-1 ring-inset ring-[#FF4D00]" : ""
                  }`}
                  style={
                    opt.pattern === "diagonal"
                      ? {
                          background:
                            "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(10,14,39,0.3) 4px, rgba(10,14,39,0.3) 5px), #fafafa",
                        }
                      : opt.pattern === "stripes"
                      ? {
                          background:
                            "repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(10,14,39,0.3) 6px, rgba(10,14,39,0.3) 7px), #fafafa",
                        }
                      : undefined
                  }
                >
                  {selectedColor === opt.id && (
                    <div className="bg-[#FF4D00] w-3 h-3" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Upload zone */}
          <div className="pt-5">
            <span className="font-mono uppercase text-[#0a0e27]/70 text-[11px] tracking-[1.92px]">
              OR UPLOAD YOUR OWN
            </span>
            <label className="border-[#0a0e27]/50 border-2 border-dashed flex mt-2 p-2 flex-col justify-center items-center gap-1 w-full h-16 cursor-pointer hover:bg-[#0a0e27]/5">
              <Upload className="size-4 shrink-0 text-[#0a0e27]" />
              <span className="leading-tight font-mono text-center uppercase text-[#0a0e27]/70 text-[9px] tracking-wider px-2">
                DRAG OR CLICK TO UPLOAD
              </span>
              <span className="leading-tight font-mono text-center uppercase text-[#0a0e27]/50 text-[9px] tracking-wider">
                JPG/PNG — MAX 5MB
              </span>
              <input type="file" className="hidden" accept="image/jpeg,image/png" />
            </label>
          </div>

          {/* Submit */}
          <div className="pt-6">
            <button
              type="button"
              onClick={() => router.push("/signup/confirmation")}
              className="font-bold uppercase shadow-[8px_8px_0_0_#FF4D00] bg-[#0a0e27] flex justify-center items-center gap-3 w-full h-12 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#FF4D00] transition-all"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                color: "#fafafa",
                fontSize: "14px",
              }}
            >
              <span style={{ color: "#fafafa" }}>GET MY CARD</span>
              <ArrowRight className="size-4" style={{ color: "#fafafa" }} />
            </button>
          </div>
          <div className="bg-[#0a0e27]/20 mt-3 w-full h-px" />
          <div className="pt-2">
            <span className="font-mono uppercase text-[#0a0e27]/50 text-[10px] tracking-[1px]">
              BY ORDERING YOU AGREE TO THE CARDHOLDER AGREEMENT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardTile({
  type,
  selected,
  onClick,
  bullets,
  subtitle,
}: {
  type: "digital" | "physical";
  selected: boolean;
  onClick: () => void;
  bullets: string[];
  subtitle: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative w-1/2 cursor-pointer border-[#0a0e27] border-2 border-solid flex p-4 flex-col h-72 text-left transition-all hover:bg-[#0a0e27]/5 ${
        selected ? "shadow-[8px_8px_0_#FF4D00]" : ""
      }`}
      style={
        selected
          ? { boxShadow: "inset 0 0 0 4px #FF4D00, 8px 8px 0 #FF4D00" }
          : undefined
      }
    >
      {/* Card mockup */}
      <div className="relative shrink-0 bg-[#0a0e27] border-[#0a0e27] border-2 border-solid w-full overflow-hidden" style={{ height: "150px" }}>
        <div className="absolute left-3 top-3">
          <span
            className="leading-tight font-bold text-[#fafafa] text-xs leading-4"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            CASHLESS
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <div className="bg-[#FF4D00] w-3.5 h-3.5" />
        </div>
        <div
          className="absolute right-3"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <span className="block whitespace-nowrap leading-tight font-mono text-right uppercase text-[#FF4D00] text-[7px]">
            {type === "digital" ? "DIGITAL" : "PHYSICAL"}
          </span>
        </div>
        {type === "physical" && (
          <div className="pointer-events-none flex absolute inset-0 justify-center items-center">
            <div className="grid grid-cols-3 gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-neutral-50/20 w-1 h-1" />
              ))}
            </div>
          </div>
        )}
        <div className="absolute left-3 bottom-3">
          <span className="block truncate leading-tight font-mono uppercase text-[#fafafa]/80 text-[10px]">
            •••• 4821
          </span>
          <span className="block truncate leading-tight font-mono uppercase text-[#fafafa]/60 text-[8px] pt-0.5">
            JR
          </span>
        </div>
        <div className="absolute right-3 bottom-3">
          <span
            className="leading-tight font-bold text-[#fafafa] text-[9px]"
            style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
          >
            VISA
          </span>
        </div>
      </div>

      <div className="pt-3">
        <div
          className="font-bold uppercase text-[#0a0e27] text-base leading-5"
          style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}
        >
          {type === "digital" ? "DIGITAL CARD" : "PHYSICAL CARD"}
        </div>
        <div className="font-mono uppercase text-[#0a0e27]/70 text-[9px] tracking-[1px] pt-1">
          {subtitle}
        </div>
        <div className="flex pt-2 flex-col gap-1">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <div className="shrink-0 bg-[#0a0e27] w-1.5 h-1.5" />
              <span className="truncate font-mono text-[#0a0e27]/70 text-[10px] leading-3">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </button>
  );
}
