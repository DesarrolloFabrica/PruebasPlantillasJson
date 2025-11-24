// src/components/analyst/PreviewShell.tsx

import React from "react";
import type { CourseData } from "../../types/course";
import type { TemplateId } from "../../types/templates";

// Las plantillas

import { DatabaseCourseTemplate } from "../templates/DatabaseCourseTemplate";

interface PreviewShellProps {
  data: CourseData | null;
  templateId: TemplateId;
}

type TemplateComponent = React.ComponentType<{ data: CourseData }>;

// Usamos Partial<Record<...>> porque todavía no existen componentes
// para todas las variantes de TemplateId definidas en `templates.ts`.
// Así evitamos el error de TypeScript por claves faltantes y manejamos
// la ausencia con un fallback más abajo.
const TEMPLATE_COMPONENTS: Partial<Record<TemplateId, TemplateComponent>> = {
  databaseFigma: DatabaseCourseTemplate,
};

const PreviewShell: React.FC<PreviewShellProps> = ({ data, templateId }) => {
  const Template = TEMPLATE_COMPONENTS[templateId];

  return (
    <section className="flex h-full flex-col rounded-3xl bg-emerald-50/80 p-4 shadow-lg border border-emerald-200">
      {/* Encabezado */}
      <header className="mb-4 flex items-center justify-between rounded-2xl bg-emerald-900/90 px-4 py-3 text-sm text-emerald-50 shadow-md">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="font-medium">Vista previa del curso</span>
        </div>
        <span className="text-xs text-emerald-100/80">Renderizado en vivo</span>
      </header>

      {/* Contenido de la plantilla */}
      <div className="flex-1 overflow-y-auto rounded-2xl bg-linear-to-b from-emerald-50/40 to-emerald-100/10 p-4">
        {!data ? (
          <div className="flex h-full items-center justify-center text-sm text-emerald-700/80">
            Pega un JSON válido y genera la vista previa para ver tu curso aquí.
          </div>
        ) : Template ? (
          <Template data={data} />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-emerald-700/80">
            No hay componente de plantilla implementado para: {templateId}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviewShell;
