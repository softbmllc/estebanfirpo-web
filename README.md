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
- `/[locale]/contacto` — Contacto directo.

### Componentes
- **SectionWhyMiami.tsx** — Bloque “¿Por qué Miami?”.
- **SectionWhyPrecon.tsx** — Bloque “¿Por qué Preconstrucción?”.
- **WhyBlock.tsx** — Sección reutilizable “¿Por qué [proyecto]?” con items/iconos.
- **SpecsBlock.tsx** — Para Tipologías y Características (cards con iconos + CTAs).
- **FaqsBlock.tsx** — FAQs reutilizables con acordeón accesible.
- **PaymentPlan.tsx** — Plan de pagos editorial, numerado y con estilo premium.

### Datos
Cada proyecto tiene su propio archivo en `/src/data/projects/`.  
Ejemplo: `72-park.ts` incluye:
- `unitMixEs/En`
- `featuresEs/En`
- `faqsEs/En`
- `paymentPlanEs/En`
- `highlightsEs/En`
- Imágenes, ubicación (lat/lng), precios y metadata.

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

---

## Próximos pasos
- Seguir cargando proyectos en `/src/data/projects/`.
- Replicar estructura de 72 Park en cada nuevo slug.
- Ajustar detalles visuales y microcopy según feedback.
