// src/components/NavBar.tsx
"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {useLocale} from "next-intl";

export default function NavBar(){
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/es";
  const locale = (useLocale() as "es"|"en") || "es";
  const base = `/${locale}`;

  const L = locale === "es"
    ? {home:"Inicio", miami:"Miami", precon:"Preconstrucción", proyectos:"Proyectos", contacto:"Contacto", sobreMi:"Sobre mí", financing:"Financiación"}
    : {home:"Home",   miami:"Miami", precon:"Pre-construction", proyectos:"Projects", contacto:"Contact",  sobreMi:"About", financing:"Financing"};

  const items = [
    { href: `${base}`,              label: L.home },
    { href: `${base}/miami`,        label: L.miami },
    { href: `${base}/precon`,       label: L.precon },
    { href: `${base}/proyectos`,    label: L.proyectos },
    { href: `${base}/financiacion`, label: L.financing },
    { href: `${base}/contacto`,     label: L.contacto },
    { href: `${base}/sobre-mi`,     label: L.sobreMi }
  ];

  const switchTo = locale === "es" ? "en" : "es";
  const switchHref = `/${switchTo}${pathname.replace(/^\/(es|en)/,"")}`;

  return (
    <header className="w-full border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href={base} className="text-sm font-semibold text-brand-navy no-underline">
          Esteban Firpo · Miami Real Estate
        </Link>

        <button aria-label="Abrir menú" onClick={()=>setOpen(v=>!v)} className="md:hidden p-2">
          <span>☰</span>
        </button>

        <nav className="hidden md:flex gap-6 text-sm">
          {items.map(it=>(
            <Link
              key={it.href}
              href={it.href}
              aria-current={pathname === it.href ? 'page' : undefined}
              className="no-underline text-ink hover:text-primary"
            >
              {it.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            title={switchTo.toUpperCase()}
            className="inline-flex items-center rounded-md border border-primary text-primary px-2 py-1 text-xs font-semibold no-underline hover:bg-primary hover:text-white"
          >
            {switchTo.toUpperCase()}
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="md:hidden border-t border-black/5">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
            {items.map(it=>(
              <Link
                key={it.href}
                href={it.href}
                aria-current={pathname === it.href ? 'page' : undefined}
                onClick={()=>setOpen(false)}
                className="no-underline text-ink"
              >
                {it.label}
              </Link>
            ))}
            <Link
              href={switchHref}
              onClick={()=>setOpen(false)}
              title={switchTo.toUpperCase()}
              className="inline-flex items-center rounded-md border border-primary text-primary px-2 py-1 text-xs font-semibold no-underline hover:bg-primary hover:text-white"
            >
              {switchTo.toUpperCase()}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}