// src/app/[locale]/sobre-mi/page.tsx
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function SobreMi() {
  const t = useTranslations();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-primary">
          {t('about.title', {default: 'Sobre mí'})}
        </h1>
        <p className="text-neutral-700">
          {t('about.subtitle', {
            default:
              'Soy Esteban Firpo, especialista en oportunidades inmobiliarias en Miami. Acompaño a inversores a elegir proyectos sólidos, armar el plan de pagos y cerrar de forma segura.'
          })}
        </p>
      </header>

      {/* Profile */}
      <section className="grid gap-6 sm:grid-cols-[160px,1fr]">
        <div className="relative h-40 w-40 overflow-hidden rounded-xl border border-primary/20 bg-muted">
          {/* Reemplaza /images/esteban.jpg cuando tengas la foto */}
          <Image src="/images/esteban.jpg" alt="Esteban Firpo" fill sizes="160px" className="object-cover" />
        </div>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded border border-primary/30 px-2 py-0.5 text-xs text-primary">
              {t('about.badge.role', {default: 'Real Estate Advisor · Miami'})}
            </span>
            <span className="rounded bg-accent/20 px-2 py-0.5 text-xs text-primary">
              {t('about.badge.langs', {default: 'ES · EN'})}
            </span>
            <span className="rounded border border-primary/30 px-2 py-0.5 text-xs text-primary">
              {t('about.badge.license', {default: 'Licencia #'} )}
            </span>
          </div>
          <p className="text-neutral-700">
            {t('about.bio', {
              default:
                'Trabajo con preventas, short-term aprobados y oportunidades de renta estable. Mi enfoque es claro: evaluar riesgo/retorno, validar el developer y ayudarte a avanzar sin fricción.'
            })}
          </p>
          <ul className="list-disc pl-5 text-neutral-700">
            <li>{t('about.points.0', {default: 'Análisis de proyectos y due diligence básico'})}</li>
            <li>{t('about.points.1', {default: 'Plan de pagos y cronograma ajustado a tu ticket'})}</li>
            <li>{t('about.points.2', {default: 'Acompañamiento hasta el cierre, con opciones de financiación'})}</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-wrap gap-3">
        <Link href="../contacto" className="h-11 rounded-md bg-primary px-5 text-white inline-flex items-center hover:opacity-90">
          {t('about.cta.contact', {default: 'Contactar'})}
        </Link>
        <a
          href="https://wa.me/1XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="h-11 rounded-md border border-primary px-5 inline-flex items-center text-primary hover:bg-accent/10"
        >
          {t('about.cta.whatsapp', {default: 'Hablar por WhatsApp'})}
        </a>
      </section>
    </main>
  );
}