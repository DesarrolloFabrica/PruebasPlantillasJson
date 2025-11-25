import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, ChevronLeft, ChevronRight, TrendingUp, AlertCircle } from 'lucide-react';

export function CaseStudiesSection() {
  const [currentCase, setCurrentCase] = useState(0);

  const cases = [
    {
      type: 'success',
      title: 'Barack Obama 2008: "Yes We Can"',
      candidate: 'Barack Obama',
      strategy: 'Branding de esperanza y cambio',
      description: 'La campaña de Obama revolucionó el marketing político digital con una estrategia de branding coherente que combinó diseño visual icónico, narrativa inspiradora y uso innovador de redes sociales.',
      keyPoints: [
        'Logo icónico simple y memorable (sol naciente)',
        'Mensaje consistente de cambio y esperanza',
        'Primera campaña en dominar redes sociales',
        'Microdonaciones y base de datos masiva',
        'Storytelling centrado en ciudadanos ordinarios'
      ],
      results: 'Victoria histórica con 365 votos electorales y movilización sin precedentes de jóvenes votantes.',
      color: 'blue'
    },
    {
      type: 'success',
      title: 'Jacinda Ardern: Liderazgo Empático',
      candidate: 'Jacinda Ardern',
      strategy: 'Branding de empatía y autenticidad',
      description: 'Ardern construyó una marca política basada en autenticidad, compasión y liderazgo empático, particularmente visible durante crisis como el ataque de Christchurch y COVID-19.',
      keyPoints: [
        'Comunicación directa y transparente',
        'Presencia activa en redes sociales',
        'Gestión humanizada de crisis',
        'Equilibrio entre firmeza y empatía',
        'Rompimiento de estereotipos de liderazgo'
      ],
      results: 'Reelección con mayoría absoluta en 2020, primera vez en Nueva Zelanda desde 1996.',
      color: 'green'
    },
    {
      type: 'failure',
      title: 'Hillary Clinton 2016: Falta de Autenticidad',
      candidate: 'Hillary Clinton',
      strategy: 'Intentos múltiples de reposicionamiento',
      description: 'A pesar de su experiencia, Clinton enfrentó problemas de branding por falta de narrativa coherente, múltiples intentos de reposicionamiento y percepción de inautenticidad.',
      keyPoints: [
        'Múltiples cambios de mensaje y estrategia',
        'Dificultad para conectar emocionalmente',
        'Subestimación de la importancia digital',
        'Falta de narrativa unificadora clara',
        'Problemas de gestión de percepción'
      ],
      results: 'Derrota electoral a pesar de ganar voto popular, resaltando importancia del posicionamiento estratégico.',
      color: 'red'
    },
    {
      type: 'success',
      title: 'Emmanuel Macron: Disrupción del Sistema',
      candidate: 'Emmanuel Macron',
      strategy: 'Branding anti-establishment desde el centro',
      description: 'Macron creó un nuevo movimiento político posicionándose como outsider centrista, renovador y pro-europeo, rompiendo el bipartidismo tradicional francés.',
      keyPoints: [
        'Creación de movimiento nuevo "En Marche"',
        'Posicionamiento centrista innovador',
        'Narrativa de renovación generacional',
        'Campaña digital sofisticada',
        'Diferenciación clara de establishment'
      ],
      results: 'Victoria en primera vuelta y presidencia con movimiento creado apenas un año antes.',
      color: 'purple'
    }
  ];

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCaseData = cases[currentCase];

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <Book className="w-4 h-4" />
            <span className="text-sm">Casos de Estudio</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Aprende de la Historia Real</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Analiza campañas políticas exitosas y fallidas para extraer lecciones prácticas
          </p>
        </motion.div>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCase}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-8 lg:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                {currentCaseData.type === 'success' ? (
                  <div className="px-4 py-2 bg-green-100 text-green-700 rounded-full flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Caso de Éxito</span>
                  </div>
                ) : (
                  <div className="px-4 py-2 bg-red-100 text-red-700 rounded-full flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">Lecciones Aprendidas</span>
                  </div>
                )}
              </div>

              <h3 className="text-3xl text-slate-900 mb-2">{currentCaseData.title}</h3>
              <p className="text-lg text-purple-600 mb-6">{currentCaseData.strategy}</p>
              <p className="text-slate-700 mb-8">{currentCaseData.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-slate-900 mb-4">Elementos Clave:</h4>
                  <ul className="space-y-3">
                    {currentCaseData.keyPoints.map((point, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-purple-600 text-sm">{idx + 1}</span>
                        </div>
                        <span className="text-slate-700">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                  <h4 className="text-slate-900 mb-4">Resultados:</h4>
                  <p className="text-slate-700">{currentCaseData.results}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between p-6 border-t border-slate-200 bg-slate-50">
            <button
              onClick={prevCase}
              className="flex items-center gap-2 px-4 py-2 bg-white text-slate-700 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>

            <div className="flex gap-2">
              {cases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentCase(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentCase ? 'bg-purple-600 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextCase}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
