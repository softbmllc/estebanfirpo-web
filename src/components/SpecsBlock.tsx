/* src/components/SpecsBlock.tsx */
import Link from "next/link";
import React from "react";
import type { JSX as JSXNS } from "react";

/** Íconos soportados para tipologías (expandible) */
type IconKey =
  | "bed"
  | "area"
  | "balcony"
  | "height"
  | "pool"
  | "spa"
  | "yoga"
  | "paddle"
  | "work"
  | "garage"
  | "kitchen"
  | "package"
  | "bike"
  | "security"
  | "store"
  | "dot";

export type SpecItem = {
  /** mini SVG o emoji (16px) — opcional si usás iconKey o heurística */
  icon?: React.ReactNode;
  /** clave para elegir ícono predefinido */
  iconKey?: IconKey;
  label: string;
  subLabel?: string;
  href?: string; // opcional: hace la tarjeta clickeable
};

export type SpecCta = {
  label: string;
  href: string;
  variant?: "solid" | "ghost"; // default: ghost
  ariaLabel?: string;
};

export default function SpecsBlock({
  id,
  title,
  subhead,
  items,
  primaryCta,
  secondaryCta,
  headingLevel = "h2",
  gridClassName = "mt-2 grid gap-3 md:grid-cols-2",
  ctaAlign = "left",
  className = "",
}: {
  id?: string;
  title?: string;
  subhead?: string;
  items: Array<string | SpecItem>;
  primaryCta?: SpecCta;
  secondaryCta?: SpecCta;
  headingLevel?: "h2" | "h3" | "h4";
  gridClassName?: string;
  ctaAlign?: "left" | "center" | "right";
  className?: string;
}) {
  const HeadingTag = headingLevel as keyof JSXNS.IntrinsicElements;
  const normalized: SpecItem[] = items.map((it) =>
    typeof it === "string" ? ({ label: it } as SpecItem) : it
  );

  return (
    <section id={id} className={"mt-10 " + className}>
      {title ? <HeadingTag className="text-xl font-medium text-[#0A2540]">{title}</HeadingTag> : null}

      {subhead ? <p className="mt-1 text-[12.5px] font-medium text-[#0A2540]/80">{subhead}</p> : null}

      <ul className={gridClassName}>
        {normalized.map((it, i) => (
          <SpecCard key={`${i}-${it.label}`} {...it} />
        ))}
      </ul>

      {(primaryCta || secondaryCta) && (
        <div
          className={
            "mt-3 flex flex-wrap gap-2 " +
            (ctaAlign === "center" ? "justify-center" : ctaAlign === "right" ? "justify-end" : "")
          }
        >
          {primaryCta ? <CtaButton {...primaryCta} /> : null}
          {secondaryCta ? <CtaButton {...secondaryCta} /> : null}
        </div>
      )}
    </section>
  );
}

function SpecCard({ icon, iconKey, label, subLabel, href }: SpecItem) {
  const content = (
    <div className="rounded-xl border border-black/10 bg-white p-3 sm:p-3.5 transition-colors hover:bg-[#F9FAFB]">
      <div className="flex items-start gap-2 text-[13px] text-[#0A2540]">
        <span className="inline-flex h-4 w-4 items-center justify-center text-[#0A2540]" aria-hidden>
          {icon ? icon : <AutoIcon keyName={iconKey} text={label} />}
        </span>
        <div>
          <span className="block">{label}</span>
          {subLabel ? <span className="block text-[12px] text-[#0A2540]/70">{subLabel}</span> : null}
        </div>
      </div>
    </div>
  );

  const li = (child: React.ReactNode) => <li className="list-none">{child}</li>;

  if (!href) return li(content);

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    const target = href.startsWith("http") ? "_blank" : undefined;
    const rel = href.startsWith("http") ? "noopener noreferrer" : undefined;
    return li(
      <a
        href={href}
        target={target}
        rel={rel}
        className="block focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 rounded-xl"
        aria-label={label}
      >
        {content}
      </a>
    );
  }
  return li(
    <Link
      href={href}
      className="block focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 rounded-xl"
      aria-label={label}
    >
      {content}
    </Link>
  );
}

/** Botón con foco visible y aria-label */
function CtaButton({ label, href, variant = "ghost", ariaLabel }: SpecCta) {
  const base =
    "inline-flex h-9 items-center justify-center rounded-md px-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20";
  const styles =
    variant === "solid"
      ? " bg-[#0A2540] text-white hover:opacity-95"
      : " border border-[#0A2540]/20 text-[#0A2540] hover:bg-[#F9FAFB]";

  const computedAria = ariaLabel ?? label;

  const isExternal = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  if (isExternal) {
    const target = href.startsWith("http") ? "_blank" : undefined;
    const rel = href.startsWith("http") ? "noopener noreferrer" : undefined;
    return (
      <a href={href} target={target} rel={rel} className={base + styles} aria-label={computedAria}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={base + styles} aria-label={computedAria}>
      {label}
    </Link>
  );
}

/** Ícono automático por clave o heurística de texto (ES/EN) */
function AutoIcon({ keyName, text }: { keyName?: IconKey; text: string }) {
  const key = keyName ?? guessIconKey(text);
  switch (key) {
    case "bed":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M3 7h6a3 3 0 0 1 3 3v2H3V7z" />
          <path d="M21 12H12M3 21v-9M21 21v-9" />
        </svg>
      );
    case "area":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M8 8h8v8H8z" />
        </svg>
      );
    case "balcony":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M4 10h16v8H4z" />
          <path d="M4 10l4-4h8l4 4" />
          <path d="M7 14v4M12 14v4M17 14v4" />
        </svg>
      );
    case "height":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M12 3v18" />
          <path d="M9 6l3-3 3 3M9 18l3 3 3-3" />
        </svg>
      );
    case "pool":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M3 16c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0" />
          <path d="M8 12V7a2 2 0 0 1 4 0v5" />
          <path d="M12 12V7a2 2 0 0 1 4 0v5" />
        </svg>
      );
    case "spa":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M8 13c0-2 2-3 2-5S8 5 8 3" />
          <path d="M12 13c0-2 2-3 2-5s-2-3-2-5" />
          <path d="M5 19h14" />
        </svg>
      );
    case "yoga":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v6l-4 4M12 13l4 4" />
        </svg>
      );
    case "paddle":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <circle cx="16" cy="8" r="3" />
          <path d="M7 17l6-6" />
          <path d="M5 19l2-2" />
        </svg>
      );
    case "work":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <rect x="3" y="7" width="18" height="12" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "garage":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M3 10l9-5 9 5v9H3z" />
          <path d="M7 19v-5h10v5" />
        </svg>
      );
    case "kitchen":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <rect x="4" y="6" width="16" height="12" rx="1" />
          <path d="M8 6v12M16 6v12" />
        </svg>
      );
    case "package":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M3 7v10l9 4 9-4V7" />
        </svg>
      );
    case "bike":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <circle cx="7" cy="17" r="3" />
          <circle cx="17" cy="17" r="3" />
          <path d="M7 17l5-9 3 6h-5" />
        </svg>
      );
    case "security":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M12 3l8 3v6c0 4-3 7-8 9-5-2-8-5-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "store":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A2540" strokeWidth="1.6">
          <path d="M4 7h16l-1 3H5L4 7z" />
          <path d="M5 10v7h14v-7" />
        </svg>
      );
    default:
      return <span>•</span>;
  }
}

function guessIconKey(text: string): IconKey {
  const t = text.toLowerCase();
  if (/(jr|studio|dormitorio|bed)/.test(t)) return "bed";
  if (/(m²|sq ft|ft²|metros|square)/.test(t)) return "area";
  if (/(balcón|balcon|balcony|terraza)/.test(t)) return "balcony";
  if (/(altura|alturas|height|piso‑techo|piso-techo|floor\-to\-ceiling)/.test(t)) return "height";
  if (/(piscina|pool|rooftop)/.test(t)) return "pool";
  if (/(sauna|cold plunge|spa)/.test(t)) return "spa";
  if (/(yoga|meditación|meditacion)/.test(t)) return "yoga";
  if (/(paddle|pickleball)/.test(t)) return "paddle";
  if (/(cowork|work lounge|sala de trabajo|administración de propiedades|administracion de propiedades)/.test(t)) return "work";
  if (/(garaje|garage|parking)/.test(t)) return "garage";
  if (/(cocina de verano|summer kitchen)/.test(t)) return "kitchen";
  if (/(paquetes|package room|mail room)/.test(t)) return "package";
  if (/(biciclet|bike)/.test(t)) return "bike";
  if (/(control de acceso|access control|seguridad)/.test(t)) return "security";
  if (/(comercio|retail|tienda)/.test(t)) return "store";
  return "dot";
}