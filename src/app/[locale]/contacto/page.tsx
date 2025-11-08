// src/app/[locale]/contacto/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window { gtag?: (...args: any[]) => void }
}

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const raw = await r.text();
      alert(`Servidor respondió: ${raw}`);
      let data: any = {};
      try { data = JSON.parse(raw); } catch {}
      if (!r.ok || !data?.ok) throw new Error(data?.error || raw || "send failed");
      window.gtag?.("event", "generate_lead", { event_category: "form", event_label: "contacto" });
      router.push("/gracias");
    } catch (err) {
      alert(`Error: ${err instanceof Error ? err.message : String(err)}`);
      console.error("contact api error:", err);
    }
  };

  return (
    <main className="mx-auto max-w-lg px-4 py-16 space-y-6">
      <h2 className="text-3xl font-semibold text-primary">Contacto</h2>
      <p className="text-neutral-700">
        Completa el formulario y te contactaré para asesorarte en tu inversión en Miami.
      </p>
      <form className="mt-6 grid gap-4">
        <input
          name="nombre"
          className="h-11 rounded-md border border-primary/30 px-3 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Nombre"
          required
          onChange={handleChange}
        />
        <input
          name="email"
          className="h-11 rounded-md border border-primary/30 px-3 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Email"
          type="email"
          required
          onChange={handleChange}
        />
        <textarea
          name="mensaje"
          className="min-h-32 rounded-md border border-primary/30 p-3 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Tu consulta"
          required
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="h-11 rounded-md bg-primary px-4 text-white font-medium hover:opacity-90"
        >
          Enviar
        </button>
      </form>
      <div className="mt-6 text-center">
        <a
          href="https://wa.me/17542673931"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block h-11 rounded-md border border-primary px-6 text-primary hover:bg-accent/10"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </main>
  );
}