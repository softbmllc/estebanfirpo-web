// src/data/projects/oasis.ts
// Proyecto cargado con tipado Project. Datos verificados desde brochures y sitio oficial.
// Amenidades y features: ver web oficial (amenities list) y brochure en español. (Citas en mensaje)
import type { Project } from "../types";

export const pOasis: Project = {
  id: "oasis-hallandale",
  name: "Oasis Hallandale",
  city: "Hallandale Beach",
  rentalPolicy: undefined,
  furnished: false,
  priceFromUsd: undefined,
  pricePerSfApprox: undefined,
  delivery: "2025",
  slug: "/proyectos/oasis-hallandale",
  image: "https://ik.imagekit.io/devrodri/Oasis/UpDctSXg.jpeg",

  microClaimsEs: [
    "Desarrollo mixto de 10 acres",
    "2 torres residenciales de 25 pisos",
    "Retail, oficinas y restaurantes (~95.000 ft²)"
  ],
  microClaimsEn: [
    "10‑acre mixed‑use development",
    "Two 25‑story residential towers",
    "Retail, offices and restaurants (~95,000 sq ft)"
  ],

  highlights: [
    "Valet y lobby 24 h; salas de negocios y conferencias",
    "2 piscinas con cabañas, hot‑tub + cold plunge, cine interior y al aire libre",
    "Fitness & wellness center, yoga lawn, mini‑cancha de fútbol indoor",
    "Simulador de golf, lounge bar con mesas de billar, salón de banquetes",
    "Parque para mascotas y paw‑wash; cargadores para autos eléctricos; storage"
  ],
  highlightsEn: [
    "Valet and 24/7 lobby; business & conference rooms",
    "2 pools with cabanas, hot‑tub + cold plunge, indoor & outdoor cinema",
    "Fitness & wellness center, yoga lawn, indoor mini soccer field",
    "Golf simulator, lounge bar with pool tables, banquet hall",
    "Pet park & paw‑wash; EV charging; storage"
  ],

  unitMixEs: [
    "1–3 dormitorios",
    "Balcones con barandas de vidrio",
    "Ventanales piso‑techo"
  ],
  unitMixEn: [
    "1–3 bedrooms",
    "Glass‑railing balconies",
    "Floor‑to‑ceiling windows"
  ],

  featuresEs: [
    "Cocina italiana con tope monolítico e isla",
    "Electrodomésticos de acero inoxidable",
    "Porcelanatos italianos en cocina y baños",
    "Doble bacha y duchas sin marco en baños principales",
    "Clósets tipo walk‑in; toilette en unidades selectas"
  ],
  featuresEn: [
    "Italian cabinetry with seamless monolithic countertop & island",
    "Stainless‑steel appliances",
    "Imported Italian porcelain in kitchens and bathrooms",
    "Double vanity & frameless glass showers in primary baths",
    "Walk‑in closets; powder room in select residences"
  ],

  paymentPlanEs: ["A confirmar con el desarrollador"],
  paymentPlanEn: ["To be confirmed by the developer"],

  faqsEs: [
    { q: "¿Se permiten rentas cortas?", a: "Confirmar política exacta del condominio." },
    { q: "¿Incluye paquete de amoblamiento?", a: "Consultar opciones disponibles." }
  ],
  faqsEn: [
    { q: "Are short‑term rentals allowed?", a: "Please confirm with the condo association." },
    { q: "Is there a furnishing package?", a: "Please ask for available options." }
  ],

  images: [
    { src: "https://ik.imagekit.io/devrodri/Oasis/9Ew6UaXQ.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/2YIKVQpA.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/TNvGov_Q.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/D2WVuUzw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/exUc6KXw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/aKzfLilw.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/fGgzBYxQ.jpeg" },
    { src: "https://ik.imagekit.io/devrodri/Oasis/BHMTHL7g.jpeg" }
  ]
};

export default pOasis;