import React from 'react';
import { motion } from 'motion/react';
import { BookMarked, Lightbulb, ExternalLink, CheckCircle2 } from 'lucide-react';
import logoWatermark from 'figma:asset/01177cfd8b308cc1d8a93eb486010b7e48a64164.png';

export function ConclusionesSection() {
  const conclusiones = [
    {
      titulo: 'Branding como Activo Estratégico',
      texto: 'El branding político va más allá del logo y eslogan; es la construcción de una experiencia perceptiva coherente que articula relato, simbología y consistencia comunicacional para transformar percepciones en conexiones emocionales.'
    },
    {
      titulo: 'Fundamentos Teóricos Sólidos',
      texto: 'Las teorías de framing (Goffman, Lakoff), capital simbólico (Bourdieu), semiótica (Barthes) y marketing emocional (Gobé) proporcionan el marco conceptual para entender cómo se construye y gestiona la imagen política efectivamente.'
    },
    {
      titulo: 'Diferenciación Simbólica como Ventaja',
      texto: 'En entornos competitivos saturados, la apropiación estratégica de símbolos culturales, patrióticos o religiosos genera resonancia afectiva profunda y legitimidad que trasciende propuestas racionales.'
    },
    {
      titulo: 'Dual Processing: Emoción y Razón',
      texto: 'Las campañas más efectivas (como Obama 2008) equilibran posicionamiento emocional (storytelling, arquetipos, comunidad) con racional (datos, propuestas, credenciales), apelando simultáneamente a ambas rutas cognitivas.'
    },
    {
      titulo: 'Gestión Dinámica de Imagen',
      texto: 'La imagen política requiere investigación continua (focus groups, social listening, analytics) y ajuste estratégico basado en feedback del electorado, no es una construcción estática sino dinámica.'
    },
    {
      titulo: 'Responsabilidad Democrática',
      texto: 'El branding político no es manipulación sino articulación estratégica. Usado éticamente, puede canalizar aspiraciones ciudadanas genuinas hacia proyectos políticos viables que fortalezcan la democracia.'
    }
  ];

  const bibliografia = [
    {
      categoria: 'Libros Fundamentales',
      referencias: [
        'Issenberg, S. (2012). "The Victory Lab: The Secret Science of Winning Campaigns". Crown Publishers.',
        'Scammell, M. (2014). "Consumer Democracy: The Marketing of Politics". Cambridge University Press.',
        'French, S. L. & Smith, G. (2010). "Branding the Candidate: Marketing Strategies to Win Your Vote". Praeger.',
        'Needham, C. (2005). "Brand Leaders: Clinton, Blair and the Limitations of the Permanent Campaign". Political Studies, 53(2).'
      ]
    },
    {
      categoria: 'Artículos Académicos',
      referencias: [
        'Smith, G. & French, A. (2009). "The Political Brand: A Consumer Perspective". Marketing Theory, 9(2), 209-226.',
        'Cosgrove, K. M. (2007). "Branded Conservatives: How the Brand Brought the Right from the Fringes to the Center of American Politics". Peter Lang.',
        'Newman, B. I. (1999). "The Mass Marketing of Politics: Democracy in an Age of Manufactured Images". SAGE Publications.',
        'Lock, A. & Harris, P. (1996). "Political Marketing - Vive la Différence!". European Journal of Marketing, 30(10/11).'
      ]
    },
    {
      categoria: 'Recursos Digitales',
      referencias: [
        'Political Marketing Observatory - https://politicalmarketing.org',
        'Pew Research Center: Politics & Policy - https://www.pewresearch.org/politics/',
        'MIT Election Data + Science Lab - https://electionlab.mit.edu',
        'Stanford Digital Democracy Lab - https://democracy.stanford.edu'
      ]
    }
  ];

  return (
    <section id="conclusiones" className="py-20 bg-white relative overflow-hidden">
      {/* Logo Watermark - Centro */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src={logoWatermark} 
          alt="" 
          className="w-[500px] opacity-[0.02] select-none"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm">Cierre del Curso</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Conclusiones y Reflexiones</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Síntesis de los aprendizajes clave sobre branding político y posicionamiento estratégico
          </p>
        </motion.div>

        {/* Conclusiones Principales */}
        <div className="mb-20">
          <h3 className="text-2xl text-slate-900 mb-8">Conclusiones Principales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {conclusiones.map((conclusion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-slate-900 mb-2">{conclusion.titulo}</h4>
                    <p className="text-slate-700">{conclusion.texto}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reflexión Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl mb-6">Reflexión Final</h3>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-white/90 mb-4">
              La construcción y gestión de la <span className="text-white">imagen política</span> es una 
              dimensión estratégica fundamental en la competencia electoral moderna. No se trata de 
              manipulación superficial, sino de la articulación coherente entre identidad, valores y 
              comunicación estratégica.
            </p>
            <p className="text-white/90 mb-4">
              Al dominar el <span className="text-white">branding</span>, la diferenciación simbólica y 
              las estrategias de posicionamiento dual (emocional y racional), los actores políticos 
              pueden construir confianza genuina, encarnar valores colectivos y movilizar afectos de 
              manera auténtica y efectiva.
            </p>
            <p className="text-white/90">
              Este conocimiento no solo es técnico; es una responsabilidad democrática. Una marca 
              política bien construida puede <span className="text-white">incidir decisivamente en el 
              rumbo democrático</span> de una sociedad, canalizando aspiraciones ciudadanas hacia 
              proyectos políticos viables y legítimos.
            </p>
          </div>
        </motion.div>

        {/* Bibliografía */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <BookMarked className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-slate-900">Bibliografía y Referencias</h3>
          </div>

          <div className="space-y-8">
            {bibliografia.map((seccion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
              >
                <h4 className="text-xl text-slate-900 mb-6">{seccion.categoria}</h4>
                <ul className="space-y-4">
                  {seccion.referencias.map((referencia, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        {referencia.includes('http') ? (
                          <a
                            href={referencia.split(' - ')[1]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 flex items-center gap-2 group"
                          >
                            <span>{referencia.split(' - ')[0]}</span>
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <span>{referencia}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mensaje Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-blue-200 relative">
            {/* Logo pequeño en el mensaje final */}
            <div className="absolute top-4 right-4">
              <img 
                src={logoWatermark} 
                alt="CUN" 
                className="w-16 opacity-20"
              />
            </div>
            <p className="text-lg text-slate-700 mb-2">
              Gracias por completar este curso sobre
            </p>
            <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
              Branding Político y Posicionamiento Estratégico
            </p>
            <p className="text-slate-600 mb-4">
              Maestría en Marketing Político y Gobierno | Universidad CUN
            </p>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-blue-600 italic">
                "Transforma tu visión política en un mensaje impactante. Domina el arte del branding político."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}