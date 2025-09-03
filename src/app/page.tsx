// src/app/page.tsx
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">Real Estate en Miami con Esteban Firpo</h1>
      <p className="mt-4 text-lg">Pre-construction, renta corta aprobada y planes de pago claros.</p>
      <div className="mt-6 flex gap-3">
        <Button asChild><a href="/proyectos">Ver proyectos</a></Button>
        <Button variant="outline" asChild>
          <a href="https://wa.me/1XXXXXXXXXX" target="_blank" rel="noreferrer">
            <Phone className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </div>
    </main>
  );
}