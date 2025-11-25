// src/analyst/JsonInputPanel.tsx

import { useState } from "react";
import type { CourseData } from "../../types/course";
import type { TemplateId } from "../../types/templates";

type JsonInputPanelProps = {
  value: string;
  onChange: (next: string) => void;
  onParseJson: (parsed: CourseData | null) => void;
  selectedTemplateId: TemplateId;
  onTemplateChange: (id: TemplateId) => void;
};

export function JsonInputPanel({
  value,
  onChange,
  onParseJson,
  selectedTemplateId,
  onTemplateChange,
}: JsonInputPanelProps) {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    try {
      const parsed = JSON.parse(value) as CourseData;

      if (!parsed.tituloCurso || !parsed.secciones) {
        setError("El JSON no tiene la estructura esperada.");
        onParseJson(null);
        return;
      }

      setError(null);
      onParseJson(parsed);
    } catch {
      setError("JSON inválido. Revisa la sintaxis.");
      onParseJson(null);
    }
  };

  const handleTemplateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTemplateChange(e.target.value as TemplateId);
  };

  return (
    <section
      className="
        flex h-full flex-col
        rounded-3xl bg-emerald-900/95
        px-5 py-5
        text-emerald-50 shadow-xl
        max-h-[calc(100vh-96px)]
      "
    >
      {/* ENCABEZADO */}
      <header>
        <p className="text-sm font-medium text-emerald-100">
          Entrada de contenido
        </p>
        <p className="text-xs text-emerald-200">
          Ajusta JSON y selecciona la plantilla.
        </p>
      </header>

      {/* SELECTOR DE PLANTILLA */}
      <div className="mt-4 space-y-1">
        <label className="text-xs font-semibold text-emerald-100">
          Plantilla de diseño
        </label>

        <select
          className="
            w-full rounded-xl border border-emerald-500/40
            bg-emerald-950/60 px-3 py-2
            text-sm text-emerald-50 shadow-inner
            outline-none ring-emerald-400/60 focus:ring-1
          "
          value={selectedTemplateId}
          onChange={handleTemplateSelect}
        >
          <option value="minimal">⚡ Minimal</option>
          <option value="premium">💎 Premium</option>
          <option value="googleStudio">🧠 Google Studio</option>
          <option value="databaseFigma">🧪 Figma </option>
          <option value="databaseJose">🎨 Plantilla José</option>
        </select>
      </div>

      {/* CONTENEDOR SCROLL DEL JSON */}
      <div
        className="
          flex-1 min-h-0 mt-4
          rounded-2xl border border-emerald-500/40
          bg-emerald-950/60 p-3
          flex flex-col
        "
      >
        <label className="mb-2 text-xs font-semibold text-emerald-100">
          JSON del curso (formato estándar)
        </label>

        <textarea
          className="
            flex-1 min-h-0 w-full resize-none
            rounded-xl bg-transparent
            text-[12px] font-mono leading-5
            text-emerald-50 outline-none
            scrollbar-thin scrollbar-track-emerald-950 
            scrollbar-thumb-emerald-600
          "
          value={value}
          onChange={(e) => onChange(e.target.value)}
          spellCheck={false}
        />

        {error && (
          <p className="mt-2 text-xs font-medium text-rose-300">{error}</p>
        )}
      </div>

      {/* BOTÓN FIJO ABAJO */}
      <button
        type="button"
        onClick={handleSubmit}
        className="
          mt-4 flex items-center justify-center
          rounded-2xl bg-emerald-500 px-4 py-2.5
          text-sm font-semibold text-emerald-950
          shadow-lg hover:bg-emerald-400
          transition-all
        "
      >
        ⚡ Generar vista previa
      </button>
    </section>
  );
}
