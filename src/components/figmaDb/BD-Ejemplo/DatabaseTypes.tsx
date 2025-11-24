// src/components/figmaDb/DatabaseTypesSection.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { Database, Layers, Box, Network } from "lucide-react";
import type { LandingContentBlock } from "../../../types/course";

interface DatabaseTypesSectionProps {
  block: LandingContentBlock;
}

export const DatabaseTypesSection: React.FC<DatabaseTypesSectionProps> = ({
  block,
}) => {
  const [hoveredType, setHoveredType] = useState<number | null>(null);

  // Cards que vienen del JSON (block.columnas)
  const columnas = block.columnas ?? [];

  // Checklist final del bloque
  const checklist = block.checklist ?? [];

  // Iconos y colores fijos (diseño estático)
  const icons = [Database, Layers, Box, Network];
  const colors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-purple-500 to-pink-500",
  ];

  return (
    <section
      id="section-5"
      className="min-h-screen flex items-center justify-center py-24 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* HEADER - texto desde el JSON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 mb-6">
            {/* Puedes dejar esto fijo o moverlo a block.texto si quieres */}
            Bloque 5 · Tipos de Bases de Datos
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            {block.titulo || "Tipos de bases de datos"}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {block.subtitulo ??
              "Existen diferentes tipos de bases de datos, cada una diseñada para resolver problemas específicos."}
          </p>
        </motion.div>

        {/* GRID PRINCIPAL: cards con el diseño de Figma */}
        <div className="grid lg:grid-cols-2 gap-8">
          {columnas.map((col, index) => {
            const Icon = icons[index] ?? Database;
            const color = colors[index] ?? "from-blue-500 to-cyan-500";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredType(index)}
                onHoverEnd={() => setHoveredType(null)}
                className="relative group"
              >
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 h-full hover:border-slate-700 transition-all">
                  {/* Header card */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-linear-to-br ${color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">
                        {/* sigla opcional en el JSON, si quieres la puedes meter como primer bullet */}
                        {col.bullets?.[0] ?? ""}
                      </div>
                      <h3 className="text-xl text-white mb-2">
                        {col.titulo}
                      </h3>
                      <p className="text-sm text-slate-400">{col.texto}</p>
                    </div>
                  </div>

                  {/* Características: resto de bullets del JSON */}
                  {col.bullets && col.bullets.length > 1 && (
                    <div className="mb-6">
                      <div className="text-white text-sm mb-3">
                        Características:
                      </div>
                      <div className="space-y-2">
                        {col.bullets.slice(1).map((char, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + idx * 0.05,
                            }}
                            className="flex items-center gap-2 text-sm text-slate-300"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${color}`}
                            />
                            <span>{char}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Aquí podrías usar col.ejemplo o itemsSecundarios para casos de uso si quisieras */}

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredType === index ? 0.05 : 0 }}
                    className={`absolute inset-0 bg-linear-to-br ${color} rounded-2xl pointer-events-none`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CHECKLIST FINAL: usa block.checklist del JSON */}
        {checklist.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 bg-slate-900 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 text-center">
              Checklist del bloque
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                {checklist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[10px] text-emerald-300">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
