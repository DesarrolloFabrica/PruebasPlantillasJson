// src/pages/analyst/CourseBuilderPage.tsx

import React, { useState } from "react";
import { JsonInputPanel } from "../../components/analyst/JsonInputPanel";
import PreviewShell from "../../components/analyst/PreviewShell";
import AppHeader from "../../components/layout/AppHeader";
import type { CourseData } from "../../types/course";
import type { TemplateId } from "../../types/templates";

const CourseBuilderPage: React.FC = () => {
  const [jsonText, setJsonText] = useState<string>("");
  const [parsedData, setParsedData] = useState<CourseData | null>(null);
  const [selectedTemplateId, setSelectedTemplateId] =
    useState<TemplateId>("minimal");

  const handleTemplateChange = (id: TemplateId) => setSelectedTemplateId(id);

  return (
    <div className="flex min-h-screen w-screen flex-col bg-slate-950">
      <AppHeader />

      <main
        className="
          flex flex-1 gap-4
          bg-linear-to-br from-emerald-100 via-emerald-50 to-slate-200
          px-4 py-4
          overflow-hidden
        "
      >
        {/* Columna izquierda (JSON + botón) */}
        <div
          className="
            flex w-full max-w-md flex-col
            h-[calc(100vh-80px)]
          "
        >
          <JsonInputPanel
            value={jsonText}
            onChange={setJsonText}
            onParseJson={setParsedData}
            selectedTemplateId={selectedTemplateId}
            onTemplateChange={handleTemplateChange}
          />
        </div>

        {/* Columna derecha (Preview) */}
        <div className="flex min-w-0 flex-1">
          <div
            className="
              flex h-full w-full flex-col
              rounded-3xl border border-slate-800
              bg-slate-950
              shadow-2xl shadow-slate-900/60
              overflow-hidden
            "
          >
            <header className="flex items-center justify-between border-b border-slate-800 px-6 py-3">
              <div className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.2em] text-emerald-400 uppercase">
                  Vista previa del curso
                </span>
                <span className="text-xs text-slate-400">
                  Renderizado en tiempo real según tu JSON.
                </span>
              </div>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-[11px] text-slate-300">
                Solo lectura
              </span>
            </header>

            <div className="flex-1 min-h-0 overflow-hidden">
              {/* El shell ya maneja el scroll interno de la plantillas */}
              <PreviewShell data={parsedData} templateId={selectedTemplateId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseBuilderPage;
