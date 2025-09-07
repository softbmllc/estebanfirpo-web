// src/components/FeaturedProjects.tsx
"use client";
import { FEATURED_PROJECTS } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useParams } from "next/navigation";

export default function FeaturedProjects() {
  const params = useParams();
  const locale = (params?.locale as string) || "es";
  const isEN = locale === "en";

  const ref = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) => ref.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <section aria-labelledby="featured-projects">
      <div className="flex items-center justify-between mb-6">
        <h2 id="featured-projects" className="text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-[#0A2540]">
          {isEN ? "Featured projects" : "Proyectos destacados"}
        </h2>
        <div className="hidden sm:flex gap-2">
          <button
            aria-label={isEN ? "Previous" : "Anterior"}
            onClick={() => scrollBy(-1)}
            className="h-9 w-9 rounded-md border border-black/10 hover:bg-white"
            type="button"
          >
            ‹
          </button>
          <button
            aria-label={isEN ? "Next" : "Siguiente"}
            onClick={() => scrollBy(1)}
            className="h-9 w-9 rounded-md border border-black/10 hover:bg-white"
            type="button"
          >
            ›
          </button>
        </div>
      </div>
      <div ref={ref} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FEATURED_PROJECTS.map(p => (
          <ProjectCard key={p.id} p={p} showMonthlyEstimate variant="landing" />
        ))}
      </div>
    </section>
  );
}