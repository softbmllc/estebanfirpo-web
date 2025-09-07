// src/data/projects/index.ts
import { p72Park } from "./72-park";
import { ALL_PROJECTS as BASE_ALL, FEATURED_PROJECTS as BASE_FEAT } from "../projects";
import type { Project } from "../types";

// helper: si el id ya existe, lo reemplazamos por el módulo nuevo
function upsert(list: Project[]): Project[] {
  const i = list.findIndex(p => p.id === p72Park.id || p.id === "72park" || p.id === "72-park");
  if (i >= 0) {
    const clone = [...list];
    clone[i] = { ...list[i], ...p72Park };
    return clone;
  }
  return [p72Park, ...list];
}

export const FEATURED_PROJECTS: Project[] = upsert(BASE_FEAT);
export const ALL_PROJECTS: Project[] = upsert(BASE_ALL);