// src/components/NavBar.tsx
"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState, useEffect} from "react";
import {useLocale} from "next-intl";

export default function NavBar(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
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
    <header className={"w-full bg-white " + (scrolled ? "border-b border-black/10 shadow-[0_1px_8px_rgba(0,0,0,.03)]" : "border-b border-black/5")}>
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href={base} className="text-sm font-semibold text-brand-navy no-underline">
          Esteban Firpo · Miami Real Estate
        </Link>

        <button aria-label="Abrir menú" onClick={()=>setOpen(v=>!v)} className="md:hidden p-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <nav className="hidden md:flex gap-6 xl:gap-7 text-sm font-medium">
          {items.map(it=>{
            const isHome = it.href === base;
            const isActive = isHome ? (pathname === base) : pathname.startsWith(it.href);
            return (
              <Link
                key={it.href}
                href={it.href}
                aria-current={isActive ? 'page' : undefined}
                className={`no-underline text-ink hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30 underline-offset-10 xl:underline-offset-12 transition-colors ${isActive ? 'text-primary underline decoration-2 xl:decoration-1' : ''}`}
              >
                {it.label}
              </Link>
            )
          })}
          <Link
            href={switchHref}
            title={switchTo.toUpperCase()}
            aria-label={locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
            className="inline-flex items-center rounded-full border border-primary text-primary px-2.5 py-1 text-xs font-semibold no-underline hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30"
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
              aria-label={locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
              className="inline-flex items-center rounded-full border border-primary text-primary px-2.5 py-1 text-xs font-semibold no-underline hover:bg-primary hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30"
            >
              {switchTo.toUpperCase()}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}