// src/components/FigmaEjJose/ui/HeroSection.tsx

import React from "react";
import { motion } from "motion/react";
import { TrendingUp, Award, ArrowDown } from "lucide-react";
import type { LandingContentBlock } from "../../../types/course";

interface HeroSectionFigmaProps {
  block: LandingContentBlock; // ⬅️ AHORA RECIBE EL BLOQUE COMPLETO
}

export function HeroSection({ block }: HeroSectionFigmaProps) {
  // MAPEO SEGURO DE CAMPOS
  const titulo = block.titulo ?? "Título del curso";
  const texto = block.texto ?? "Descripción breve del curso.";
  const subtitulo = block.subtitulo ?? "Comenzar el curso";
  const bullets = block.bullets ?? [];
  const itemsSec = block.itemsSecundarios ?? [];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Primer bullet como badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm">
                {bullets[0] ?? "Introducción"}
              </span>
            </div>

            {/* TÍTULO */}
            <h1 className="text-5xl lg:text-6xl text-slate-900 mb-6">
              {titulo}
            </h1>

            {/* DESCRIPCIÓN */}
            <p className="text-xl text-slate-600 mb-8">{texto}</p>

            {/* BULLETS (desde el JSON) */}
            <div className="flex flex-wrap gap-4 mb-8">
              {bullets.slice(1).map((b, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-700">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-sm">{b}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300">
              {subtitulo}
            </button>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
              
              {/* Imagen o textura */}
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,...')]"></div>

              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-32 h-32 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full"
                  ></motion.div>

                  <h3 className="text-2xl mb-2">
                    {itemsSec[0]?.titulo ?? "Estrategia + Data"}
                  </h3>

                  <p className="text-white/80">
                    {itemsSec[0]?.texto ??
                      "Análisis sistemático del branding político"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL DOWN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#objectives"
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm">Explorar contenido</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
