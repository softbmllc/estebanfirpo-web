// src/components/ProjectsFilters.tsx
"use client";
import { useMemo, useEffect, useRef, useState, useCallback } from "react";

export type Filters = {
  q: string;
  rental: "all" | "No restr." | "30 días" | "60 días" | "90 días" | "6 meses";
  min?: number;
  max?: number;
};

export function ProjectsFilters({
  locale = "es",
  value,
  onChange,
  onReset,
}: {
  locale?: "es" | "en";
  value: Filters;
  onChange: (next: Filters) => void;
  onReset?: () => void;
}) {
  const t = useMemo(
    () => ({
      title: locale === "en" ? "Filters" : "Filtros",
      search: locale === "en" ? "Search projects" : "Buscar proyectos",
      rental: locale === "en" ? "Rental policy" : "Política de renta",
      any: locale === "en" ? "Any" : "Todas",
      priceFrom: locale === "en" ? "Min price" : "Precio mín.",
      priceTo: locale === "en" ? "Max price" : "Precio máx.",
      reset: locale === "en" ? "Reset" : "Reiniciar",
    }),
    [locale]
  );

  const rentalOptions: Filters["rental"][] = [
    "all",
    "No restr.",
    "30 días",
    "60 días",
    "90 días",
    "6 meses",
  ];

  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const toggle = useCallback(() => setOpen(v => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!listRef.current || !btnRef.current) return;
      if (!listRef.current.contains(e.target as Node) && !btnRef.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open, close]);

  return (
    <aside aria-label={t.title} className="rounded-2xl border border-black/10 bg-white p-3 sm:p-4">
      <div className="flex items-center justify-between">
        <p className="text-[12.5px] font-medium text-[#0A2540]">{t.title}</p>
        {onReset ? (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-8 items-center justify-center rounded-md border border-black/10 px-2 text-[12px] text-[#0A2540] hover:bg-[#F9FAFB]"
          >
            {t.reset}
          </button>
        ) : null}
      </div>
      {/* Search */}
      <label className="block text-[12px] font-medium text-[#0A2540]">
        {t.search}
        <div className="relative mt-1">
          <input
            type="text"
            value={value.q}
            onChange={(e) => onChange({ ...value, q: e.target.value })}
            placeholder={t.search}
            className="block w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-[#0A2540] placeholder-black/40 outline-none focus:ring-2 focus:ring-[#0A2540]"
          />
          <svg
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40"
            viewBox="0 0 20 20" fill="currentColor"
          >
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
          </svg>
        </div>
      </label>

      {/* Rental policy */}
      <label className="mt-3 block text-[12px] font-medium text-[#0A2540]">
        {t.rental}
        <div className="relative mt-1">
          <button
            ref={btnRef}
            type="button"
            onClick={toggle}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="flex w-full items-center justify-between rounded-md border border-black/10 bg-white px-3 py-2 text-left text-sm text-[#0A2540] outline-none focus:ring-2 focus:ring-[#0A2540]"
          >
            <span>{value.rental === "all" ? t.any : value.rental}</span>
            <svg className={`h-4 w-4 text-black/40 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>

          {open && (
            <ul
              ref={listRef}
              role="listbox"
              className="absolute z-20 mt-2 max-h-56 w-full overflow-auto rounded-md border border-black/10 bg-white py-1 text-sm shadow-lg focus:outline-none"
            >
              {rentalOptions.map((opt) => (
                <li
                  key={opt}
                  role="option"
                  aria-selected={value.rental === opt}
                  onClick={() => { onChange({ ...value, rental: opt }); close(); }}
                  className={`cursor-pointer px-3 py-2 hover:bg-[#F9FAFB] ${value.rental === opt ? "bg-[#F2F4F7]" : ""}`}
                >
                  {opt === "all" ? t.any : opt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </label>

      {/* Price range */}
      <div className="mt-3 grid grid-cols-2 gap-2">
        <label className="block text-[12px] font-medium text-[#0A2540]">
          {t.priceFrom}
          <div className="relative mt-1">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder={locale === "en" ? "e.g. 500" : "ej. 500"}
              value={typeof value.min === "number" ? String(Math.floor(value.min / 1000)) : ""}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                onChange({ ...value, min: raw ? Number(raw) * 1000 : undefined });
              }}
              className="block w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-[#0A2540] outline-none focus:ring-2 focus:ring-[#0A2540]"
            />
          </div>
        </label>
        <label className="block text-[12px] font-medium text-[#0A2540]">
          {t.priceTo}
          <div className="relative mt-1">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder={locale === "en" ? "e.g. 800" : "ej. 800"}
              value={typeof value.max === "number" ? String(Math.floor(value.max / 1000)) : ""}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, "");
                onChange({ ...value, max: raw ? Number(raw) * 1000 : undefined });
              }}
              className="block w-full rounded-md border border-black/10 bg-white px-3 py-2 text-sm text-[#0A2540] outline-none focus:ring-2 focus:ring-[#0A2540]"
            />
          </div>
        </label>
      </div>
      <p className="mt-2 text-[11px] text-black/40">
        {locale === 'en' ? 'Prices in thousands (500 = 500,000 USD)' : 'Precios en miles (500 = 500.000 USD)'}
      </p>

      {/* Reset */}
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => onChange({ ...value })}
          className="hidden"
          aria-hidden
        />
      </div>
      <div className="mt-3 sm:hidden">
        <button
          type="button"
          onClick={() => onChange({ ...value })}
          className="inline-flex h-9 w-full items-center justify-center rounded-md bg-[#0A2540] px-3 text-sm font-medium text-white hover:opacity-95"
        >
          {locale === 'en' ? 'Apply filters' : 'Aplicar filtros'}
        </button>
      </div>
    </aside>
  );
}

export default ProjectsFilters;