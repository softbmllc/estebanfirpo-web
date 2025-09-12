// data/projects/jean-georges.ts
import type { Project } from "../types";

export const pJeanGeorges: Project = {
  id: "jean-georges-tropic",
  slug: "/proyectos/jean-georges-tropic",
  name: "Jean‑Georges Miami Tropic Residences",
  city: "Design District / Midtown",

  // Pricing & basics
  priceFromUsd: 1100000, // 1BR desde ~US$1.1M (2025)
  pricePerSfApprox: 1100,
  hoa: "$1.10/sf",
  delivery: "2028", // ventana fin‑2027 / 2028
  furnished: false, // terminadas de lujo; no amuebladas

  // STR policy (marketing indica flexibilidad; sujeto a normativa local)
  rentalPolicyEs:
    "Renta corta permitida (Airbnb‑friendly) sin estadía mínima fija; requiere Certificado de Uso (\"Certificate of Use\") y licencias locales",
  rentalPolicyEn:
    "Short‑term rentals allowed (Airbnb‑friendly) with no fixed minimum stay; City Certificate of Use and permits required",

  image: "https://ik.imagekit.io/devrodri/Jean%20Georges/1.jpg",
  images: [
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/2.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/3-2.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/4.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/5.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/6.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/7.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/8.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Jean%20Georges/9.jpg" }
  ],

  // Micro claims
  microClaimsEs: [
    "Residencias de lujo con la firma culinaria de Jean‑Georges",
    "Airbnb‑friendly (sujeto a CU y permisos)"
  ],
  microClaimsEn: [
    "Luxury residences curated by Chef Jean‑Georges",
    "Airbnb‑friendly (subject to CU & permits)"
  ],

  // Highlights
  highlights: [
    "Skydeck en piso 49 con piscina y Sky Bar; vistas 360°",
    "Restaurante privado de Jean‑Georges y abc kitchens en PB",
    "Spa completo, gimnasio interior/exterior y cancha de squash",
    "Coworking, estudio de pódcast, salones y jardines interiores",
    "Ubicación AAA entre Design District y Midtown"
  ],
  highlightsEn: [
    "49th‑floor skydeck with panoramic pool & Sky Bar",
    "Residents‑only restaurant by Jean‑Georges; abc kitchens at grade",
    "Full spa, indoor/outdoor fitness and squash court",
    "Coworking, podcast studio, lounges and interior gardens",
    "Prime location between Design District and Midtown"
  ],

  // Unit mix & sizes
  unitMixEs: [
    "Estudios y 1–4 dorm · ~79–269 m² (852–2,892 ft²)"
  ],
  unitMixEn: [
    "Studios and 1–4 BR · ~852–2,892 sq ft (~79–269 m²)"
  ],

  // Features (acabados principales)
  featuresEs: [
    "Cocinas de chef con electrodomésticos Gaggenau",
    "Encimeras de piedra natural; griferías Gessi",
    "Ventanales piso‑techo, techos 10–11 ft y balcones privados",
    "Vestíbulos de ascensor privados o semi‑privados"
  ],
  featuresEn: [
    "Chef kitchens with Gaggenau appliances",
    "Natural stone counters; Gessi fixtures",
    "Floor‑to‑ceiling glass, 10–11 ft ceilings and private balconies",
    "Private/semi‑private elevator foyers"
  ],

  // Payment plan (estándar desarrollador)
  paymentPlanEs: [
    "20% a la firma del contrato",
    "10% al iniciar la construcción",
    "10% al top‑off",
    "60% al cierre"
  ],
  paymentPlanEn: [
    "20% at contract",
    "10% at groundbreaking",
    "10% at top‑off",
    "60% at closing"
  ],

  // FAQs
  faqsEs: [
    { q: "¿Precios desde?", a: "1 dormitorio desde ~US$1.1M; 2 dorm ~US$2.2M; 3 dorm ~US$3.3M; 4 dorm ~US$4.9M (según inventario)." },
    { q: "¿Plan de pagos?", a: "20% firma · 10% groundbreaking · 10% top‑off · 60% cierre." },
    { q: "¿Política de rentas?", a: "Renta corta permitida (sin mínimo fijo). Requiere Certificate of Use y licencias de renta corta de la Ciudad de Miami." },
    { q: "¿HOA estimada?", a: "~US$1.10/ft² por mes (incluye operación de amenidades y servicios full‑service)." },
    { q: "¿Amoblamiento?", a: "Unidades terminadas de lujo; no incluyen muebles. Paquetes opcionales disponibles." },
    { q: "¿Entrega?", a: "Estimado fin‑2027 / 2028 (construcción desde 2025)." }
  ],
  faqsEn: [
    { q: "Starting prices?", a: "1‑bed from ~$1.1M; 2‑bed ~$2.2M; 3‑bed ~$3.3M; 4‑bed ~$4.9M (subject to availability)." },
    { q: "Deposit schedule?", a: "20% at contract · 10% at groundbreaking · 10% at top‑off · 60% at closing." },
    { q: "Rental policy?", a: "Short‑term rentals allowed (no fixed minimum). City Certificate of Use and short‑term rental permits required." },
    { q: "HOA?", a: "Approx. US$1.10/sq ft per month (full‑service luxury operations)." },
    { q: "Furnishing?", a: "Delivered fully finished; furniture not included. Optional furniture packages available." },
    { q: "Completion?", a: "Estimated late‑2027 / early‑2028 (construction commencing 2025)." }
  ]
};
