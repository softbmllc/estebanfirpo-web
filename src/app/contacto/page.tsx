// src/app/contacto/page.tsx
export default function Contacto() {
    return (
      <main className="mx-auto max-w-lg px-4 py-16">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <form className="mt-6 grid gap-4">
          <input className="h-10 rounded border px-3" placeholder="Nombre" required />
          <input className="h-10 rounded border px-3" placeholder="Email" type="email" required />
          <textarea className="min-h-32 rounded border p-3" placeholder="Tu consulta" />
          <button className="h-10 rounded bg-black px-4 text-white">Enviar</button>
        </form>
      </main>
    );
  }