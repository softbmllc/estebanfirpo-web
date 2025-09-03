// src/app/proyectos/[slug]/page.tsx
export default function Proyecto({ params }: { params:{ slug:string } }) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-semibold">{params.slug.replaceAll("-", " ")}</h1>
        <p className="mt-4">Ficha técnica, plan de pagos, galería y formulario.</p>
      </main>
    );
  }