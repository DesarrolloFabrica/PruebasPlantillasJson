import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Lock, RefreshCw, Database } from "lucide-react";
import type { LandingContentBlock } from "../../../types/course";

interface TransactionsSectionProps {
  block: LandingContentBlock;
}

const ICON_MAP = {
  database: Database,
  shield: Shield,
  lock: Lock,
  refresh: RefreshCw,
} as const;

type IconKey = keyof typeof ICON_MAP;

const getStepClasses = (status: string | undefined) => {
  switch (status) {
    case "success":
      return {
        wrapper: "bg-green-500/10 border border-green-500/30",
        bullet: "bg-green-500",
      };
    case "warning":
      return {
        wrapper: "bg-yellow-500/10 border border-yellow-500/30",
        bullet: "bg-yellow-500",
      };
    default:
      return {
        wrapper: "bg-slate-800 border border-slate-700/60",
        bullet: "bg-slate-700",
      };
  }
};

export const TransactionsSection: React.FC<TransactionsSectionProps> = ({
  block,
}) => {
  const leccionNumero = block.leccionNumero ?? "7 de 10";
  const descripcion =
    block.descripcion ??
    block.texto ??
    "Las transacciones son unidades lógicas de trabajo que garantizan la integridad de los datos. ACID define las propiedades que debe cumplir toda transacción confiable.";

  const propiedades = block.propiedades ?? [];
  const [activeProperty, setActiveProperty] = useState(0);

  // Si no hay propiedades definidas en el JSON, mostramos un fallback suave
  if (!propiedades.length) {
    return (
      <section className="min-h-screen flex items-center justify-center py-24 px-4">
        <div className="max-w-3xl mx-auto w-full rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-6 text-sm text-slate-300">
          No se encontraron <code>block.propiedades</code> para la sección
          <span className="ml-1 font-semibold">"{block.titulo}"</span>. Asegúrate
          de que el JSON incluya el arreglo <code>propiedades[]</code> con las
          propiedades ACID.
        </div>
      </section>
    );
  }

  const safeIndex = Math.min(activeProperty, propiedades.length - 1);
  const property = propiedades[safeIndex];

  const IconComponent =
    property.icon && ICON_MAP[property.icon as IconKey]
      ? ICON_MAP[property.icon as IconKey]
      : Database;

  const snippetSQL =
    block.snippetSQL ??
    `-- Iniciar una transacción
BEGIN TRANSACTION;

-- Operaciones de la transacción
UPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;

-- Confirmar cambios (hacer permanentes)
COMMIT;

-- O revertir cambios (en caso de error)
ROLLBACK;`;

  const commitInfo = block.commitInfo ?? {
    title: "COMMIT",
    description:
      "Confirma todos los cambios realizados en la transacción. Los hace permanentes y visibles para otras transacciones.",
  };

  const rollbackInfo = block.rollbackInfo ?? {
    title: "ROLLBACK",
    description:
      "Deshace todos los cambios de la transacción. Devuelve la base de datos al estado anterior al BEGIN.",
  };

  return (
    <section
      id={block.tipoFigma ?? "section-transactions"}
      className="min-h-screen flex items-center justify-center py-24 px-4"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 mb-6">
            Lección {leccionNumero}
          </div>
          <h2 className="text-4xl md:text-6xl text-white mb-6">
            {block.titulo || "Transacciones y Propiedades ACID"}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {descripcion}
          </p>
        </motion.div>

        {/* TABS A C I D */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {propiedades.map((prop, index) => (
            <button
              key={index}
              onClick={() => setActiveProperty(index)}
              className={`p-6 rounded-xl border-2 transition-all ${
                safeIndex === index
                  ? `bg-linear-to-br ${prop.color} border-transparent`
                  : "bg-slate-900 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div
                className={`text-4xl mb-2 ${
                  safeIndex === index ? "text-white" : "text-slate-500"
                }`}
              >
                {prop.letter}
              </div>
              <div
                className={`text-sm ${
                  safeIndex === index ? "text-white" : "text-slate-400"
                }`}
              >
                {prop.name}
              </div>
            </button>
          ))}
        </div>

        {/* PANEL ACTIVO */}
        <AnimatePresence mode="wait">
          <motion.div
            key={safeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden"
          >
            {/* BANNER GRADIENT */}
            <div className={`bg-linear-to-r ${property.color} p-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-white/80 text-sm">Propiedad ACID</div>
                  <h3 className="text-3xl text-white">{property.name}</h3>
                </div>
              </div>
              <p className="text-white/90 text-lg">{property.description}</p>
            </div>

            {/* CUERPO EJEMPLO */}
            <div className="p-8">
              <h4 className="text-white mb-6">Ejemplo Práctico</h4>

              <div className="bg-slate-950 border border-slate-700 rounded-xl p-6 mb-6">
                <div className="text-blue-400 mb-4">📋 Escenario:</div>
                <p className="text-slate-300 mb-6">
                  {property.example.scenario}
                </p>

                <div className="space-y-3 mb-6">
                  {property.example.steps.map((step, idx) => {
                    const classes = getStepClasses(step.status);
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 }}
                        className={`flex items-center gap-3 p-3 rounded-lg ${classes.wrapper}`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${classes.bullet}`}
                        >
                          <span className="text-white text-xs">
                            {idx + 1}
                          </span>
                        </div>
                        <span className="text-slate-300">{step.action}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <div
                  className={`bg-linear-to-r ${property.color} bg-opacity-10 border-l-4 border-green-500 p-4 rounded`}
                >
                  <div className="text-green-400 mb-2">Resultado:</div>
                  <p className="text-slate-300">{property.example.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BLOQUE SQL + COMMIT / ROLLBACK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-6">
            Sintaxis de Transacciones SQL
          </h3>
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
              {snippetSQL}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
              <div className="text-green-400 mb-2">{commitInfo.title}</div>
              <p className="text-slate-300 text-sm">
                {commitInfo.description}
              </p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="text-red-400 mb-2">{rollbackInfo.title}</div>
              <p className="text-slate-300 text-sm">
                {rollbackInfo.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
