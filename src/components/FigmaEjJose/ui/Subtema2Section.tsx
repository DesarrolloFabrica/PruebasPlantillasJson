import React from 'react';
import { motion } from 'motion/react';
import { User, BookOpen, Network, Search } from 'lucide-react';

export function Subtema2Section() {
  const teoricos = [
    {
      nombre: 'Giovanni Sartori',
      aporte: 'Teoría del Homo Videns',
      descripcion: 'Sartori explica cómo la imagen política domina sobre el contenido racional en la era televisiva y digital, donde el votante es influenciado más por lo que ve que por lo que lee.'
    },
    {
      nombre: 'Erving Goffman',
      aporte: 'Teoría del Framing',
      descripcion: 'El framing explica cómo los marcos interpretativos determinan cómo percibimos la realidad política. Un mismo hecho puede ser presentado de formas radicalmente diferentes.'
    },
    {
      nombre: 'George Lakoff',
      aporte: 'Marcos Mentales y Metáforas',
      descripcion: 'Lakoff demuestra que las metáforas no son meros adornos retóricos, sino estructuras cognitivas que determinan cómo pensamos sobre política.'
    },
    {
      nombre: 'Pierre Bourdieu',
      aporte: 'Capital Simbólico',
      descripcion: 'El capital simbólico es la acumulación de prestigio, honor y reconocimiento que otorga legitimidad política. No es material, pero es fundamental para el poder.'
    }
  ];

  return (
    <section id="subtema2" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <User className="w-4 h-4" />
            <span className="text-sm">Subtema 2</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Construcción y Gestión Estratégica de la Imagen</h2>
          <p className="text-xl text-slate-600 max-w-4xl">
            De la percepción a la realidad política: autores y teorías fundamentales
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
              La <span className="text-blue-600">imagen del candidato</span> es un artefacto estratégico, una 
              construcción simbólica diseñada para generar empatía y credibilidad. No es lo que el candidato 
              "es", sino lo que el electorado <span className="text-purple-600">percibe que es</span>.
            </p>
            <p className="text-slate-700 mb-4">
              Teóricos como Giovanni Sartori y la teoría del encuadre (framing) de Goffman y Lakoff explican 
              cómo se moldea la percepción pública. La reputación, vista como <span className="text-blue-600">capital 
              simbólico</span> por Pierre Bourdieu, es clave para la legitimidad.
            </p>
            <p className="text-slate-700">
              Se utilizan herramientas de investigación como focus groups y análisis de redes sociales para 
              ajustar la estrategia, buscando una comunicación transversal y un marketing relacional que 
              construya confianza a largo plazo.
            </p>
          </div>
        </motion.div>

        {/* Teóricos y Teorías */}
        <div className="mb-16">
          <h3 className="text-2xl text-slate-900 mb-8">Fundamentos Teóricos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {teoricos.map((teorico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-1">{teorico.nombre}</h4>
                    <p className="text-sm text-purple-600">{teorico.aporte}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm">{teorico.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Componentes de la Gestión de Imagen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl text-slate-900 mb-8">Componentes de la Gestión Estratégica</h3>
          <div className="grid lg:grid-cols-4 gap-4">
            {[
              {
                icon: User,
                titulo: 'Imagen como Construcción Simbólica',
                descripcion: 'Narrativa coherente que articula identidad, valores y propósito del candidato'
              },
              {
                icon: BookOpen,
                titulo: 'Teoría del Framing',
                descripcion: 'Encuadrar la percepción: cómo presentar los hechos para moldear interpretaciones'
              },
              {
                icon: Network,
                titulo: 'Capital Simbólico',
                descripcion: 'Acumulación de prestigio, legitimidad y credibilidad como activo político'
              },
              {
                icon: Search,
                titulo: 'Investigación y Ajuste',
                descripcion: 'Focus groups, social listening y analítica para gestión dinámica de imagen'
              }
            ].map((componente, index) => {
              const Icon = componente.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-slate-900 mb-2 text-sm">{componente.titulo}</h4>
                  <p className="text-xs text-slate-600">{componente.descripcion}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Marketing Relacional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl mb-6">Marketing Relacional: Construir Confianza a Largo Plazo</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/90 mb-6">
                A diferencia del marketing transaccional (enfocado en ganar una elección puntual), 
                el <span className="text-white">marketing relacional</span> busca construir vínculos 
                duraderos con el electorado basados en confianza, transparencia y coherencia.
              </p>
              <h4 className="text-white mb-3">Principios Clave:</h4>
              <ul className="space-y-2 text-sm">
                {[
                  'Comunicación bidireccional continua',
                  'Escucha activa de necesidades ciudadanas',
                  'Coherencia entre promesas y acciones',
                  'Transparencia y rendición de cuentas',
                  'Construcción de comunidad, no solo votantes'
                ].map((principio, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                    <span className="text-white/80">{principio}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-lg mb-4">Herramientas de Investigación</h4>
              <div className="space-y-3">
                {[
                  { herramienta: 'Focus Groups', uso: 'Profundizar en percepciones cualitativas' },
                  { herramienta: 'Encuestas Cuantitativas', uso: 'Medir indicadores de imagen' },
                  { herramienta: 'Social Listening', uso: 'Monitorear conversaciones digitales' },
                  { herramienta: 'Análisis de Sentimiento', uso: 'Evaluar tono emocional de menciones' },
                  { herramienta: 'Testing A/B', uso: 'Optimizar mensajes y creatividades' }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-purple-400 pl-3">
                    <div className="text-white text-sm">{item.herramienta}</div>
                    <div className="text-white/60 text-xs">{item.uso}</div>
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
