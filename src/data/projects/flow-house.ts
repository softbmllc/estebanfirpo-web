// src/data/projects/flow-house.ts
import type { Project } from "../types";

export const pFlowHouse: Project = {
  id: "flow-house",
  name: "Flow House",
  city: "Downtown Miami",
  rentalPolicy: "30 días",
  furnished: true,
  priceFromUsd: 420000,
  pricePerSfApprox: undefined,
  delivery: "2025",
  slug: "/proyectos/flow-house",
  image: "/images/projects/flow-house.webp",

  microClaimsEs: [
    "Miami Worldcenter",
    "Bienestar + cowork",
    "Residencias amobladas"
  ],
  microClaimsEn: [
    "Miami Worldcenter",
    "Wellbeing + cowork",
    "Furnished residences"
  ],

  highlights: [
    "46,100 ft² de amenidades (wellbeing, workflow y experience)",
    "Piscina semi‑olímpica de 126 ft con day beds y cabañas",
    "Coworking con oficinas privadas, salas de reunión y podcast room",
    "Residencias terminadas y amobladas con lavadora/secadora",
    "Ubicado en el corazón de Miami Worldcenter"
  ],
  highlightsEn: [
    "46,100 sq ft of amenities (wellbeing, workflow, experience)",
    "126‑ft lap pool with day beds & cabanas",
    "Coworking with private offices, meeting rooms & podcast room",
    "Finished & furnished residences with washer/dryer",
    "Located in the heart of Miami Worldcenter"
  ],

  unitMixEs: ["Studio", "Jr 1 Dormitorio", "1 Dormitorio", "2 Dormitorios"],
  unitMixEn: ["Studio", "Jr 1 Bedroom", "1 Bedroom", "2 Bedrooms"],

  featuresEs: [
    "Residencias terminadas y amobladas",
    "Paquetes de iluminación personalizados",
    "Balcón privado en unidades selectas",
    "Gabinetes estilo europeo",
    "Accesorios de baño de lujo",
    "Electrodomésticos completos con lavadora y secadora",
    "Edificio pet‑friendly",
    "Estacionamiento disponible para alquilar"
  ],
  featuresEn: [
    "Finished and furnished residences",
    "Custom lighting packages",
    "Private balconies in select units",
    "European‑style cabinetry",
    "Luxury bath fixtures",
    "Full appliances with washer & dryer",
    "Pet‑friendly building",
    "Parking spaces available for rent"
  ],

  // No payment plan publicado oficialmente en los materiales; lo dejamos vacío para evitar errores.
  paymentPlanEs: [
    "10% reserva/contrato",
    "10% a los 30 días (completa 20%)",
    "10% a los 60 días (completa 30%)",
    "70% al cierre (con financiación disponible para extranjeros, previsto 2025)"
  ],
  paymentPlanEn: [
    "10% at reservation/contract",
    "10% in 30 days (to complete 20%)",
    "10% in 60 days (to complete 30%)",
    "70% at Closing (financing available for foreign buyers, target 2025)"
  ],

  faqsEs: [
    { q: "¿Dónde se encuentra Flow House?", a: "En 697 N. Miami Ave, dentro del Miami Worldcenter, Miami." },
    { q: "¿Qué tipo de unidades ofrece?", a: "Estudios, apartamentos de 1 y 2 habitaciones." },
    { q: "¿Qué lo diferencia de otros proyectos?", a: "Su enfoque en bienestar, comunidad, diseño moderno y espacios tecnológicos. Incluye muebles exclusivos Flow." },
    { q: "¿Qué amenities tiene?", a: "Coworking, gimnasio 24/7, yoga, baños de agua fría, sauna, cafetería, salones sociales y más." },
    { q: "¿Cómo es el plan de pago?", a: "10% al firmar, 10% en 30 días, 10% en 60 días y 70% al cierre (con financiación para extranjeros). Entrega en 2025." },
    { q: "¿Se puede alquilar?", a: "Sí. Alquiler mínimo: 30 días. Además, hay opción de leaseback por 2 años." },
    { q: "¿Incluye muebles?", a: "Sí. Todas las residencias se entregan terminadas y amobladas." },
    { q: "¿Hay estacionamiento?", a: "Sí. Estacionamiento disponible para alquilar." },
    { q: "¿Cuál es el HOA estimado?", a: "$1.27 por pie cuadrado." }
  ],

  faqsEn: [
    { q: "Where is Flow House located?", a: "At 697 N. Miami Ave, within Miami Worldcenter, Miami." },
    { q: "What types of units are offered?", a: "Studios, 1-bedroom and 2-bedroom residences." },
    { q: "What makes it different from other projects?", a: "Its focus on wellbeing, community, modern design and tech spaces. Includes exclusive Flow furnishings." },
    { q: "What amenities are available?", a: "Coworking, 24/7 gym, yoga, cold plunge, sauna, café, social lounges and more." },
    { q: "How is the payment plan structured?", a: "10% at contract, 10% in 30 days, 10% in 60 days and 70% at closing (financing for foreign buyers). Delivery 2025." },
    { q: "Can it be rented?", a: "Yes. Minimum rental: 30 days. In addition, there is a 2-year leaseback option." },
    { q: "Are units furnished?", a: "Yes. All residences are delivered finished and furnished." },
    { q: "Is parking available?", a: "Yes. Parking spaces available for rent." },
    { q: "What is the estimated HOA?", a: "$1.27 per square foot." }
  ],

  images: [
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/1.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/2.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/3.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/4.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/6.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/7.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/8.jpg" },
    { src: "https://ik.imagekit.io/devrodri/Flow%20House/5.jpg" }
  ]
};
