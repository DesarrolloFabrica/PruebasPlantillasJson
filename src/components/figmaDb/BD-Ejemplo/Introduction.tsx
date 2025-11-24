import { motion } from "motion/react";
import { Database, Server, HardDrive, Network } from "lucide-react";
import type { LandingContentBlock } from "../../../types/course";

interface IntroductionSectionProps {
  block: LandingContentBlock;
}

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({ block }) => {
  // Si el JSON no define "columnas", usamos un fallback con los íconos originales
  const concepts =
    block.columnas?.map((col) => ({
      icon: Database,
      title: col.titulo,
      description: col.texto,
    })) ??
    [
      {
        icon: Database,
        title: "Base de Datos",
        description: "Colección organizada de datos estructurados",
      },
      {
        icon: Server,
        title: "SGBD",
        description: "Sistema que gestiona y administra las bases de datos",
      },
      {
        icon: HardDrive,
        title: "Persistencia",
        description: "Almacenamiento permanente de información",
      },
      {
        icon: Network,
        title: "Concurrencia",
        description: "Múltiples usuarios accediendo simultáneamente",
      },
    ];

  return (
    <section
      id="section-introduction"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* badge opcional */}
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6">
            {block.subtitulo ?? "Introducción"}
          </div>

          <h1 className="text-5xl md:text-7xl text-white mb-6">
            {block.titulo ?? "Introducción a Bases de Datos"}
          </h1>

          {block.texto && (
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              {block.texto}
            </p>
          )}
        </motion.div>

        {/* GRID DE CONCEPTOS / COLUMNAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all"
            >
              <div className="w-12 h-12 bg-linearto-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <concept.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white mb-2">{concept.title}</h3>
              <p className="text-sm text-slate-400">{concept.description}</p>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN INFERIOR (solo si viene del JSON) */}
        {(block.itemsSecundarios || block.bullets) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6">
              {block.ejemplo?.titulo ??
                "Componentes de un Sistema de Base de Datos"}
            </h3>

            {/* Items secundarios (como RC/RL/RLC) */}
            {block.itemsSecundarios && (
              <div className="space-y-6">
                {block.itemsSecundarios.map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-white mb-2">{item.titulo}</h4>
                    <p className="text-slate-400">{item.texto}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Bullets estilo ventajas */}
            {block.bullets && (
              <div className="mt-8 bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-white mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  {block.subtitulo ?? "Puntos clave"}
                </h4>

                <ul className="space-y-2 text-slate-300">
                  {block.bullets.map((b, i) => (
                    <li key={i}>✓ {b}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};
