// src/data/projects/index.ts
import { p72Park } from "./72-park";
import { pEllaMiami } from "./ella-miami";
import { p7200Collins } from "./7200-collins";
import { ALL_PROJECTS as BASE_ALL, FEATURED_PROJECTS as BASE_FEAT } from "../projects";
import type { Project } from "../types";

// helper: upsert por id (o alias) preservando el orden base
function upsertMany(base: Project[], items: Project[]): Project[] {
  const map = new Map(base.map((p) => [p.id, p]));
  for (const it of items) {
    // soporta alias históricos
    const key = it.id;
    map.set(key, { ...(map.get(key) ?? {}), ...it });
  }
  // Reconstruimos en el mismo orden del base, anteponiendo los nuevos si no existían
  const known = base.map((p) => map.get(p.id)!);
  const extras = items.filter((it) => !base.find((p) => p.id === it.id));
  return [...extras, ...known];
}

const INCOMING: Project[] = [p72Park, pEllaMiami, p7200Collins];
export const FEATURED_PROJECTS: Project[] = upsertMany(BASE_FEAT, INCOMING);
export const ALL_PROJECTS: Project[] = upsertMany(BASE_ALL, INCOMING);