// src/app/[locale]/miami/page.tsx

import {getTranslations} from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: 'es' | 'en' } }) {
  const { locale } = params;
  return {
    alternates: {
      canonical: `/${locale}/miami`,
    },
  };
}

export default async function Miami({ params }: { params: { locale: 'es' | 'en' } }) {
  const locale = params.locale;
  const t = await getTranslations({ locale });

  const kpis: { value: string; label: string }[] = [
    locale === 'en'
      ? { value: '+372k', label: 'Net migration to Florida (2022–23)' }
      : { value: '+372 k', label: 'Migración neta a Florida (2022–23)' },
    locale === 'en'
      ? { value: '56M', label: 'MIA passengers 2024' }
      : { value: '56 M', label: 'Pasajeros MIA 2024' },
    locale === 'en'
      ? { value: '18%', label: 'South FL sales to foreign buyers' }
      : { value: '18 %', label: 'Ventas a extranjeros en el Sur de Florida' },
    locale === 'en'
      ? { value: '0%', label: 'State income tax in Florida' }
      : { value: '0 %', label: 'Impuesto estatal a la renta en FL' },
  ];
  
  type Stat = { value: string; label: string };
  const stats: Stat[] = [
    locale === 'en'
      ? { value: '+372k / +78%', label: 'Net migration to FL / higher income of entrants' }
      : { value: '+372 k / +78 %', label: 'Migración neta a FL / ingresos entrantes +78%' },
    locale === 'en'
      ? { value: '0% • 5.5% • ~0.7%', label: 'Income tax • Corporate • Property tax (eff.)' }
      : { value: '0 % • 5,5 % • ~0,7 %', label: 'Renta • Corporativo • Predial (efectivo)' },
    locale === 'en'
      ? { value: '18%', label: 'Share of South FL sales to foreign buyers' }
      : { value: '18%', label: 'Participación de extranjeros en ventas del Sur de Florida' },
    locale === 'en'
      ? { value: '56M • 8.2M • Brightline', label: 'MIA passengers • PortMiami cruise • Rail to Orlando' }
      : { value: '56 M • 8,2 M • Brightline', label: 'MIA pasajeros • PortMiami cruceros • Tren a Orlando' },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary">
          {locale === 'en' ? 'Why invest in Miami' : '¿Por qué invertir en Miami?'}
        </h1>
        <span className="mt-3 inline-flex rounded-full bg-[rgba(212,175,55,.15)] px-2 py-0.5 text-[11px] font-medium text-[#0A2540]">
          {locale === 'en' ? '2025 Insight' : 'Análisis 2025'}
        </span>
        <p className="mt-3 text-[17px] leading-[1.75] text-[#0D1521]">
          {t('miami.copy', {
            default:
              'Miami es la puerta de entrada a Latinoamérica, un hub financiero global y un mercado inmobiliario en constante crecimiento. Invertir aquí significa aprovechar renta alta, estabilidad y seguridad jurídica.'
          })}
        </p>
      </header>

      {/* Executive summary */}
      <section className="mt-6 max-w-3xl">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[#0A2540] mt-4">
          {locale === 'en' ? 'Summary' : 'Resumen'}
        </h2>
        {/* KPI strip */}
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 mt-2">
          {kpis.map((k, i) => (
            <li key={i} className="relative rounded-lg border border-black/8 bg-white p-3.5 sm:p-4 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
              <div className="absolute left-3 right-3 top-0 h-[2px] rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
              <p className="text-2xl font-semibold tracking-tight text-[#0A2540] tabular-nums whitespace-nowrap">{k.value}</p>
              <p className="mt-1 text-[13px] leading-5 text-[#0D1521]/80">{k.label}</p>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21yM5KOsoq2niX4QY7FXyUrFiLuQpLxw9IIzheIYWY1ruSBHG5DUrSzUmGst3Ew4nb8ZKw6ptP"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center rounded-lg border border-[#0A2540]/20 px-4 py-2 text-sm font-medium text-[#0A2540] hover:bg-[#0A2540]/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A2540] whitespace-nowrap"
          >
            {locale === 'en' ? 'Talk to an advisor' : 'Hablar con un asesor'}
          </a>
        </div>
        <p className="mt-2 text-[16px] leading-7 text-[#0D1521]/85">
          {locale === 'en'
            ? 'Net in‑migration, diversified economy and tax advantages. Global demand keeps dollar liquidity. Prices normalized after the surge; preconstruction and STR add flexible yields. Risks are mitigated by strong codes and insurance reforms.'
            : 'Migración neta, economía diversificada y ventajas fiscales. La demanda global mantiene liquidez en dólares. Los precios se normalizaron tras el auge; la preconstrucción y el STR suman rentas flexibles. Los riesgos se mitigan con códigos robustos y reformas de seguros.'}
        </p>
      </section>

      {/* Sticky sub‑nav */}
      <nav className="md:sticky md:top-16 z-10 mt-6 bg-white border-b border-black/5">
        <ul className="flex gap-4 overflow-x-auto text-[13px] text-[#0A2540] py-2 px-4">
          <li>
            <a
              href="#demografia"
              aria-label={locale === 'en' ? 'Go to Demographics' : 'Ir a Demografía'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Demographics' : 'Demografía'}
            </a>
          </li>
          <li>
            <a
              href="#empleo"
              aria-label={locale === 'en' ? 'Go to Jobs' : 'Ir a Empleo'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Jobs' : 'Empleo'}
            </a>
          </li>
          <li>
            <a
              href="#precios"
              aria-label={locale === 'en' ? 'Go to Prices' : 'Ir a Precios'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Prices' : 'Precios'}
            </a>
          </li>
          <li>
            <a
              href="#impuestos"
              aria-label={locale === 'en' ? 'Go to Taxes' : 'Ir a Impuestos'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Taxes' : 'Impuestos'}
            </a>
          </li>
          <li>
            <a
              href="#demanda"
              aria-label={locale === 'en' ? 'Go to International demand' : 'Ir a Demanda internacional'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Intl demand' : 'Demanda int.'}
            </a>
          </li>
          <li>
            <a
              href="#infraestructura"
              aria-label={locale === 'en' ? 'Go to Infrastructure' : 'Ir a Infraestructura'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Infrastructure' : 'Infraestructura'}
            </a>
          </li>
          <li>
            <a
              href="#str"
              aria-label={locale === 'en' ? 'Go to STR & Preconstruction' : 'Ir a STR y Preconstrucción'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'STR/Preconstruction' : 'STR/Preconstrucción'}
            </a>
          </li>
          <li>
            <a
              href="#riesgos"
              aria-label={locale === 'en' ? 'Go to Risks' : 'Ir a Riesgos'}
              className="whitespace-nowrap hover:underline focus:outline-none focus:ring-2 focus:ring-[#0A2540]/30 px-1 py-0.5 rounded"
            >
              {locale === 'en' ? 'Risks' : 'Riesgos'}
            </a>
          </li>
        </ul>
      </nav>

      {/* Highlights with numbers */}
      <section id="highlights" className="mt-8">
        <ul className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {stats.map((s, i) => (
            <li key={i} className="relative rounded-lg border border-black/8 bg-white p-3.5 sm:p-4 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
              <div className="absolute left-3 right-3 top-0 h-[2px] rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
              <div className="flex items-start gap-3">
                <span aria-hidden className="mt-2 inline-block h-2 w-2 rounded-full bg-[#0A2540]/40" />
                <div>
                  <p className="text-[17px] font-semibold leading-6 text-[#0A2540] tabular-nums whitespace-nowrap">{s.value}</p>
                  <p className="text-[14px] leading-6 text-[#0D1521]/85">{s.label}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Anchor targets */}
      <div id="demografia" className="h-0 scroll-mt-24" />
      {/* Demografía chart block */}
      <div className="mt-3 rounded-lg border border-black/8 bg-white p-4">
        <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
        <div className="flex items-end gap-8">
          <div className="flex flex-col items-center">
            <div className="w-8 rounded bg-[#0A2540]" style={{height: '116px'}} />
            <p className="mt-2 text-[12px] text-[#0D1521]/80">{locale === 'en' ? 'Domestic' : 'Doméstica'}</p>
            <p className="text-[12px] font-semibold tabular-nums text-[#0A2540]">≈194k</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 rounded bg-[#0A2540]/70" style={{height: '106px'}} />
            <p className="mt-2 text-[12px] text-[#0D1521]/80">{locale === 'en' ? 'International' : 'Internacional'}</p>
            <p className="text-[12px] font-semibold tabular-nums text-[#0A2540]">≈178k</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between text-[12px] text-[#0D1521]/70">
          <p>{locale === 'en' ? 'Florida net migration 2022–23' : 'Migración neta Florida 2022–23'}</p>
          <p>{locale === 'en' ? 'Source: U.S. Census; Florida EDR' : 'Fuente: U.S. Census; Florida EDR'}</p>
        </div>
        <div className="mt-2 h-px bg-black/10" />
      </div>
      <div id="empleo" className="h-0 scroll-mt-24" />
      <section id="precios" className="mt-12 scroll-mt-24">
        <h3 className="text-lg font-semibold text-[#0A2540]">{locale === 'en' ? 'Prices' : 'Precios'}</h3>
        <div className="mt-3 rounded-lg border border-black/10 bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#0D1521]/80">{locale === 'en' ? 'Case‑Shiller Miami index (2000=100)' : 'Índice Case‑Shiller Miami (2000=100)'}</p>
            <p className="text-[14px] font-semibold tabular-nums text-[#0A2540]">{locale === 'en' ? '≈4.4×' : '≈4,4×'}</p>
          </div>
          <svg viewBox="0 0 320 80" className="mt-2 h-20 w-full" role="img" aria-label={locale === 'en' ? 'Case‑Shiller Miami index trend' : 'Tendencia del índice Case‑Shiller de Miami'}>
            <title>{locale === 'en' ? 'Case‑Shiller Miami (2000=100) trend' : 'Tendencia Case‑Shiller Miami (2000=100)'}</title>
            <path d="M0 70 C40 65, 60 60, 80 55 S120 45, 140 40 180 35, 200 38 240 50, 260 45 300 20, 320 15" fill="none" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="70" x2="320" y2="70" stroke="currentColor" opacity=".06" />
          </svg>
        </div>
      </section>
      <div id="impuestos" className="h-0 scroll-mt-24" />
      <div id="demanda" className="h-0 scroll-mt-24" />
      {/* Demanda stacked-bar block */}
      <div className="mt-3 rounded-lg border border-black/8 bg-white p-4">
        <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
        <div className="h-3 w-full overflow-hidden rounded bg-black/5 flex">
          <div className="h-full bg-[#0A2540]" style={{width: '15%'}} title={locale === 'en' ? 'Colombia 15%' : 'Colombia 15%'} />
          <div className="h-full bg-[#0A2540]/80" style={{width: '14%'}} title={locale === 'en' ? 'Argentina 14%' : 'Argentina 14%'} />
          <div className="h-full bg-[#0A2540]/60" style={{width: '7%'}} title={locale === 'en' ? 'Brazil 7%' : 'Brasil 7%'} />
          <div className="h-full bg-[#0A2540]/40" style={{width: '6%'}} title={locale === 'en' ? 'Venezuela 6%' : 'Venezuela 6%'} />
          <div className="h-full bg-[#0A2540]/20" style={{width: '58%'}} title={locale === 'en' ? 'Others 58%' : 'Otros 58%'} />
        </div>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] text-[#0D1521]/85">
          <li className="flex items-center"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0A2540]" />Colombia 15%</li>
          <li className="flex items-center"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0A2540]/80" />Argentina 14%</li>
          <li className="flex items-center"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0A2540]/60" />{locale === 'en' ? 'Brazil 7%' : 'Brasil 7%'}</li>
          <li className="flex items-center"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0A2540]/40" />Venezuela 6%</li>
          <li className="flex items-center"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#0A2540]/20" />{locale === 'en' ? 'Others 58%' : 'Otros 58%'}</li>
        </ul>
        <p className="mt-2 text-[12px] text-[#0D1521]/70">{locale === 'en' ? 'Source: NAR Florida 2023' : 'Fuente: NAR Florida 2023'}</p>
      </div>
      <div id="infraestructura" className="h-0 scroll-mt-24" />
      <div id="str" className="h-0 scroll-mt-24" />
      {/* STR pipeline block */}
      <div className="mt-3 rounded-lg border border-black/8 bg-white p-4">
        <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
        <div className="flex items-center justify-between">
          <p className="text-[14px] text-[#0D1521]/80">{locale === 'en' ? 'New condo pipeline South FL' : 'Pipeline de nuevos condominios en S. Florida'}</p>
          <p className="text-[14px] font-semibold tabular-nums text-[#0A2540]">{locale === 'en' ? '≈20,600' : '≈20.600'}</p>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded bg-black/5 flex">
          <div className="h-full bg-[#0A2540]" style={{width: '50%'}} title={locale === 'en' ? 'STR‑friendly ≈10.3k' : 'Apto STR ≈10.3k'} />
          <div className="h-full bg-[#0A2540]/30" style={{width: '50%'}} title={locale === 'en' ? 'Traditional ≈10.3k' : 'Tradicional ≈10.3k'} />
        </div>
        <div className="mt-2 flex justify-between text-[12px] text-[#0D1521]/80">
          <p>{locale === 'en' ? 'STR‑friendly projects' : 'Proyectos apto STR'}</p>
          <p>{locale === 'en' ? 'Traditional owner‑occupant' : 'Tradicional owner‑occupant'}</p>
        </div>
        <p className="mt-2 text-[12px] text-[#0D1521]/70">{locale === 'en' ? 'Source: ISG World, Q1‑2024' : 'Fuente: ISG World, Q1‑2024'}</p>
      </div>
      <div id="riesgos" className="h-0 scroll-mt-24" />

      {/* Why the U.S. is unique */}
      <section className="mt-12">
        <header className="max-w-3xl mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0A2540]">
            {locale === 'en' ? 'Why is the U.S. unique?' : '¿Por qué EE.UU. es único?'}
          </h2>
          <p className="mt-2 text-[16px] leading-7 text-[#0D1521]/85">
            {locale === 'en'
              ? 'The U.S. offers a predictable legal system, a mature data‑driven market, and unmatched global liquidity.'
              : 'EE.UU. ofrece un sistema legal predecible, un mercado maduro basado en datos y una liquidez global inigualable.'}
          </p>
        </header>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {[
            locale === 'en'
              ? ['Legal certainty','Title insurance and standardized contracts']
              : ['Seguridad jurídica','Seguro de título y contratos estandarizados'],
            locale === 'en'
              ? ['Mature market','80+ years Case‑Shiller; 73/80 positive']
              : ['Mercado maduro','80+ años Case‑Shiller; 73/80 positivos'],
            locale === 'en'
              ? ['Global liquidity','International buyers; USD reserve']
              : ['Liquidez global','Compradores internacionales; USD reserva']
          ].map(([title, micro], i) => (
            <div key={i} className="relative flex items-start gap-3 rounded-lg border border-primary/15 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
              <div className="h-10 w-[3px] rounded-full" style={{background:'linear-gradient(180deg, rgba(212,175,55,.5), rgba(212,175,55,.1))'}} />
              <div>
                <p className="text-[15px] leading-6 font-medium text-[#0A2540]">{title}</p>
                <p className="text-[12px] text-neutral-500">{micro as string}</p>
              </div>
            </div>
          ))}
        </div>
        <details className="mt-4 rounded-lg border border-black/10 bg-white p-4 sm:p-5 open:shadow-[0_6px_18px_rgba(0,0,0,.04)]">
          <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
          <summary className="cursor-pointer text-[14px] font-semibold text-[#0A2540]">
            {locale === 'en' ? 'See more reasons' : 'Ver más razones'}
          </summary>
          <div className="mt-3 space-y-2 text-[14.5px] leading-7 text-[#0D1521]/85">
            <p>
              {locale === 'en'
                ? 'Title insurance, standardized contracts and public records reduce uncertainty and speed due diligence.'
                : 'El seguro de título, los contratos estandarizados y los registros públicos reducen la incertidumbre y agilizan la debida diligencia.'}
            </p>
            <p>
              {locale === 'en'
                ? 'Case‑Shiller shows long‑run resilience; dollar strength and international demand add exit liquidity.'
                : 'Case‑Shiller demuestra resiliencia a largo plazo; la fortaleza del dólar y la demanda internacional aportan liquidez de salida.'}
            </p>
          </div>
        </details>
      </section>

      {/* Sources */}
      <section id="fuentes" className="mt-12">
        <div className="rounded-lg border border-black/10 bg-white p-4 sm:p-5 shadow-[0_1px_3px_rgba(0,0,0,.04)]">
          <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))'}} />
          <h3 className="text-lg font-semibold text-[#0A2540]">{locale === 'en' ? 'Sources' : 'Fuentes'}</h3>
          <ul className="mt-2 list-disc pl-6 text-[14px] text-[#0D1521]/80 space-y-1">
            <li>NAR Florida 2023 — {locale === 'en' ? 'International buyers share' : 'Participación de compradores internacionales'}</li>
            <li>ISG World Q1‑2024 — {locale === 'en' ? 'Condo pipeline' : 'Pipeline de condominios'}</li>
            <li>S&amp;P Case‑Shiller — {locale === 'en' ? 'Miami index (2000=100)' : 'Índice Miami (2000=100)'}</li>
            <li>MIA &amp; PortMiami — {locale === 'en' ? 'Passenger volumes' : 'Volúmenes de pasajeros'}</li>
            <li>U.S. Census &amp; Florida EDR — {locale === 'en' ? 'Net migration' : 'Migración neta'}</li>
          </ul>
          <p className="mt-2 text-[12px] italic text-neutral-500">{locale === 'en' ? 'Data consolidated 2023–2024.' : 'Datos consolidados 2023–2024.'}</p>
        </div>
      </section>
      <section className="mt-6 rounded-lg border border-primary/10 bg-white p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,.04)]">
        <div className="mx-auto mb-3 h-[2px] w-24 rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.6), rgba(212,175,55,.0))'}} />
        <p className="mb-3 text-[14px] text-neutral-700">{locale === 'en' ? 'Ready to explore Miami projects?' : '¿Listo para explorar proyectos en Miami?'}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21yM5KOsoq2niX4QY7FXyUrFiLuQpLxw9IIzheIYWY1ruSBHG5DUrSzUmGst3Ew4nb8ZKw6ptP"
            target="_blank"
            rel="noopener"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white no-underline hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30"
          >
            {locale === 'en' ? 'Talk to an advisor' : 'Hablar con un asesor'}
          </a>
          <a href={`/${locale}/proyectos`} className="inline-flex h-10 items-center justify-center rounded-md border border-primary/30 bg-white px-4 text-sm font-medium text-primary no-underline hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30">
            {locale === 'en' ? 'See available projects' : 'Ver proyectos disponibles'}
          </a>
        </div>
      </section>
    </main>
  );
}
