// src/app/[locale]/miami/page.tsx
import {useTranslations} from 'next-intl';

export default function Miami() {
  const t = useTranslations();

  const points: string[] = [
    t('miami.points.0', {default: 'Crecimiento demográfico y de renta'}),
    t('miami.points.1', {default: 'Sin impuesto estatal a la renta (FL)'}),
    t('miami.points.2', {default: 'Demanda global y turismo todo el año'}),
    t('miami.points.3', {default: 'Mercado líquido y con alta ocupación'})
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      {/* Header */}
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A2540]">
          {t('miami.title', {default: '¿Por qué invertir en Miami?'})}
        </h1>
        <p className="mt-3 text-[17px] leading-7 text-[#0D1521]">
          {t('miami.copy', {
            default:
              'Miami es la puerta de entrada a Latinoamérica, un hub financiero global y un mercado inmobiliario en constante crecimiento. Invertir aquí significa aprovechar renta alta, estabilidad y seguridad jurídica.'
          })}
        </p>
      </header>

      {/* Points grid */}
      <section className="mt-8">
        <ul className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {points.map((p, i) => (
            <li key={i} className="rounded-xl border border-black/10 bg-white p-4 sm:p-5 shadow-[inset_0_-1px_0_rgba(0,0,0,.03)]">
              <div className="flex items-start gap-3">
                {/* Minimal icon */}
                <span aria-hidden className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#0A2540]/20 text-[#0A2540]">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <p className="text-[15px] leading-6 text-[#0A2540]">{p}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}