import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Flag, Heart, Star } from 'lucide-react';

export function Subtema3Section() {
  return (
    <section id="subtema3" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Subtema 3</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Diferenciación y Ventaja Simbólica en la Contienda</h2>
          <p className="text-xl text-slate-600 max-w-4xl">
            Destacar en un entorno saturado: el poder de los símbolos
          </p>
        </motion.div>

        {/* Introducción Conceptual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 mb-4">
              En <span className="text-amber-600">democracias competitivas</span>, la diferenciación simbólica 
              es crucial. A diferencia de las propuestas racionales, esta estrategia apela a 
              <span className="text-orange-600"> significados y emociones colectivas</span>.
            </p>
            <p className="text-slate-700 mb-4">
              <span className="text-amber-600">Roland Barthes</span> nos enseña cómo el mito político transforma 
              lo cotidiano en símbolo. El marketing emocional (Marc Gobé) enfatiza los vínculos afectivos, 
              mientras que el capital simbólico (Bourdieu) otorga legitimidad a través de signos.
            </p>
            <p className="text-slate-700">
              La semiótica política analiza el impacto de elementos visuales y lemas, convirtiendo los símbolos 
              en herramientas de poder y banderas de identidad.
            </p>
          </div>
        </motion.div>

        {/* Teorías y Autores */}
        <div className="mb-16">
          <h3 className="text-2xl text-slate-900 mb-8">Fundamentos Teóricos de la Diferenciación Simbólica</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                autor: 'Roland Barthes',
                teoria: 'Mitologías Políticas',
                concepto: 'El mito político transforma significados ordinarios en extraordinarios, creando narrativas que trascienden la racionalidad.',
                ejemplo: 'Un candidato que se presenta como "padre de la nación" activa arquetipos mitológicos profundos.'
              },
              {
                autor: 'Marc Gobé',
                teoria: 'Marketing Emocional',
                concepto: 'Las marcas exitosas (políticas o comerciales) generan vínculos emocionales que van más allá de características funcionales.',
                ejemplo: 'Obama no vendió propuestas: vendió esperanza, cambio y pertenencia a un movimiento.'
              },
              {
                autor: 'Pierre Bourdieu',
                teoria: 'Capital Simbólico',
                concepto: 'Los símbolos no son decorativos; son formas de acumular prestigio y legitimidad que se traducen en poder real.',
                ejemplo: 'Un candidato que controla símbolos nacionales (bandera, himno) acumula capital simbólico.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-orange-600 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-900">{item.autor}</h4>
                    <p className="text-xs text-amber-600">{item.teoria}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-700 mb-3">{item.concepto}</p>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-xs text-slate-600"><span className="text-amber-600">Ejemplo:</span> {item.ejemplo}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estrategias de Diferenciación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-slate-900 mb-8">Estrategias de Diferenciación Simbólica</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Flag,
                titulo: 'Apropiación de Símbolos Nacionales',
                descripcion: 'Asociarse con banderas, himnos, héroes patrios y fechas históricas genera legitimidad automática.',
                tacticas: [
                  'Uso estratégico de colores de la bandera nacional',
                  'Referencias constantes a héroes históricos',
                  'Escenografía con símbolos patrios',
                  'Narrativas que conectan con el origen nacional'
                ]
              },
              {
                icon: Heart,
                titulo: 'Conexión con Valores Culturales Profundos',
                descripcion: 'Encarnar valores compartidos por la mayoría: familia, trabajo, honestidad, religión, tradición.',
                tacticas: [
                  'Storytelling centrado en valores familiares',
                  'Uso de lenguaje religioso o espiritual',
                  'Énfasis en ética del trabajo y esfuerzo',
                  'Respeto por tradiciones y costumbres locales'
                ]
              },
              {
                icon: Sparkles,
                titulo: 'Generación de Resonancia Afectiva',
                descripcion: 'Crear mensajes que toquen fibras emocionales profundas: orgullo, esperanza, indignación, pertenencia.',
                tacticas: [
                  'Identificación de emociones dominantes del electorado',
                  'Narrativas que amplifican esas emociones',
                  'Música, imágenes y símbolos emocionalmente cargados',
                  'Creación de rituales y momentos memorables'
                ]
              },
              {
                icon: Star,
                titulo: 'Diferenciación Visual y Verbal',
                descripcion: 'Elementos únicos e identificables: colores distintivos, eslóganes memorables, gestos icónicos.',
                tacticas: [
                  'Paleta de colores que no usa la competencia',
                  'Eslogan corto, memorable y diferenciador',
                  'Gestos o señas que se vuelvan icónicos',
                  'Tono de voz distintivo en comunicación'
                ]
              }
            ].map((estrategia, index) => {
              const Icon = estrategia.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-6 border border-amber-200"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 mb-2">{estrategia.titulo}</h4>
                      <p className="text-sm text-slate-600">{estrategia.descripcion}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-100">
                    <p className="text-xs text-amber-600 mb-2">Tácticas:</p>
                    <ul className="space-y-1">
                      {estrategia.tacticas.map((tactica, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <div className="w-1 h-1 bg-amber-600 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{tactica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Semiótica Política */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl mb-6">Semiótica Política: El Análisis de los Signos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 mb-6">
                La <span className="text-white">semiótica política</span> estudia cómo los signos 
                (palabras, imágenes, gestos, colores) comunican significados profundos más allá 
                de su contenido literal.
              </p>
              <h4 className="text-white mb-4">Niveles de Significación:</h4>
              <div className="space-y-3">
                {[
                  { nivel: 'Denotación', desc: 'Significado literal del signo (una bandera es un trozo de tela)' },
                  { nivel: 'Connotación', desc: 'Significado cultural asociado (la bandera representa la nación)' },
                  { nivel: 'Mito', desc: 'Naturalización del signo (la bandera "es" la patria, no solo la representa)' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-3">
                    <div className="text-amber-400 text-sm mb-1">{item.nivel}</div>
                    <div className="text-white/80 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white mb-4">Elementos Visuales y Su Impacto:</h4>
              <div className="space-y-3">
                {[
                  { elemento: 'Colores', impacto: 'Rojo = pasión/revolución, Azul = confianza/estabilidad, Verde = esperanza/ecología' },
                  { elemento: 'Formas', impacto: 'Círculos = unidad/inclusión, Flechas = progreso/dirección, Estrellas = excelencia/aspiración' },
                  { elemento: 'Tipografía', impacto: 'Sans-serif = modernidad, Serif = tradición, Bold = fuerza/decisión' },
                  { elemento: 'Gestos', impacto: 'Puño alzado = lucha, Manos abiertas = transparencia, Abrazo = empatía' }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-amber-400 pl-3">
                    <div className="text-white text-sm">{item.elemento}</div>
                    <div className="text-white/60 text-xs">{item.impacto}</div>
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
