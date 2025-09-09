// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esteban Firpo | Real Estate Miami",
  description: "Real estate en Miami: preconstrucción, renta corta y compra para vivir o invertir. Asesoría y análisis de proyectos, con financiación para compradores internacionales.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.estebanfirpo.com"),
  openGraph: {
    type: "website",
    siteName: "Esteban Firpo | Real Estate Miami",
    title: "Esteban Firpo | Inversiones en Miami",
    description: "Real estate en Miami: preconstrucción, renta corta y compra para vivir o invertir. Asesoría y análisis de proyectos, con financiación para compradores internacionales.",
    images: ["/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image.jpg"],
    title: "Esteban Firpo | Inversiones en Miami",
    description: "Real estate en Miami: preconstrucción, renta corta y compra para vivir o invertir. Asesoría y análisis de proyectos, con financiación para compradores internacionales.",
  },
  alternates: { canonical: '/' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-dvh bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}