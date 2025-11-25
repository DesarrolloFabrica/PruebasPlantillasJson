// src/components/templates/TemplateFigmaDB.tsx

import React from "react";

// Tipos base del curso y de los bloques de la landing
import type { CourseData, LandingContentBlock } from "../../types/course";

// Secciones específicas de la versión Figma (TF-Ejemplo)
import HeroSection from "../figmaDb/TF-Ejemplo/sections/Hero";
import { IntroductionSection } from "../figmaDb/TF-Ejemplo/sections/Introduction";
import { KeyConceptsSection } from "../figmaDb/TF-Ejemplo/sections/KeyConcepts";

// Props que recibe la plantilla principal: todo el CourseData
interface TemplateFigmaDBProps {
  data: CourseData;
}

/**
 * Plantilla tipo “Landing Figma de Bases de Datos”
 * CORREGIDA: Fondo negro sólido para evitar líneas de separación entre secciones.
 */
export const TemplateFigmaDB: React.FC<TemplateFigmaDBProps> = ({ data }) => {
  const landing = data.landing;
  const blocks = landing?.contentBlocks ?? [];

  return (
    // ⬅️ CAMBIO CLAVE 1: bg-[#050505] en lugar de bg-slate-950
    // Esto asegura que si hay espacios milimétricos, se vean negros y no grises.
    <div className="w-full min-h-full bg-[#050505] text-slate-50">
      <main className="w-full flex flex-col">
        {/* Render del Hero */}
        <HeroSection overview={landing?.overview} />
        
        {/* ⬅️ CAMBIO CLAVE 2: Eliminé el div vacío <div className="px-4 lg:px-10 "></div> 
            que podía estar causando separación innecesaria. */}
        
        {/* Render de los bloques (intro, conceptos, etc.) */}
        <BlocksRenderer blocks={blocks} />

        {/* Cierre opcional */}
        {landing?.cierre && (
          <ClosingSection
            message={landing.cierre.mensaje}
            callToAction={landing.cierre.callToAction}
          />
        )}
      </main>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* SUBCOMPONENTES                                */
/* -------------------------------------------------------------------------- */

const BlocksRenderer: React.FC<{ blocks: LandingContentBlock[] }> = ({
  blocks,
}) => {
  if (!blocks.length) {
    return (
      <section className="mx-auto max-w-5xl rounded-3xl border border-dashed border-slate-800 bg-slate-900/40 p-6 text-sm text-slate-400 my-10">
        No se encontraron <code>landing.contentBlocks</code> en el JSON.
      </section>
    );
  }

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.tipo) {
          case "introduction":
            return <IntroductionSection key={index} block={block} />;
          case "conceptos":
            return <KeyConceptsSection key={index} block={block} />;
          default:
            return (
              // Envolvemos los bloques genéricos en un contenedor con margen para que no se peguen feo
              <div key={index} className="px-4 lg:px-10 py-12">
                 <ContentBlockSection block={block} index={index} />
              </div>
            );
        }
      })}
    </>
  );
};

/**
 * Render genérico para bloques sin diseño específico (Fallback)
 */
const ContentBlockSection: React.FC<{
  block: LandingContentBlock;
  index: number;
}> = ({ block, index }) => {
  const hasColumns = block.columnas && block.columnas.length > 0;
  const hasChecklist = block.checklist && block.checklist.length > 0;
  const hasItemsSec =
    block.itemsSecundarios && block.itemsSecundarios.length > 0;

  return (
    <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-2xl shadow-black/50 backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3 mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-bold">
            Bloque {index + 1}
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-50">
            {block.titulo}
          </h2>
          {block.subtitulo && (
            <p className="mt-1 text-base text-slate-400">{block.subtitulo}</p>
          )}
        </div>

        {block.tipo && (
          <span className="rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-[10px] font-mono text-slate-400">
            {block.tipo}
          </span>
        )}
      </div>

      {block.texto && (
        <p className="mb-6 text-base text-slate-300 leading-relaxed">{block.texto}</p>
      )}

      {/* Bullets generales */}
      {block.bullets && block.bullets.length > 0 && (
        <ul className="mb-6 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
          {block.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Columnas / cards */}
      {hasColumns && (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {block.columnas!.map(
            (
              col: { titulo: string; texto: string; bullets?: string[] },
              i: number
            ) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-5 hover:border-slate-700 transition-colors"
              >
                <h3 className="text-sm font-bold text-white mb-2">
                  {col.titulo}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{col.texto}</p>
                {col.bullets && col.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-[11px] text-slate-400 border-t border-slate-800 pt-3">
                    {col.bullets.map((b, j) => (
                      <li key={j} className="flex gap-1.5">
                         <span className="text-emerald-500">•</span> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            )
          )}
        </div>
      )}

      {/* Checklist */}
      {hasChecklist && (
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
            Checklist
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            {block.checklist!.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="text-[10px]">✓</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Items secundarios */}
      {hasItemsSec && (
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {block.itemsSecundarios!.map(
            (item: { titulo: string; texto: string }, i: number) => (
              <article
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <h3 className="text-xs font-bold text-slate-200 mb-1">
                  {item.titulo}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.texto}
                </p>
              </article>
            )
          )}
        </div>
      )}

      {/* Ejemplo desarrollado */}
      {block.ejemplo && (
        <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-linear-to-br from-slate-900 to-slate-950 p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 relative z-10">
            Ejemplo Práctico
          </p>
          <h3 className="text-sm font-bold text-white mb-3 relative z-10">
            {block.ejemplo.titulo}
          </h3>
          <div className="space-y-3 relative z-10">
             <div className="bg-black/20 p-3 rounded-lg border border-slate-800/50">
                <span className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Enunciado</span>
                <p className="text-xs text-slate-300">{block.ejemplo.enunciado}</p>
             </div>
             <div className="p-1">
                <span className="block text-[10px] font-bold text-emerald-500/80 uppercase mb-1">Desarrollo</span>
                <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                   {block.ejemplo.desarrollo}
                </p>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

/**
 * Sección final de cierre
 */
const ClosingSection: React.FC<{
  message: string;
  callToAction: string;
}> = ({ message, callToAction }) => {
  return (
    <section className="mt-12 mb-12 mx-auto max-w-4xl rounded-3xl border border-emerald-500/30 bg-linear-to-br from-slate-900 to-black p-8 text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
            Curso Completado
          </p>
          <p className="text-lg text-slate-200 font-medium max-w-2xl mx-auto">{message}</p>
        </div>
        
        <button className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] hover:bg-emerald-400 hover:-translate-y-1 transition-all duration-300">
          {callToAction}
        </button>
      </div>
    </section>
  );
};

export default TemplateFigmaDB;