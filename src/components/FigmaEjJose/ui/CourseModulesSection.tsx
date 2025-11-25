import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ChevronDown, PlayCircle, FileText, CheckCircle2 } from 'lucide-react';

export function CourseModulesSection() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules = [
    {
      title: 'Módulo 1: Introducción al Branding Político',
      duration: '2 semanas',
      lessons: 8,
      content: [
        { type: 'video', title: 'Bienvenida al curso', duration: '15 min' },
        { type: 'reading', title: 'Lectura: Historia del marketing político', duration: '30 min' },
        { type: 'video', title: 'Diferencias entre branding comercial y político', duration: '25 min' },
        { type: 'reading', title: 'Casos históricos de branding político', duration: '45 min' },
        { type: 'video', title: 'Marco conceptual del branding político', duration: '30 min' },
        { type: 'quiz', title: 'Quiz: Fundamentos del branding', duration: '15 min' },
        { type: 'video', title: 'Entrevista con experto en marketing político', duration: '40 min' },
        { type: 'assignment', title: 'Tarea: Análisis de marca política actual', duration: '2 horas' }
      ]
    },
    {
      title: 'Módulo 2: Análisis del Entorno Político',
      duration: '2 semanas',
      lessons: 7,
      content: [
        { type: 'video', title: 'Análisis PEST en contexto político', duration: '30 min' },
        { type: 'video', title: 'Mapeo del espectro político', duration: '25 min' },
        { type: 'reading', title: 'Herramientas de análisis competitivo', duration: '35 min' },
        { type: 'video', title: 'Segmentación electoral avanzada', duration: '35 min' },
        { type: 'video', title: 'Investigación de percepción ciudadana', duration: '30 min' },
        { type: 'quiz', title: 'Quiz: Análisis estratégico', duration: '20 min' },
        { type: 'assignment', title: 'Proyecto: Análisis de entorno electoral', duration: '3 horas' }
      ]
    },
    {
      title: 'Módulo 3: Estrategia de Posicionamiento',
      duration: '1.5 semanas',
      lessons: 6,
      content: [
        { type: 'video', title: 'Teorías de posicionamiento político', duration: '30 min' },
        { type: 'video', title: 'Identificación de espacios de oportunidad', duration: '28 min' },
        { type: 'reading', title: 'Casos de reposicionamiento exitoso', duration: '40 min' },
        { type: 'video', title: 'Matriz de posicionamiento electoral', duration: '25 min' },
        { type: 'quiz', title: 'Quiz: Estrategias de posicionamiento', duration: '15 min' },
        { type: 'assignment', title: 'Ejercicio: Mapa de posicionamiento', duration: '2 horas' }
      ]
    },
    {
      title: 'Módulo 4: Identidad y Arquitectura de Marca',
      duration: '1.5 semanas',
      lessons: 7,
      content: [
        { type: 'video', title: 'Componentes de identidad política', duration: '30 min' },
        { type: 'video', title: 'Desarrollo de propuesta de valor política', duration: '35 min' },
        { type: 'reading', title: 'Diseño de identidad visual política', duration: '30 min' },
        { type: 'video', title: 'Arquitectura de marca en coaliciones', duration: '25 min' },
        { type: 'video', title: 'Consistencia de marca multiplataforma', duration: '28 min' },
        { type: 'quiz', title: 'Quiz: Identidad de marca', duration: '15 min' },
        { type: 'assignment', title: 'Proyecto: Propuesta de identidad política', duration: '4 horas' }
      ]
    },
    {
      title: 'Módulo 5: Narrativa y Storytelling Político',
      duration: '1 semana',
      lessons: 6,
      content: [
        { type: 'video', title: 'Fundamentos del storytelling político', duration: '30 min' },
        { type: 'video', title: 'Construcción de narrativas coherentes', duration: '32 min' },
        { type: 'reading', title: 'Análisis de discursos políticos icónicos', duration: '45 min' },
        { type: 'video', title: 'Mensajes clave y talking points', duration: '25 min' },
        { type: 'quiz', title: 'Quiz: Narrativa política', duration: '15 min' },
        { type: 'assignment', title: 'Ejercicio: Desarrollo de narrativa', duration: '3 horas' }
      ]
    }
  ];

  const iconMap = {
    video: PlayCircle,
    reading: FileText,
    quiz: CheckCircle2,
    assignment: BookOpen
  };

  const colorMap = {
    video: 'text-blue-600',
    reading: 'text-purple-600',
    quiz: 'text-green-600',
    assignment: 'text-amber-600'
  };

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm">Contenido del Curso</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Módulos de Aprendizaje</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Contenido estructurado y progresivo con videos, lecturas y ejercicios prácticos
          </p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenModule(openModule === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-slate-900 mb-1">{module.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>{module.duration}</span>
                      <span>•</span>
                      <span>{module.lessons} lecciones</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openModule === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-3">
                      {module.content.map((item, idx) => {
                        const Icon = iconMap[item.type as keyof typeof iconMap];
                        const color = colorMap[item.type as keyof typeof colorMap];
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer group"
                          >
                            <Icon className={`w-5 h-5 ${color} flex-shrink-0`} />
                            <div className="flex-1">
                              <p className="text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</p>
                            </div>
                            <span className="text-sm text-slate-500">{item.duration}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
