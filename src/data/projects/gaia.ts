// src/data/projects/gaia.ts
import type { Project } from "../types";

export const pGaiaResidences: Project = {
  id: "gaia-residences",
  slug: "/proyectos/gaia-residences",
  name: "Gaia Residences",
  city: "401 N Federal Hwy, Hollywood, FL 33020",

  // hero + galería
  image: "https://ik.imagekit.io/devrodri/Gaia%20Residences/ymdwzF9g.jpeg",
  images: [
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/JdYl62qQ.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/RLZT2qMQ.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/nmK_B4Sw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/6kzJnggQ.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/yAkYTngw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/Ba1678xw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/EjjF2_cA.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Gaia%20Residences/5R4NzwtQ.jpeg" }
  ],

  priceFromUsd: undefined,
  delivery: "2028",
  rentalPolicyEs: "Alquiler flexible: se permiten estadías cortas, incluso diarias.",
  rentalPolicyEn: "Flexible rentals: short stays allowed, including daily.",

  // microclaims
  microClaimsEs: [
    "18 pisos · 238 residencias",
    "Entrega estimada 2028"
  ],
  microClaimsEn: [
    "18 stories · 238 residences",
    "Estimated completion 2028"
  ],

  // destacados (ES) + EN
  highlights: [
    "Frente al Hollywood Beach Golf Club",
    "Piscina tipo resort y solárium",
    "Coworking lounge y café",
    "Gimnasio, yoga y bienestar",
    "Pickleball en rooftop",
    "Valet y conserjería"
  ],
  highlightsEn: [
    "Facing Hollywood Beach Golf Club",
    "Resort-style pool and sun deck",
    "Coworking lounge and café",
    "Fitness, yoga and wellness",
    "Rooftop pickleball",
    "Valet and concierge"
  ],

  // mix tipológico
  unitMixEs: ["Studios a 3 dormitorios · ver planos para m²/ft²"],
  unitMixEn: ["Studios to 3 bedrooms · see plans for m²/sq.ft"],

  // acabados
  featuresEs: [
    "Vistas a golf y ciudad; ventanales piso-techo",
    "Cocinas de diseñador; electrodomésticos integrados",
    "Porcelanato en interiores; balcones amplios"
  ],
  featuresEn: [
    "Golf and city views; floor-to-ceiling windows",
    "Designer kitchens; integrated appliances",
    "Porcelain interiors; generous balconies"
  ],

  // FAQs
  faqsEs: [
    { q: "¿Dirección del proyecto?", a: "401 N Federal Hwy, Hollywood, FL 33020." },
    { q: "Equipo?", a: "Desarrollador: Alta Developers · Arquitectura: CFE Architects · Interiores: ID & Design International" },
    { q: "¿Fecha de entrega?", a: "Entrega estimada 2028 (sujeto a permisos y cronograma de obra)." },
    { q: "¿Política de alquileres?", a: "Alquiler flexible: se permiten estadías cortas, incluso diarias." }
  ],
  faqsEn: [
    { q: "Project address?", a: "401 N Federal Hwy, Hollywood, FL 33020." },
    { q: "Team?", a: "Developer: Alta Developers · Architecture: CFE Architects · Interiors: ID & Design International." },
    { q: "Completion date?", a: "Estimated completion 2028 (subject to permits and construction timeline)." },
    { q: "Rental policy?", a: "Flexible rentals: short stays allowed, including daily." }
  ]
};

export default pGaiaResidences;