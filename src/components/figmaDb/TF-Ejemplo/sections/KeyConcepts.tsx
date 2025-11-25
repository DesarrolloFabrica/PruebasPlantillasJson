// src/components/figmaDb/TF-Ejemplo/sections/KeyConcepts.tsx

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Package,
  DollarSign,
  MapPin,
  Megaphone,
  Users,
  TrendingUp,
  Info,
} from "lucide-react";
import type { LandingContentBlock, MarketingMixCase } from "../../../../types/course";

// Props: este componente recibe un bloque desde el JSON estándar
interface KeyConceptsSectionProps {
  block: LandingContentBlock;
}

/**
 * Sección de “Conceptos Fundamentales”
 * ------------------------------------
 * - Mantiene el MISMO diseño visual de la versión Figma.
 * - Corregido el efecto Flip 3D (eliminado overflow-hidden).
 * - Actualizada sintaxis de gradientes para evitar alertas de linter (bg-linear-to...).
 */
export const KeyConceptsSection: React.FC<KeyConceptsSectionProps> = ({
  block,
}) => {
  // Índice de la tarjeta que está girada (null = ninguna)
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  // Empresa seleccionada en el ejemplo interactivo de las 4Ps
  const [selectedCaseId, setSelectedCaseId] = useState<string>("");

  // Íconos y colores para mapear columnas del JSON a las tarjetas
  const ICONS = [Package, DollarSign, MapPin, Megaphone, Users, TrendingUp];

  // NOTA: He actualizado la sintaxis a "linear" para cumplir con Tailwind v4 si es necesario,
  // pero mantengo la estructura de colores.
  const COLORS = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-orange-500 to-red-500",
    "from-purple-500 to-pink-500",
    "from-indigo-500 to-blue-500",
    "from-pink-500 to-rose-500",
  ];

  /**
   * Generación de las tarjetas:
   */
  const concepts =
    block.columnas && block.columnas.length > 0
      ? block.columnas.map((col, index) => {
          const Icon = ICONS[index] ?? Package;
          const color = COLORS[index % COLORS.length];
          const detalleDesdeJson = block.itemsSecundarios?.[index]?.texto;

          return {
            icon: Icon,
            term: col.titulo,
            definition: col.texto,
            examples: col.bullets ?? [],
            color,
            backContent:
              detalleDesdeJson ??
              "Este concepto es clave para entender cómo se conecta la propuesta de valor con las necesidades del cliente.",
            detalle:
              detalleDesdeJson ??
              "Puedes usar itemsSecundarios en el JSON para personalizar este detalle.",
          };
        })
      : [
          // --- Contenido original por defecto ---
          {
            icon: Package,
            term: "Producto",
            definition:
              "Cualquier cosa que se puede ofrecer al mercado para satisfacer una necesidad o deseo.",
            backContent:
              "Incluye bienes físicos, servicios, experiencias, eventos, personas, lugares, organizaciones e ideas. El producto es la razón por la cual los clientes vienen a ti.",
            examples: [
              "iPhone (bien)",
              "Netflix (servicio)",
              "Concierto (experiencia)",
            ],
            color: "from-blue-500 to-cyan-500",
            detalle:
              "Es más que un objeto físico: incluye características, diseño, calidad, marca y empaque.",
          },
          {
            icon: DollarSign,
            term: "Precio",
            definition:
              "Cantidad de dinero que se cobra por un producto o servicio.",
            backContent:
              "Es el único elemento del marketing mix que genera ingresos; los demás representan costos. El precio debe reflejar el valor percibido por el cliente y ser competitivo en el mercado.",
            examples: [
              "Premium: Rolex",
              "Penetración: Xiaomi",
              "Freemium: Spotify",
            ],
            color: "from-green-500 to-emerald-500",
            detalle:
              "Estrategias: Descreme, penetración, competitiva, psicológica, por valor.",
          },
          {
            icon: MapPin,
            term: "Plaza (Distribución)",
            definition:
              "Actividades para que el producto esté disponible y accesible para los clientes meta.",
            backContent:
              "Incluye canales, cobertura, surtido, ubicaciones y logística. La plaza correcta significa estar donde y cuando el cliente te necesita.",
            examples: [
              "Directa: Tesla",
              "Intensiva: Coca-Cola",
              "Selectiva: Apple Store",
            ],
            color: "from-orange-500 to-red-500",
            detalle:
              "Canales: minoristas, mayoristas, online, directos, híbridos.",
          },
          {
            icon: Megaphone,
            term: "Promoción",
            definition:
              "Actividades que comunican las ventajas del producto y persuaden a los clientes.",
            backContent:
              "Incluye publicidad, ventas personales, promoción de ventas, relaciones públicas y marketing directo. La voz de tu marca hacia el mercado.",
            examples: [
              "Publicidad TV",
              "Influencers",
              "Email marketing",
              "SEO/SEM",
            ],
            color: "from-purple-500 to-pink-500",
            detalle:
              "Mix promocional: push (empujar) vs pull (atraer) strategies.",
          },
          {
            icon: Users,
            term: "Segmentación",
            definition:
              "Dividir el mercado en grupos con necesidades y comportamientos diferentes.",
            backContent:
              "Permite personalizar ofertas y mensajes para cada grupo, aumentando efectividad. No todos los clientes son iguales ni quieren lo mismo.",
            examples: [
              "Demográfica",
              "Psicográfica",
              "Conductual",
              "Geográfica",
            ],
            color: "from-indigo-500 to-blue-500",
            detalle:
              "Base para targeting (a quién) y positioning (cómo te perciben).",
          },
          {
            icon: TrendingUp,
            term: "Posicionamiento",
            definition:
              "Lugar que ocupa el producto en la mente del consumidor vs competidores.",
            backContent:
              "No es lo que haces al producto, sino lo que haces en la mente del prospecto. Define cómo quieres que te perciban y qué te hace único.",
            examples: [
              "Volvo = Seguridad",
              "Apple = Innovación",
              "IKEA = Económico",
            ],
            color: "from-pink-500 to-rose-500",
            detalle:
              "Estrategias: por atributo, precio, uso, usuario, competidor, categoría.",
          },
        ];

    // ---------------------------------------------------------------------------
  // 4Ps – LEEMOS LOS CASOS DESDE EL JSON (block.marketingMix) O USAMOS DEFAULT
  // ---------------------------------------------------------------------------

  // ✅ Casos por defecto (si el JSON no trae nada)
  const DEFAULT_MARKETING_MIX_CASES: MarketingMixCase[] = [
    {
      id: "starbucks",
      name: "Starbucks",
      logo: "☕",
      producto: "Café premium + experiencia 'tercer lugar' (no casa, no trabajo)",
      precio: "Premium ($4-6 por café, justificado por calidad y ambiente)",
      plaza: "Ubicaciones estratégicas de alto tráfico + app móvil para pedidos",
      promocion:
        "Programa de lealtad Rewards + marketing en redes sociales",
    },
    {
      id: "tesla",
      name: "Tesla",
      logo: "⚡",
      producto:
        "Vehículos eléctricos de alto rendimiento + tecnología Autopilot",
      precio:
        "Premium con financiamiento ($40k-$100k+, ahorro en gasolina)",
      plaza: "Venta directa online + showrooms propios (sin concesionarios)",
      promocion:
        "Word of mouth + Elon Musk como influencer + test drives",
    },
    {
      id: "mcdonalds",
      name: "McDonald's",
      logo: "🍔",
      producto:
        "Comida rápida estandarizada + experiencia consistente global",
      precio: "Económico accesible ($1-$10, combos de valor)",
      plaza: "Drive-thru, locales, aeropuertos, delivery apps",
      promocion: "Publicidad masiva TV + Happy Meal + mascota de marca",
    },
  ];

  // ✅ Si el JSON tiene marketingMix.casos, usamos esos; si no, usamos los de arriba
  const marketingMixCases: MarketingMixCase[] =
    block.marketingMix?.casos && block.marketingMix.casos.length > 0
      ? block.marketingMix.casos
      : DEFAULT_MARKETING_MIX_CASES;

  // ✅ Al cargar o cuando cambian los casos, seleccionamos por defecto el primero
  useEffect(() => {
    if (marketingMixCases.length > 0) {
      setSelectedCaseId(marketingMixCases[0].id);
    }
  }, [marketingMixCases]);

  // ✅ Caso actualmente seleccionado (según selectedCaseId)
  const selectedCase: MarketingMixCase =
    marketingMixCases.find((c) => c.id === selectedCaseId) ||
    marketingMixCases[0];

  // ✅ Textos del header de las 4Ps, también tomados del JSON si existe
  const mixHeaderTitle =
    block.marketingMix?.titulo ?? "Las 4Ps: El Marketing Mix en Acción";

  const mixHeaderDescription =
    block.marketingMix?.descripcion ??
    "Propuestas por E. Jerome McCarthy, estas variables deben trabajar en perfecta sincronía. Analiza cómo las aplican los líderes del mercado:";


  // Textos del encabezado
  const sectionLabel = block.subtitulo ?? "Sección 02";
  const sectionTitle = block.titulo ?? "Conceptos Fundamentales del Marketing";
  const sectionDescription =
    block.texto ??
    "Los pilares del marketing que todo profesional debe dominar: desde el marketing mix clásico hasta la segmentación y el posicionamiento estratégico.";

  return (
    <section
      id="concepts"
      className="py-32 relative overflow-hidden bg-linear-to-b from-stone-900 to-stone-950"
    >
      {/* Fondo con degradados */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(242,100,25,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(184,128,74,0.15),transparent_50%)]" />

      <div className="section-container relative z-10">
       {/* HEADER DE SECCIÓN MEJORADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* 1. Etiqueta "Pill" Superior */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 shadow-lg shadow-amber-900/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                {sectionLabel}
              </span>
            </div>
          </div>

          {/* 2. Título Principal con Gradiente Sutil */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto">
            <span className="bg-clip-text text-transparent bg-linear-to-b from-amber-50 via-stone-200 to-stone-400">
              {sectionTitle}
            </span>
          </h2>

          {/* 3. Descripción refinada */}
          <p className="text-lg text-stone-400/90 leading-relaxed max-w-2xl mx-auto">
            {sectionDescription}
          </p>

          {/* 4. Tip de interacción estilo Glassmorphism */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-stone-900/60 border border-stone-800/80 backdrop-blur-md"
          >
            <span className="text-lg">💡</span>
            <span className="text-sm font-medium text-stone-300">
              Interactúa con las tarjetas para descubrir detalles
            </span>
          </motion.div>
        </motion.div>

        {/* TARJETAS INTERACTIVAS (flip 3D) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // === CORRECCIÓN VISUAL ===
              // 1. Eliminado 'overflow-hidden': Permite que la tarjeta gire sin recortarse.
              // 2. Ajustado 'perspective-[1000px]': Sintaxis canónica.
              // 3. Eliminado 'rounded-3xl' de aquí (está en las caras internas).
              className="min-h-104 cursor-pointer perspective-[1000px] z-10"
              onClick={() =>
                setFlippedCard(flippedCard === index ? null : index)
              }
            >
              {/* Contenedor 3D que rota */}
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* ------------------------------------------------ */}
                {/* CARA FRONTAL                                     */}
                {/* ------------------------------------------------ */}
                <div
                  className="
                    absolute inset-0 
                    rounded-3xl 
                    border border-stone-800/80 
                    bg-[#130c08]
                    bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),transparent_60%)]
                    p-7
                    flex flex-col
                    /* SOMBRAS aplicadas AQUI en lugar del contenedor padre */
                    shadow-[0_18px_35px_rgba(0,0,0,0.75)]
                    hover:border-amber-500/70
                    hover:shadow-[0_22px_40px_rgba(0,0,0,0.85)]
                    transition-all duration-300
                  "
                  // IMPORTANTE: Oculta la cara cuando gira
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div
                    className={`
                      w-16 h-16 
                      /* Sintaxis moderna 'bg-linear-to-br' */
                      bg-linear-to-br ${concept.color}
                      rounded-2xl 
                      flex items-center justify-center 
                      mb-6
                      shadow-[0_10px_25px_rgba(0,0,0,0.45)]
                    `}
                  >
                    <concept.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl font-semibold tracking-tight text-white mb-3">
                    {concept.term}
                  </h3>

                  <p className="text-[15px] text-stone-200 leading-relaxed max-w-xl">
                    {concept.definition}
                  </p>

                  {concept.examples && concept.examples.length > 0 && (
                    <div className="mt-8 pt-4 border-t border-stone-800/70">
                      <div className="text-[11px] text-stone-500 uppercase tracking-[0.2em] mb-2">
                        Ejemplos:
                      </div>
                      <div className="space-y-1.5">
                        {concept.examples.map((example, i) => (
                          <div
                            key={i}
                            className="text-[13px] text-stone-200 flex items-start gap-2"
                          >
                            <span className="mt-0.5 text-amber-400">•</span>
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 text-stone-600/90">
                    <Info className="w-4 h-4" />
                  </div>
                </div>

                {/* ------------------------------------------------ */}
                {/* CARA TRASERA                                     */}
                {/* ------------------------------------------------ */}
                <div
                  className="
                    absolute inset-0
                    rounded-3xl
                    border border-amber-500/40
                    /* Sintaxis moderna 'bg-linear-to-br' */
                    bg-linear-to-br from-[#421906] to-[#18100c]
                    p-7
                    flex flex-col
                    /* Sombra consistente con la frontal */
                    shadow-[0_18px_35px_rgba(0,0,0,0.8)]
                  "
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div
                    className={`
                      w-16 h-16 
                      bg-linear-to-br ${concept.color}
                      rounded-2xl 
                      flex items-center justify-center 
                      mb-6
                    `}
                  >
                    <concept.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-amber-50 mb-3">
                    {concept.term}
                  </h3>

                  <div className="flex-1 pr-1">
                    <p className="text-sm text-stone-200 leading-relaxed mb-4">
                      {concept.backContent}
                    </p>

                    <div className="mt-2 rounded-2xl bg-[#120c08]/90 border border-amber-500/30 px-4 py-3">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300 mb-1.5">
                        Detalle importante
                      </div>
                      <p className="text-xs text-stone-100 leading-relaxed">
                        {concept.detalle}
                      </p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 text-amber-300">
                    <Info className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

         {/* ------------------------------------------------------------------ */}
        {/* TARJETAS INTERACTIVAS (flip 3D)                                   */}
        {/* ------------------------------------------------------------------ */}
        {/* ... 👈 aquí dejas tal cual tu bloque de tarjetas de conceptos ... */}

        {/* ------------------------------------------------------------------ */}
        {/* BLOQUE INTERACTIVO: LAS 4Ps (ahora conectado al JSON)             */}
        {/* ------------------------------------------------------------------ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mt-44"
        >
          {/* Encabezado del bloque 4Ps - Versión Premium */}
          <div className="relative text-center mb-16 px-4">
            {/* Elemento Decorativo: Brillo de fondo sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />


            {/* 1. Título con Gradiente Metálico */}
            <h3 className="relative text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-stone-100 to-stone-400 drop-shadow-sm">
                {mixHeaderTitle}
              </span>
            </h3>

            {/* 2. Descripción con mejor tipografía */}
            <p className="relative text-lg text-stone-400/90 max-w-2xl mx-auto leading-relaxed font-light">
              {mixHeaderDescription}
            </p>

            {/* 3. Separador Elegante Inferior */}
            <div className="mt-8 flex justify-center items-center gap-4 opacity-40">
              <div className="h-px w-12 bg-linear-to-r from-transparent to-amber-500/50" />
              <div className="w-1 h-1 rotate-45 bg-amber-500" />
              <div className="h-px w-12 bg-linear-to-l from-transparent to-amber-500/50" />
            </div>
          </div>

          {/* Contenedor tipo dashboard */}
          <div className="relative rounded-3xl border border-stone-800 bg-[#0c0a09]/80 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/50">
            <div className="flex flex-col md:flex-row min-h-[400px]">
              {/* SIDEBAR: lista de empresas/casos */}
              <div className="p-6 md:w-1/3 border-b md:border-b-0 md:border-r border-stone-800 bg-black/20 flex flex-col justify-center">
                <span className="text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-4 pl-2">
                  Selecciona una empresa
                </span>
                <div className="flex flex-col gap-2">
                  {marketingMixCases.map((company) => {
                    const isActive = company.id === selectedCaseId;
                    return (
                      <button
                        key={company.id}
                        onClick={() => setSelectedCaseId(company.id)}
                        className={`
                          relative group flex items-center w-full p-2 rounded-xl transition-all duration-300 border text-left focus:outline-none focus:ring-0
                          ${
                            isActive
                              ? "bg-stone-800 border-amber-500/30 shadow-lg shadow-black/40"
                              : "bg-transparent border-transparent hover:bg-stone-800/40 hover:border-stone-600"
                          }
                        `}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="active-pill"
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-amber-500 rounded-r-full"
                          />
                        )}

                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300 filter drop-shadow-md">
                          {company.logo}
                        </span>
                        <div>
                          <span
                            className={`block font-semibold text-sm ${
                              isActive
                                ? "text-white"
                                : "text-stone-400 group-hover:text-stone-200"
                            }`}
                          >
                            {company.name}
                          </span>
                        </div>

                        {isActive && (
                          <div className="ml-auto text-amber-500 opacity-80">
                            <div className="w-1.5 h-1.5 rounded-full bg-current" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ÁREA DE VISUALIZACIÓN (GRID) */}
              <div className="p-6 md:p-8 md:w-2/3 bg-linear-to-br from-stone-900/30 to-black/80 relative flex flex-col justify-center">
                {/* Logo gigante de fondo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-[0.02] grayscale pointer-events-none select-none font-serif">
                  {selectedCase.logo}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCase.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10"
                  >
                    {/* Producto */}
                    <div className="group bg-[#1c1917]/60 border border-blue-500/10 hover:border-blue-500/30 rounded-2xl p-5 hover:bg-[#1c1917]/80 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/20 transition-colors">
                          <Package className="w-4 h-4" />
                        </div>
                        <h4 className="text-blue-400 font-bold uppercase text-[10px] tracking-widest">
                          Producto
                        </h4>
                      </div>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {selectedCase.producto}
                      </p>
                    </div>

                    {/* Precio */}
                    <div className="group bg-[#1c1917]/60 border border-emerald-500/10 hover:border-emerald-500/30 rounded-2xl p-5 hover:bg-[#1c1917]/80 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 group-hover:bg-emerald-500/20 transition-colors">
                          <DollarSign className="w-4 h-4" />
                        </div>
                        <h4 className="text-emerald-400 font-bold uppercase text-[10px] tracking-widest">
                          Precio
                        </h4>
                      </div>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {selectedCase.precio}
                      </p>
                    </div>

                    {/* Plaza */}
                    <div className="group bg-[#1c1917]/60 border border-orange-500/10 hover:border-orange-500/30 rounded-2xl p-5 hover:bg-[#1c1917]/80 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:text-orange-300 group-hover:bg-orange-500/20 transition-colors">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <h4 className="text-orange-400 font-bold uppercase text-[10px] tracking-widest">
                          Plaza
                        </h4>
                      </div>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {selectedCase.plaza}
                      </p>
                    </div>

                    {/* Promoción */}
                    <div className="group bg-[#1c1917]/60 border border-purple-500/10 hover:border-purple-500/30 rounded-2xl p-5 hover:bg-[#1c1917]/80 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:bg-purple-500/20 transition-colors">
                          <Megaphone className="w-4 h-4" />
                        </div>
                        <h4 className="text-purple-400 font-bold uppercase text-[10px] tracking-widest">
                          Promoción
                        </h4>
                      </div>
                      <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                        {selectedCase.promocion}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Nota al pie */}
                <div className="mt-6 pt-4 border-t border-stone-800/50 text-right flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                  </div>
                  <p className="text-[10px] text-stone-600 font-mono">
                    CASE_STUDY_ID: {selectedCase.id.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};