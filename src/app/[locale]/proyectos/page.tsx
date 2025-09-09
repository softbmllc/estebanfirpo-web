// src/app/[locale]/proyectos/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState, useCallback } from "react";
import { ALL_PROJECTS } from "@/data/projects/index";
import type { Project } from "@/data/types";
import ProjectsFilters, { type Filters } from "@/components/ProjectsFilters";
import ProjectDrawer from "@/components/ProjectDrawer";
import { useParams } from "next/navigation";

export default function Proyectos() {
  const { locale } = useParams() as { locale: string };
  const numberLocale = locale === "en" ? "en-US" : "es-ES";
  const fmt = (n?: number) =>
    typeof n === "number"
      ? new Intl.NumberFormat(numberLocale, {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(n)
      : undefined;

  const [filters, setFilters] = useState<Filters>({ q: "", rental: "all", min: undefined, max: undefined });

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const openDrawer = useCallback(() => setOpen(true), []);
  const closeDrawer = useCallback(() => setOpen(false), []);

  const filtered = useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return ALL_PROJECTS.filter((p) => {
      // text match on name or city
      const textOk = q
        ? (p.name?.toLowerCase().includes(q) || p.city?.toLowerCase().includes(q))
        : true;

      // rental policy
      const rentalOk = filters.rental === "all" ? true : p.rentalPolicy === filters.rental;

      // price range (only check when price exists)
      const pf = typeof p.priceFromUsd === "number" ? p.priceFromUsd : undefined;
      const minOk = typeof filters.min === "number" ? (typeof pf === "number" && pf >= filters.min) : true;
      const maxOk = typeof filters.max === "number" ? (typeof pf === "number" && pf <= filters.max) : true;

      return textOk && rentalOk && minOk && maxOk;
    });
  }, [filters]);

  return (
    <main className="px-4 py-8 sm:py-12">
      {/* Title row */}
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
            {locale === "en" ? "Projects" : "Proyectos"}
          </h1>
          <button
            type="button"
            onClick={openDrawer}
            className="sm:hidden inline-flex h-10 items-center justify-center rounded-md border border-black/10 bg-white px-3 text-sm text-[#0A2540] hover:bg-[#F9FAFB]"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="filters-drawer"
          >
            {locale === "en" ? "Filters" : "Filtros"}
          </button>
        </div>

        {/* Inline filters on ≥sm */}
        <div className="hidden sm:block">
          <ProjectsFilters
            locale={locale === "en" ? "en" : "es"}
            value={filters}
            onChange={setFilters}
            onReset={() => setFilters({ q: "", rental: "all", min: undefined, max: undefined })}
          />
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          id="filters-drawer"
          role="dialog"
          aria-modal="true"
          className="sm:hidden fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <button
            aria-label={locale === "en" ? "Close filters" : "Cerrar filtros"}
            onClick={closeDrawer}
            className="absolute inset-0 bg-black/40"
          />
          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-xl border-l border-black/10 p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#0A2540]">
                {locale === "en" ? "Filters" : "Filtros"}
              </h2>
              <button
                onClick={closeDrawer}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-[#0A2540] hover:bg-[#F9FAFB]"
                aria-label={locale === "en" ? "Close" : "Cerrar"}
              >
                ✕
              </button>
            </div>
            <div className="mt-3 overflow-y-auto">
              <ProjectsFilters
                locale={locale === "en" ? "en" : "es"}
                value={filters}
                onChange={(next) => setFilters(next)}
                onReset={() => setFilters({ q: "", rental: "all", min: undefined, max: undefined })}
              />
            </div>
            <div className="mt-auto pt-3">
              <button
                onClick={closeDrawer}
                className="w-full inline-flex h-10 items-center justify-center rounded-md bg-[#0A2540] px-3 text-sm font-medium text-white hover:opacity-95"
              >
                {locale === "en" ? "Apply" : "Aplicar"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 md:mt-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {filtered.map((p) => (
          <div
            key={p.slug}
            className="rounded-2xl border border-black/10 bg-white overflow-hidden transition hover:shadow-sm hover:-translate-y-[1px]"
          >
            <Link href={`/${locale}${p.slug}`}>
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 33vw, 100vw"
                  loading="lazy"
                  decoding="async"
                />
                {p.delivery && (
                  <span className="absolute left-2 top-2 text-[11px] px-2 py-0.5 rounded-full bg-white/85 text-[#0A2540]">
                    {p.delivery}
                  </span>
                )}
              </div>
            </Link>

            {/* Content */}
            <div className="p-4 flex flex-col h-[220px]">
              <h3 className="text-[15px] md:text-[16px] font-semibold tracking-tight text-[#0A2540] line-clamp-1">
                <Link href={`/${locale}${p.slug}`}>{p.name}</Link>
              </h3>
              <p className="mt-1 text-[12px] text-[#0A2540]/70 line-clamp-1">
                {p.city} · {p.rentalPolicy}
              </p>
              <div className="mt-2 text-[14px] font-semibold text-[#0A2540]">
                {typeof p.priceFromUsd === "number"
                  ? (locale === "en"
                      ? `From ${fmt(p.priceFromUsd)}`
                      : `Desde ${fmt(p.priceFromUsd)}`)
                  : locale === "en"
                  ? "Inquire"
                  : "Consultar"}
                {typeof p.pricePerSfApprox === "number" ? (
                  <span className="ml-1 text-[12px] font-normal text-[#0A2540]/60"> · ~${p.pricePerSfApprox}/sf</span>
                ) : null}
              </div>
              {/* Secondary line: highlight cap */}
              {(() => {
                const caps = locale === "en" ? p.highlightsEn ?? p.highlights : p.highlights;
                return caps && caps.length ? (
                  <div className="mt-2 flex flex-col gap-1.5">
  {caps.slice(0, 2).map((h: string, i: number) => (
    <span
      key={i}
      className="text-[11px] px-2 py-0.5 rounded-full bg-[#0A2540]/5 text-[#0A2540]"
    >
      {h}
    </span>
  ))}
</div>
                ) : null;
              })()}

              <div className="flex-1" />
              <button
                type="button"
                onClick={() => { setSelected(p); setOpen(true); }}
                className="mt-3 inline-flex h-9 w-full items-center justify-center rounded-md border border-[#0A2540]/20 px-3 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB]"
              >
                {locale === "en" ? "View details" : "Ver más detalles"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProjectDrawer open={open} project={selected} onClose={() => setOpen(false)} />
    </main>
  );
}