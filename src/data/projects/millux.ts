// src/data/projects/millux.ts
import type { Project } from "../types";

export const pMillux: Project = {
  id: "millux-place-brickell",
  name: "Millux Place Brickell",
  city: "Brickell, Miami",
  // A falta de folleto con política exacta, no presumimos STR; se puede completar luego
  rentalPolicyEs: undefined,
  rentalPolicyEn: undefined,
  furnished: undefined,
  priceFromUsd: 496000, // según listado de brokers (aprox. "desde")
  pricePerSfApprox: undefined,
  delivery: "2027",
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
    "Brickell",
    "Plan de pagos 20/10/10/10/50",
    "Entrega 2027"
  ],
  microClaimsEn: [
    "Brickell",
    "Deposit plan 20/10/10/10/50",
    "Completion 2027"
  ],

  highlights: [
    "Ubicación central de alta demanda (Brickell)",
    "Arquitectura contemporánea y amenities de estilo urbano",
    "Cercanía a Brickell City Centre y Metrorail"
  ],
  highlightsEn: [
    "Prime Brickell location with strong demand",
    "Contemporary architecture and urban‑style amenities",
    "Near Brickell City Centre and Metrorail"
  ],

  unitMixEs: [],
  unitMixEn: [],

  featuresEs: [],
  featuresEn: [],

  paymentPlanEs: [
    "20% al contrato",
    "10% al groundbreaking (inicio de obra)",
    "10% al 4.º piso de construcción",
    "10% al top‑off (estructura completa)",
    "50% al cierre"
  ],
  paymentPlanEn: [
    "20% due at contract",
    "10% due at groundbreaking",
    "10% at 4th floor of construction",
    "10% due at top‑off",
    "50% due at closing"
  ],

  faqsEs: [
    { q: "¿Entrega?", a: "2027 (estimada)." },
    { q: "¿Plan de pagos?", a: "20/10/10/10/50 (según lámina vigente)." },
    { q: "¿Desde qué precio?", a: "Aproximadamente desde US$496.000 (según listados de brokers)." }
  ],
  faqsEn: [
    { q: "Completion?", a: "2027 (estimated)." },
    { q: "Deposit schedule?", a: "20/10/10/10/50 (per current sheet)." },
    { q: "Starting from?", a: "Approximately from US$496,000 (per broker listings)." }
  ]
};

export default pMillux;