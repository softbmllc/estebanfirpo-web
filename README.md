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
