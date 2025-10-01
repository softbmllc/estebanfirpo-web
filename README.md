# Esteban Firpo Real Estate — Web

## Overview
Sitio web desarrollado en **Next.js (App Router)** con enfoque en proyectos inmobiliarios en preventa en Miami.  
Se priorizó un diseño minimalista, branding tipo Apple, y alto rendimiento visual y funcional para convertir leads.

## Estructura principal

### Páginas
- `/[locale]` — Home multilenguaje (ES/EN).
- `/[locale]/proyectos` — Listado de proyectos destacados.
- `/[locale]/proyectos/[slug]` — Página individual de cada proyecto.
- `/[locale]/miami` — Sección “¿Por qué Miami?”.
- `/[locale]/precon` — Sección “¿Por qué Preconstrucción?”.
- `/[locale]/financiacion` — Sección de financiación.
- `/[locale]/storages` — Sección de self‑storages.

### Componentes
- **SectionWhyMiami.tsx** — Bloque “¿Por qué Miami?”.
- **SectionWhyPrecon.tsx** — Bloque “¿Por qué Preconstrucción?”.
- **SectionWhyStorages.tsx** — Bloque introductorio de Storages.
- **WhyBlock.tsx** — Sección reutilizable “¿Por qué [proyecto]?” con items/iconos.
- **SpecsBlock.tsx** — Cards responsive con branding dorado/azul.
- **FaqsBlock.tsx** — FAQs reutilizables con acordeón accesible.
- **PaymentPlan.tsx** — Plan de pagos editorial, numerado y con estilo premium.
- **HighlightsBlock.tsx** — Bloque de destacados (cards con branding).
- **NavBar.tsx** — Navegación desktop y mobile mejorada, con subrayado dorado.

### Datos
Cada proyecto tiene su propio archivo en `/src/data/projects/`.  
Ejemplo: `72-park.ts` incluye:
- `unitMixEs/En`
- `featuresEs/En`
- `faqsEs/En`
- `paymentPlanEs/En`
- `highlightsEs/En`
- Imágenes, ubicación (lat/lng), precios y metadata.

Además, existe `/src/data/storages/` para self-storages como Callaway.

### SEO
Cada página de proyecto exporta `generateMetadata` con:
- `title`, `description` dinámicos (ES/EN).
- `openGraph` (imágenes, descripción).
- `twitter card`.
- `canonical alternates`.

Esto asegura previews correctos en WhatsApp, Instagram y LinkedIn.

## Branding

### Paleta de colores

| Rol | Nombre | Hex |
|-----|--------|-----|
| Azul marino (primario) | Navy | `#0A2540` |
| Dorado (acento) | Gold | `#D4AF37` |
| Gris arena (fondos suaves) | Sand | `#F9FAFB` |
| Tinta (texto principal) | Ink | `#0E1624` |

### Estilo
- Inspirado en **Apple**: minimalismo, tipografía clara, espaciado generoso.
- Componentes reutilizables para consistencia.
- Ghost buttons para CTAs secundarios, sólidos para primarios.
- Diseño mobile-first.
- El dorado ahora se aplica en subrayados activos y hairlines de cards.
- Mejoras en la navegación móvil: overlay con blur, botones grandes y coherencia visual.

---


## Próximos pasos
- Seguir cargando proyectos y storages en sus carpetas de datos.
- Mantener consistencia de headers y branding.
- Ajustar microcopy.

---

## TL;DR — Checklist ultra rápido para cargar/actualizar un proyecto
1. **Crear archivo** en `src/data/projects/<slug>.ts` usando el *template tipado* de abajo.
2. **Rellenar**: `id/slug/name/city` (si tenés dirección exacta, mejor). Opcional: `lat/lng`.
3. **Precios & básicos**: `priceFromUsd`, `pricePerSfApprox`, `hoa`, `delivery` (ES=Entrega · EN=Completion), `furnished`.
4. **Política STR** (multilenguaje): usa las plantillas de copy de la sección *Notas de contenido*.
5. **Imágenes**: 1 hero + 8 de galería (ImageKit) en `image` y `images[]`.
6. **Texto corto**: `microClaimsEs/En` (máx. 2, una línea en mobile).
7. **Contenido**: `highlights*`, `unitMix*`, `features*`, `paymentPlan*` (suma 100%, si hay **reserva fija**, **no** sumes % extra), `faqs*` (3–6 por idioma).
8. **Registrar en índice**: importar en `src/data/projects/index.ts` y agregar a `INCOMING` al final.
9. **Build & QA**: `npm run build && npm run start`. Revisar card (líneas en mobile), mapa y OG preview.
10. **Checklist legal**: si hay STR, exigir **Certificado de Uso/DBPR/impuestos** en ES/EN.

---

## Playbook: de PDFs a `*.ts` (sin perderte)
**1) Ubicación**  → `city: "<dirección completa>"` (si tenés direccion exacta). Si tenés `lat/lng`, incluilos.
- El mapa prioriza **coords**; si no hay, usa la **dirección** de `city`. Si `city` no trae número, usa `name + city`.

**2) Precios**  → `priceFromUsd`, `pricePerSfApprox`, `hoa`
- Precios “desde” por tipología en *FAQs* y un "desde" general en `priceFromUsd`.
- HOA siempre en `"$X.XX/sf"`. Si es estimado, podés aclararlo en *FAQs*.

**3) Plan de pagos**  → `paymentPlanEs/En`
- Asegurate que sume **100%**. Si hay una **reserva fija** (US$10k/30k/50k), no la sumes como %: *“se imputa dentro del 20% del contrato”*.

**4) STR/Airbnb**  → `rentalPolicyEs/En`
- Plantillas:
  - ES (**diario**): `"Sin restricciones de alquiler; permite renta diaria (Airbnb). Requiere Certificado de Uso de la Ciudad, licencia estatal (DBPR) e impuestos turísticos."`
  - ES (**30 noches**): `"Renta corta permitida (Airbnb); estadía mínima 30 noches. Requiere Certificado de Uso, licencia estatal (DBPR) e impuestos turísticos."`
  - EN (**daily**): `"No rental restrictions; daily Airbnb‑type rentals allowed. City Certificate of Use and Florida DBPR license required, plus tourist taxes."`
  - EN (**30 nights**): `"Short‑term rentals permitted (Airbnb); 30‑night minimum. City Certificate of Use, DBPR license and tourist taxes required."`

**5) Texto corto (card)**  → `microClaims*`
- Máx. 2 y **una línea** en mobile. Si se corta, **resumí** (ej.: *“Condo‑hotel in‑house · renta 1 noche–6 meses”*).

**6) Highlights/Features**
- 3–6 bullets, una línea. Evitá párrafos.

**7) FAQs** (3–6 por idioma)
- Siempre incluir: *Precios desde*, *Plan de depósitos*, *Política STR*, *HOA*, *Amoblamiento*, *Entrega/Completion* y *Financiación a extranjeros* (si aplica).

---

## QA antes de cerrar (evita retrabajo)
- **Mapa**: verifica que se centre en la dirección; si no, usa `lat/lng` o una dirección más precisa.
- **Cards**: que *microClaims* y *highlights* no corten. Si cortan, recorta.
- **PaymentPlan**: suma 100%. Si hay **reserva fija**, indicala como nota (imputable al 20% del contrato).
- **Multilenguaje**: evita mezclar *Delivery* en ES; usa **Entrega** en ES y **Completion** en EN.
- **STR copy**: incluye **Certificado de Uso/Certificate of Use**, **DBPR** e **impuestos** cuando corresponde.

---

## Recordatorio de iconografía (SpecsBlock)
Los iconos se asignan automáticamente por palabras clave. Algunos mapeos útiles:
- **sparkles** → *amoblado/turn‑key/RH/finishes/floors/blackout/materiales*.
- **ac** → *climatización/HVAC/A‑C/heating*.
- **wifi** → *wi‑fi/internet/fibra*.
- **elevator** → *ascensor/elevador/elevator*.
Si necesitas uno nuevo, agrega la clave en `IconKey`, el `case` en `AutoIcon` y su regex en `guessIconKey`.


## Cómo agregar un proyecto nuevo (paso a paso, cero errores)

> Este flujo está pensado para que, con **solo este README**, puedas cargar proyectos sin confusión. Sigue el orden.

### 1) Crear el archivo de datos
Ruta: `src/data/projects/<slug>.ts`

Usa este **template tipado** (copiar/pegar y reemplazar valores):

```ts
// src/data/projects/<slug>.ts
import type { Project } from "../types";

export const p<PascalName>: Project = {
  id: "<slug>",
  slug: "/proyectos/<slug>",
  name: "<Nombre del proyecto>",
  city: "<Dirección completa o barrio>", // Recomendado: dirección exacta p/ mapa
  // Opcional: coords si las tienes (prioriza coords si son precisas)
  // lat: 25.79065,
  // lng: -80.13005,

  // Precios & básicos
  priceFromUsd: <number | undefined>, // ej: 680000
  pricePerSfApprox: <number | undefined>, // ej: 1250
  hoa: "<$|~>$<monto>/sf", // ej: "$1.40/sf" (o undefined si no hay)
  delivery: "<Qx YYYY | Mes–Mes YYYY>", // EN=Completion, ES=Entrega (ver metadata)
  furnished: <true|false>,

  // Política de renta (multilenguaje)
  rentalPolicyEs: "<Texto en ES>",
  rentalPolicyEn: "<Texto en EN>",

  // Imágenes (mín. 1 hero + 8)
  image: "https://ik.imagekit.io/.../hero.jpg",
  images: [
    { src: "https://ik.imagekit.io/.../2.jpg" },
    { src: "https://ik.imagekit.io/.../3.jpg" },
    // ...hasta 8
  ],

  // Mensajes cortos (máx. 2 líneas en mobile)
  microClaimsEs: ["<claim 1>", "<claim 2>"];
  microClaimsEn: ["<claim 1>", "<claim 2>"];

  // Destacados (3–6 items, una línea)
  highlights: ["<ES 1>", "<ES 2>", "<ES 3>"];
  highlightsEn: ["<EN 1>", "<EN 2>", "<EN 3>"];

  // Mix tipologías (rango ft² y m² si es posible)
  unitMixEs: ["<ES>"];
  unitMixEn: ["<EN>"];

  // Features (3–6)
  featuresEs: ["<ES>"];
  featuresEn: ["<EN>"];

  // Plan de pagos (asegura que sume 100%)
  paymentPlanEs: ["<ES etapa %>", "..."],
  paymentPlanEn: ["<EN stage %>", "..."],

  // FAQs (3–6 por idioma)
  faqsEs: [ { q: "<Pregunta>", a: "<Respuesta>" } ],
  faqsEn: [ { q: "<Question>", a: "<Answer>" } ],
};

export default p<PascalName>;
```

**Notas de contenido:**
- **EN vs ES**: en inglés usa **Completion** (no “Delivery”). En español usa **Entrega**.
- **Plan de pagos**: si hay **reserva fija** (ej. US$10k), **no sumes porcentaje extra**. Indica “se imputa dentro del 20% del contrato”.
- **STR/Airbnb**: si permite alquileres cortos, en ES menciona **Certificado de Uso** y en EN **Certificate of Use** + **DBPR** + impuestos turísticos cuando aplique.
- **HOA**: formato `"$X.XX/sf"`. Si no hay, deja `undefined`.
- **Imágenes**: usa URLs de ImageKit (optimiza peso). 1 hero + 8 galería.
- **Mapa**: si pones **dirección exacta** en `city` o `lat/lng`, el mapa se centrará bien.

### 2) Registrar el proyecto en el índice
Edita: `src/data/projects/index.ts`

1. Importa el proyecto:
```ts
import { p<PascalName> } from "./<slug>";
```
2. Agrégalo al array `INCOMING` **al final**:
```ts
const INCOMING: Project[] = [
  // ...otros
  p<PascalName>,
];
```
> El índice hace *upsert* conservando orden base. No dupliques `id`.

### 3) Verificación visual
- Ejecuta `npm run build && npm run start` o `npm run dev`.
- Revisa:
  1) **Card** en `/[locale]/proyectos`: que **microClaims** y **highlights** no corten en mobile (una línea). Si cortan, **resume** el texto.
  2) **Página** `/[locale]/proyectos/<slug>`: mapa centrado en la dirección; CTAs coherentes; OG preview correcta.

### 4) Buenas prácticas & checks
- **Suma 100%** en `paymentPlan*`. Si hay reserva fija, **no sumes 10% extra**.
- **Multilenguaje**: rellena siempre `*Es` y `*En` (rentalPolicy, microClaims, highlights, unitMix, features, faqs).
- **Copy Airbnb** (si aplica):
  - ES: "Renta corta permitida (Airbnb); estadía mínima X. Requiere Certificado de Uso, licencia estatal (DBPR) e impuestos turísticos."
  - EN: "Short‑term rentals permitted (Airbnb); X‑night minimum. City Certificate of Use, DBPR license and tourist taxes required."
- **Terminología**: EN usa *Completion*; ES usa *Entrega*. No mezclar.
- **HOA**: en `$/sf/mes`. Si es estimado, indica "~" en FAQs.
- **Mapa**: si el iframe usa **nombre** y no ubica exacto, pon **dirección** en `city` (o `lat/lng`). El código prioriza la dirección.
- **Iconos auto** (`SpecsBlock.tsx`):
  - *sparkles* (acabados, amoblado, turn‑key, RH, floors, blackout, finishes…)
  - *ac* (HVAC, A/C, heating, climatización…)
  - *wifi* (wi‑fi, fibra, internet…)
  - *elevator* (ascensor/elevator)
  - *spa/pool/yoga/paddle/work/garage/kitchen/package/bike/security/store/book/kid…*
  - Si necesitas un icono nuevo, agrega la clave en `IconKey`, su `case` en `AutoIcon` y una regla en `guessIconKey`.

### 5) Metadata & OG
Cada página de proyecto define `generateMetadata`. Asegúrate de:
- **title/description** ES/EN.
- `openGraph.images` y `twitter.card`.
- `metadataBase` apunta a tu dominio de prod.

### 6) Errores comunes (y cómo evitarlos)
- **Hydration mismatch**: no detectes mobile/desktop con `navigator` en SSR; usa media queries (`sm:`) o `matchMedia` en `useEffect`.
- **Mezclar idiomas**: no escribas "Certificate of Use" en ES sin aclarar: usa *Certificado de Uso ("Certificate of Use")*.
- **Texto largo en cards**: resume hasta una línea.
- **Duplicar IDs**: cada `id` debe ser único.

---

### Ejemplo real mínimo
```ts
// src/data/projects/example-tower.ts
import type { Project } from "../types";
export const pExampleTower: Project = {
  id: "example-tower",
  slug: "/proyectos/example-tower",
  name: "Example Tower",
  city: "123 Example Ave, Miami, FL",
  priceFromUsd: 750000,
  pricePerSfApprox: 1200,
  hoa: "$1.10/sf",
  delivery: "Q2 2027",
  furnished: false,
  rentalPolicyEs: "Renta corta permitida (Airbnb); mín. 30 noches. Requiere CU y DBPR.",
  rentalPolicyEn: "Short‑term rentals permitted (Airbnb); 30‑night min. CU & DBPR required.",
  image: "https://ik.imagekit.io/.../hero.jpg",
  images: [{ src: "https://ik.imagekit.io/.../2.jpg" }],
  microClaimsEs: ["Entrega Q2 2027", "Airbnb 30 noches"],
  microClaimsEn: ["Completion Q2 2027", "Airbnb 30 nights"],
  highlights: ["Rooftop pool", "Spa & sauna", "Cowork"],
  highlightsEn: ["Rooftop pool", "Spa & sauna", "Cowork"],
  unitMixEs: ["1–3 dorm · 60–130 m²"],
  unitMixEn: ["1–3 BR · 650–1,400 sq ft"],
  featuresEs: ["Cocina italiana", "A/C eficiente", "Vidrios de impacto"],
  featuresEn: ["Italian kitchen", "Efficient A/C", "Impact glazing"],
  paymentPlanEs: ["20% contrato", "10% groundbreaking", "10% top‑off", "60% cierre"],
  paymentPlanEn: ["20% at contract", "10% groundbreaking", "10% top‑off", "60% closing"],
  faqsEs: [{ q: "¿Desde cuánto?", a: "Desde ~US$750,000." }],
  faqsEn: [{ q: "Starting from?", a: "From ~$750,000." }],
};
export default pExampleTower;
```
