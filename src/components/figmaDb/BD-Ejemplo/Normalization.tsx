/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import type { LandingContentBlock } from "../../../types/course";

interface NormalizationSectionProps {
  block: LandingContentBlock;
}

export const NormalizationSection: React.FC<NormalizationSectionProps> = ({
  block,
}) => {
  const [selectedForm, setSelectedForm] = useState(0);

  // Todo este contenido se puede dejar “de fábrica”.
  // El JSON controla título, subtítulo, descripción y bullets finales.
  const normalForms = [
    {
      name: "Primera Forma Normal (1FN)",
      rule: "Eliminar grupos repetitivos y atributos multivaluados",
      before: {
        title: "❌ Tabla NO normalizada",
        data: [
          {
            id: 1,
            estudiante: "Ana García",
            telefonos: "555-0001, 555-0002",
            cursos: "BD, Programación",
          },
        ],
      },
      after: {
        title: "✓ Tabla en 1FN",
        data: [
          { id: 1, estudiante: "Ana García", telefono: "555-0001" },
          { id: 1, estudiante: "Ana García", telefono: "555-0002" },
        ],
      },
      explanation:
        "Cada celda debe contener un solo valor atómico. No puede haber listas o valores separados por comas.",
    },
        {
          name: "Segunda Forma Normal (2FN)",
          rule: "Eliminar dependencias parciales (debe estar en 1FN primero)",
          before: {
            title: "❌ Tabla en 1FN con dependencias parciales",
            data: [
              {
                estudianteID: 1,
                cursoID: 101,
                nombreEstudiante: "Ana",
                nombreCurso: "Base de Datos",
              },
              {
                estudianteID: 1,
                cursoID: 102,
                nombreEstudiante: "Ana",
                nombreCurso: "Programación",
              },
            ],
          },
          after: {
            title: "✓ Tablas en 2FN",
            tables: [
              { name: "Estudiantes", data: [{ id: 1, nombre: "Ana" }] },
              { name: "Cursos", data: [{ id: 101, nombre: "Base de Datos" }] },
              { name: "Inscripciones", data: [{ estudianteID: 1, cursoID: 101 }] },
            ],
          },
          explanation:
            "Todos los atributos no clave deben depender de la clave primaria completa, no solo de parte de ella.",
        },
        {
      name: "Tercera Forma Normal (3FN)",
      rule: "Eliminar dependencias transitivas (debe estar en 2FN primero)",
      before: {
        title: "❌ Tabla en 2FN con dependencia transitiva",
        data: [
          {
            estudianteID: 1,
            nombre: "Ana",
            departamentoID: 10,
            nombreDepartamento: "Sistemas",
          },
        ],
      },
      after: {
        title: "✓ Tablas en 3FN",
        tables: [
          {
            name: "Estudiantes",
            data: [{ id: 1, nombre: "Ana", deptID: 10 }],
          },
          {
            name: "Departamentos",
            data: [{ id: 10, nombre: "Sistemas" }],
          },
        ],
      },
      explanation:
        "Los atributos no clave no deben depender de otros atributos no clave. Solo deben depender de la clave primaria.",
    },
  ];

  const form = normalForms[selectedForm];

  // Bullets finales: si vienen del JSON los usamos, si no usamos defaults
  const objetivos =
    block.bullets && block.bullets.length > 0
      ? block.bullets
      : [
          "Reducir redundancia y duplicación de datos",
          "Mejorar la integridad y consistencia de la información",
          "Facilitar el mantenimiento y la evolución del modelo",
        ];

  return (
    <section
      id="section-normalization"
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
          <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 mb-6">
            {block.subtitulo ?? "Lección 4 de 10"}
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            {block.titulo || "Normalización de Bases de Datos"}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {block.texto ||
              "La normalización es el proceso de organizar datos para reducir redundancia y mejorar la integridad. Aprende las tres formas normales más importantes."}
          </p>
        </motion.div>

        {/* TABS 1FN/2FN/3FN */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {normalForms.map((nf, index) => (
            <button
              key={index}
              onClick={() => setSelectedForm(index)}
              className={`px-6 py-3 rounded-lg border-2 transition-all ${
                selectedForm === index
                  ? "bg-orange-500/20 border-orange-500 text-white"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
              }`}
            >
              {nf.name.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* CONTENIDO DE LA FORMA NORMAL SELECCIONADA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedForm}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-3">{form.name}</h3>

              {/* Regla */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-blue-400 mb-1">Regla:</div>
                    <div className="text-slate-300">{form.rule}</div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-start">
                {/* BEFORE */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-red-400">{form.before.title}</span>
                  </div>
                  <div className="bg-slate-950 border border-red-500/30 rounded-xl p-4 overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody>
                        {form.before.data.map((row: any, idx: number) => (
                          <tr
                            key={idx}
                            className="border-b border-slate-800 last:border-0"
                          >
                            {Object.entries(row).map(([key, value], i) => (
                              <td key={i} className="py-2 px-2">
                                <div className="text-xs text-slate-500 mb-1">
                                  {key}
                                </div>
                                <div className="text-slate-300">
                                  {String(value)}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start">
                  <ArrowRight className="w-8 h-8 text-green-500" />
                </div>

                {/* AFTER */}
                <div className="lg:col-start-2">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-green-400">
                      {form.after.title}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {form.after.tables ? (
                      form.after.tables.map((table: any, tableIdx: number) => (
                        <div
                          key={tableIdx}
                          className="bg-slate-950 border border-green-500/30 rounded-xl p-4"
                        >
                          <div className="text-white text-sm mb-2">
                            {table.name}
                          </div>
                          <table className="w-full text-sm">
                            <tbody>
                              {table.data.map(
                                (row: any, idx: number) => (
                                  <tr
                                    key={idx}
                                    className="border-b border-slate-800 last:border-0"
                                  >
                                    {Object.entries(row).map(
                                      ([key, value], i) => (
                                        <td key={i} className="py-2 px-2">
                                          <div className="text-xs text-slate-500 mb-1">
                                            {key}
                                          </div>
                                          <div className="text-slate-300">
                                            {String(value)}
                                          </div>
                                        </td>
                                      )
                                    )}
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      ))
                    ) : (
                      <div className="bg-slate-950 border border-green-500/30 rounded-xl p-4 overflow-x-auto">
                        <table className="w-full text-sm">
                          <tbody>
                            {form.after.data?.map(
                              (row: any, idx: number) => (
                                <tr
                                  key={idx}
                                  className="border-b border-slate-800 last:border-0"
                                >
                                  {Object.entries(row).map(
                                    ([key, value], i) => (
                                      <td key={i} className="py-2 px-2">
                                        <div className="text-xs text-slate-500 mb-1">
                                          {key}
                                        </div>
                                        <div className="text-slate-300">
                                          {String(value)}
                                        </div>
                                      </td>
                                    )
                                  )}
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* EXPLICACIÓN */}
              <div className="mt-6 bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-green-400 mb-1">Explicación:</div>
                    <div className="text-slate-300">{form.explanation}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* OBJETIVO GENERAL DE LA NORMALIZACIÓN */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-slate-900 border border-slate-800 rounded-xl p-6"
        >
          <h4 className="text-white mb-4">🎯 Objetivo de la Normalización</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {objetivos.map((obj, i) => (
              <div key={i} className="bg-slate-950 rounded-lg p-4">
                <div className="text-slate-300">{obj}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
