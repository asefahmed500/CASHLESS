import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[#0a0e27] text-[#fafafa] shadow-[8px_8px_0_#ff4d00] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#ff4d00]",
  secondary:
    "bg-transparent text-[#0a0e27] border-2 border-[#0a0e27] hover:bg-[#0a0e27] hover:text-[#fafafa]",
  accent:
    "bg-transparent text-[#ff4d00] border-2 border-[#ff4d00] hover:bg-[#ff4d00] hover:text-[#fafafa]",
  ghost:
    "bg-transparent text-[#0a0e27]/70 border border-transparent hover:text-[#0a0e27]",
};

export default function BrutalButton(props: ButtonProps | LinkProps) {
  const { variant = "primary", className = "", children, icon } = props;

  const base = `inline-flex items-center justify-center gap-2 h-14 px-8 font-display font-bold text-[14px] uppercase tracking-[0.08em] transition-all ${VARIANTS[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { variant: _v, icon: _i, className: _c, children: _ch, href: _href, ...rest } =
      props as LinkProps;
    return (
      <Link href={_href} className={base} {...rest}>
        {icon && (
          <span className="w-4 h-4 bg-[#fafafa] flex items-center justify-center">
            {icon}
          </span>
        )}
        {children}
      </Link>
    );
  }

  const { variant: _v, icon: _i, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonProps;
  return (
    <button className={base} {...rest}>
      {icon && (
        <span className="w-4 h-4 bg-[#fafafa] flex items-center justify-center">
          {icon}
        </span>
      )}
      {children}
    </button>
  );
}
