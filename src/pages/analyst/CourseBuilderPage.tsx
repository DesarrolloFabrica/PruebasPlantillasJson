// src/pages/analyst/CourseBuilderPage.tsx

import React, { useState } from "react";
// Panel de entrada de JSON y selector de plantilla
import { JsonInputPanel } from "../../components/analyst/JsonInputPanel";
// Contenedor que renderiza la plantilla seleccionada
import PreviewShell from "../../components/analyst/PreviewShell";
// Header verde superior de la app
import AppHeader from "../../components/layout/AppHeader";
// Tipos del curso y plantillas
import type { CourseData } from "../../types/course";
import type { TemplateId } from "../../types/templates";

const CourseBuilderPage: React.FC = () => {
  // Estado con el texto bruto del JSON en el textarea
  const [jsonText, setJsonText] = useState<string>("");
  // Estado con el JSON ya parseado al tipo CourseData
  const [parsedData, setParsedData] = useState<CourseData | null>(null);
  // Plantilla seleccionada (por defecto la de Figma DB)
  const [selectedTemplateId, setSelectedTemplateId] =
    useState<TemplateId>("databaseFigma");

  // Cambia la plantilla cuando el usuario elige otra en el panel izquierdo
  const handleTemplateChange = (id: TemplateId) => setSelectedTemplateId(id);

  return (
    // Contenedor principal de toda la página
    // flex-col para tener: header arriba y contenido abajo
    // overflow-hidden para que el scroll se controle SOLO en las columnas internas
    <div className="flex min-h-screen w-screen flex-col bg-slate-950 overflow-hidden">
      {/* Header verde superior (se mantiene igual) */}
      <AppHeader />

      {/* Zona principal: JSON a la izquierda / vista previa a la derecha */}
      <main className="flex flex-1 min-h-0 bg-slate-950 text-slate-50">
        {/* COLUMNA IZQUIERDA: JSON + selector de plantilla */}
        <section
          className="
            flex
            h-[calc(100vh-64px)]  /* alto ventana menos el header */
            w-full max-w-md       /* ancho máximo tipo panel lateral */
            flex-col
            border-r border-emerald-900/30
            bg-emerald-950/40
            px-4 py-4
            overflow-y-auto       /* scroll SOLO dentro del panel izquierdo */
          "
        >
          <JsonInputPanel
            value={jsonText}                 // texto actual del JSON
            onChange={setJsonText}           // actualiza texto del JSON
            onParseJson={setParsedData}      // guarda el JSON parseado
            selectedTemplateId={selectedTemplateId} // plantilla seleccionada
            onTemplateChange={handleTemplateChange} // cambia plantilla
          />
        </section>

        {/* COLUMNA DERECHA: solo la plantilla, ocupando TODO el espacio */}
        <section
          className="
            flex-1              /* ocupa todo el espacio restante */
            min-w-0             /* permite que el contenido se encoja sin romper layout */
            h-[calc(100vh-64px)]
            bg-slate-900        /* fondo oscuro uniforme como en Figma */
          "
        >
          {/* 
            Importante:
            - PreviewShell se encarga del scroll interno de la plantilla
            - Aquí NO ponemos bordes ni sombras, para que se vea
              como una página completa, igual a la vista de Figma.
          */}
          <PreviewShell data={parsedData} templateId={selectedTemplateId} />
        </section>
      </main>
    </div>
  );
};

export default CourseBuilderPage;
