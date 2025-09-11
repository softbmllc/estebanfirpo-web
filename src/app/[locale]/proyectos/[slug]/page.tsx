// src/app/[locale]/proyectos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ALL_PROJECTS } from "@/data/projects/index";
import type { Project } from "@/data/types";
import GalleryLightbox from "@/components/GalleryLightbox";
import HighlightsBlock, { type HighlightItem } from "@/components/HighlightsBlock";
import SpecsBlock from "@/components/SpecsBlock";
import WhyBlock, { type WhyItem } from "@/components/WhyBlock";
import FaqsBlock, { type FaqItem } from "@/components/FaqsBlock";
import PaymentPlan from "@/components/PaymentPlan";
import { Lock, WashingMachine, Tv, Speaker, PawPrint, Palette, Dumbbell, Briefcase } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";
function BedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="2" y="10" width="20" height="8" rx="2" />
      <path d="M2 18v2M22 18v2M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    </svg>
  );
}
function BalconyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="4" y="10" width="16" height="8" rx="2" />
      <path d="M4 14h16M9 10V6h6v4" />
    </svg>
  );
}
function RulerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <path d="M7 7v10M17 7v10M12 7v10" />
    </svg>
  );
}

function HeightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M12 3v18M8 7l4-4 4 4M8 17l4 4 4-4" />
    </svg>
  );
}


// Feature icons
function PoolIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M3 16c2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0 2 1.5 4 1.5 6 0" />
      <path d="M8 12V7a2 2 0 0 1 4 0v5" />
      <path d="M12 12V7a2 2 0 0 1 4 0v5" />
    </svg>
  );
}
function YogaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v6l-4 4M12 13l4 4" />
    </svg>
  );
}
function WorkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
function StoreIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path d="M4 7h16l-1 3H5L4 7z" />
      <path d="M5 10v7h14v-7" />
    </svg>
  );
}

function featureIconFor(label: string) {
  const s = (label || "").toLowerCase();
  const cls = "h-4 w-4";
  // Priority: explicit keywords first
  if (s.includes("cerradura")) return <Lock className={cls} />; // smart lock
  if (s.includes("lavadora") || s.includes("secadora")) return <WashingMachine className={cls} />; // washer/dryer
  if (s.includes("tv") || s.includes("audio") || s.includes("sonido")) return <Tv className={cls} />; // tv + audio
  if (s.includes("pet") || s.includes("mascota")) return <PawPrint className={cls} />; // pet‑friendly
  if (s.includes("arte") || s.includes("art")) return <Palette className={cls} />; // art exhibitions

  // Generic amenities
  if (s.includes("cowork") || s.includes("co‑working") || s.includes("co working")) return <Briefcase className={cls} />;
  if (s.includes("gimnasio") || s.includes("gym")) return <Dumbbell className={cls} />;
  if (s.includes("piscina") || s.includes("pool") || s.includes("jacuzzi")) return <PoolIcon className={cls} />;
  if (s.includes("mercado") || s.includes("lobby") || s.includes("tienda")) return <StoreIcon className={cls} />;

  // Fallback: no icon
  return undefined;
}



type Params = { params: Promise<{ locale: string; slug: string }> };


function pickBySlug(slug: string): Project | null {
  // projects store slug like "/proyectos/72-park"; normalize for match
  const want = `/proyectos/${slug}`;
  return ALL_PROJECTS.find(p => p.slug === want) ?? null;
}

function fmtUSD(n: number, locale: string) {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "es-ES", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const isEN = locale === "en";
  const p = pickBySlug(slug);
  if (!p) {
    return {
      title: isEN ? "Project not found" : "Proyecto no encontrado",
      robots: { index: false, follow: false },
    };
  }

  const title = `${p.name} — ${p.city} | Esteban Firpo`;
  const desc = isEN
    ? `STR approved, private beach club, ${p.pricePerSfApprox ? `~$${p.pricePerSfApprox}/sf, ` : ""}${p.delivery ? `completion ${p.delivery}, ` : ""}request floor plans and availability.`
    : `Renta corta aprobada, club de playa privado, ${p.pricePerSfApprox ? `~$${p.pricePerSfApprox}/sf, ` : ""}${p.delivery ? `entrega ${p.delivery}, ` : ""}solicitá planos y disponibilidad.`;

  const url = `/${locale}/proyectos/${slug}`;
  const image = p.image || "/images/og-default.jpg";

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: desc,
      url,
      images: [{ url: image }],
      locale,
      siteName: "Esteban Firpo — Real Estate",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [image],
    },
  };
}

export default async function Proyecto({ params }: Params) {
  const { locale, slug } = await params;
  const isEN = locale === "en";
  const p = pickBySlug(slug);
  if (!p) notFound();

  const policy = isEN
    ? ((p as any).rentalPolicyEn ?? (p as any).rentalPolicy ?? undefined)
    : ((p as any).rentalPolicyEs ?? (p as any).rentalPolicy ?? undefined);

  const payment = (isEN ? p.paymentPlanEn : p.paymentPlanEs) ?? [];
  const faqs = (isEN ? p.faqsEn : p.faqsEs) ?? [];
  const unitMix = (isEN ? p.unitMixEn : p.unitMixEs) ?? [];
  const features = (isEN ? p.featuresEn : p.featuresEs) ?? [];

  const t = {
    breadcrumb: isEN ? "Projects" : "Proyectos",
    from: isEN ? "From" : "Desde",
    delivery: isEN ? "Completion" : "Entrega",
    rental: isEN ? "Rental policy" : "Política de renta",
    gallery: isEN ? "Gallery" : "Galería",
    highlights: isEN ? "Highlights" : "Destacados",
    mix: isEN ? "Unit mix" : "Tipologías",
    features: isEN ? "Features" : "Características",
    payments: isEN ? "Payment plan" : "Plan de pagos",
    faqsTitle: isEN ? "FAQs" : "Preguntas frecuentes",
    brochure: isEN ? "Download brochure" : "Descargar brochure",
    ctas: {
      schedule: isEN ? "Schedule Meeting" : "Agendar Reunión",
      whatsapp: "WhatsApp",
      email: isEN ? "Email Esteban" : "Email a Esteban",
    },
  };

  const bookingUrl = process.env.NEXT_PUBLIC_CALENDAR_URL || `/${locale}/agendar`;
  const hasCoords = typeof (p as Project).lat === "number" && typeof (p as Project).lng === "number";
  const mapSrc = hasCoords
    ? `https://www.google.com/maps?q=${p.lat},${p.lng}&hl=${isEN ? "en" : "es"}&z=15&output=embed`
    : `https://www.google.com/maps?q=${encodeURIComponent(`${p.name} ${p.city}`)}&hl=${isEN ? "en" : "es"}&z=15&output=embed`;
  const waNumber = "17542673931"; // +1 754 267 3931
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    isEN
      ? `Hi Esteban, I'm interested in ${p.name}. Could you please send me more information?`
      : `Hola Esteban, estoy interesado/a en ${p.name}. ¿Podés enviarme más información?`
  )}`;
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.estebanfirpo.com";
  const shareUrl = `${base}/${locale}/proyectos/${slug}`.replace(/(?<!:)\/\/+/, "/");

  // Extra policy chips for mobile only
  const policyChips = [
    ...(policy ? [policy] : []),
    ...(p.hoa ? [`HOA ${p.hoa}`] : []),
    ...(typeof p.furnished === "boolean"
      ? [isEN ? (p.furnished ? "Furnished" : "Unfurnished") : (p.furnished ? "Amoblado" : "Sin amoblar")]
      : []),
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-3 sm:mb-6 text-sm text-neutral-500">
        <Link href={`/${locale}/proyectos`} className="underline">{t.breadcrumb}</Link>
        <span className="mx-1">/</span>
        <span className="text-neutral-700">{p.name}</span>
      </div>

      {/* Title + meta */}
      <h1 className="mt-2 sm:mt-0 text-3xl sm:text-4xl font-semibold tracking-tight text-[#0A2540]">{p.name}</h1>
      {/* Meta — mobile condensed */}
      <p className="mt-1 text-sm text-[#0A2540]/70 sm:hidden">
        {typeof p.priceFromUsd === "number" ? (
          <>
            {t.from} {fmtUSD(p.priceFromUsd, locale)}
            {typeof p.pricePerSfApprox === "number" && (
              <span className="opacity-60"> · ~${p.pricePerSfApprox}/sf</span>
            )}
          </>
        ) : (
          isEN ? "Inquire" : "Consultar"
        )}
        {p.delivery ? <span className="opacity-60"> · {t.delivery} {p.delivery}</span> : null}
      </p>
      {/* Meta — desktop/full */}
      <p className="hidden sm:block mt-2 text-base text-[#0A2540]/70">
        {typeof p.priceFromUsd === "number" ? (
          <>
            {t.from} {fmtUSD(p.priceFromUsd, locale)}
            {typeof p.pricePerSfApprox === "number" && (
              <span className="opacity-60"> · ~${p.pricePerSfApprox}/sf</span>
            )}
          </>
        ) : (
          isEN ? "Inquire" : "Consultar"
        )}
        {p.delivery ? <> · {t.delivery} {p.delivery}</> : null}
        {policy ? <> · {t.rental} {policy}</> : null}
        {p.hoa ? <> · HOA {p.hoa}</> : null}
        {typeof p.furnished === "boolean" ? (
          <> · {isEN ? (p.furnished ? "Furnished" : "Unfurnished") : (p.furnished ? "Amoblado" : "Sin amoblar")}</>
        ) : null}
      </p>


      {/* Micro‑claims / Chips */}
      {(() => {
        type WithClaims = Project & { microClaimsEs?: string[]; microClaimsEn?: string[] };
        const pp = p as WithClaims;
        const claims = (isEN ? pp.microClaimsEn : pp.microClaimsEs) ?? [];
        if (!Array.isArray(claims) || claims.length === 0) return null;

        // Desktop (wrap) + Mobile (horizontal scroll)
        const Chip = ({ children }: { children: React.ReactNode }) => (
          <span className="inline-flex items-center rounded-full bg-[#0A2540]/5 px-3 py-1 text-[12px] sm:text-[12.5px] text-[#0A2540]">
            {children}
          </span>
        );

        // Combine extra policy chips for mobile only
        const mobileChips = [...claims, ...policyChips];

        return (
          <>
            {/* Desktop / tablet: tidy wrap */}
            <div className="mt-2 hidden sm:flex sm:flex-wrap sm:gap-2.5">
              {claims.map((c, i) => (
                <Chip key={`claim-d-${i}`}>{c}</Chip>
              ))}
            </div>

            {/* Mobile: single-row horizontal carousel (no wrap) */}
            <div className="sm:hidden mt-2 -mx-4 px-4 overflow-x-auto">
              <ul className="flex gap-2 snap-x snap-mandatory">
                {mobileChips.map((c, i) => (
                  <li key={`claim-m-${i}`} className="snap-start shrink-0">
                    <Chip>{c}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </>
        );
      })()}

      {/* Hero */}
      <section className="mt-3 sm:mt-6">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-black/10">
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(min-width:1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="mt-6 rounded-xl border border-black/10 bg-white px-3 py-3 flex flex-col gap-2 sm:flex-row">
        <Link href={bookingUrl} className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md bg-[#0A2540] px-4 text-sm font-medium text-white hover:opacity-95">
          {t.ctas.schedule}
        </Link>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB]">
          {t.ctas.whatsapp}
        </a>
        <a href="mailto:info@estebanfirpo.com" className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB]">
          {t.ctas.email}
        </a>
        <ShareButtons
          url={shareUrl}
          text={p.name}
          locale={isEN ? "en" : "es"}
          variant="light"
          iconSrc="/icons/whatsapp.svg"
          buttonClassName="inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB] w-full sm:w-auto"
        />
      </div>

      {/* Gallery */}
      {Array.isArray(p.images) && p.images.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-medium text-[#0A2540]">{t.gallery}</h2>
          {/* Desktop / Tablet: Lightbox grid */}
          <div className="hidden sm:block">
            <GalleryLightbox images={p.images} name={p.name} />
          </div>
          {/* Mobile: horizontal scroll */}
          <div className="sm:hidden mt-3 -mx-4 px-4 overflow-x-auto">
            <ul className="flex gap-3 snap-x snap-mandatory">
              {p.images.map((img, i) => (
                <li key={`mimg-${i}`} className="snap-start shrink-0 first:pl-0 last:pr-0">
                  <div className="relative h-48 w-[85vw] overflow-hidden rounded-xl border border-black/10">
                    <Image
                      src={img.src}
                      alt={`${p.name} — ${t.gallery} ${i + 1}`}
                      fill
                      sizes="85vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {(() => {
        const lines = (isEN ? p.highlightsEn : p.highlights) ?? [];
        if (!Array.isArray(lines) || lines.length === 0) return null;
        const items: HighlightItem[] = lines.map((line: string) => ({ title: line }));
        return <HighlightsBlock title={t.highlights} items={items} />;
      })()}


      {unitMix.length > 0 && (
        <SpecsBlock
          title={t.mix}
          subhead={isEN ? "Units & measures" : "Unidades y medidas"}
          items={
            (isEN ? p.unitMixEn : p.unitMixEs)?.map((line, i) => {
              const norm = typeof line === "string" ? { label: line } : line;
              return {
                label: norm.label,
                icon:
                  i === 0 ? <BedIcon className="h-4 w-4" /> :
                  i === 1 ? <BedIcon className="h-4 w-4" /> :
                  i === 2 ? <BedIcon className="h-4 w-4" /> :
                  i === 3 ? <BedIcon className="h-4 w-4" /> :
                  i === 4 ? <BedIcon className="h-4 w-4" /> :
                  i === 5 ? <BalconyIcon className="h-4 w-4" /> : undefined,
              };
            }) ?? []
          }
          primaryCta={{
            label: isEN ? "Request floor plans (PDF)" : "Solicitar planos (PDF)",
            href: `mailto:esteban@miamiliferealty.com?subject=${encodeURIComponent(
              isEN ? `Floor plans (PDF) — ${p.name}` : `Planos (PDF) — ${p.name}`
            )}&body=${encodeURIComponent(
              isEN
                ? `Hi Esteban,\n\nI’m interested in ${p.name}. Please send me floor plans (PDF).\n\nThanks.`
                : `Hola Esteban,\n\nEstoy interesado/a en ${p.name}. Por favor envíame los planos (PDF).\n\nGracias.`
            )}`,
            variant: "ghost",
          }}
          secondaryCta={{
            label: isEN ? "Check availability by typology" : "Ver disponibilidad por tipología",
            href: `mailto:esteban@miamiliferealty.com?subject=${encodeURIComponent(
              isEN ? `Availability by typology — ${p.name}` : `Disponibilidad por tipología — ${p.name}`
            )}&body=${encodeURIComponent(
              isEN
                ? `Hi Esteban,\n\nI’m interested in ${p.name}. Please send availability by typology (Jr‑1 / 1BR / 2BR / 3BR).\n\nThanks.`
                : `Hola Esteban,\n\nEstoy interesado/a en ${p.name}. Por favor envíame disponibilidad por tipología (Jr‑1 / 1BR / 2BR / 3BR).\n\nGracias.`
            )}`,
            variant: "ghost",
          }}
        />
      )}

      {features.length > 0 && (
        <SpecsBlock
          title={t.features}
          subhead={isEN ? "Materials & finishes" : "Materiales y marcas"}
          items={
            (isEN ? p.featuresEn : p.featuresEs)?.map((line) => {
              const norm = typeof line === "string" ? { label: line } : line;
              return {
                label: norm.label,
                icon: featureIconFor(norm.label),
              };
            }) ?? []
          }
          primaryCta={{
            label: isEN ? "Request materials (PDF)" : "Solicitar materiales (PDF)",
            href: `mailto:esteban@miamiliferealty.com?subject=${encodeURIComponent(
              isEN ? `Materials list (PDF) — ${p.name}` : `Lista de materiales (PDF) — ${p.name}`
            )}&body=${encodeURIComponent(
              isEN
                ? `Hi Esteban,\n\nI’m interested in ${p.name}. Please send me the materials list (PDF).\n\nThanks.`
                : `Hola Esteban,\n\nEstoy interesado/a en ${p.name}. Por favor envíame la lista de materiales (PDF).\n\nGracias.`
            )}`,
            variant: "ghost",
          }}
        />
      )}

      {/* WhyBlock */}
      {(() => {
        type WithClaims = Project & { microClaimsEs?: string[]; microClaimsEn?: string[] };
        const pp = p as WithClaims;
        const whyClaims = (isEN ? pp.microClaimsEn : pp.microClaimsEs) ?? [];
        if (!Array.isArray(whyClaims) || whyClaims.length === 0) return null;
        const whyItems: WhyItem[] = whyClaims.map((c) => ({ heading: c }));
        return (
          <WhyBlock
            title={isEN ? `Why ${p.name}?` : `¿Por qué ${p.name}?`}
            items={whyItems}
          />
        );
      })()}

      {/* FAQs */}
      {faqs.length > 0 && (() => {
        // Mailto helpers for inline CTAs
        const mailtoAvail = `mailto:esteban@miamiliferealty.com?subject=${encodeURIComponent(
          isEN ? `Availability by typology — ${p.name}` : `Disponibilidad por tipología — ${p.name}`
        )}&body=${encodeURIComponent(
          isEN
            ? `Hi Esteban,\n\nI’m interested in ${p.name}. Please send availability by typology (Jr‑1 / 1BR / 2BR / 3BR).\n\nThanks.`
            : `Hola Esteban,\n\nEstoy interesado/a en ${p.name}. Por favor envíame disponibilidad por tipología (Jr‑1 / 1BR / 2BR / 3BR).\n\nGracias.`
        )}`;
        const mailtoMaterials = `mailto:esteban@miamiliferealty.com?subject=${encodeURIComponent(
          isEN ? `Materials list (PDF) — ${p.name}` : `Lista de materiales (PDF) — ${p.name}`
        )}&body=${encodeURIComponent(
          isEN
            ? `Hi Esteban,\n\nI’m interested in ${p.name}. Please send me the materials list (PDF).\n\nThanks.`
            : `Hola Esteban,\n\nEstoy interesado/a en ${p.name}. Por favor envíame la lista de materiales (PDF).\n\nGracias.`
        )}`;

        // Rank FAQs by sales impact
        const rank = (q: string) => {
          const s = q.toLowerCase();
          if (s.includes("renta") || s.includes("short")) return 0; // STR
          if (s.includes("playa") || s.includes("beach")) return 1; // beach club
          if (s.includes("amoblad") || s.includes("furnish")) return 2; // furnished
          if (s.includes("ubic") || s.includes("where")) return 3; // location
          if (s.includes("entreg") || s.includes("deliver")) return 4; // delivery
          if (s.includes("cowork")) return 5;
          if (s.includes("mascota") || s.includes("pets")) return 6;
          if (s.includes("certific") || s.includes("leed")) return 7;
          if (s.includes("diferenc") || s.includes("differ")) return 8;
          return 99;
        };

        const sorted = [...faqs].sort((a: { q: string }, b: { q: string }) => rank(a.q) - rank(b.q));

        const faqItems: FaqItem[] = sorted.map((f: { q: string; a: string }, i: number) => {
          const ql = f.q.toLowerCase();
          let answer: React.ReactNode = <span>{f.a}</span>;
          // Inject inline CTAs in critical answers
          if (ql.includes("renta") || ql.includes("short")) {
            answer = (
              <span>
                {f.a}{" "}
                <a href={mailtoAvail} className="underline">{isEN ? "Check availability by typology" : "Ver disponibilidad por tipología"}</a>
              </span>
            );
          } else if (ql.includes("playa") || ql.includes("beach")) {
            answer = (
              <span>
                {f.a}{" "}
                <a href={mailtoAvail} className="underline">{isEN ? "Check availability by typology" : "Ver disponibilidad por tipología"}</a>
              </span>
            );
          } else if (ql.includes("amoblad") || ql.includes("furnish")) {
            answer = (
              <span>
                {f.a}{" "}
                <a href={mailtoMaterials} className="underline">{isEN ? "Request materials (PDF)" : "Solicitar materiales (PDF)"}</a>
              </span>
            );
          } else if (ql.includes("ubic") || ql.includes("where")) {
            answer = (
              <span>
                {f.a}{" "}
                <a href="#ubicacion" className="underline">{isEN ? "See map" : "Ver mapa"}</a>
              </span>
            );
          }
          return {
            id: rank(f.q) === 0 ? "faq-str" : undefined,
            q: f.q,
            a: answer,
            defaultOpen: i === 0, // STR open after sort
          } as FaqItem;
        });

        return <FaqsBlock id="faqs" title={t.faqsTitle} items={faqItems} />;
      })()}

      {/* CTAs */}
      <section className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href={bookingUrl} className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md bg-[#0A2540] px-4 text-sm font-medium text-white hover:opacity-95">
          {t.ctas.schedule}
        </Link>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB]">
          {t.ctas.whatsapp}
        </a>
        <a href="mailto:info@estebanfirpo.com" className="w-full sm:w-auto inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB]">
          {t.ctas.email}
        </a>
        <ShareButtons
          url={shareUrl}
          text={p.name}
          locale={isEN ? "en" : "es"}
          variant="light"
          iconSrc="/icons/whatsapp.svg"
          buttonClassName="inline-flex h-10 items-center justify-center rounded-md border border-[#0A2540]/20 px-4 text-sm font-medium text-[#0A2540] hover:bg-[#F9FAFB] w-full sm:w-auto"
        />
      </section>

      {/* Payment plan */}
      <PaymentPlan
        title={t.payments}
        steps={payment.map((label: string) => ({ label }))}
        project={p.name}
      />

      {/* Location */}
      <section id="ubicacion" className="mt-12">
        <h2 className="text-xl font-medium text-[#0A2540]">{isEN ? 'Location' : 'Ubicación'}</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-black/10">
          <iframe
            src={mapSrc}
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </main>
  );
}

// EditorialRow is unused and not needed; removed image usage from Tipologías and Características sections.