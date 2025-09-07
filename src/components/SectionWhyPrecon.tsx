// src/components/SectionWhyPrecon.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";


type SectionWhyPreconProps = {
  heroImageSrc?: string;
  heroImageAlt?: string;
};

type Locale = "es" | "en";

export function SectionWhyPrecon({ heroImageSrc, heroImageAlt }: SectionWhyPreconProps) {
  const params = useParams();
  const locale = (params?.locale as Locale) ?? "es";
  const isEN = locale === "en";

  const title = isEN ? "Why Pre‑construction?" : "¿Por qué Preconstrucción?";
  const copy = isEN
    ? "Deposits 20–40%. Proven 15–30% appreciation. Seamless USD closing."
    : "Entradas desde 20–40%. Plusvalía comprobada 15–30%. Cierre en USD sin fricciones.";

  const points: { kpi: string; label: string }[] = isEN
    ? [
        { kpi: "20–40%", label: "Staged deposits" },
        { kpi: "15–30%", label: "Appreciation during works" },
        { kpi: "Prime", label: "Amenities & rental demand" },
        { kpi: "Developer", label: "+ escrow protection" },
        { kpi: "Lower", label: "carrying until delivery" },
        { kpi: "Financing", label: "at closing (foreigners)" },
      ]
    : [
        { kpi: "20–40%", label: "Entradas por hitos" },
        { kpi: "15–30%", label: "Plusvalía en obra" },
        { kpi: "Prime", label: "Amenities y demanda" },
        { kpi: "Developer", label: "+ escrow" },
        { kpi: "Menor", label: "carga hasta entrega" },
        { kpi: "Financiación", label: "al cierre (extranjeros)" },
      ];

  const ctaLabel = isEN ? "Pre‑construction insight" : "Análisis de Preconstrucción";
  const ctaSecondary = isEN ? "Eligible projects" : "Proyectos elegibles";
  const preconHref = `/${locale}/precon`;

  return (
    <section aria-labelledby="why-precon" className="mt-12">
      {heroImageSrc ? (
        <figure className="mb-3">
          <div className="relative w-full h-[96px] sm:h-[112px] md:h-[120px] lg:h-[128px] overflow-hidden rounded-lg border border-black/10 bg-white">
            <Image
              src={heroImageSrc}
              alt={heroImageAlt ?? (isEN ? "Pre-construction in Miami" : "Preconstrucción en Miami")}
              fill
              sizes="(min-width: 1024px) 992px, 100vw"
              className="object-cover contrast-110 saturate-95 brightness-95"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[#0A2540]/[0.05] pointer-events-none" />
          </div>
        </figure>
      ) : null}
      <div className="max-w-3xl">
        <h2 id="why-precon" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A2540]">{title}</h2>
        <p className="mt-2 text-sm text-[#0D1521] max-w-2xl">{copy}</p>
      </div>

      <ul className="mt-3 grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {points.map((p, i) => (
          <li key={i} className="rounded-2xl border border-[#0A2540]/10 bg-white p-4 sm:p-5 min-h-[88px] md:min-h-[92px] shadow-[inset_0_-1px_0_rgba(0,0,0,.03)] transition hover:shadow-sm hover:-translate-y-[1px] hover:bg-[#F9FAFB] hover:ring-1 hover:ring-black/[0.04]">
            <div className="flex items-start gap-3">
              <span aria-hidden className="mt-0.5 inline-flex h-5 w-5 md:h-5 md:w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#0A2540]/40 text-[#0A2540]/80">
                <svg viewBox="0 0 24 24" className="h-4 w-4 md:h-[18px] md:w-[18px]" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <p className="text-[#0A2540] leading-tight">
                <span className="block text-[15px] md:text-[16px] font-semibold tracking-tight whitespace-nowrap md:whitespace-normal">{p.kpi}</span>
                <span className="block text-[12px] md:text-[13px] leading-snug opacity-80">{p.label}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <Link
          href={preconHref}
          className="inline-flex h-11 sm:h-10 w-full sm:w-auto text-center items-center justify-center rounded-md bg-[#0A2540] px-4 text-sm font-medium text-white transition
             hover:opacity-95 hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(10,37,64,.10)]
             focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:ring-offset-2"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </Link>
        <Link
          href={`/${locale}/proyectos`}
          className="inline-flex h-11 sm:h-10 w-full sm:w-auto items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] transition hover:bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#0A2540] focus:ring-offset-2"
        >
          {ctaSecondary}
        </Link>
      </div>
    </section>
  );
}

export default SectionWhyPrecon;