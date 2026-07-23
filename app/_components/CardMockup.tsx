type CardMockupProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const SIZES = {
  sm: { w: 200, h: 126 },
  md: { w: 300, h: 190 },
  lg: { w: 480, h: 300 },
  xl: { w: 540, h: 340 },
};

export default function CardMockup({ size = "md", className = "" }: CardMockupProps) {
  const dims = SIZES[size];

  return (
    <div
      className={`relative bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#2a2f4a] border-2 border-[#0a0e27] shadow-[16px_16px_0_#ff4d00] ${className}`}
      style={{ width: dims.w, height: dims.h }}
    >
      {/* Top-left: CASHLESS wordmark */}
      <div
        className={`absolute font-display font-bold text-[#fafafa] ${
          size === "lg" || size === "xl" ? "text-[24px] top-8 left-8" : "text-[10px] top-3 left-3"
        }`}
      >
        CASHLESS
      </div>

      {/* Top-right: chip */}
      <div
        className={`absolute bg-[#ff4d00] ${
          size === "lg" || size === "xl" ? "w-6 h-6 top-8 right-8" : "w-2 h-2 top-3 right-3"
        }`}
      />

      {/* Center: card number */}
      {size === "lg" || size === "xl" ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center">
            {["4829", "0071", "4400", "0192"].map((group, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-4 bg-[#fafafa]/30 mx-2" />
                )}
                <span className="font-mono text-[18px] text-[#fafafa]/60 tracking-wider">
                  {group}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[12px] text-[#fafafa]/70">4829</span>
        </div>
      )}

      {/* Bottom-left: cardholder name */}
      <div
        className={`absolute font-mono uppercase ${
          size === "lg" || size === "xl"
            ? "text-[10px] tracking-[0.12em] text-[#ff4d00] bottom-8 left-8"
            : "text-[7px] text-[#fafafa]/80 bottom-3 left-3"
        }`}
      >
        {size === "lg" || size === "xl" ? (
          <>
            JORDAN RIVERA
            <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#ff4d00] mt-1">
              A/C WORLDWIDE
            </div>
          </>
        ) : (
          "JR"
        )}
      </div>

      {/* Bottom-right: VISA */}
      <div
        className={`absolute font-display font-bold text-[#fafafa] ${
          size === "lg" || size === "xl" ? "text-[12px] bottom-8 right-8" : "text-[8px] bottom-3 right-3"
        }`}
      >
        VISA
      </div>
    </div>
  );
}
