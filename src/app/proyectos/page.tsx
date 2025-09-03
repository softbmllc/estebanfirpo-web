// src/app/proyectos/page.tsx
type Project = { slug:string; name:string; minPrice:number; delivery:string; rentPolicy:string; };
const projects: Project[] = [
  { slug:"7200-collins", name:"7200 Collins", minPrice:570000, delivery:"2028", rentPolicy:"Sin restricciones" },
  { slug:"72-park", name:"72 Park", minPrice:720000, delivery:"2025", rentPolicy:"Sin restricciones" },
];
export default function Proyectos() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-semibold">Proyectos</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map(p=>(
          <a key={p.slug} href={`/proyectos/${p.slug}`} className="rounded-2xl border p-5 hover:shadow">
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className="mt-2 text-sm">Desde USD {p.minPrice.toLocaleString()}</p>
            <p className="text-sm">Entrega {p.delivery} · {p.rentPolicy}</p>
          </a>
        ))}
      </div>
    </main>
  );
}