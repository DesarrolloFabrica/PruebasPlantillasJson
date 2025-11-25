import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Users, TrendingUp, MessageSquare, Brain, Target } from 'lucide-react';

export function KeyConceptsSection() {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const concepts = [
    {
      icon: Target,
      title: 'Branding Político',
      color: 'blue',
      description: 'Proceso de construcción y gestión de la identidad de un candidato, partido o movimiento político.',
      details: [
        'Creación de una identidad visual coherente',
        'Desarrollo de narrativas políticas consistentes',
        'Gestión de la promesa de valor política',
        'Diferenciación respecto a competidores políticos'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Posicionamiento Estratégico',
      color: 'purple',
      description: 'Ubicación que ocupa una marca política en la mente del electorado respecto a sus competidores.',
      details: [
        'Mapeo del espectro político ideológico',
        'Identificación de espacios de oportunidad',
        'Análisis de fortalezas y debilidades',
        'Estrategias de diferenciación política'
      ]
    },
    {
      icon: Users,
      title: 'Segmentación Electoral',
      color: 'green',
      description: 'División del electorado en grupos homogéneos con características y necesidades similares.',
      details: [
        'Análisis demográfico y psicográfico',
        'Identificación de votantes objetivo',
        'Microtargeting electoral',
        'Personalización de mensajes políticos'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Narrativa Política',
      color: 'amber',
      description: 'Historia coherente que articula la visión, valores y propuestas de una marca política.',
      details: [
        'Construcción de storytelling político',
        'Desarrollo de mensajes clave',
        'Coherencia comunicacional multiplataforma',
        'Gestión de crisis narrativas'
      ]
    },
    {
      icon: Brain,
      title: 'Percepción Ciudadana',
      color: 'rose',
      description: 'Conjunto de creencias, opiniones y sentimientos del electorado hacia una marca política.',
      details: [
        'Medición de top of mind político',
        'Análisis de sentimiento ciudadano',
        'Tracking de reputación política',
        'Gestión de percepción pública'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Propuesta de Valor',
      color: 'indigo',
      description: 'Beneficios y soluciones únicas que una marca política ofrece al electorado.',
      details: [
        'Definición de ejes programáticos',
        'Comunicación de beneficios ciudadanos',
        'Diferenciación de propuestas',
        'Validación de viabilidad electoral'
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-300' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-300' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-300' }
  };

  return (
    <section id="concepts" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-slate-900 mb-4">Conceptos Clave</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explora los fundamentos teóricos del branding político moderno de forma interactiva
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Concept Cards */}
          <div className="grid grid-cols-2 gap-4">
            {concepts.map((concept, index) => {
              const colors = colorMap[concept.color];
              const Icon = concept.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedConcept(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-6 rounded-2xl text-left transition-all ${
                    selectedConcept === index
                      ? `${colors.bg} border-2 ${colors.border} shadow-lg`
                      : 'bg-white border-2 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${selectedConcept === index ? colors.text : 'text-slate-400'}`} />
                  <h3 className={`${selectedConcept === index ? colors.text : 'text-slate-900'}`}>
                    {concept.title}
                  </h3>
                </motion.button>
              );
            })}
          </div>

          {/* Concept Details */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedConcept}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 ${colorMap[concepts[selectedConcept].color].bg} rounded-2xl flex items-center justify-center mb-4`}>
                  {React.createElement(concepts[selectedConcept].icon, {
                    className: `w-8 h-8 ${colorMap[concepts[selectedConcept].color].text}`
                  })}
                </div>
                
                <h3 className="text-2xl text-slate-900 mb-3">{concepts[selectedConcept].title}</h3>
                <p className="text-slate-600 mb-6">{concepts[selectedConcept].description}</p>
                
                <h4 className="text-slate-900 mb-3">Elementos clave:</h4>
                <ul className="space-y-2">
                  {concepts[selectedConcept].details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${colorMap[concepts[selectedConcept].color].bg} mt-2`}></div>
                      <span className="text-slate-700">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
