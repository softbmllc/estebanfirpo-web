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
              href={`/${locale}/miami`}
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
            className="relative flex items-start gap-3 rounded-lg border border-primary/15 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,.04)]"
          >
            <div className="h-10 w-[3px] rounded-full" style={{background:'linear-gradient(180deg, rgba(212,175,55,.5), rgba(212,175,55,.1))'}} />
            <p className="text-[15px] leading-6 text-[#0A2540]">{m.label}</p>
          </li>
        ))}
      </ul>

      {/* Quote band */}
      <div className="mt-8 rounded-lg border border-primary/10 bg-white p-6 text-center text-sm text-[#0A2540] shadow-[0_1px_3px_rgba(0,0,0,.04)]">
        <div className="mx-auto mb-3 h-[2px] w-24 rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.6), rgba(212,175,55,.0))'}} />
        <p className="italic tracking-wide leading-[1.5]">
          {isEN
            ? '"Do not wait to buy properties, buy properties and wait."'
            : '"No espere a comprar propiedades inmuebles, compre propiedades inmuebles y espere."'}
        </p>
      </div>
    </section>
  );
}