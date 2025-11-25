// src/components/analyst/PreviewShell.tsx

import React from "react";
import type { CourseData } from "../../types/course";
import type { TemplateId } from "../../types/templates";

// Las plantillas


import DatabaseCourseTemplateJose from "../templates/DatabaseCourseTemplateJose";



interface PreviewShellProps {
  // JSON ya parseado al tipo CourseData
  data: CourseData | null;
  // Plantilla seleccionada por el usuario
  templateId: TemplateId;
}

/**
 * PreviewShell
 * ------------
 * Este componente:
 * - No agrega marcos, bordes ni tarjetas extras.
 * - Solo se encarga de:
 *    1) Elegir qué plantilla renderizar según templateId.
 *    2) Proveer un contenedor con overflow-auto para el scroll interno.
 * - De esta forma, la plantilla se ve a pantalla completa en la columna derecha,
 *   igual que la vista de Figma.
 */
const PreviewShell: React.FC<PreviewShellProps> = ({ data, templateId }) => {
  // Si el JSON aún no está parseado, mostramos un mensaje suave de ayuda
  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-slate-950">
        <div className="max-w-md text-center text-slate-400 text-sm">
          <p className="font-semibold text-slate-200 mb-2">
            Pega un JSON válido para ver la vista previa del curso.
          </p>
          <p>
            En el panel izquierdo ajusta el contenido y haz clic en
            <span className="font-semibold text-emerald-400">
              {" "}“Generar vista previa”.
            </span>
          </p>
        </div>
      </div>
    );
  }

  // Función para decidir qué plantilla renderizar según el id
  const renderTemplate = () => {
    switch (templateId) {
      case "databaseFigma":
        // Plantilla de landing DB basada en tu diseño de Figma
        return <DatabaseCourseTemplateJose data={data} />;

      // Si luego agregas otra plantilla tipo "figmaDesign",
      // puedes activarla aquí:
      // case "figmaDesign":
      //   return <TemplateFigmaDesign data={data} />;

    }
  };

  return (
    // Contenedor que ocupa TODO el espacio de la columna derecha
    // y controla el scroll interno para la plantilla.
    <div className="h-full w-full overflow-auto bg-slate-950">
      {renderTemplate()}
    </div>
  );
};

export default PreviewShell;