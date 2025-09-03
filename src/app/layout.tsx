// src/app/layout.tsx
export const metadata = {
  title: "Esteban Firpo | Real Estate Miami",
  description: "Pre-construction y renta corta en Miami.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}