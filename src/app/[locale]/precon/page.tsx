// src/app/[locale]/precon/page.tsx

import {useTranslations} from 'next-intl';

export default function Precon() {
  const t = useTranslations();

  return (
    <main className="mx-auto max-w-4xl px-4 py-16 space-y-8">
      <h1 className="text-3xl font-semibold text-primary">
        {t('precon.title', {default: '¿Por qué invertir en preconstrucción?'})}
      </h1>
      <p className="text-neutral-700">
        {t('precon.copy', {
          default:
            'Invertir en preconstrucción en Miami te permite entrar con una baja inicial, realizar pagos escalonados y beneficiarte de la valorización durante el proceso de obra, con la posibilidad de financiar el saldo al cierre.'
        })}
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        <li className="rounded-lg border border-primary/20 p-4">
          {t('precon.points.0', {default: 'Cronograma de pagos flexible'})}
        </li>
        <li className="rounded-lg border border-primary/20 p-4">
          {t('precon.points.1', {default: 'Plusvalía potencial al cierre'})}
        </li>
        <li className="rounded-lg border border-primary/20 p-4">
          {t('precon.points.2', {default: 'Unidades modernas con amenities'})}
        </li>
        <li className="rounded-lg border border-primary/20 p-4">
          {t('precon.points.3', {default: 'Posibilidad de financiar el 60% al cierre'})}
        </li>
      </ul>
    </main>
  );
}