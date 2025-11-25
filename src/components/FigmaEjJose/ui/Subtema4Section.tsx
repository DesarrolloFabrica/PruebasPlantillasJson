import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Brain, Scale, Zap } from 'lucide-react';

export function Subtema4Section() {
  const [selectedApproach, setSelectedApproach] = useState(0);

  const enfoques = [
    {
      tipo: 'Posicionamiento Emocional',
      icon: Heart,
      color: 'rose',
      descripcion: 'Conecta con sentimientos, aspiraciones y temores profundos del electorado',
      caracteristicas: [
        'Uso intensivo de storytelling y narrativas personales',
        'Generación de empatía a través de experiencias compartidas',
        'Empleo de arquetipos universales (héroe, cuidador, rebelde)',
        'Movilización emocional: esperanza, orgullo, indignación',
        'Construcción de comunidad y sentido de pertenencia'
      ],
      estrategias: [
        { nombre: 'El Viaje del Héroe', desc: 'Narrar la trayectoria del candidato como superación de obstáculos' },
        { nombre: 'Testimonios Emotivos', desc: 'Historias reales de ciudadanos impactados por propuestas' },
        { nombre: 'Simbolismo Visual', desc: 'Imágenes que evocan emociones: familia, patria, futuro' },
        { nombre: 'Música y Arte', desc: 'Uso de canciones y elementos artísticos emocionalmente cargados' }
      ]
    },
    {
      tipo: 'Posicionamiento Racional',
      icon: Brain,
      color: 'blue',
      descripcion: 'Persuade con argumentos lógicos, datos verificables y propuestas concretas',
      caracteristicas: [
        'Argumentación estructurada y basada en evidencia',
        'Uso de estadísticas, cifras y datos verificables',
        'Presentación de planes de gobierno detallados',
        'Énfasis en credenciales, trayectoria y experiencia',
        'Transparencia y apertura a escrutinio público'
      ],
      estrategias: [
        { nombre: 'White Papers', desc: 'Documentos técnicos que detallan propuestas con rigor' },
        { nombre: 'Debates Sustantivos', desc: 'Participación en foros donde se discuten ideas en profundidad' },
        { nombre: 'Infografías de Datos', desc: 'Visualización clara de estadísticas y proyecciones' },
        { nombre: 'Endorsements Técnicos', desc: 'Apoyo de expertos y académicos en áreas clave' }
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
    rose: { bg: 'bg-rose-100', text: 'text-rose-600', gradient: 'from-rose-600 to-rose-400', border: 'border-rose-200' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-400', border: 'border-blue-200' }
  };

  return (
    <section id="subtema4" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <Scale className="w-4 h-4" />
            <span className="text-sm">Subtema 4</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Posicionamiento: El Equilibrio entre Lógica y Emoción</h2>
          <p className="text-xl text-slate-600 max-w-4xl">
            Estrategias duales para captar a todo el electorado
          </p>
        </motion.div>

        {/* Introducción Teórica */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 mb-4">
              El <span className="text-blue-600">posicionamiento político</span> se logra manipulando lo que ya 
              existe en la mente del votante (Ries y Trout). Las estrategias pueden ser puramente emocionales, 
              buscando vínculos afectivos a través de historias (Damasio), o racionales, apoyadas en datos y programas.
            </p>
            <p className="text-slate-700 mb-4">
              Sin embargo, la <span className="text-purple-600">combinación de ambas es la más efectiva</span>. 
              El modelo de dual processing (Petty y Cacioppo) sugiere que las campañas exitosas apelan a la 
              <span className="text-blue-600"> ruta central</span> (racional) y 
              <span className="text-rose-600"> periférica</span> (emocional).
            </p>
            <p className="text-slate-700">
              Casos como la campaña de Barack Obama ('Yes, we can') demuestran cómo un relato coherente y 
              potente que equilibra emoción y lógica moviliza y consolida el liderazgo.
            </p>
          </div>
        </motion.div>

        {/* Comparación de Enfoques */}
        <div className="mb-16">
          <h3 className="text-2xl text-slate-900 mb-8">Dos Enfoques Complementarios</h3>
          
          <div className="flex gap-4 mb-6">
            {enfoques.map((enfoque, index) => {
              const Icon = enfoque.icon;
              const colors = colorMap[enfoque.color];
              return (
                <button
                  key={index}
                  onClick={() => setSelectedApproach(index)}
                  className={`flex-1 p-6 rounded-xl text-left transition-all ${
                    selectedApproach === index
                      ? `bg-gradient-to-br ${colors.gradient} text-white shadow-xl`
                      : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${selectedApproach === index ? 'text-white' : colors.text}`} />
                  <h4 className={`mb-2 ${selectedApproach === index ? 'text-white' : 'text-slate-900'}`}>
                    {enfoque.tipo}
                  </h4>
                  <p className={`text-sm ${selectedApproach === index ? 'text-white/80' : 'text-slate-600'}`}>
                    {enfoque.descripcion}
                  </p>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedApproach}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg text-slate-900 mb-4">Características</h4>
                  <ul className="space-y-2">
                    {enfoques[selectedApproach].caracteristicas.map((caracteristica, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${colorMap[enfoques[selectedApproach].color].bg} mt-2`}></div>
                        <span className="text-sm text-slate-700">{caracteristica}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg text-slate-900 mb-4">Estrategias Específicas</h4>
                  <div className="space-y-3">
                    {enfoques[selectedApproach].estrategias.map((estrategia, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 ${colorMap[enfoques[selectedApproach].color].bg} rounded-lg border ${colorMap[enfoques[selectedApproach].color].border}`}
                      >
                        <div className={`${colorMap[enfoques[selectedApproach].color].text} mb-1 text-sm`}>
                          {estrategia.nombre}
                        </div>
                        <div className="text-xs text-slate-600">{estrategia.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Teoría del Dual Processing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200"
        >
          <h3 className="text-2xl text-slate-900 mb-6">Modelo de Dual Processing (Petty & Cacioppo)</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg text-blue-600 mb-4">Ruta Central (Pensamiento Profundo)</h4>
              <p className="text-sm text-slate-700 mb-4">
                El votante analiza cuidadosamente los argumentos, evalúa evidencias y considera 
                lógicamente las propuestas. Requiere alta motivación y capacidad cognitiva.
              </p>
              <div className="space-y-2">
                {[
                  'Procesamiento elaborado de información',
                  'Análisis de calidad de argumentos',
                  'Cambio de actitud duradero',
                  'Resistente a contra-argumentación'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="text-lg text-rose-600 mb-4">Ruta Periférica (Pensamiento Superficial)</h4>
              <p className="text-sm text-slate-700 mb-4">
                El votante se basa en señales simples: atractivo del candidato, número de argumentos, 
                endorsements. Requiere menos esfuerzo cognitivo.
              </p>
              <div className="space-y-2">
                {[
                  'Procesamiento rápido y automático',
                  'Basado en heurísticas y atajos mentales',
                  'Cambio de actitud menos duradero',
                  'Más vulnerable a influencias'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-1 h-1 bg-rose-600 rounded-full mt-2"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Caso Obama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl mb-2">Caso de Estudio: Barack Obama "Yes, We Can" (2008)</h3>
              <p className="text-white/80">El equilibrio perfecto entre emoción y racionalidad</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-rose-400 mb-4">Dimensión Emocional</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Narrativa de esperanza y cambio generacional',
                  'Storytelling personal: de Kenia a la Casa Blanca',
                  'Eslogan movilizador: "Yes, We Can" (empoderamiento colectivo)',
                  'Música y videos virales (will.i.am)',
                  'Comunidad de millones sintiendo parte del movimiento'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2"></div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-blue-400 mb-4">Dimensión Racional</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Propuestas detalladas de reforma del sistema de salud',
                  'Plan económico claro para superar la crisis de 2008',
                  'Trayectoria académica impecable (Harvard Law Review)',
                  'Debates sustantivos sobre política exterior',
                  'Uso de datos y analytics para optimizar campaña'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"></div>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-lg">
            <p className="text-sm text-white/90">
              <span className="text-white">Resultado:</span> Obama no solo ganó; creó un movimiento. 
              Su campaña demostró que emoción y razón no son opuestos, sino complementarios. El relato 
              emocional atrajo la atención y generó entusiasmo, mientras que las propuestas racionales 
              consolidaron la confianza y credibilidad necesarias para ganar.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
