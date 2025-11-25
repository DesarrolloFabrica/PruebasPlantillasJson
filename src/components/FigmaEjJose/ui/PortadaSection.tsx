import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, ArrowDown } from 'lucide-react';
import logoWatermark from 'figma:asset/01177cfd8b308cc1d8a93eb486010b7e48a64164.png';

export function PortadaSection() {
  return (
    <section id="portada" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      {/* Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={logoWatermark} 
          alt="" 
          className="w-[600px] opacity-[0.03] select-none"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Logo/Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
          >
            <GraduationCap className="w-12 h-12 text-white" />
          </motion.div>

          {/* Escuela */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-blue-600"
          >
            Universidad CUN - Maestría en Marketing Político y Gobierno
          </motion.div>

          {/* Materia */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <div className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full">
              Planeación Estratégica del Marketing
            </div>
          </motion.div>

          {/* Tema Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl lg:text-7xl text-slate-900 leading-tight"
          >
            Branding Político y<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Posicionamiento
            </span>
          </motion.h1>

          {/* Frase Introductoria */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            "La construcción estratégica de identidades políticas en la era digital: 
            cuando los datos y la creatividad transforman percepciones en victorias electorales"
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
          ></motion.div>

          {/* Metadata */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-6 text-slate-600 pt-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Noviembre 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              <span>Ingeniería de Sistemas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span>Módulo Avanzado</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#introduccion" className="flex flex-col items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
            <span className="text-sm">Comenzar el curso</span>
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}