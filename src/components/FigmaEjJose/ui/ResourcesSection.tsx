import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, BookOpen, Video, FileText, Link } from 'lucide-react';

export function ResourcesSection() {
  const resources = [
    {
      category: 'Libros Recomendados',
      icon: BookOpen,
      color: 'blue',
      items: [
        { title: 'The Victory Lab - Sasha Issenberg', type: 'Libro' },
        { title: 'Political Marketing: Principles and Applications', type: 'Libro' },
        { title: 'Branding the Candidate - Sandra L. French', type: 'Libro' }
      ]
    },
    {
      category: 'Herramientas Digitales',
      icon: Link,
      color: 'purple',
      items: [
        { title: 'Brandwatch - Análisis de sentimiento', type: 'Software' },
        { title: 'Tableau - Visualización de datos electorales', type: 'Software' },
        { title: 'Sprout Social - Gestión de redes sociales', type: 'Software' }
      ]
    },
    {
      category: 'Videos y Documentales',
      icon: Video,
      color: 'green',
      items: [
        { title: 'The War Room (1993)', type: 'Documental' },
        { title: 'Weiner (2016)', type: 'Documental' },
        { title: 'Our Brand Is Crisis (2005)', type: 'Documental' }
      ]
    },
    {
      category: 'Artículos Académicos',
      icon: FileText,
      color: 'amber',
      items: [
        { title: 'Political Branding Strategies', type: 'Paper' },
        { title: 'Digital Campaign Analytics', type: 'Paper' },
        { title: 'Electoral Positioning Theory', type: 'Paper' }
      ]
    }
  ];

  const templates = [
    { name: 'Template: Análisis PEST Político', description: 'Plantilla para análisis de entorno' },
    { name: 'Template: Mapa de Posicionamiento', description: 'Herramienta de mapeo electoral' },
    { name: 'Template: Brief de Marca Política', description: 'Guía de desarrollo de identidad' },
    { name: 'Checklist: Consistencia de Marca', description: 'Verificación de coherencia' }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' }
  };

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-slate-900 mb-4">Recursos de Aprendizaje</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Materiales complementarios, herramientas y lecturas recomendadas para profundizar
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => {
            const colors = colorMap[resource.color];
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="text-slate-900 mb-4">{resource.category}</h3>
                <ul className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 group cursor-pointer">
                      <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 mt-1 group-hover:text-blue-600 transition-colors" />
                      <div>
                        <p className="text-sm text-slate-700 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500">{item.type}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl text-slate-900">Templates y Herramientas</h3>
              <p className="text-slate-600">Descarga plantillas listas para usar en tus proyectos</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {templates.map((template, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all text-left group"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Download className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-slate-900 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </p>
                  <p className="text-sm text-slate-600">{template.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
