import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Target, TrendingUp, Users } from 'lucide-react';

// IMPORTA EL TIPO DEL BLOQUE
import type { LandingContentBlock } from '../../../types/course';

// ⬅️ ESTA ES LA FIRMA CORRECTA DEL COMPONENTE
export const IntroduccionSection: React.FC<{ block: LandingContentBlock }> = ({ block }) => {

  return (
    <section id="introduccion" className="py-20 bg-white relative overflow-hidden">

      {/* Logo Watermark */}


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* ENCABEZADO DINÁMICO desde JSON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">
              {block.titulo ?? "Introducción al Curso"}
            </span>
          </div>

          <h2 className="text-4xl text-slate-900 mb-6">
            {block.subtitulo ?? "Título de introducción (subtítulo)"}
          </h2>
        </motion.div>

        {/* TEXTO principal dinámico */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg">
              <p className="text-slate-700 mb-4">
                {block.texto ?? 
                  "Aquí puedes colocar texto introductorio dinámico desde el JSON."}
              </p>
            </div>
          </motion.div>

          {/* BLOQUES A LA DERECHA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Ejemplo de card dinámica */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">
                    {block.itemsSecundarios?.[0]?.titulo ?? "Propósito del curso"}
                  </h3>
                  <p className="text-slate-700 text-sm">
                    {block.itemsSecundarios?.[0]?.texto ??
                      "Texto dinámico para propósito del curso."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* LISTAS DINÁMICAS (Entenderás / Aplicarás) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl">
              {block.bullets?.length ? "Objetivos de Aprendizaje" : "Título dinámico"}
            </h3>
          </div>

          {/* Bullets desde JSON */}
          <div className="grid md:grid-cols-2 gap-6 ">
            {(block.bullets ?? []).map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="text-white/90">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
