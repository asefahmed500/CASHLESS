import Link from "next/link";

type SignupHeaderProps = {
  step: 1 | 2 | 3 | 4;
  label: string;
  backHref?: string;
};

const STEP_LABELS: Record<number, string> = {
  1: "STEP 01 / 04",
  2: "STEP 02 / 04",
  3: "STEP 03 / 04",
  4: "STEP 04 / 04",
};

export default function SignupHeader({ step, label, backHref }: SignupHeaderProps) {
  return (
    <>
      <header className="h-16 border-b border-[#0a0e27]/20 flex items-center px-16 bg-[#fafafa] sticky top-0 z-50">
        <Link href="/" className="font-display font-bold text-[18px] text-[#0a0e27]">
          CASHLESS
        </Link>
        <span className="ml-4 label">{STEP_LABELS[step]}</span>
        <span className="ml-4 label">— {label}</span>

        <div className="ml-auto flex items-center gap-1">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`w-6 h-2 ${
                i <= step ? "bg-[#0a0e27]" : "border border-[#0a0e27]/30"
              }`}
            />
          ))}
        </div>
      </header>
    </>
  );
}
