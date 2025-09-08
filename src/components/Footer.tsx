"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  // Brand palette (estándar del proyecto)
  const NAVY = "#0B1F3A";
  const GOLD = "#D4AF37";
  const SAND = "#F6F5F0";

  const pathname = usePathname();
  const locale = (pathname?.split("/")[1] || "es") as "es" | "en";
  const isEN = locale === "en";

  return (
    <footer className="mt-16" style={{ backgroundColor: NAVY, color: SAND }}>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + tagline */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Esteban Firpo · <span className="font-normal">Miami Real Estate</span>
            </h3>
            <p className="text-sm opacity-90">
              {isEN
                ? "Professional advisory in pre‑construction and select projects in Miami."
                : "Asesoría profesional en preventa y proyectos selectos en Miami."}
            </p>
          </div>

          {/* Contacto */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2" style={{ borderColor: GOLD }}>
                {/* Coloca tu foto en public/images/esteban.jpg (300×300 aprox). Si no existe, mostramos un fallback. */}
                <Image
                  src="/images/Esteban.jpg"
                  alt="Foto de Esteban Firpo"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Esteban Firpo</p>
                <p className="text-xs opacity-90">REALTOR® Associate</p>
              </div>
            </div>

            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="mailto:esteban@miamiliferealty.com"
                  className="hover:opacity-90"
                  style={{ color: SAND }}
                >
                  esteban@miamiliferealty.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/17542673931"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                  style={{ color: SAND }}
                  aria-label={isEN ? "WhatsApp" : "WhatsApp"}
                >
                  {isEN ? "+1 (754) 267‑3931 · WhatsApp" : "+1 (754) 267‑3931 · WhatsApp"}
                </a>
              </li>
              <li className="opacity-90">
                Miami Life Realty · 2320 Hollywood Blvd, Hollywood, FL 33020
              </li>
            </ul>
          </div>

          {/* Enlaces útiles */}
          <div className="space-y-3">
            <p className="text-sm font-medium">{isEN ? "Links" : "Enlaces"}</p>
            <ul className="text-sm space-y-2">
              <li>
                <Link href={`/${locale}/proyectos`} className="hover:opacity-90" style={{ color: SAND }}>
                  {isEN ? "Projects" : "Proyectos"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/miami`} className="hover:opacity-90" style={{ color: SAND }}>
                  {isEN ? "Why Miami" : "Por qué Miami"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/financiacion`} className="hover:opacity-90" style={{ color: SAND }}>
                  {isEN ? "Financing" : "Financiación"}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contacto`} className="hover:opacity-90" style={{ color: SAND }}>
                  {isEN ? "Contact" : "Contacto"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-6xl px-4 py-4 text-xs flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="w-full flex justify-center">
            {/* Desktop: una sola línea */}
            <p className="opacity-90 hidden sm:block text-center">
              {isEN
                ? <>© {year} Esteban Firpo. All rights reserved. · Made with <span aria-hidden>💻</span> by{" "}</>
                : <>© {year} Esteban Firpo. Todos los derechos reservados. · Hecho con <span aria-hidden>💻</span> por{" "}</>
              }
              <a
                href="https://www.devrodri.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
                style={{ color: SAND }}
              >
                Rodrigo Opalo
              </a>
            </p>
            {/* Mobile: dos líneas centradas */}
            <div className="sm:hidden text-center leading-relaxed">
              <p className="opacity-90">
                {isEN
                  ? `© ${year} Esteban Firpo. All rights reserved.`
                  : `© ${year} Esteban Firpo. Todos los derechos reservados.`}
              </p>
              <p className="opacity-90">
                {isEN ? "Made with 💻 by " : "Hecho con 💻 por "}
                <a
                  href="https://www.devrodri.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90"
                  style={{ color: SAND }}
                >
                  Rodrigo Opalo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sutil acento dorado inferior */}
      <div style={{ height: 3, backgroundColor: GOLD }} />
    </footer>
  );
}