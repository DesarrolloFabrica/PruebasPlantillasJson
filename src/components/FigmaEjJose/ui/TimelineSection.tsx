import React from 'react';
import { motion } from 'motion/react';
import { Calendar, CheckCircle } from 'lucide-react';

export function TimelineSection() {
  const timeline = [
    {
      week: 'Semana 1-2',
      title: 'Fundamentos del Branding Político',
      topics: [
        'Introducción al marketing político',
        'Diferencias entre branding comercial y político',
        'Historia del branding político moderno',
        'Marco teórico y conceptual'
      ]
    },
    {
      week: 'Semana 3-4',
      title: 'Análisis y Posicionamiento',
      topics: [
        'Mapeo del espectro político',
        'Análisis de competencia electoral',
        'Metodologías de posicionamiento',
        'Identificación de espacios de oportunidad'
      ]
    },
    {
      week: 'Semana 5-6',
      title: 'Estrategia de Marca Política',
      topics: [
        'Desarrollo de identidad visual política',
        'Construcción de narrativas políticas',
        'Definición de propuesta de valor',
        'Arquitectura de marca política'
      ]
    },
    {
      week: 'Semana 7-8',
      title: 'Implementación y Medición',
      topics: [
        'Estrategias de comunicación digital',
        'Gestión de crisis de reputación',
        'Métricas y KPIs políticos',
        'Proyecto final integrador'
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">Roadmap del Curso</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Cronograma de Aprendizaje</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Un viaje estructurado de 8 semanas para dominar el branding político
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 hidden md:block"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 top-8 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 hidden md:block"></div>

                <div className="md:ml-20 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-4 py-1 bg-blue-600 text-white text-sm rounded-full">{item.week}</span>
                    <h3 className="text-2xl text-slate-900">{item.title}</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {item.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
