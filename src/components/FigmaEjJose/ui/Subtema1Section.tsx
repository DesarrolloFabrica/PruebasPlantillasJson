import React from 'react';
import { motion } from 'motion/react';
import { Layers, Zap, MessageCircle, Eye } from 'lucide-react';

export function Subtema1Section() {
  return (
    <section id="subtema1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Layers className="w-4 h-4" />
            <span className="text-sm">Subtema 1</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">El Poder Transformador del Branding Político</h2>
          <p className="text-xl text-slate-600 max-w-4xl">
            Más allá de una simple identidad visual: un activo estratégico
          </p>
        </motion.div>

        {/* Introducción Conceptual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 mb-6">
              En el <span className="text-blue-600">panorama político actual</span>, una marca sólida para un 
              candidato o partido es un factor diferenciador crucial. No se trata solo de un logo o un eslogan, 
              sino de la construcción de una <span className="text-purple-600">narrativa coherente y emocional</span> que 
              resuene con los votantes.
            </p>
            <p className="text-slate-700 mb-6">
              Este módulo introduce la importancia de una imagen política bien gestionada, donde el relato, 
              la consistencia del mensaje y la simbología crean una <span className="text-blue-600">experiencia 
              perceptiva única</span>.
            </p>
          </div>
        </motion.div>

        {/* Elementos Clave del Branding Político */}
        <div className="mb-16">
          <h3 className="text-2xl text-slate-900 mb-8">Elementos Fundamentales del Branding Político</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Eye,
                titulo: 'Construcción de Imagen Sólida y Coherente',
                descripcion: 'Una imagen política efectiva no es accidental; es el resultado de decisiones estratégicas conscientes sobre cómo presentar al candidato en todos los puntos de contacto con el electorado.',
                puntos: [
                  'Consistencia visual en todos los materiales',
                  'Alineación entre discurso y comportamiento',
                  'Gestión cuidadosa de apariciones públicas',
                  'Control de la narrativa en medios digitales'
                ]
              },
              {
                icon: MessageCircle,
                titulo: 'El Relato Político como Columna Vertebral',
                descripcion: 'El storytelling político es la herramienta que transforma hechos y propuestas en una narrativa memorable que conecta emocionalmente con el votante.',
                puntos: [
                  'Construcción de un arco narrativo coherente',
                  'Identificación de un héroe (el pueblo o el candidato)',
                  'Definición clara del conflicto y la solución',
                  'Uso de metáforas y símbolos culturales'
                ]
              },
              {
                icon: Zap,
                titulo: 'Consistencia en los Mensajes',
                descripcion: 'La repetición estratégica de mensajes clave, adaptados a diferentes audiencias pero manteniendo la esencia, es fundamental para el posicionamiento.',
                puntos: [
                  'Definición de 3-5 mensajes nucleares',
                  'Adaptación del tono sin cambiar el contenido',
                  'Disciplina comunicacional del equipo',
                  'Refuerzo constante de la identidad'
                ]
              },
              {
                icon: Layers,
                titulo: 'Simbología y Experiencia Perceptiva',
                descripcion: 'Los símbolos políticos—colores, gestos, lugares—crean una experiencia que va más allá de lo verbal, generando asociaciones emocionales profundas.',
                puntos: [
                  'Selección estratégica de colores corporativos',
                  'Uso intencional de símbolos patrios o religiosos',
                  'Gestualidad y lenguaje corporal consistente',
                  'Escenografía de eventos y actos públicos'
                ]
              }
            ].map((elemento, index) => {
              const Icon = elemento.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-2">{elemento.titulo}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{elemento.descripcion}</p>
                  <ul className="space-y-2">
                    {elemento.puntos.map((punto, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{punto}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Transformación de Percepciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl mb-6">Transformar Percepciones en Conexiones Emocionales</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 mb-6">
                El objetivo último del branding político no es simplemente ser conocido, sino 
                generar <span className="text-white">conexiones emocionales profundas</span> que 
                se traduzcan en lealtad, movilización y, finalmente, en votos.
              </p>
              <p className="text-white/90">
                Esto se logra cuando todos los elementos del branding trabajan en armonía para 
                crear una experiencia coherente que resuene con los valores, aspiraciones y 
                temores del electorado objetivo.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-lg mb-4">Del Logo a la Experiencia</h4>
              <div className="space-y-3">
                {[
                  'Logo + Colores → Reconocimiento',
                  'Eslogan + Relato → Identificación',
                  'Consistencia + Autenticidad → Confianza',
                  'Conexión Emocional → Movilización',
                  'Movilización → Victoria Electoral'
                ].map((paso, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-white/90 text-sm">{paso}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
