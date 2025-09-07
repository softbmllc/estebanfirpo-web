// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Esteban Firpo | Real Estate Miami",
  description: "Pre-construction y short-term en Miami."
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