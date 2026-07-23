"use client";

import React, { useState } from "react";

type IconType = "phone" | "email" | "lock" | "person" | "calendar" | "id" | "globe" | "briefcase" | "home";

const ICONS: Record<IconType, React.ReactElement> = {
  phone: <PhoneIcon />,
  email: <EmailIcon />,
  lock: <LockIcon />,
  person: <PersonIcon />,
  calendar: <CalendarIcon />,
  id: <IdIcon />,
  globe: <GlobeIcon />,
  briefcase: <BriefcaseIcon />,
  home: <HomeIcon />,
};

type FormFieldProps = {
  label: string;
  required?: boolean;
  icon?: IconType;
  placeholder?: string;
  type?: "text" | "password" | "email" | "tel" | "date";
  defaultValue?: string;
  name?: string;
  trailing?: React.ReactNode;
  textarea?: boolean;
  rows?: number;
};

export default function FormField({
  label,
  required,
  icon,
  placeholder,
  type = "text",
  defaultValue,
  name,
  trailing,
  textarea = false,
  rows = 3,
}: FormFieldProps) {
  const [focused, setFocused] = useState(false);

  const IconEl = icon ? ICONS[icon] : null;

  const inputClasses = `w-full h-14 ${
    IconEl ? "pl-14" : "pl-4"
  } ${trailing ? "pr-20" : "pr-4"} bg-transparent border-2 ${
    focused ? "border-[#ff4d00]" : "border-[#0a0e27]"
  } font-mono text-[16px] text-[#0a0e27] placeholder:text-[#0a0e27]/40 focus:outline-none transition-colors`;

  return (
    <div>
      <label className="label block mb-2">
        {label}
        {required && <span className="text-[#ff4d00] ml-0">*</span>}
      </label>
      <div className="relative">
        {IconEl && (
          <div className="absolute left-0 top-0 w-14 h-14 bg-[#0a0e27] flex items-center justify-center">
            {IconEl}
          </div>
        )}
        {textarea ? (
          <textarea
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            rows={rows}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={`w-full ${IconEl ? "pl-14" : "pl-4"} pr-4 py-3 bg-transparent border-2 ${
              focused ? "border-[#ff4d00]" : "border-[#0a0e27]"
            } font-mono text-[16px] text-[#0a0e27] placeholder:text-[#0a0e27]/40 focus:outline-none transition-colors resize-none`}
          />
        ) : (
          <input
            type={type}
            name={name}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={inputClasses}
          />
        )}
        {trailing && (
          <div className="absolute right-0 top-0 h-14 flex items-center pr-3">
            {trailing}
          </div>
        )}
      </div>
    </div>
  );
}

const stroke = "#fafafa";

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 4h4l2 5-2 1c1 3 3 5 6 6l1-2 5 2v4c0 1-1 2-2 2-9 0-16-7-16-16 0-1 1-2 2-2z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" stroke={stroke} strokeWidth="2" />
      <path d="M3 5l9 7 9-7" stroke={stroke} strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="11" width="14" height="9" stroke={stroke} strokeWidth="2" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke={stroke} strokeWidth="2" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="16" stroke={stroke} strokeWidth="2" />
      <line x1="3" y1="9" x2="21" y2="9" stroke={stroke} strokeWidth="2" />
      <line x1="8" y1="3" x2="8" y2="7" stroke={stroke} strokeWidth="2" />
      <line x1="16" y1="3" x2="16" y2="7" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function IdIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" stroke={stroke} strokeWidth="2" />
      <circle cx="9" cy="11" r="2" stroke={stroke} strokeWidth="2" />
      <line x1="14" y1="10" x2="19" y2="10" stroke={stroke} strokeWidth="2" />
      <line x1="14" y1="14" x2="19" y2="14" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" />
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke={stroke} strokeWidth="2" />
      <line x1="3" y1="12" x2="21" y2="12" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" stroke={stroke} strokeWidth="2" />
      <path d="M9 7V4h6v3" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 12l9-8 9 8v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
