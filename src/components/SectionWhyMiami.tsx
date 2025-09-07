// src/components/SectionWhyMiami.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function SectionWhyMiami() {
  const { locale } = useParams() as { locale: 'es' | 'en' };
  const isEN = locale === 'en';

  const metrics: {label: string; value?: string}[] = [
    { label: isEN ? 'Demographic growth +8.2% last decade' : 'Crecimiento demográfico +8.2% la última década' },
    { label: isEN ? '0% state income tax' : '0% Impuesto a las ganancias' },
    { label: isEN ? 'Average occupancy 95.8%' : 'Ocupación promedio 95.8%' },
    { label: isEN ? 'Constant global liquidity and tourism' : 'Liquidez y turismo internacional constantes' },
    { label: isEN ? 'Legal stability and investor protection' : 'Estabilidad jurídica y protección al inversor' },
    { label: isEN ? 'Financial & cultural hub (LatAm–EU)' : 'Hub financiero y cultural (LatAm–EU)' },
  ];

  return (
    <section aria-labelledby="why-miami" className="mt-10">
      {/* HERO split: image + text */}
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        <div className="rounded-xl">
          {/* Placeholder image — reemplazar con visual SORA */}
          <Image
            src="/images/miami-hero.jpg"
            alt="Skyline de Miami"
            width={1360}
            height={520}
            priority
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 id="why-miami" className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A2540]">
            {isEN ? 'Why invest in Miami?' : '¿Por qué invertir en Miami?'}
          </h2>
          <p className="mt-3 text-[17px] leading-[1.6] text-[#0D1521]">
            {isEN
              ? 'Investing in Miami means investing in a global market in constant expansion, with solid fundamentals and a forward‑looking vision.'
              : 'Invertir en Miami es invertir en un mercado global en constante expansión, con fundamentos sólidos y visión de futuro.'}
          </p>
          <div className="mt-5">
            <Link
              href="miami"
              className="inline-flex h-10 py-2.5 items-center justify-center rounded-md bg-[#0A2540] px-4 text-sm font-medium text-white transition-colors hover:opacity-90 hover:shadow-[0_4px_12px_rgba(10,37,64,.08)]"
              aria-label={isEN ? 'Read full Miami analysis' : 'Ver análisis completo de Miami'}
            >
              {isEN ? 'See full Miami insight' : 'Ver análisis completo de Miami'}
            </Link>
          </div>
        </div>
      </div>

      {/* Metric cards */}
      <ul className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {metrics.map((m, i) => (
          <li
            key={i}
            className="rounded-xl border border-black/10 bg-white p-4 sm:p-5 shadow-[inset_0_-1px_0_rgba(0,0,0,.03)]"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#0A2540]/30 text-[#0A2540]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span>
              <p className="text-[15px] leading-6 text-[#0A2540]">{m.label}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Quote band */}
      <div className="mt-8 rounded-xl border border-black/10 bg-[#F9FAFB] p-6 text-center text-sm text-[#0A2540]">
        <div className="mx-auto mb-3 h-px w-10 bg-[#D4AF37]/70" />
        <p className="italic tracking-wide leading-[1.4]">
          {isEN
            ? '"Do not wait to buy properties, buy properties and wait."'
            : '"No esperes a comprar propiedades, compra propiedades y espera."'}
        </p>
      </div>
    </section>
  );
}