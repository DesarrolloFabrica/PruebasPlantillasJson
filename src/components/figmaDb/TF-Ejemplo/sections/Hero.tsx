// src/components/figmaDb/TF-Ejemplo/sections/Hero.tsx

import React from "react";
import { motion } from "motion/react";
import { Sparkles, Clock, BarChart3, Users, ArrowRight } from "lucide-react";
import type { CourseLanding } from "../../../../types/course";

// Tipos extendidos
type HeroOverviewExtras = {
  badge?: string;
  programa?: string;
  tituloPrincipal?: string;
  tituloResaltado?: string;
  descripcion?: string;
  intro?: string;
  duracion?: string;
  nivel?: string;
  estudiantes?: string;
  stats?: { label: string; value: string }[];
  tituloCurso?: string;
};

type HeroOverview = CourseLanding["overview"] & HeroOverviewExtras;

interface HeroSectionProps {
  overview?: HeroOverview;
}

/**
 * Sección HERO - Diseño "Dark Premium"
 * Basado en la referencia visual: fondo negro profundo, acentos naranjas, tipografía bold.
 */
export const HeroSection: React.FC<HeroSectionProps> = ({ overview }) => {
  // Badge
  const badgeLabel =
    overview?.badge || overview?.programa || "Administración de Empresas";

  // Títulos
  const titleLine1 = overview?.tituloPrincipal || "Fundamentos de";
  const titleLine2 = overview?.tituloResaltado || "Mercadotecnia";

  // Descripción
  const description =
    overview?.descripcion ||
    overview?.intro ||
    "Aprende los principios esenciales del marketing: desde las 4Ps hasta la segmentación de mercados, comportamiento del consumidor y estrategias de posicionamiento que utilizan las empresas líderes mundiales.";

  // Stats
  const rawStats: { label: string; value: string }[] = overview?.stats ?? [
    { label: "Duración", value: overview?.duracion ?? "6 semanas" },
    { label: "Nivel", value: overview?.nivel ?? "Fundamental" },
    { label: "Estudiantes", value: overview?.estudiantes ?? "3,200+" },
  ];

  const pickIcon = (label: string) => {
    const normalized = label.toLowerCase();
    if (normalized.includes("duración") || normalized.includes("tiempo"))
      return Clock;
    if (normalized.includes("nivel")) return BarChart3;
    if (
      normalized.includes("estudiante") ||
      normalized.includes("alumno") ||
      normalized.includes("personas")
    )
      return Users;
    return Sparkles;
  };

  const stats = rawStats.map((s) => ({
    icon: pickIcon(String(s.label ?? "")),
    label: String(s.label ?? ""),
    value: String(s.value ?? ""),
  }));

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505] pt-20"
    >
      {/* === FONDO: SPOTLIGHT CENITAL === */}
      {/* Un brillo naranja muy sutil en la parte superior central, simulando luz de estudio */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Un degradado inferior para fundir con la siguiente sección */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#050505] to-transparent z-10" />

      {/* Contenedor principal */}
      <div className="w-full px-6 lg:px-12 relative z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* 1. BADGE PREMIUM */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-900/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-sm font-semibold tracking-wide text-orange-200/90">
                {badgeLabel}
              </span>
            </div>
          </motion.div>

          {/* 2. TÍTULO DE IMPACTO */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col items-center mb-6 leading-tight"
          >
            {/* Línea 1: Blanca y sólida */}
            <span className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-2">
              {titleLine1}
            </span>
            
            {/* Línea 2: Gradiente Naranja (Textura visual) */}
            <span className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-b from-orange-400 to-amber-700 pb-2">
              {titleLine2 || overview?.tituloCurso}
            </span>
          </motion.h1>

          {/* 3. DESCRIPCIÓN */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
          >
            {description}
          </motion.p>

          {/* 4. ESTADÍSTICAS ELEGANTES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12 w-full"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-center group-hover:border-orange-500/30 transition-colors duration-300">
                  <stat.icon className="w-5 h-5 text-orange-500/80 group-hover:text-orange-400 transition-colors" />
                </div>
                <div className="text-left flex flex-col">
                  <span className="text-xs text-stone-400 font-medium uppercase tracking-wider mb-0.5">
                    {stat.label}
                  </span>
                  <span className="text-lg font-bold text-stone-200">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* 5. BOTÓN CTA (Estilo Referencia) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#intro"
              className="
                group relative inline-flex items-center gap-3 px-8 py-4 
                bg-linear-to-r from-orange-600 to-amber-600 
                hover:from-orange-500 hover:to-amber-500
                text-white text-lg font-semibold rounded-2xl
                shadow-lg shadow-orange-900/40 hover:shadow-orange-500/20 hover:-translate-y-1
                transition-all duration-300
              "
            >
              <span className="text-stone-200">Comenzar Aprendizaje</span>
              <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;