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
      <section role="region" aria-labelledby="hero-title" aria-describedby="hero-desc" className="relative overflow-hidden rounded-[18px] border border-black/10 bg-[#F9FAFB] px-8 sm:px-12 md:px-14 py-20 md:py-24 shadow-[inset_0_-1px_0_0_rgba(0,0,0,.04),0_1px_2px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.04)]">
        

        <div className="space-y-10 relative max-w-3xl md:max-w-4xl xl:max-w-[64rem] mx-auto">
          {/* Capsules — compact on mobile, detailed on desktop */}
          {/* Mobile: single compact capsule */}
          <div className="sm:hidden -mx-4 px-4">
            <span className="inline-flex items-center rounded-[999px] border border-[#D4AF37]/40 bg-white/70 px-3 py-1 text-[11px] leading-tight font-medium text-[#0A2540]">
              {params.locale === 'en'
                ? 'Closing financing · 2025–2028 · Verified'
                : 'Financiación al cierre · 2025–2028 · Verificado'}
            </span>
          </div>

          {/* Desktop & tablets: three capsules */}
          <div className="hidden sm:flex flex-wrap gap-2 gap-y-1 -mx-4 px-4">
            <span
              className="inline-flex items-center rounded-[8px] border border-[#D4AF37]/40 bg-white/70 px-3 py-1 text-[11px] sm:text-[12px] leading-tight font-medium text-[#0A2540]"
              aria-hidden="true"
            >
              {params.locale === 'en' ? 'Closing financing available' : 'Financiación al cierre disponible'}
            </span>
            <span
              className="inline-flex items-center rounded-[8px] border border-[#D4AF37]/40 bg-white/70 px-3 py-1 text-[11px] sm:text-[12px] leading-tight font-medium text-[#0A2540]"
              aria-hidden="true"
            >
              {params.locale === 'en' ? 'Deliveries 2025–2028' : 'Entregas 2025–2028'}
            </span>
            <span
              className="inline-flex items-center rounded-[8px] border border-[#D4AF37]/40 bg-white/70 px-3 py-1 text-[11px] sm:text-[12px] leading-tight font-medium text-[#0A2540]"
              aria-hidden="true"
            >
              {params.locale === 'en' ? 'Verified inventory' : 'Inventario verificado'}
            </span>
          </div>

          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] xl:text-[60px] font-bold leading-[1.12] tracking-[-0.01em] text-[#0A2540] text-balance max-w-[48rem]">
            {params.locale === 'en' ? 'Invest in high-performing pre-construction in Miami.' : 'Invertí en preconstrucción de alto rendimiento en Miami.'}
          </h1>
          <p className="max-w-2xl text-[18px] leading-8 text-[#0D1521]">
            {params.locale === 'en'
              ? 'Flexible payment plans, top developers, frictionless closing.'
              : 'Planes de pago flexibles, developers top y cierre sin fricción.'}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="proyectos"
              data-analytics="hero:cta_projects"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[#0A2540] px-6 text-sm font-medium text-white transition-opacity transition-colors hover:opacity-90 active:opacity-90 min-w-[176px] w-full sm:w-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2540] focus-visible:ring-2 focus-visible:ring-[#0A2540]/30 transition-transform hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(10,37,64,.08)]"
            >
              {params.locale === 'en' ? 'See projects' : 'Ver proyectos'}
            </Link>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules"
              target="_blank"
              rel="noreferrer noopener"
              data-analytics="hero:cta_meeting"
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
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[#0A2540]/55">
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
          <div id="hero-desc" className="pt-2 text-xs text-[#0A2540]/70">
            <span className="block sm:inline">
              {params.locale === 'en' ? 'Catalog reviewed · flexible payment options' : 'Catálogo revisado · opciones de pago flexibles'}
            </span>
            <span className="hidden sm:inline"> · </span>
            <a
              href="https://wa.me/17542673931?text=Hola%20Esteban,%20quiero%20coordinar%20una%20reuni%C3%B3n."
              target="_blank"
              rel="noreferrer"
              aria-label="Abrir WhatsApp de Esteban con mensaje prellenado"
              className="block sm:inline underline decoration-[#0A2540]/30 underline-offset-2 hover:decoration-[#0A2540] sm:ml-2" data-analytics="hero:whatsapp"
            >
              {params.locale === 'en' ? 'Chat on WhatsApp' : 'Hablar por WhatsApp'}
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

      {/* BANDA CTA */}
      <section className="rounded-xl border p-6 text-center">
        <h3 className="text-xl font-medium">{t('band.title')}</h3>
        <p className="mt-2 text-neutral-600">{t('band.copy')}</p>
        <div className="mt-4 flex justify-center gap-3">
          <Link href="contacto" className="h-10 rounded-md bg-[#0A2540] px-4 text-white inline-flex items-center hover:opacity-90">
            {t('band.ctaContact')}
          </Link>
          <a
            href="https://calendly.com/XXXX/30min"
            target="_blank"
            rel="noreferrer"
            className="h-10 rounded-md border border-[#0A2540] px-4 inline-flex items-center text-[#0A2540] hover:bg-accent/10"
          >
            {t('band.ctaCall')}
          </a>
        </div>
      </section>
    </div>
  );
}