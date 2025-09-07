// src/components/WhyBlock.tsx
import Link from "next/link";
import React from "react";
import type { JSX as JSXNS } from "react";

/** Íconos soportados (ampliable) */
type IconKey = "shield" | "beach" | "skyline" | "sparkles";

export type WhyItem = {
  icon?: React.ReactNode;          // vector mini icon (override)
  iconKey?: IconKey;               // si querés forzar uno predefinido
  heading: string;
  text?: string;
  href?: string;                   // hace la card clickeable (opcional)
  analytics?: Record<string, string | number | boolean>; // datos opcionales para data-attrs
};

export default function WhyBlock({
  id,
  title,
  items,
  headingLevel = "h2",
  gridClassName = "mt-3 grid gap-4 md:gap-5 sm:grid-cols-3",
  className = "",
}: {
  id?: string;
  title?: string;
  items: WhyItem[];
  headingLevel?: "h2" | "h3" | "h4";
  gridClassName?: string;
  className?: string;
}) {
  const HeadingTag = headingLevel as keyof JSXNS.IntrinsicElements;
  return (
    <section id={id} className={"mt-12 " + className}>
      {title ? (
        <HeadingTag className="mb-3 sm:mb-4 text-xl font-medium text-[#0A2540]">{title}</HeadingTag>
      ) : null}

      <ul className={gridClassName}>
        {items.map((it, i) => (
          <li key={`${i}-${it.heading}`} className="list-none">
            <WhyCard {...it} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function WhyCard({ icon, iconKey, heading, text, href, analytics }: WhyItem) {
  const badge =
    icon ?? (
      <span
        aria-hidden
        className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2540]/5 text-[#0A2540]"
      >
        <AutoIcon keyName={iconKey} text={heading} />
      </span>
    );

  const content = (
    <div className="rounded-xl border border-black/10 bg-white p-4 transition-colors hover:bg-[#F9FAFB]">
      <div className="flex items-start gap-3">
        {typeof icon === "string" ? (
          <span aria-hidden className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A2540]/5 text-lg">
            {icon}
          </span>
        ) : (
          badge
        )}
        <div>
          <p className="text-[13px] font-medium text-[#0A2540]">{heading}</p>
          {text ? <p className="mt-0.5 text-[12.5px] text-[#0A2540]/80">{text}</p> : null}
        </div>
      </div>
    </div>
  );

  const dataAttrs =
    analytics && typeof analytics === "object"
      ? Object.fromEntries(
          Object.entries(analytics).map(([k, v]) => [`data-why-${k}`, String(v)])
        )
      : {};

  if (!href) return content;

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const aria = { "aria-label": heading };

  if (isExternal) {
    const target = href.startsWith("http") ? "_blank" : undefined;
    const rel = href.startsWith("http") ? "noopener noreferrer" : undefined;
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className="block focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 rounded-xl"
        {...aria}
        {...dataAttrs}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 rounded-xl"
      {...aria}
      {...dataAttrs}
    >
      {content}
    </Link>
  );
}

/** Ícono automático por clave o por heurística ES/EN */
function AutoIcon({ keyName, text }: { keyName?: IconKey; text: string }) {
  const key = keyName ?? guessIconKey(text);
  const stroke = "#0A2540";
  switch (key) {
    case "shield":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6">
          <path d="M12 3l8 3v6c0 4.5-3 7.5-8 9-5-1.5-8-4.5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "beach":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6">
          <path d="M3 21h18" />
          <path d="M12 3a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7z" />
          <path d="M16 10l3 11" />
        </svg>
      );
    case "skyline":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6">
          <path d="M3 21h18" />
          <path d="M6 21V9h4v12" />
          <path d="M12 21V5h4v16" />
          <path d="M18 21v-8h3v8" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6">
          <path d="M12 3l1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3z" />
        </svg>
      );
  }
}

function guessIconKey(text: string): IconKey {
  const t = text.toLowerCase();
  if (/(renta corta|short\-?term|lease|approved|gestión)/.test(t)) return "shield";
  if (/(playa|beach|club)/.test(t)) return "beach";
  if (/(ubicaci[oó]n|north beach|city|barrio|vistas|skyline)/.test(t)) return "skyline";
  return "sparkles";
}