// src/app/[locale]/sobre-mi/page.tsx
import Image from 'next/image';
import { MapPinIcon, GlobeAltIcon, AcademicCapIcon, ChartBarIcon, ShieldCheckIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export default async function SobreMi({
  params,
}: {
  params: { locale: 'es' | 'en' }
}) {
  const locale = params?.locale || 'es';
  const isEN = locale === 'en';

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-primary">
          {isEN ? 'About me' : 'Sobre mí'}
        </h1>
        <div
          className="h-[2px] w-24 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.6), rgba(212,175,55,.0))',
          }}
        />
        <p className="max-w-[46rem] text-neutral-700 leading-[1.7]">
          {isEN
            ? 'I advise real‑estate investors in Miami throughout the entire process —from selecting the right project to closing— with a clear focus on ROI and capital preservation.'
            : 'Asesoro a inversores en Miami durante todo el proceso —desde la selección del proyecto hasta el cierre— con foco claro en ROI y preservación de capital.'}
        </p>
      </header>

      {/* Profile */}
      <section className="rounded-lg border border-primary/10 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,.04)] grid gap-6 sm:grid-cols-[180px,1fr]">
        {/* premium hairline */}
        <div
          className="mb-4 h-[2px] w-full rounded-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.45), rgba(212,175,55,.0))',
          }}
        />
        <div className="relative h-44 w-44 overflow-hidden rounded-xl border border-primary/20 sm:h-48 sm:w-48 shadow-[0_1px_3px_rgba(0,0,0,.08)]">
          <Image src="/images/esteban.jpg" alt="Esteban Firpo" fill sizes="160px" className="object-cover" />
        </div>
        <div className="space-y-4">
          {/* Elegant credentials block */}
          <div className="flex flex-wrap gap-6 border-b border-primary/20 pb-3 text-[#0A2540] text-sm font-light">
            <div className="flex items-center space-x-1">
              <MapPinIcon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-[#555]">{isEN ? 'Miami' : 'Miami'}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GlobeAltIcon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-[#555]">ES · EN</span>
            </div>
            <div className="flex items-center space-x-1">
              <AcademicCapIcon className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-[#555]">{isEN ? 'FL License' : 'Lic. Florida'}</span>
            </div>
          </div>
          {/* Bio in two paragraphs */}
          <div className="space-y-3 text-neutral-700 leading-[1.7] max-w-[60ch]">
            <p>
              {isEN
                ? 'Born in Paysandú (Uruguay). I studied Engineering in Montevideo and led Magenta for 15+ years, making it one of the most important printing companies in Uruguay’s interior and still operating today.'
                : 'Nací en Paysandú (Uruguay). Estudié Ingeniería en Montevideo y durante más de 15 años dirigí Magenta, que es una de las más importantes del interior del país y al día de hoy sigue operando.'}
            </p>
            <p>
              {isEN
                ? 'Now based in Miami, I advise investors on pre‑construction and strategic real‑estate opportunities.'
                : 'Hoy en Miami, asesoro a inversores en preconstrucción y oportunidades estratégicas de real estate.'}
            </p>
          </div>
          {/* services grid */}
          <div className="grid gap-3 md:grid-cols-3">
            <div className="relative rounded-lg border border-primary/15 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,.03)]">
              <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.35), rgba(212,175,55,.0))'}} />
              <div className="flex items-center gap-2">
                <ChartBarIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                <div className="text-[14.5px] leading-6 text-[#0A2540]">
                  <p className="font-medium">{isEN ? 'ROI & strategy' : 'ROI y estrategia'}</p>
                  <p className="text-[12px] text-neutral-600">{isEN ? 'Project and exit analysis' : 'Análisis de proyecto y salida'}</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg border border-primary/15 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,.03)]">
              <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.35), rgba(212,175,55,.0))'}} />
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                <div className="text-[14.5px] leading-6 text-[#0A2540]">
                  <p className="font-medium">{isEN ? 'Reliable developers' : 'Desarrolladores confiables'}</p>
                  <p className="text-[12px] text-neutral-600">{isEN ? 'Curated opportunities' : 'Curaduría de oportunidades'}</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg border border-primary/15 bg-white p-3 shadow-[0_1px_2px_rgba(0,0,0,.03)]">
              <div className="mb-2 h-[2px] w-full rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.35), rgba(212,175,55,.0))'}} />
              <div className="flex items-center gap-2">
                <ClipboardDocumentListIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                <div className="text-[14.5px] leading-6 text-[#0A2540]">
                  <p className="font-medium">{isEN ? 'End‑to‑end process' : 'Proceso integral'}</p>
                  <p className="text-[12px] text-neutral-600">{isEN ? 'Documentation & closing' : 'Documentación y cierre'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <a
          href="mailto:esteban@miamiliferealty.com"
          className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-white hover:opacity-90"
        >
          {isEN ? 'Email Esteban' : 'Escribile a Esteban'}
        </a>
        <a
          href="https://wa.me/17542673931"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp +1 754 267 3931"
          className="inline-flex h-11 items-center justify-center rounded-md border border-primary px-5 text-primary hover:bg-accent/10"
        >
          {isEN ? 'WhatsApp' : 'Hablá por WhatsApp'}
        </a>
        {/* micro removed by request */}
      </section>
    </main>
  );
}