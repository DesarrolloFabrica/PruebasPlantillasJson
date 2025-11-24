// src/types/templates.ts

export type TemplateId = "minimal" | "premium" | "googleStudio"  | "databaseFigma";

export interface TemplateDefinition {
  id: TemplateId;
  label: string;
}

export const TEMPLATES: TemplateDefinition[] = [
  { id: "minimal", label: "Minimal" },
  { id: "premium", label: "Premium interactiva" },
  { id: "googleStudio", label: "Google Studio avanzada" },
  { id: "databaseFigma", label: "Landing Bases de Datos" } // NUEVO
];
