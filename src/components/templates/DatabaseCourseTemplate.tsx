// src/components/templates/DatabaseCourseTemplate
import React from "react";
import type { CourseData, LandingContentBlock } from "../../types/course";
import { IntroductionSection } from "../figmaDb/BD-Ejemplo/Introduction";
import { EntityRelationshipSection } from "../figmaDb/BD-Ejemplo/EntityRelationship";
import { SQLBasicsSection } from "../figmaDb/BD-Ejemplo/SQLBasics";
import { NormalizationSection } from "../figmaDb/BD-Ejemplo/Normalization";
import { DatabaseTypesSection } from "../figmaDb/BD-Ejemplo/DatabaseTypes";
import { TransactionsSection } from "../figmaDb/BD-Ejemplo/Transactions";

interface DatabaseCourseTemplateProps {
  data: CourseData;
}

/**
 * Plantilla tipo “Landing de curso de Bases de Datos”
 * Renderiza:
 * - Barra de navegación con el título del curso
 * - Barra de progreso basada en la cantidad de bloques
 * - Lista de secciones didácticas (contentBlocks)
 * - Cierre opcional con mensaje + CTA
 *
 * Usa ÚNICAMENTE el schema estándar:
 *   CourseData -> landing -> contentBlocks: LandingContentBlock[]
 */
export const DatabaseCourseTemplate: React.FC<DatabaseCourseTemplateProps> = ({
  data,
}) => {
  const landing = data.landing;
  const blocks = landing?.contentBlocks ?? [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <NavigationBar title={data.tituloCurso} />

      {/* HERO / OVERVIEW */}
      {landing?.overview && (
        <HeroSection
          title={landing.overview.titulo}
          description={landing.overview.texto}
        />
      )}

      {/* CONTENIDO PRINCIPAL */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 lg:pt-10">
        {/* Progress + resumen rápido */}
        <ProgressSummary blocks={blocks} intro={data.intro} />

        {/* Bloques didácticos */}
        <BlocksRenderer blocks={blocks} />

        {/* Cierre */}
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
/*                              SUBCOMPONENTES                                */
/* -------------------------------------------------------------------------- */

const NavigationBar: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-sm font-semibold text-slate-950">
            DB
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Curso interactivo
            </span>
            <span className="text-sm font-semibold text-slate-50">{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="hidden sm:inline">Progreso</span>
          <span className="inline-flex h-7 items-center rounded-full bg-slate-900 px-3 text-[11px] font-medium">
            Generador • Plantilla Figma
          </span>
        </div>
      </div>
    </header>
  );
};

const HeroSection: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <section className="border-b border-slate-800 bg-linear-to-b from-slate-950 via-slate-950/80 to-slate-900/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-10 pt-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300">
            Ruta de Bases de Datos
          </span>
          <h1 className="text-2xl font-semibold leading-tight text-slate-50 sm:text-3xl lg:text-4xl">
            {title}
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            {description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
            <Badge>Proyecto guiado</Badge>
            <Badge>Enfoque práctico</Badge>
            <Badge>Nivel introductorio / intermedio</Badge>
          </div>
        </div>

        <div className="mt-4 w-full max-w-sm rounded-3xl border border-emerald-500/30 bg-slate-950/60 p-4 shadow-lg shadow-emerald-500/10 lg:mt-0">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Mapa del curso
          </h2>
          <p className="mt-2 text-xs text-slate-300">
            Recorre los bloques clave: desde conceptos básicos hasta práctica
            final con consultas SQL reales.
          </p>
          <ul className="mt-3 space-y-1.5 text-xs text-slate-200">
            <li>• Fundamentos y modelo entidad–relación</li>
            <li>• Normalización y diseño de tablas</li>
            <li>• SQL básico y consultas avanzadas</li>
            <li>• Índices, transacciones y contraste con NoSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[11px] text-slate-200">
    {children}
  </span>
);

const ProgressSummary: React.FC<{
  blocks: LandingContentBlock[];
  intro: string;
}> = ({ blocks, intro }) => {
  const total = blocks.length || 1;
  const completed = 0; // por ahora fijo; en el futuro puedes conectarlo a progreso real.
  const ratio = Math.min(1, completed / total);

  return (
    <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/60 p-4 sm:grid-cols-[minmax(0,2fr),minmax(0,1.2fr)]">
      <div>
        <h2 className="text-sm font-semibold text-slate-100">
          Resumen del curso
        </h2>
        <p className="mt-2 text-xs text-slate-300 sm:text-sm">{intro}</p>
        <p className="mt-3 text-[11px] text-slate-400">
          Este curso está dividido en{" "}
          <span className="font-semibold text-emerald-300">{total}</span>{" "}
          bloques didácticos. Cada bloque se puede convertir en una sección
          independiente en tu generador.
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-2xl bg-slate-900/80 p-3">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span>Progreso (demo)</span>
          <span>
            {completed}/{total} bloques
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-slate-800">
          <div
            className="h-2 rounded-full bg-linear-to-r from-emerald-400 to-emerald-500 transition-all"
            style={{ width: `${ratio * 100}%` }}
          />
        </div>
        <p className="mt-2 text-[11px] text-slate-400">
          En tu plataforma real, este componente se puede conectar al backend
          para mostrar el avance de cada estudiante.
        </p>
      </div>
    </section>
  );
};

const BlocksRenderer: React.FC<{ blocks: LandingContentBlock[] }> = ({ blocks }) => {
  if (!blocks.length) {
    return (
      <section className="rounded-3xl border border-dashed border-slate-700 bg-slate-950/40 p-6 text-sm text-slate-300">
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

          case "entityRelationship":
            return <EntityRelationshipSection key={index} block={block} />;

          case "sqlBasics":
            return <SQLBasicsSection key={index} block={block} />;

          case "normalization":
            return <NormalizationSection key={index} block={block} />;

          case "databaseTypes":
            return <DatabaseTypesSection key={index} block={block} />;

          case "transactions":                   
            return <TransactionsSection key={index} block={block} />;

          default:
            return (
              <ContentBlockSection key={index} block={block} index={index} />
            );
        }
      })}
    </>
  );
};

const ContentBlockSection: React.FC<{
  block: LandingContentBlock;
  index: number;
}> = ({ block, index }) => {
  const hasColumns = block.columnas && block.columnas.length > 0;
  const hasChecklist = block.checklist && block.checklist.length > 0;
  const hasItemsSec =
    block.itemsSecundarios && block.itemsSecundarios.length > 0;

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5 shadow-lg shadow-black/30">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-emerald-300">
            Bloque {index + 1}
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-50">
            {block.titulo}
          </h2>
          {block.subtitulo && (
            <p className="mt-1 text-sm text-slate-300">{block.subtitulo}</p>
          )}
        </div>

        {block.tipo && (
          <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-medium text-slate-300">
            {block.tipo}
          </span>
        )}
      </div>

      {block.texto && (
        <p className="mt-3 text-sm text-slate-300">{block.texto}</p>
      )}

      {/* Bullets generales */}
      {block.bullets && block.bullets.length > 0 && (
        <ul className="mt-3 grid gap-1.5 text-sm text-slate-200 sm:grid-cols-2">
          {block.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              <span className="text-xs sm:text-sm">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Columnas / cards */}
      {hasColumns && (
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {block.columnas!.map(
            (
              col: { titulo: string; texto: string; bullets?: string[] },
              i: number
            ) => (
              <article
                key={i}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
              >
                <h3 className="text-sm font-semibold text-slate-50">
                  {col.titulo}
                </h3>
                <p className="mt-1 text-xs text-slate-300">{col.texto}</p>
                {col.bullets && col.bullets.length > 0 && (
                  <ul className="mt-2 space-y-1 text-[11px] text-slate-300">
                    {col.bullets.map((b, j) => (
                      <li key={j}>• {b}</li>
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
        <div className="mt-4 rounded-2xl bg-slate-900/80 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Checklist del bloque
          </p>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-200">
            {block.checklist!.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
                  ✓
                </span>
                <span className="text-xs sm:text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Items secundarios (ej: RC, RL, RLC en transitorios) */}
      {hasItemsSec && (
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {block.itemsSecundarios!.map(
            (item: { titulo: string; texto: string }, i: number) => (
              <article
                key={i}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3"
              >
                <h3 className="text-xs font-semibold text-slate-50">
                  {item.titulo}
                </h3>
                <p className="mt-1 text-[11px] text-slate-300">{item.texto}</p>
              </article>
            )
          )}
        </div>
      )}

      {/* Ejemplo desarrollado */}
      {block.ejemplo && (
        <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-slate-950/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Ejemplo
          </p>
          <h3 className="mt-1 text-sm font-semibold text-slate-50">
            {block.ejemplo.titulo}
          </h3>
          <p className="mt-2 text-xs text-slate-300">
            <span className="font-semibold text-slate-200">Enunciado: </span>
            {block.ejemplo.enunciado}
          </p>
          <p className="mt-2 text-xs text-slate-300 whitespace-pre-line">
            <span className="font-semibold text-slate-200">Desarrollo: </span>
            {block.ejemplo.desarrollo}
          </p>
        </div>
      )}
    </section>
  );
};

const ClosingSection: React.FC<{
  message: string;
  callToAction: string;
}> = ({ message, callToAction }) => {
  return (
    <section className="mt-4 rounded-3xl border border-emerald-500/40 bg-linear-to-r from-emerald-500/20 via-emerald-500/15 to-slate-950 p-5 text-sm text-slate-50">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
            Cierre del curso
          </p>
          <p className="mt-1 text-sm text-slate-50">{message}</p>
        </div>
        <button className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg hover:bg-emerald-400">
          {callToAction}
        </button>
      </div>
      <p className="mt-2 text-[11px] text-emerald-100/80">
        Este botón en tu implementación real puede redirigir a la evaluación, al
        LMS o a otra landing generada por la fábrica.
      </p>
    </section>
  );
};

export default DatabaseCourseTemplate;
