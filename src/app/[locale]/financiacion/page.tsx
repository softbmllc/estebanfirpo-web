// src/app/[locale]/financiacion/page.tsx
import React from "react";
import es from "@/i18n/messages/es.json";
import en from "@/i18n/messages/en.json";

type StepT = { t: string; d: string };
interface FinancingT {
  title: string;
  seo: string;
  intro: string;
  benefitsTitle: string;
  benefits: string[];
  reqTitle: string;
  requirements: string[];
  processTitle: string;
  steps: StepT[];
  ctaLabel: string;
  ctaHref: string;
}
interface Messages {
  financing: FinancingT;
}

function getDict(locale: string): Messages {
  return (locale === "en" ? (en as unknown as Messages) : (es as unknown as Messages));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const dict = getDict(params?.locale);
  const t = dict.financing;
  return {
    title: t.title,
    description: t.seo,
    alternates: {
      languages: {
        en: "/en/financiacion",
        es: "/es/financiacion",
      },
    },
  };
}

export default function FinancingPage({ params }: { params: { locale: string } }) {
  const dict = getDict(params?.locale);
  const t = dict.financing;

  return (
    <main className="py-12 px-6 text-[#0A2540]">
      <section className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-3xl font-semibold">{t.title}</h1>
        <p className="mb-8 text-[15px] leading-relaxed">{t.intro}</p>

        <h2 className="mb-4 text-xl font-medium">{t.benefitsTitle}</h2>
        <ul className="mb-10 grid gap-3">
          {t.benefits.map((b, i) => (
            <li key={`b-${i}`} className="rounded-xl border border-black/10 bg-white p-4">
              ✔ {b}
            </li>
          ))}
        </ul>

        <h2 className="mb-4 text-xl font-medium">{t.reqTitle}</h2>
        <ol className="mb-10 list-inside list-decimal space-y-3 text-[15px]">
          {t.requirements.map((r, i) => (
            <li key={`r-${i}`}>{r}</li>
          ))}
        </ol>

        <h2 className="mb-4 text-xl font-medium">{t.processTitle}</h2>
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          {t.steps.map((s: StepT, i) => (
            <div key={`s-${i}`} className="rounded-xl border border-black/10 bg-white p-4">
              <p className="font-semibold">
                {i + 1}. {s.t}
              </p>
              <p className="mt-1 text-[13px] text-[#0A2540]/70">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href={t.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#0A2540] px-6 py-3 font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20"
          >
            {t.ctaLabel}
          </a>
        </div>
      </section>
    </main>
  );
}