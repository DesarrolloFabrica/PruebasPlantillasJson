// src/components/figmaDb/TF-Ejemplo/sections/Introduction.tsx

import { useState } from "react";
// Importamos motion para animaciones y AnimatePresence para manejar montado/desmontado animado
import { motion, AnimatePresence } from "motion/react";
// Íconos de lucide-react usados en la UI
import {
  BookOpen,
  Target,
  Lightbulb,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
// Tipo del bloque que viene desde el JSON estándar de la fábrica
import type { LandingContentBlock } from "../../../../types/course";

// Definimos las props
interface IntroductionSectionProps {
  block: LandingContentBlock;
}

/**
 * Sección de introducción - DISEÑO PREMIUM
 * ------------------------------------
 * Transforma la introducción básica en una "Consola de Conocimiento"
 * interactiva con efectos glassmorphism y animaciones fluidas.
 */
export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  block,
}) => {
  const [expandedEra, setExpandedEra] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<
    "concepto" | "evolucion" | "filosofia"
  >("concepto");

  const sectionLabel = block.subtitulo ?? "Sección 01";

  const conceptoTexto =
    block.texto ??
    "El marketing es el proceso social y administrativo mediante el cual individuos y grupos obtienen lo que necesitan y desean, creando e intercambiando productos y valor con otros.";

  // Iconos para objetivos
  const objectiveIcons = [Target, Lightbulb, TrendingUp] as const;

  const objectives =
    block.columnas?.map((col, index) => ({
      icon: objectiveIcons[index] ?? Target,
      title: col.titulo,
      description: col.texto,
    })) ?? [
      {
        icon: Target,
        title: "Dominar el Marketing Mix",
        description:
          "Comprender y aplicar las 4Ps (Producto, Precio, Plaza, Promoción) en situaciones reales.",
      },
      {
        icon: Lightbulb,
        title: "Analizar mercados",
        description:
          "Identificar oportunidades mediante segmentación y análisis del comportamiento del consumidor.",
      },
      {
        icon: TrendingUp,
        title: "Crear estrategias",
        description:
          "Desarrollar posicionamiento de marca y propuestas de valor diferenciadas.",
      },
    ];

  // Eras históricas
  const eras = [
    {
      period: "1900-1950",
      title: "Era de la Producción",
      short: "Si lo fabricas, se venderá",
      full: "Enfoque en eficiencia productiva, demanda superaba la oferta. Las empresas se centraban en producir en masa y reducir costos. El marketing era innecesario porque todo se vendía.",
      example: "Ford Model T: 'Cualquier color, siempre que sea negro'",
      icon: "🏭",
    },
    {
      period: "1950-1970",
      title: "Era de las Ventas",
      short: "Vender es la prioridad",
      full: "Aumento de competencia llevó a exceso de oferta. Las empresas necesitaban convencer activamente a los clientes. Énfasis en técnicas de venta agresiva y persuasión.",
      example: "Vendedores puerta a puerta, anuncios en TV masivos",
      icon: "📢",
    },
    {
      period: "1970-2000",
      title: "Era del Marketing",
      short: "El cliente es el rey",
      full: "Surge el concepto moderno de marketing. Investigación de mercados, segmentación, y enfoque en satisfacer necesidades del cliente mejor que la competencia.",
      example: "P&G segmenta por beneficios buscados (Tide, Cheer, Bold)",
      icon: "🎯",
    },
    {
      period: "2000-Hoy",
      title: "Era Digital",
      short: "Personalización y datos",
      full: "Marketing personalizado, data-driven, omnicanal. El cliente tiene control total y las marcas deben estar donde el cliente está. Marketing de contenidos y redes sociales.",
      example: "Amazon: 'Los clientes que compraron esto también...'",
      icon: "💻",
    },
  ];

  // Contenidos de pestañas
  const fundamentals = {
    concepto: {
      title: block.subtitulo ?? "¿Qué es el Marketing?",
      content: (
        <div className="space-y-8">
          <div className="relative pl-6 border-l-2 border-amber-500/50">
             <Sparkles className="absolute -left-[9px] -top-1 w-4 h-4 text-amber-500 fill-amber-500" />
             <p className="text-xl md:text-2xl text-stone-200 leading-relaxed font-light italic">
              "{conceptoTexto}"
             </p>
          </div>
          
          <div className="bg-linear-to-r from-stone-900 to-stone-900/50 border border-amber-500/10 rounded-2xl p-6 flex gap-4 items-start shadow-inner">
            <div className="p-3 bg-amber-500/10 rounded-lg shrink-0">
               <Lightbulb className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-2">
                Más allá de las ventas
              </h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                El marketing no es solo publicidad. Se trata de entender profundamente las necesidades del cliente, crear valor superior y construir relaciones rentables a largo plazo. Es el puente entre la sociedad y la empresa.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    evolucion: {
      title: "Evolución del Marketing",
      content: (
        <div className="space-y-3">
          {eras.map((era, index) => (
            <motion.div
              key={index}
              className={`
                border rounded-xl overflow-hidden transition-all duration-300
                ${expandedEra === index 
                  ? "bg-stone-800/80 border-amber-500/30 shadow-lg shadow-black/20" 
                  : "bg-stone-900/40 border-stone-800 hover:border-stone-700"
                }
              `}
            >
              <button
                onClick={() =>
                  setExpandedEra(expandedEra === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-2xl filter drop-shadow-md">{era.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[10px] font-bold text-amber-500/80 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-900/30 font-mono uppercase tracking-wider">
                        {era.period}
                      </span>
                      <span className={`font-medium transition-colors ${expandedEra === index ? "text-white" : "text-stone-300"}`}>
                        {era.title}
                      </span>
                    </div>
                    <p className="text-xs text-stone-500">{era.short}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedEra === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 transition-colors ${expandedEra === index ? "text-amber-500" : "text-stone-600"}`} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedEra === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-5 pt-1 ml-14 border-t border-stone-700/30">
                      <p className="text-stone-300 text-sm mb-4 leading-relaxed">
                        {era.full}
                      </p>
                      <div className="inline-flexflex items-center gap-2 text-xs text-stone-500 bg-black/20 p-2 rounded-lg inline-flex border border-stone-800">
                        <ArrowRight className="w-3 h-3 text-amber-500" />
                        <span className="font-semibold text-stone-400">Ejemplo:</span>
                        <span className="italic text-stone-500">{era.example}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      ),
    },
    filosofia: {
      title: "Filosofía de Marketing",
      content: (
        <div className="space-y-6">
          <p className="text-stone-400 text-sm mb-4">
             El marketing descompone el comportamiento humano en cuatro niveles fundamentales:
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Necesidad",
                desc: "Estado de carencia básica",
                example: "Sed, abrigo, seguridad",
                color: "blue",
                gradient: "from-blue-500/20 to-blue-600/5",
                border: "border-blue-500/20",
                text: "text-blue-400"
              },
              {
                label: "Deseo",
                desc: "Forma moldeada por cultura",
                example: "Coca-Cola, Nike, iPhone",
                color: "purple",
                gradient: "from-purple-500/20 to-purple-600/5",
                border: "border-purple-500/20",
                text: "text-purple-400"
              },
              {
                label: "Demanda",
                desc: "Deseo + Poder de compra",
                example: "Comprar el Ferrari",
                color: "green",
                gradient: "from-emerald-500/20 to-emerald-600/5",
                border: "border-emerald-500/20",
                text: "text-emerald-400"
              },
              {
                label: "Valor",
                desc: "Beneficio vs Costo",
                example: "Lo que recibes por lo que pagas",
                color: "orange",
                gradient: "from-orange-500/20 to-orange-600/5",
                border: "border-orange-500/20",
                text: "text-orange-400"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`
                   relative overflow-hidden bg-linear-to-br ${item.gradient} border ${item.border} 
                   rounded-xl p-4 cursor-pointer group transition-all duration-300
                `}
              >
                <div className={`text-lg font-bold ${item.text} mb-1`}>
                  {item.label}
                </div>
                <p className="text-xs text-stone-400 font-medium mb-3 opacity-80">{item.desc}</p>
                <div className="pt-2 border-t border-white/5 flex items-center gap-1.5 text-xs text-stone-500 group-hover:text-stone-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50"></span>
                  {item.example}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
  };

  return (
    <section
      id="intro"
      className="py-24 relative bg-linear-to-b from-[#050505] to-stone-900 overflow-hidden"
    >
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* === 1. HEADER MODERNO CON BADGE === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-900/10 backdrop-blur-sm">
               <BookOpen className="w-3 h-3 text-amber-500" />
               <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">
                {sectionLabel}
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-stone-200 to-stone-500">
               {block.titulo ?? "Introducción al Marketing"}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* === 2. COLUMNA IZQUIERDA: CONSOLA INTERACTIVA (Tabs + Contenido) === */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 flex flex-col"
          >
            {/* TABS ESTILO 'CAPSULA' */}
            <div className="flex p-1.5 mb-6 bg-stone-900/80 border border-stone-800 rounded-2xl w-full sm:w-fit self-center sm:self-start backdrop-blur-sm">
              {(["concepto", "evolucion", "filosofia"] as const).map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`
                      relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 z-10
                      ${isActive ? "text-white" : "text-stone-500 hover:text-stone-300"}
                    `}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-tab-bg"
                        className="absolute inset-0 bg-stone-800 border border-stone-700/50 shadow-sm rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                );
              })}
            </div>

            {/* AREA DE CONTENIDO (GLASSMORPHISM) */}
            <div className="relative group">
               <div className="absolute -inset-0.5 bg-linear-to-r from-amber-500/20 to-primary-500/20 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
               <div className="relative bg-[#0c0a09]/90 border border-stone-800 backdrop-blur-xl rounded-2xl p-8 shadow-2xl min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        {fundamentals[activeTab].title}
                        <div className="h-px flex-1 bg-linear-to-r from-stone-800 to-transparent ml-4"></div>
                      </h3>
                      {fundamentals[activeTab].content}
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
          </motion.div>

          {/* === 3. COLUMNA DERECHA: OBJETIVOS VERTICALES === */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="lg:col-span-4 space-y-4"
          >
             <div className="mb-4 px-2">
                <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest">
                  Objetivos Clave
                </h3>
             </div>
             
             {objectives.map((obj, index) => (
                <div
                  key={index}
                  className="group relative bg-stone-900/40 border border-stone-800 hover:border-stone-700 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40"
                >
                  <div className="absolute top-0 right-0 p-3 opacity-10 font-bold text-4xl text-stone-600 select-none group-hover:opacity-20 transition-opacity">
                    0{index + 1}
                  </div>
                  
                  <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center mb-3 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors text-stone-400">
                    <obj.icon className="w-5 h-5" />
                  </div>
                  
                  <h4 className="text-white font-semibold mb-2 group-hover:text-amber-50 transition-colors">
                    {obj.title}
                  </h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {obj.description}
                  </p>
                </div>
             ))}
             
             {/* Caja decorativa extra al final */}
             <div className="mt-6 p-4 rounded-xl bg-linear-to-br from-amber-900/10 to-transparent border border-amber-900/20 text-center">
                <p className="text-xs text-amber-500/80 font-medium">
                   ✨ El conocimiento es poder
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};