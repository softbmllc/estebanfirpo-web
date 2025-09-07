// src/app/[locale]/contacto/page.tsx
export default function Contacto() {
  return (
    <main className="mx-auto max-w-lg px-4 py-16 space-y-6">
      <h2 className="text-3xl font-semibold text-primary">Contacto</h2>
      <p className="text-neutral-700">
        Completa el formulario y te contactaré para asesorarte en tu inversión en Miami.
      </p>
      <form className="mt-6 grid gap-4">
        <input
          className="h-11 rounded-md border border-primary/30 px-3 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Nombre"
          required
        />
        <input
          className="h-11 rounded-md border border-primary/30 px-3 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Email"
          type="email"
          required
        />
        <textarea
          className="min-h-32 rounded-md border border-primary/30 p-3 focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="Tu consulta"
        />
        <button
          type="submit"
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