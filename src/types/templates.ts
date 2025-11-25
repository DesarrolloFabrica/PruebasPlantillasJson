// src/types/templates.ts

export type TemplateId = "databaseFigma"  | "figmaDesign";  

export interface TemplateDefinition {
  id: TemplateId;
  label: string;
}

export const TEMPLATES: TemplateDefinition[] = [
  { id: "databaseFigma", label: "Landing Bases de Datos" },
  { id: "figmaDesign", label: "Landing Figma nueva" }, 
];
