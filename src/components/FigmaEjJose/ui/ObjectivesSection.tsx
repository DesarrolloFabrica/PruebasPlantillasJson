import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2 } from 'lucide-react';

export function ObjectivesSection() {
  const objectives = [
    {
      title: 'Fundamentos del Branding Político',
      description: 'Comprender los principios esenciales de la construcción de marca en el ámbito político y su diferenciación con el branding comercial.'
    },
    {
      title: 'Estrategias de Posicionamiento',
      description: 'Dominar técnicas avanzadas de posicionamiento político utilizando análisis de datos y segmentación de audiencias.'
    },
    {
      title: 'Análisis de Percepción Pública',
      description: 'Implementar metodologías de medición y análisis de la percepción ciudadana mediante herramientas digitales.'
    },
    {
      title: 'Gestión de Identidad Política',
      description: 'Desarrollar sistemas coherentes de identidad visual y comunicacional para candidatos y movimientos políticos.'
    },
    {
      title: 'Marketing Digital Político',
      description: 'Aplicar estrategias de marketing digital específicas para campañas políticas y construcción de reputación.'
    },
    {
      title: 'Casos de Éxito y Fracaso',
      description: 'Analizar casos reales de branding político exitoso y fracasado para extraer lecciones prácticas aplicables.'
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Target className="w-4 h-4" />
            <span className="text-sm">Objetivos de Aprendizaje</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">¿Qué aprenderás en este curso?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Desarrollarás habilidades clave para crear, gestionar y posicionar marcas políticas efectivas en el entorno digital actual.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-2xl border border-slate-200 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">{objective.title}</h3>
                  <p className="text-sm text-slate-600">{objective.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
