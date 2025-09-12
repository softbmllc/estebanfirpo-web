// src/data/projects/millux.ts
import type { Project } from "../types";

export const pMillux: Project = {
  id: "millux-place-brickell",
  name: "Millux Place Brickell",
  city: "Brickell, Miami",
  // STR-friendly con detalle multilenguaje
  rentalPolicyEs: "Lodging: 1 noche–6 meses; resto según reglas del condominio. Requiere Certificado de Uso (<6 meses)",
  rentalPolicyEn: "Lodging: nightly–6 months; remaining units per condo rules. Certificate of Use required for <6 months",
  furnished: true,
  priceFromUsd: 468000, // estudios desde ~US$468k
  pricePerSfApprox: 1150,
  hoa: "$1.90/sf",
  delivery: "Q4 2027",
  slug: "/proyectos/millux-place-brickell",
  image: "https://ik.imagekit.io/devrodri/Millux/i7490rzQ.jpeg",

  images: [
    { src: "https://ik.imagekit.io/devrodri/Millux/giGN-7TQ.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/zwY1QyXg.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/hc2KyU_w.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/TjuvhOmA.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/QAObnYYw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/K8fWIOVw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/yjFef2Rw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Millux/PXfWcs5A.jpeg" }
  ],

  microClaimsEs: [
    "Residencias terminadas y amobladas (Restoration Hardware)",
    "STR: lodging desde 1 noche",
    "Entrega Q4 2027"
  ],
  microClaimsEn: [
    "Fully finished & furnished (Restoration Hardware)",
    "Short‑term rental friendly (nightly lodging)",
    "Completion Q4 2027"
  ],

  highlights: [
    "Condo‑hotel in‑house · renta 1 noche–6 meses",
    "20 residencias · alquiler a largo plazo",
    "Ubicación prime en Brickell, diseño Kobi Karp",
    "Mobiliario de lujo incluido (Restoration Hardware)",
    "HOA estimado ~US$1.90/ft²/mes"
  ],
  highlightsEn: [
    "In‑house lodging (condo‑hotel); rent nightly up to 6 months",
    "~20 residential units under long‑term guidelines",
    "Prime Brickell location, design by Kobi Karp",
    "Luxury furniture included (Restoration Hardware)",
    "Estimated HOA ~US$1.90/ft²/mo"
  ],

  unitMixEs: [
    "Studios/1–3 dorm · 37–89 m² (397–958 ft²)"
  ],
  unitMixEn: [
    "Studios/1–3 BR · 397–958 sq ft (37–89 m²)"
  ],

  featuresEs: [
    "Entrega llave en mano con mobiliario RH",
    "Puertas/ventanales de impacto y balcones",
    "Cocinas equipadas; acabados premium"
  ],
  featuresEn: [
    "Turn‑key delivery with RH furniture",
    "Impact glazing and balconies",
    "Equipped kitchens; premium finishes"
  ],

  paymentPlanEs: [
    "Reserva US$10.000 (se imputa dentro del 20% del contrato)",
    "20% al contrato",
    "10% al groundbreaking",
    "10% al 4.º piso",
    "10% al top‑off",
    "50% al cierre"
  ],
  paymentPlanEn: [
    "Reservation US$10,000 (credited within the 20% at contract)",
    "20% at contract",
    "10% at groundbreaking",
    "10% at 4th floor",
    "10% at top‑off",
    "50% at closing"
  ],

  faqsEs: [
    { q: "¿Política STR?", a: "Lodging 1 noche–6 meses; residenciales con reglas propias. CU obligatorio para <6 meses." },
    { q: "¿HOA?", a: "Aproximadamente US$1.90/ft² por mes." },
    { q: "¿Amoblamiento?", a: "Sí, entregadas con mobiliario RH (turn‑key)." },
    { q: "¿Entrega?", a: "Q4 2027 (estimado)." },
    { q: "¿Financiación a extranjeros?", a: "Hipoteca al cierre ~50–60% LTV (sujeto a banco y ventas del edificio)." }
  ],
  faqsEn: [
    { q: "STR policy?", a: "Lodging nightly–6 months; residential units under condo rules. City CU required for <6 months." },
    { q: "HOA?", a: "Approx. US$1.90/sq ft per month." },
    { q: "Furnishing?", a: "Yes, RH furniture included (turn‑key)." },
    { q: "Completion?", a: "Q4 2027 (estimated)." },
    { q: "Foreign financing?", a: "Mortgage at closing ~50–60% LTV (subject to lender and building sales)." }
  ]
};

export default pMillux;