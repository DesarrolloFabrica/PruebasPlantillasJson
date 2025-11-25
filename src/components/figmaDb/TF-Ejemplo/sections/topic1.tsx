// src/components/figmaDb/TF-Ejemplo/sections/Topic1Section.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Package,
  ChevronRight,
  Layers,
  ShoppingBag,
  Activity,
  Award,
} from "lucide-react";

import type { LandingContentBlock } from "../../../../types/course";

interface Topic1SectionProps {
  block: LandingContentBlock;
}

export const Topic1Section: React.FC<Topic1SectionProps> = ({ block }) => {
  // =============================
  // 1. ESTADO LOCAL
  // =============================
  const [activeLevel, setActiveLevel] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  // =============================
  // 2. DATA / HELPERS
  // =============================

  // Helper para mapear colores dinámicos de forma segura en Tailwind
  const getColorClasses = (colorName: string) => {
    const map: Record<string, string> = {
      blue: "border-blue-500/50 shadow-blue-500/20 text-blue-400 bg-blue-500/10",
      green: "border-emerald-500/50 shadow-emerald-500/20 text-emerald-400 bg-emerald-500/10",
      orange: "border-amber-500/50 shadow-amber-500/20 text-amber-400 bg-amber-500/10",
      red: "border-rose-500/50 shadow-rose-500/20 text-rose-400 bg-rose-500/10",
    };
    return map[colorName] || map.blue;
  };

  // --- Defaults (Misma lógica que tenías, solo formateada) ---
  const DEFAULT_PRODUCT_LEVELS = [
    {
      level: "Producto Básico",
      icon: "🎯",
      desc: "El beneficio central que el cliente compra",
      detail:
        "No compras un iPhone, compras comunicación y estatus. No compras un taladro, compras un agujero.",
      example: "Hotel → descanso y dormir",
      keyPoint: "¿Qué está realmente comprando el cliente?",
    },
    {
      level: "Producto Real",
      icon: "📦",
      desc: "Características tangibles y diseño",
      detail:
        "Donde ocurre la diferenciación. Incluye calidad, características, diseño, marca y empaque.",
      example: "Hotel → cama king, WiFi, marca Marriott",
      keyPoint: "Aquí se juega la batalla competitiva",
    },
    {
      level: "Producto Aumentado",
      icon: "✨",
      desc: "Servicios y beneficios extra",
      detail:
        "Crea lealtad y justifica precios premium. Son los extras que superan expectativas.",
      example: "Hotel → concierge, spa gratis, puntos",
      keyPoint: "Diferenciación para relaciones a largo plazo",
    },
  ];

  const DEFAULT_PRODUCT_CATEGORIES = [
    {
      id: "conveniencia",
      title: "Conveniencia",
      desc: "Compra frecuente, bajo esfuerzo",
      examples: "Chicles, pan, agua",
      strategy: "Distribución intensiva, precio bajo",
      icon: "🛒",
    },
    {
      id: "comparacion",
      title: "Compra Comparada",
      desc: "Cliente compara precio/calidad",
      examples: "Ropa, muebles, autos",
      strategy: "Venta personal, ubicaciones selectas",
      icon: "⚖️",
    },
    {
      id: "especialidad",
      title: "Especialidad",
      desc: "Características únicas o marca",
      examples: "Rolex, Ferrari, Medicina",
      strategy: "Distribución exclusiva, precio premium",
      icon: "💎",
    },
    {
      id: "nobuscados",
      title: "No Buscados",
      desc: "No se piensa en comprar",
      examples: "Seguros, donaciones",
      strategy: "Publicidad agresiva y persuasiva",
      icon: "🔔",
    },
  ];

  const DEFAULT_LIFECYCLE_PHASES = [
    {
      stage: "Introducción",
      sales: "Bajas",
      profit: "Negativas",
      strategy: "Crear conciencia",
      example: "Vision Pro",
      color: "blue",
      actions: ["Promoción alta", "Distribución selectiva"],
    },
    {
      stage: "Crecimiento",
      sales: "Rápido aumento",
      profit: "Aumentan",
      strategy: "Maximizar cuota",
      example: "Autos eléctricos",
      color: "green",
      actions: ["Mejorar producto", "Expandir distribución"],
    },
    {
      stage: "Madurez",
      sales: "Pico máximo",
      profit: "Máximas",
      strategy: "Defender cuota",
      example: "Smartphones",
      color: "orange",
      actions: ["Diferenciación", "Guerra de precios"],
    },
    {
      stage: "Declive",
      sales: "Caen",
      profit: "Bajas",
      strategy: "Cosechar/Retirar",
      example: "DVD Players",
      color: "red",
      actions: ["Reducir costos", "Descontinuar"],
    },
  ];

  const DEFAULT_BRAND_STRATEGY = {
    titulo: "Estrategia de Marca",
    descripcion:
      "Una marca fuerte genera lealtad y permite precios premium. Es el activo intangible más valioso.",
    bullets: [
      { label: "Reconocimiento", desc: "¿Te conocen?" },
      { label: "Percepción", desc: "¿Qué piensan de ti?" },
      { label: "Lealtad", desc: "¿Vuelven a comprar?" },
      { label: "Asociaciones", desc: "¿Qué emociones evocas?" },
    ],
    caseStudy: {
      titulo: "Caso: Apple",
      valorMarca: "$880 Billones",
      asociaciones: "Innovación, Diseño, Estatus",
      resultado: "Price Premium del 40%",
    },
  };

  // =============================
  // 3. MERGE DATA
  // =============================
  const productLevels =
    block.productLevels?.length ? block.productLevels : DEFAULT_PRODUCT_LEVELS;
  const productCategoriesArray =
    block.productCategories?.length ? block.productCategories : DEFAULT_PRODUCT_CATEGORIES;

  useEffect(() => {
    if (!expandedCategory && productCategoriesArray.length > 0) {
      setExpandedCategory(productCategoriesArray[0].id);
    }
  }, [productCategoriesArray, expandedCategory]);

  const lifeCyclePhases =
    block.lifeCycle?.phases?.length ? block.lifeCycle.phases : DEFAULT_LIFECYCLE_PHASES;

  const cvpTitle = block.lifeCycle?.titulo ?? "Ciclo de Vida (CVP)";
  const cvpDescription = block.lifeCycle?.descripcion ?? "Etapas desde el lanzamiento hasta el declive.";
  const brandStrategy = block.brandStrategy ?? DEFAULT_BRAND_STRATEGY;

  // Textos Header
  const headerLabel = block.subtitulo ?? "Módulo 01";
  const headerTitle = block.titulo ?? "Producto: Creando Valor";
  const introText = block.texto ?? "Entender los niveles y clasificaciones del producto es vital para crear una propuesta de valor sólida.";

  // =============================
  // 4. RENDER
  // =============================
  return (
    <section className="py-24 relative overflow-hidden bg-[#0c0a09]">

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER DE SECCIÓN --- */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-6 md:items-end justify-between"
          >
            <div className="max-w-2xl">
               {/* Badge estilo Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-stone-900 border border-stone-800 shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase">
                  {headerLabel}
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {headerTitle}
              </h2>
              <p className="text-lg text-stone-400 leading-relaxed border-l-2 border-amber-500/50 pl-5">
                {introText}
              </p>
            </div>
            
            {/* Icono decorativo grande */}
            <div className="hidden md:block opacity-20">
              <Package strokeWidth={1} className="w-32 h-32 text-stone-600" />
            </div>
          </motion.div>
        </div>

        {/* ================================================= */}
        {/* 1. NIVELES DEL PRODUCTO (Tablero Interactivo)     */}
        {/* ================================================= */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl font-bold text-white">Niveles del Producto</h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Columna Izquierda: Botones/Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {productLevels.map((level, index) => {
                const isActive = activeLevel === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveLevel(index)}
                    className={`
                      group relative p-5 rounded-xl text-left transition-all duration-300 border
                      ${isActive 
                        ? "bg-stone-800 border-amber-500/50 shadow-lg shadow-black/20" 
                        : "bg-transparent border-stone-800 hover:bg-stone-800/40 hover:border-stone-600"
                      }
                    `}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeLevelParams"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l-xl"
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <span className={`text-lg font-semibold ${isActive ? "text-white" : "text-stone-400 group-hover:text-stone-200"}`}>
                        {level.level}
                      </span>
                      <span className="text-xl filter drop-shadow-md grayscale group-hover:grayscale-0 transition-all">
                        {level.icon}
                      </span>
                    </div>
                    <p className={`text-xs mt-2 line-clamp-2 ${isActive ? "text-stone-300" : "text-stone-500"}`}>
                      {level.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Columna Derecha: Contenido Detallado */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-linear-to-br from-stone-900 to-[#130c08] border border-stone-800 rounded-2xl p-8 relative overflow-hidden shadow-2xl"
                >
                   {/* Decoración de fondo */}
                   <div className="absolute top-0 right-0 p-32 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

                   <div className="relative z-10">
                     <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-2xl border border-amber-500/20">
                         {productLevels[activeLevel].icon}
                       </div>
                       <div>
                         <h4 className="text-2xl font-bold text-white">
                           {productLevels[activeLevel].level}
                         </h4>
                         <span className="text-amber-500 text-sm font-medium tracking-wide uppercase">
                           Concepto Clave
                         </span>
                       </div>
                     </div>

                     <p className="text-stone-300 text-lg leading-relaxed mb-8">
                       {productLevels[activeLevel].detail}
                     </p>

                     <div className="grid md:grid-cols-2 gap-4">
                       <div className="bg-black/30 border border-stone-800 rounded-xl p-5">
                         <div className="text-xs text-stone-500 uppercase tracking-wider mb-2 font-bold">
                           Ejemplo Real
                         </div>
                         <div className="text-stone-200 flex gap-2">
                           <span className="text-amber-500">Example:</span>
                           {productLevels[activeLevel].example}
                         </div>
                       </div>
                       
                       <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-5">
                         <div className="text-xs text-amber-500/80 uppercase tracking-wider mb-2 font-bold">
                           Insight Estratégico
                         </div>
                         <div className="text-amber-100/90 italic">
                           "{productLevels[activeLevel].keyPoint}"
                         </div>
                       </div>
                     </div>
                   </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

       {/* ================================================= */}
        {/* 2. GRID MIXTO: Categorías + Ciclo de Vida         */}
        {/* ================================================= */}
        <div className="grid lg:grid-cols-12 gap-8 mb-32 items-stretch"> 
          {/* CAMBIO: items-stretch ayuda a que las columnas intenten igualarse */}

          {/* --- Columna Izquierda: CLASIFICACIÓN (Acordeón) --- */}
          <div className="lg:col-span-5 flex flex-col h-full">
             
             {/* Header */}
             <div className="flex items-center gap-3 mb-6 pl-1">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Clasificación</h3>
             </div>
              
             {/* Lista */}
             <div className="flex flex-col gap-4 h-full">
                {productCategoriesArray.map((category) => {
                  const isExpanded = expandedCategory === category.id;
                  
                  return (
                    <motion.div 
                      layout
                      key={category.id}
                      onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                      className={`
                        relative rounded-2xl border cursor-pointer overflow-hidden
                        transition-all duration-500 ease-out
                        ${isExpanded 
                          ? "bg-[#0c0a09] border-amber-500/40 shadow-xl shadow-amber-900/10 z-10" 
                          : "bg-stone-900/30 border-stone-800 hover:border-stone-600 hover:bg-stone-800/50"
                        }
                      `}
                    >
                      {isExpanded && (
                        <motion.div 
                          layoutId="active-bar"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"
                        />
                      )}

                      <div className="flex items-center justify-between p-5">
                        <div className="flex items-center gap-4">
                          <div className={`text-2xl transition-transform duration-300 ${isExpanded ? "scale-110" : "opacity-70"}`}>
                            {category.icon}
                          </div>
                          <div className="flex-1">
                            <span className={`block font-bold text-lg transition-colors ${isExpanded ? "text-amber-50" : "text-stone-300"}`}>
                              {category.title}
                            </span>
                            {!isExpanded && (
                               <p className="text-xs text-stone-500 mt-1 line-clamp-1">{category.desc}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? "bg-amber-500/20 text-amber-500 rotate-90" : "bg-stone-800 text-stone-500"}`}>
                           <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-5 pb-6 pt-0">
                              <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-700/50 to-transparent mb-4" />
                              <p className="text-stone-400 text-sm leading-relaxed mb-5 pl-2 border-l-2 border-stone-800">
                                {category.desc}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="bg-stone-800/40 rounded-xl p-3 border border-stone-700/30">
                                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider mb-1 block">Ejemplos</span>
                                  <span className="text-sm text-stone-200">{category.examples}</span>
                                </div>
                                <div className="bg-amber-950/20 rounded-xl p-3 border border-amber-500/10">
                                  <span className="text-[10px] font-bold text-amber-500/70 uppercase tracking-wider mb-1 block">Estrategia</span>
                                  <span className="text-sm text-amber-100/90">{category.strategy}</span>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
             </div>
          </div>

          {/* --- Columna Derecha: CICLO DE VIDA (Tarjetas Altas/Widgets) --- */}
          <div className="lg:col-span-7 flex flex-col h-full">
             
             {/* Header */}
             <div className="flex items-center gap-3 mb-6 pl-1">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Activity className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white leading-none">{cvpTitle}</h3>
                  <span className="text-xs text-stone-500 mt-1 block">{cvpDescription}</span>
                </div>
             </div>

             {/* Grid - Ajustado para ocupar altura */}
             <motion.div 
               layout
               className="grid sm:grid-cols-2 gap-6 h-full content-start" // gap-6 para más altura total
             >
                {lifeCyclePhases.map((phase, i) => {
                  const isHovered = hoveredPhase === i;
                  
                  const colors = {
                    blue:   { text: "text-blue-400",    border: "border-blue-500/50",    bg: "bg-blue-500/10",    glow: "shadow-blue-500/20" },
                    green:  { text: "text-emerald-400", border: "border-emerald-500/50", bg: "bg-emerald-500/10", glow: "shadow-emerald-500/20" },
                    orange: { text: "text-amber-400",   border: "border-amber-500/50",   bg: "bg-amber-500/10",   glow: "shadow-amber-500/20" },
                    red:    { text: "text-rose-400",    border: "border-rose-500/50",    bg: "bg-rose-500/10",    glow: "shadow-rose-500/20" },
                  };
                  // @ts-ignore
                  const theme = colors[phase.color] || colors.blue;
                  const curves = [
                    "M0 40 Q 50 40, 100 10", 
                    "M0 40 L 100 0",         
                    "M0 10 Q 50 0, 100 10",  
                    "M0 0 Q 50 10, 100 40"   
                  ];

                  return (
                    <motion.div
                      layout
                      key={i}
                      onHoverStart={() => setHoveredPhase(i)}
                      onHoverEnd={() => setHoveredPhase(null)}
                      className={`
                        relative rounded-2xl p-6 border overflow-hidden cursor-default group
                        flex flex-col justify-between min-h-[260px] 
                        transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1)
                        ${isHovered 
                          ? `bg-[#0c0a09] ${theme.border} shadow-2xl ${theme.glow} z-10 scale-[1.02]` 
                          : "bg-stone-900/30 border-stone-800 hover:border-stone-700"
                        }
                      `}
                    >
                      {/* Curva de fondo */}
                      <svg className="absolute right-0 top-0 w-40 h-14 opacity-[0.07] pointer-events-none transition-opacity duration-300 group-hover:opacity-20" viewBox="0 0 100 50">
                        <path d={curves[i]} fill="none" stroke="currentColor" strokeWidth="3" className={theme.text} />
                      </svg>

                      {/* Parte Superior: Título */}
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className={`text-xl font-bold transition-colors ${isHovered ? "text-white" : "text-stone-300"}`}>
                            {phase.stage}
                          </h4>
                          <div className={`w-2 h-2 rounded-full mt-2 ${isHovered ? theme.bg.replace('/10','') : "bg-stone-700"}`} />
                        </div>
                      </div>

                      {/* Parte Inferior: Métricas + Hover Info */}
                      <div className="relative z-10">
                         {/* Métricas siempre visibles */}
                         <div className="grid grid-cols-2 gap-4">
                             <div>
                                <span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider mb-1 block">Ventas</span>
                                <div className={`text-sm font-medium ${isHovered ? "text-stone-200" : "text-stone-400"}`}>
                                  {phase.sales}
                                </div>
                             </div>
                             <div>
                                <span className="text-[10px] uppercase text-stone-500 font-bold tracking-wider mb-1 block">Utilidad</span>
                                <div className={`text-sm font-medium ${isHovered ? "text-stone-200" : "text-stone-400"}`}>
                                  {phase.profit}
                                </div>
                             </div>
                         </div>

                         {/* Acciones (aparecen empujando hacia arriba ligeramente) */}
                         <AnimatePresence>
                            {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="overflow-hidden border-t border-dashed border-white/10"
                              >
                                 <div className={`pt-3 text-xs font-bold uppercase mb-2 ${theme.text} opacity-90`}>
                                   Acciones Estratégicas
                                 </div>
                                 <ul className="space-y-1.5">
                                   {phase.actions.slice(0, 3).map((action, j) => (
                                     <li key={j} className="text-xs text-stone-300 flex items-start gap-2">
                                       <span className={`mt-1.5 w-1 h-1 rounded-full ${theme.bg.replace('/10','')}`} />
                                       <span className="opacity-90">{action}</span>
                                     </li>
                                   ))}
                                 </ul>
                              </motion.div>
                            )}
                         </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
             </motion.div>
          </div>
        </div>

        {/* ================================================= */}
        {/* 3. ESTRATEGIA DE MARCA (Rediseño Premium)         */}
        {/* ================================================= */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7 }}
           className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#080504]"
        >
          {/* Fondo Ambiental Sutil */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-800/20 rounded-full blur-[100px] pointer-events-none" />
          
          {/* Trama de ruido sutil para textura (opcional, da toque premium) */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

          <div className="relative z-10 p-8 md:p-12 grid lg:grid-cols-12 gap-12 items-center">
            
            {/* --- COLUMNA IZQUIERDA: Teoría --- */}
            <div className="lg:col-span-7 flex flex-col gap-8">
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                    <Award className="w-3 h-3 text-amber-500" />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-amber-400 uppercase">
                      Brand Equity
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    {brandStrategy.titulo}
                  </h3>
                  <p className="text-stone-400 text-lg leading-relaxed max-w-2xl">
                    {brandStrategy.descripcion}
                  </p>
               </div>

               {/* Grid de 4 Puntos Clave (Micro-tarjetas) */}
               <div className="grid sm:grid-cols-2 gap-3">
                 {brandStrategy.bullets.map((item, i) => (
                   <div 
                     key={i} 
                     className="group flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                   >
                      <span className="text-xs text-amber-500/80 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-amber-500" />
                        {item.label}
                      </span>
                      <span className="text-sm text-stone-300 group-hover:text-white transition-colors">
                        {item.desc}
                      </span>
                   </div>
                 ))}
               </div>
            </div>

            {/* --- COLUMNA DERECHA: Visualización del Caso --- */}
            <div className="lg:col-span-5 relative">
               {/* Efecto de brillo detrás de la tarjeta */}
               <div className="absolute inset-0 bg-amber-500/20 blur-3xl transform scale-90 rounded-full opacity-40" />

               {/* Tarjeta de Caso de Estudio (Glassmorphism Limpio) */}
               <div className="relative bg-[#1c1917]/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden group hover:border-amber-500/30 transition-colors duration-500">
                 
                 {/* Línea decorativa superior */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500/0 via-amber-500/50 to-amber-500/0 opacity-50" />

                 <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Case Study</span>
                      {/* Logo simulado minimalista */}
                      <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="block w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                    <h4 className="text-3xl font-bold text-white tracking-tight">{brandStrategy.caseStudy.titulo}</h4>
                 </div>
                 
                 {/* Dato Principal (Hero Number) */}
                 <div className="mb-8 py-6 border-y border-white/5">
                    <span className="block text-sm text-stone-400 mb-1">Valoración de Marca</span>
                    <div className="text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-400">
                      {brandStrategy.caseStudy.valorMarca}
                    </div>
                 </div>

                 {/* Detalles inferiores */}
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1">Asociaciones</span>
                      <span className="text-sm text-stone-200 leading-tight block">
                        {brandStrategy.caseStudy.asociaciones}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[10px] text-stone-500 uppercase tracking-wider mb-1">Impacto</span>
                      <span className="text-sm text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded inline-block">
                        {brandStrategy.caseStudy.resultado}
                      </span>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};