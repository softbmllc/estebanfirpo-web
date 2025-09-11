// src/components/ShareButtons.tsx
"use client";

import * as React from "react";
import Image from "next/image";

type Props = {
  url: string; // absolute URL to share
  text?: string; // optional message/caption
  locale?: "es" | "en";
  label?: string; // override button label
  iconSrc?: string;
  className?: string;
  variant?: "light" | "dark"; // light = dark text, dark = white text (for dark hero)
  buttonClassName?: string;
};

export default function ShareButtons({
  url,
  text = "",
  locale = "es",
  label,
  iconSrc,
  className = "",
  variant = "light",
  buttonClassName,
}: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text);
  const wa = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;

  const isDark = variant === "dark";
  const btn = isDark
    ? "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/40 px-4 text-sm font-medium text-white hover:bg-white/10 w-full sm:w-auto"
    : "inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB] w-full sm:w-auto";

  const title = locale === "en" ? "Share via WhatsApp" : "Compartir por WhatsApp";
  const btnText = label ?? (locale === "en" ? "Share via WhatsApp" : "Compartir por WhatsApp");

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator !== "undefined" && (navigator as any).share) {
      e.preventDefault();
      (navigator as any).share({ title: text || document.title, url }).catch(() => {});
    }
  };

  return (
    <div className={`flex items-center ${className}`} aria-label={title}>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={title}
        className={`${btn} ${buttonClassName ?? ""}`}
        onClick={onClick}
      >
        {
          iconSrc ? (
            <Image src={iconSrc} alt="" width={16} height={16} className="h-4 w-4" />
          ) : (
            <WhatsAppIcon />
          )
        }
        <span className="leading-none">{btnText}</span>
      </a>
    </div>
  );
}

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {/* outer circle */}
      <circle cx="12" cy="12" r="9" />
      {/* simple handset */}
      <path d="M15.8 14.2l-2-1c-.3-.1-.6 0-.8.2l-.4.6c-1.1-.5-2-1.3-2.6-2.4-.3-.4-.5-.9-.7-1.3l.6-.4c.3-.2.3-.6.2-.8l-1-2c-.2-.4-.7-.5-1.1-.4l-1.3.3c-.4.1-.7.4-.7.8 0 1 .3 2 .8 3 1.7 3.1 4.3 4.5 6.7 5 .4.1.8 0 1-.3l.3-1.3c.1-.4-.1-.8-.4-1z" />
    </svg>
  );
}