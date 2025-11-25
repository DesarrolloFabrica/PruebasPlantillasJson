import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lightbulb, Image, Award, Sparkles, Heart, Brain } from 'lucide-react';

export function ConceptosClaveSection() {
  const [selectedConcept, setSelectedConcept] = useState(0);

  const conceptos = [
    {
      icon: Image,
      title: 'Imagen Política',
      color: 'blue',
      definicion: 'La representación mental y simbólica que el electorado construye sobre un candidato o partido, influenciada por discursos, gestos y apariciones.',
      caracteristicas: [
        'Construcción estratégica y consciente',
        'Dinámica y evolutiva en el tiempo',
        'Culturalmente contextual',
        'Influenciada por medios y redes sociales',
        'Moldeable mediante comunicación estratégica'
      ],
      profundizacion: 'Es una construcción estratégica, dinámica y culturalmente contextual que trasciende la mera apariencia física para convertirse en un conjunto de percepciones, valores y emociones asociadas al actor político.'
    },
    {
      icon: Award,
      title: 'Marca Política',
      color: 'purple',
      definicion: 'La identidad integral de un actor político, abarcando nombre, eslogan, colores, estilo comunicativo, narrativa ideológica y valores.',
      caracteristicas: [
        'Coherencia entre todos los elementos de identidad',
        'Consistencia en el tiempo y espacios',
        'Propósito a largo plazo definido',
        'Diferenciación clara de competidores',
        'Capacidad de generar fidelización'
      ],
      profundizacion: 'Busca coherencia, consistencia y un propósito a largo plazo para generar diferenciación y fidelización. Va más allá del logo para crear una experiencia integral con el votante.'
    },
    {
      icon: Sparkles,
      title: 'Ventaja Simbólica',
      color: 'amber',
      definicion: 'La capacidad de un candidato para apropiarse de valores, símbolos y significados culturales, destacando frente a la competencia.',
      caracteristicas: [
        'Apropiación de símbolos patrióticos o religiosos',
        'Conexión con valores culturales profundos',
        'Generación de resonancia afectiva',
        'Diferenciación a nivel emocional',
        'Legitimidad construida simbólicamente'
      ],
      profundizacion: 'Se construye sobre símbolos patrióticos, religiosos o emocionales que generan resonancia afectiva. Es la capacidad de encarnar significados que trascienden lo racional.'
    },
    {
      icon: Heart,
      title: 'Posicionamiento Emocional',
      color: 'rose',
      definicion: 'Estrategia que conecta al candidato con los sentimientos y aspiraciones profundas del electorado, utilizando storytelling, empatía y arquetipos.',
      caracteristicas: [
        'Uso intensivo de storytelling y narrativas',
        'Generación de empatía y conexión afectiva',
        'Empleo de arquetipos universales',
        'Movilización emocional del electorado',
        'Vínculos duraderos más allá de propuestas'
      ],
      profundizacion: 'Genera vínculos afectivos y moviliza el voto apelando a las emociones, aspiraciones y temores del votante. Va más allá de la razón para conectar con el corazón.'
    },
    {
      icon: Brain,
      title: 'Posicionamiento Racional',
      color: 'indigo',
      definicion: 'Enfoque que persuade al electorado con argumentos lógicos, cifras y propuestas concretas basadas en evidencia.',
      caracteristicas: [
        'Argumentación lógica y estructurada',
        'Uso de datos verificables y estadísticas',
        'Propuestas concretas y medibles',
        'Credenciales y trayectoria demostrable',
        'Transparencia y rendición de cuentas'
      ],
      profundizacion: 'Se apoya en datos verificables, credenciales y planes de gobierno, buscando la credibilidad y la transparencia. Apela al análisis racional del votante informado.'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300', gradient: 'from-blue-600 to-blue-400' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300', gradient: 'from-purple-600 to-purple-400' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-300', gradient: 'from-amber-600 to-amber-400' },
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-300', gradient: 'from-rose-600 to-rose-400' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-300', gradient: 'from-indigo-600 to-indigo-400' }
  };

  return (
    <section id="conceptos" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm">Conceptos Clave</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Conceptos Esenciales del Branding Político</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Definiendo el lenguaje de la persuasión electoral
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Concept Grid */}
          <div className="space-y-4">
            {conceptos.map((concepto, index) => {
              const colors = colorMap[concepto.color];
              const Icon = concepto.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => setSelectedConcept(index)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full p-6 rounded-2xl text-left transition-all ${
                    selectedConcept === index
                      ? `${colors.bg} border-2 ${colors.border} shadow-xl`
                      : 'bg-white border-2 border-slate-200 hover:border-slate-300 shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${selectedConcept === index ? `bg-gradient-to-br ${colors.gradient}` : 'bg-slate-100'} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${selectedConcept === index ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    <div>
                      <h3 className={`${selectedConcept === index ? colors.text : 'text-slate-900'} mb-1`}>
                        {concepto.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2">{concepto.definicion}</p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Concept Details */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 lg:sticky lg:top-24 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedConcept}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[conceptos[selectedConcept].color].gradient} rounded-2xl flex items-center justify-center mb-4`}>
                  {React.createElement(conceptos[selectedConcept].icon, {
                    className: 'w-8 h-8 text-white'
                  })}
                </div>
                
                <h3 className="text-2xl text-slate-900 mb-3">{conceptos[selectedConcept].title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm text-slate-500 mb-2">Definición</h4>
                  <p className="text-slate-700">{conceptos[selectedConcept].definicion}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm text-slate-500 mb-3">Características Clave</h4>
                  <ul className="space-y-2">
                    {conceptos[selectedConcept].caracteristicas.map((caracteristica, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colorMap[conceptos[selectedConcept].color].bg} mt-2`}></div>
                        <span className="text-sm text-slate-700">{caracteristica}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={`p-4 ${colorMap[conceptos[selectedConcept].color].bg} rounded-xl border ${colorMap[conceptos[selectedConcept].color].border}`}>
                  <h4 className="text-sm text-slate-700 mb-2">💡 Profundización</h4>
                  <p className="text-sm text-slate-700">{conceptos[selectedConcept].profundizacion}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
