// src/app/[locale]/page.tsx
import {getTranslations} from 'next-intl/server';
import Link from 'next/link';
import SectionWhyMiami from '@/components/SectionWhyMiami';
import SectionWhyPrecon from '@/components/SectionWhyPrecon';
import FeaturedProjects from '@/components/FeaturedProjects';

export default async function Home({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'home'});

  return (
    <div className="space-y-20 py-12">
      {/* HERO */}
      <section role="region" aria-labelledby="hero-title" aria-describedby="hero-desc" className="relative overflow-hidden rounded-[18px] border border-black/10 bg-[#F9FAFB] px-8 sm:px-12 md:px-14 pt-[88px] pb-20 md:pt-[104px] md:pb-24 shadow-[inset_0_-1px_0_0_rgba(0,0,0,.04),0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)] flex justify-center items-center min-h-[600px]">
        

        <div className="space-y-12 relative max-w-3xl md:max-w-4xl xl:max-w-[50rem] mx-auto text-center">
          {/* Capsules — compact on mobile, detailed on desktop */}
          {/* Mobile: single compact capsule */}
          <div className="sm:hidden -mx-4 px-4">
            <span className="inline-flex items-center rounded-[999px] border border-[#D4AF37]/30 bg-white/60 px-3 py-1 text-[11px] leading-tight font-medium text-[#0A2540] hover:bg-white/80">
              {params.locale === 'en'
                ? 'Closing financing · 2025–2028 · Verified'
                : 'Financiación al cierre · 2025–2028 · Verificado'}
            </span>
          </div>

          {/* Desktop & tablets: three capsules */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 gap-y-1 -mx-4 px-4">
            <span
              className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white/60 px-3 py-1 text-[11px] sm:text-[12px] leading-tight font-medium text-[#0A2540] hover:bg-white/80"
              aria-hidden="true"
            >
              <span aria-hidden className="mr-1 inline-block h-3 w-3 align-[-2px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><line x1="2" y1="11" x2="22" y2="11"/></svg>
              </span>
              {params.locale === 'en' ? 'Closing financing (foreign buyers)' : 'Financiación al cierre (extranjeros)'}
            </span>
            <span
              className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white/60 px-3 py-1 text-[11px] sm:text-[12px] leading-tight font-medium text-[#0A2540] hover:bg-white/80"
              aria-hidden="true"
            >
              <span aria-hidden className="mr-1 inline-block h-3 w-3 align-[-2px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><line x1="16" y1="3" x2="16" y2="7"/><line x1="8" y1="3" x2="8" y2="7"/></svg>
              </span>
              {params.locale === 'en' ? 'Deliveries 2025–2028' : 'Entregas 2025–2028'}
            </span>
            <span
              className="inline-flex items-center rounded-full border border-[#D4AF37]/30 bg-white/60 px-3 py-1 text-[11px] sm:text-[12px] leading-tight font-medium text-[#0A2540] hover:bg-white/80"
              aria-hidden="true"
            >
              <span aria-hidden className="mr-1 inline-block h-3 w-3 align-[-2px]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </span>
              {params.locale === 'en' ? 'Inventory verified weekly' : 'Inventario verificado semanal'}
            </span>
          </div>

          {/* Eyebrow */}
          <p className="text-[12px] tracking-[0.12em] uppercase text-[#0A2540]/85 mb-1">
            {params.locale === 'en' ? 'Catalog reviewed · flexible payment options' : 'Catálogo revisado · opciones de pago flexibles'}
          </p>

          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[58px] font-bold leading-[1.1] tracking-[-0.01em] text-[#0A2540] text-balance max-w-[50rem] mx-auto">
            {params.locale === 'en' ? 'Invest in high-performing pre-construction in Miami.' : 'Invertí en preconstrucción de alto rendimiento en Miami.'}
          </h1>
          <p className="max-w-2xl mx-auto text-[18px] leading-8 text-[#0D1521]/85">
            {params.locale === 'en'
              ? 'Flexible payment plans, top developers, frictionless closing.'
              : 'Planes de pago flexibles, desarrolladores de primer nivel y cierre sin fricción.'}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row justify-center items-center">
            <Link
              href={`/${params.locale}/proyectos`}
              prefetch
              data-analytics="hero:cta_projects"
              aria-describedby="cta-note"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#0A2540] px-6 text-sm font-medium text-white transition-opacity transition-colors hover:opacity-90 active:opacity-90 min-w-[176px] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/45 transition-transform hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(10,37,64,.08)]"
            >
              {params.locale === 'en' ? 'See projects' : 'Ver proyectos'}
            </Link>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ21yM5KOsoq2niX4QY7FXyUrFiLuQpLxw9IIzheIYWY1ruSBHG5DUrSzUmGst3Ew4nb8ZKw6ptP"
              target="_blank"
              rel="noreferrer noopener"
              data-analytics="hero:cta_meeting"
              title={params.locale === 'en' ? 'Open Google Calendar' : 'Abrir Google Calendar'}
              aria-label={params.locale === 'en' ? 'Schedule a meeting on Google Calendar' : 'Agendar reunión en Google Calendar'}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border-[1.5px] border-[#0A2540] px-6 text-sm font-semibold text-[#0A2540] hover:bg-[#0A2540] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30 min-w-[176px] md:min-w-0 w-full sm:w-auto transition-colors"
            >
              <span aria-hidden className="h-4 w-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="3" y="5" width="18" height="16" rx="2" ry="2"></rect>
                  <line x1="16" y1="3" x2="16" y2="7"></line>
                  <line x1="8" y1="3" x2="8" y2="7"></line>
                  <line x1="3" y1="11" x2="21" y2="11"></line>
                </svg>
              </span>
              {params.locale === 'en' ? 'Schedule a meeting' : 'Agendar reunión'}
            </a>
          </div>
          {/* TRUST ROW (wordmarks monocromo, reales) */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[#0A2540]/60">
              <span
                className="text-[12px] sm:text-xs font-semibold tracking-[0.14em] uppercase"
                aria-label="Miami Life Realty"
                title="Miami Life Realty"
              >
                MIAMI LIFE REALTY
              </span>
              <span
                className="text-[12px] sm:text-xs font-semibold tracking-[0.14em] uppercase"
                aria-label={params.locale==='en' ? 'Esteban Firpo · REALTOR®' : 'Esteban Firpo · REALTOR®'}
                title="Esteban Firpo · REALTOR®"
              >
                ESTEBAN FIRPO · REALTOR®
              </span>
              <span
                className="text-[12px] sm:text-xs font-semibold tracking-[0.14em] uppercase"
                aria-label={params.locale==='en' ? 'NAR · REALTOR®' : 'NAR · REALTOR®'}
                title="NAR · REALTOR®"
              >
                NAR · REALTOR®
              </span>
            </div>
          </div>
          <div id="hero-desc" className="pt-2 text-xs text-[#0A2540]/70 flex items-center justify-center">
            <span className="text-[#0A2540]/60 mr-1 hidden sm:inline">{params.locale === 'en' ? 'Questions?' : '¿Dudas?'}</span>
            <a
              href="https://wa.me/17542673931?text=Hola%20Esteban,%20quiero%20coordinar%20una%20reuni%C3%B3n."
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp de Esteban con mensaje prellenado"
              className="block sm:inline underline decoration-[#0A2540]/30 underline-offset-2 hover:decoration-[#0A2540] sm:ml-2" data-analytics="hero:whatsapp"
            >
              {params.locale === 'en' ? 'Chat on WhatsApp' : 'Hablemos por WhatsApp'}
            </a>
          </div>
        </div>
      </section>

      <SectionWhyMiami />
      <SectionWhyPrecon
        heroImageSrc="/images/precon-hero.jpg"
        heroImageAlt={params.locale === 'en' ? 'Pre-construction in Miami at sunset' : 'Preconstrucción en Miami al atardecer'}
      />

      {/* PROYECTOS DESTACADOS */}
      <FeaturedProjects />

      {/* BANDA CTA — premium */}
      <section className="mt-6 rounded-lg border border-primary/10 bg-white p-5 text-center shadow-[0_1px_3px_rgba(0,0,0,.04)]">
        <div className="mx-auto mb-3 h-[2px] w-24 rounded-full" style={{background:'linear-gradient(90deg, rgba(212,175,55,.0), rgba(212,175,55,.6), rgba(212,175,55,.0))'}} />
        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0A2540]">
          {params.locale === 'en' ? 'Ready to invest?' : '¿Listo para invertir?'}
        </h3>
        <p className="mt-2 text-[14px] text-neutral-700">
          {params.locale === 'en'
            ? 'Let’s connect and review the best opportunities together.'
            : 'Conversemos y revisemos las mejores oportunidades.'}
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Email (primary) */}
          <a
            href={`mailto:esteban@miamiliferealty.com?subject=${encodeURIComponent(params.locale==='en' ? 'Investment inquiry from website' : 'Consulta de inversión desde la web')}`}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#0A2540] px-4 text-sm font-medium text-white no-underline hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30"
          >
            {params.locale === 'en' ? 'Email Esteban' : 'Escribir a Esteban'}
          </a>
          {/* WhatsApp (outline) */}
          <a
            href={`https://wa.me/17542673931?text=${encodeURIComponent(params.locale==='en' ? 'Hi Esteban, I would like to schedule a call to discuss investment opportunities.' : 'Hola Esteban, me gustaría agendar una llamada para hablar de oportunidades de inversión.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540] px-4 text-sm font-medium text-[#0A2540] no-underline hover:bg-[#0A2540] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30"
          >
            {params.locale === 'en' ? 'WhatsApp' : 'WhatsApp'}
          </a>
        </div>
      </section>
    </div>
  );
}