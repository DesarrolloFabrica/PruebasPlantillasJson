import { useState } from "react";
import { motion } from "framer-motion"; // igual que en Introduction
import { Square, Circle, Diamond, Eye } from "lucide-react";
import type { LandingContentBlock } from "../../../types/course";

interface EntityRelationshipSectionProps {
  block: LandingContentBlock;
}

export const EntityRelationshipSection: React.FC<EntityRelationshipSectionProps> = ({
  block,
}) => {
  const [showExample, setShowExample] = useState(false);

  // ---- data para las 3 tarjetas principales ----
  const defaultConcepts = [
    {
      icon: Square,
      title: "Entidades",
      description:
        "Representan objetos del mundo real que tienen existencia propia",
      extraTitle: "Ejemplos:",
      extraLines: ["Estudiante", "Curso", "Profesor"],
      color: "text-blue-500",
      borderColor: "border-blue-500",
    },
    {
      icon: Circle,
      title: "Atributos",
      description: "Características o propiedades de las entidades",
      extraTitle: "Para Estudiante:",
      extraLines: ["ID (clave)", "Nombre", "Email"],
      color: "text-green-500",
      borderColor: "text-green-500",
    },
    {
      icon: Diamond,
      title: "Relaciones",
      description: "Asociaciones entre dos o más entidades",
      extraTitle: "Ejemplos:",
      extraLines: ["Estudiante inscribe Curso", "Profesor dicta Curso"],
      color: "text-purple-500",
      borderColor: "text-purple-500",
    },
  ];

  // Si el JSON trae columnas, las usamos. Si no, usamos el fallback.
  const concepts =
    block.columnas && block.columnas.length >= 3
      ? block.columnas.map((col, index) => {
          const fallback = defaultConcepts[index] ?? defaultConcepts[0];
          return {
            icon: fallback.icon,
            title: col.titulo || fallback.title,
            description: col.texto || fallback.description,
            extraTitle: fallback.extraTitle,
            extraLines: col.bullets && col.bullets.length > 0 ? col.bullets : fallback.extraLines,
            color: fallback.color,
            borderColor: fallback.borderColor,
          };
        })
      : defaultConcepts;

  // ---- tarjetas de cardinalidad ----
  const defaultCardinalities = [
    {
      title: "Uno a Uno (1:1)",
      text: "Una entidad se relaciona con exactamente una de otra entidad",
      example: "Persona → Pasaporte",
    },
    {
      title: "Uno a Muchos (1:N)",
      text: "Una entidad se relaciona con muchas de otra entidad",
      example: "Departamento → Empleados",
    },
    {
      title: "Muchos a Muchos (N:M)",
      text: "Múltiples entidades se relacionan con múltiples",
      example: "Estudiantes ↔ Cursos",
    },
  ];

  const relationships =
    block.itemsSecundarios && block.itemsSecundarios.length > 0
      ? block.itemsSecundarios.map((item, i) => ({
          title: item.titulo || defaultCardinalities[i]?.title || "",
          text: item.texto || defaultCardinalities[i]?.text || "",
          example: defaultCardinalities[i]?.example || "",
        }))
      : defaultCardinalities;

  const hasExample = !!block.ejemplo;

  return (
    <section
      id="section-entity-relationship"
      className="min-h-screen flex items-center justify-center py-24 px-4 bg-slate-950/50"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* CABECERA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 mb-6">
            {block.subtitulo ?? "Lección 2 de 10"}
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            {block.titulo || "Modelo Entidad-Relación"}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {block.texto ||
              "El modelo ER es una técnica de diseño que nos permite representar gráficamente la estructura de una base de datos antes de implementarla."}
          </p>
        </motion.div>

        {/* 3 TARJETAS: ENTIDADES / ATRIBUTOS / RELACIONES */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <div className="w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <div className="w-16 h-16 border-4 border-blue-500 rounded-lg flex items-center justify-center">
                  <concept.icon className={`w-8 h-8 ${concept.color}`} />
                </div>
              </div>
              <h3 className="text-white text-center mb-3">{concept.title}</h3>
              <p className="text-slate-400 text-sm text-center mb-4">
                {concept.description}
              </p>
              <div className="bg-slate-950 rounded p-3 text-sm text-slate-300">
                <div className="text-blue-400 mb-1">{concept.extraTitle}</div>
                {concept.extraLines.map((line, i) => (
                  <div key={i}>• {line}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CARDINALIDAD + EJEMPLO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl text-white">
              {block.ejemplo?.titulo ?? "Cardinalidad de Relaciones"}
            </h3>

            {hasExample && (
              <button
                onClick={() => setShowExample(!showExample)}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg text-purple-300 transition-colors"
              >
                <Eye className="w-4 h-4" />
                {showExample ? "Ocultar" : "Ver"} Ejemplo
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {relationships.map((rel, i) => (
              <div
                key={i}
                className="bg-slate-950 border border-slate-700 rounded-lg p-4"
              >
                <div className="text-white mb-2">{rel.title}</div>
                <p className="text-sm text-slate-400 mb-3">{rel.text}</p>
                <div className="text-xs text-slate-500 bg-slate-900 p-2 rounded">
                  {rel.example}
                </div>
              </div>
            ))}
          </div>

          {hasExample && showExample && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-purple-500/30 rounded-xl p-6 overflow-hidden"
            >
              <h4 className="text-white mb-4">
                {block.ejemplo?.titulo ?? "Ejemplo: Sistema Universitario"}
              </h4>
              <div className="bg-slate-950/50 rounded-lg p-6">
                {/* Puedes dejar este SVG estático; el título/texto ya son dinámicos */}
                <svg className="w-full h-64" viewBox="0 0 800 250">
                  <rect
                    x="50"
                    y="100"
                    width="150"
                    height="80"
                    fill="#1e293b"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    rx="8"
                  />
                  <text
                    x="125"
                    y="145"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="16"
                  >
                    ESTUDIANTE
                  </text>

                  <rect
                    x="600"
                    y="100"
                    width="150"
                    height="80"
                    fill="#1e293b"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    rx="8"
                  />
                  <text
                    x="675"
                    y="145"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="16"
                  >
                    CURSO
                  </text>

                  <polygon
                    points="400,120 450,140 400,160"
                    fill="#9333ea"
                    stroke="#9333ea"
                    strokeWidth="2"
                  />
                  <text
                    x="425"
                    y="110"
                    textAnchor="middle"
                    fill="#c084fc"
                    fontSize="14"
                  >
                    INSCRIBE
                  </text>

                  <line
                    x1="200"
                    y1="140"
                    x2="400"
                    y2="140"
                    stroke="#64748b"
                    strokeWidth="2"
                  />
                  <line
                    x1="450"
                    y1="140"
                    x2="600"
                    y2="140"
                    stroke="#64748b"
                    strokeWidth="2"
                  />

                  <text x="220" y="130" fill="#94a3b8" fontSize="14">
                    N
                  </text>
                  <text x="580" y="130" fill="#94a3b8" fontSize="14">
                    M
                  </text>
                </svg>
                <p className="text-slate-400 text-sm mt-4 text-center">
                  {block.ejemplo?.desarrollo ??
                    "Un estudiante puede inscribirse en muchos cursos, y un curso puede tener muchos estudiantes (N:M)."}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
