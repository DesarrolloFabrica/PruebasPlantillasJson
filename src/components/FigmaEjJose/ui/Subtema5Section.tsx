import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, TrendingUp, Eye, BarChart } from 'lucide-react';

export function Subtema5Section() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  const metricas = [
    {
      categoria: 'Top of Mind',
      icon: Eye,
      color: 'blue',
      descripcion: 'Primera mención espontánea cuando se pregunta por candidatos o partidos',
      medicion: 'Encuestas de recordación espontánea y asistida',
      kpis: ['% de primera mención', '% de mención total', 'Posición en ranking de candidatos'],
      herramientas: ['Encuestas telefónicas', 'Estudios cualitativos', 'Tracking continuo']
    },
    {
      categoria: 'Sentiment Analysis',
      icon: TrendingUp,
      color: 'green',
      descripcion: 'Medición de emociones y opiniones (positivas, negativas, neutrales) asociadas a la marca',
      medicion: 'Análisis automatizado de contenido en medios y redes sociales',
      kpis: ['Net Sentiment Score', '% menciones positivas', 'Ratio positivo/negativo', 'Evolución temporal'],
      herramientas: ['Brandwatch', 'Hootsuite Insights', 'Mention', 'Procesamiento NLP']
    },
    {
      categoria: 'Atributos de Marca',
      icon: BarChart,
      color: 'purple',
      descripcion: 'Características y cualidades que el electorado asocia con la marca política',
      medicion: 'Estudios de asociación de atributos y mapas perceptuales',
      kpis: ['% asociación por atributo', 'Fortaleza de asociación', 'Diferenciación vs competencia'],
      herramientas: ['Encuestas estructuradas', 'Análisis factorial', 'Brand tracking studies']
    },
    {
      categoria: 'Intención de Voto',
      icon: Activity,
      color: 'amber',
      descripcion: 'Probabilidad declarada de votar por el candidato o partido',
      medicion: 'Encuestas de intención directa y modelos predictivos',
      kpis: ['% intención de voto', 'Tendencia (crecimiento/caída)', 'Volatilidad del apoyo'],
      herramientas: ['Encuestas probabilísticas', 'Modelos de forecasting', 'Tracking diario/semanal']
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', gradient: 'from-blue-600 to-blue-400', border: 'border-blue-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', gradient: 'from-green-600 to-green-400', border: 'border-green-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', gradient: 'from-purple-600 to-purple-400', border: 'border-purple-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', gradient: 'from-amber-600 to-amber-400', border: 'border-amber-200' }
  };

  return (
    <section id="subtema5" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Activity className="w-4 h-4" />
            <span className="text-sm">Subtema 5</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Medición y Gestión de Percepción Pública</h2>
          <p className="text-xl text-slate-600 max-w-4xl">
            "Lo que no se mide, no se puede mejorar". La medición sistemática de la percepción ciudadana 
            permite tomar decisiones basadas en datos, detectar crisis tempranamente y optimizar 
            estrategias de comunicación en tiempo real.
          </p>
        </motion.div>

        {/* Dashboard de Métricas Simulado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl"
        >
          <h3 className="text-2xl mb-6">Dashboard de Percepción en Tiempo Real</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Top of Mind', value: '34%', trend: '+5%', color: 'blue' },
              { label: 'Sentiment Score', value: '+42', trend: '+12', color: 'green' },
              { label: 'Atributo "Confianza"', value: '67%', trend: '+3%', color: 'purple' },
              { label: 'Intención de Voto', value: '28%', trend: '+2%', color: 'amber' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-xl p-6"
              >
                <div className="text-sm text-white/60 mb-2">{metric.label}</div>
                <div className="text-3xl mb-2">{metric.value}</div>
                <div className="flex items-center gap-2">
                  <div className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.trend}
                  </div>
                  <div className="text-xs text-white/40">vs. semana anterior</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Métricas Detalladas */}
        <div className="mb-16">
          <h3 className="text-2xl text-slate-900 mb-6">Métricas Clave de Percepción</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metricas.map((metrica, index) => {
              const Icon = metrica.icon;
              const colors = colorMap[metrica.color];
              return (
                <button
                  key={index}
                  onClick={() => setSelectedMetric(index)}
                  className={`p-6 rounded-xl text-left transition-all ${
                    selectedMetric === index
                      ? `${colors.bg} border-2 ${colors.border} shadow-xl`
                      : 'bg-white border-2 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-8 h-8 mb-3 ${selectedMetric === index ? colors.text : 'text-slate-400'}`} />
                  <h4 className={`${selectedMetric === index ? colors.text : 'text-slate-900'}`}>
                    {metrica.categoria}
                  </h4>
                </button>
              );
            })}
          </div>

          <motion.div
            key={selectedMetric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[metricas[selectedMetric].color].gradient} rounded-2xl flex items-center justify-center`}>
                {React.createElement(metricas[selectedMetric].icon, {
                  className: 'w-8 h-8 text-white'
                })}
              </div>
              <div>
                <h4 className="text-2xl text-slate-900 mb-2">{metricas[selectedMetric].categoria}</h4>
                <p className="text-slate-600">{metricas[selectedMetric].descripcion}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-slate-900 mb-3">Cómo se mide</h5>
                <p className="text-slate-700 mb-4">{metricas[selectedMetric].medicion}</p>
                
                <h5 className="text-slate-900 mb-3">KPIs principales</h5>
                <div className="space-y-2">
                  {metricas[selectedMetric].kpis.map((kpi, idx) => (
                    <div key={idx} className={`px-4 py-2 ${colorMap[metricas[selectedMetric].color].bg} rounded-lg`}>
                      <span className="text-slate-700">{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-slate-900 mb-3">Herramientas</h5>
                <div className="space-y-2">
                  {metricas[selectedMetric].herramientas.map((herramienta, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <div className={`w-2 h-2 rounded-full ${colorMap[metricas[selectedMetric].color].bg}`}></div>
                      <span className="text-slate-700">{herramienta}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gestión de Crisis de Reputación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200"
        >
          <h3 className="text-2xl text-slate-900 mb-6">🚨 Gestión de Crisis de Reputación</h3>
          <p className="text-slate-700 mb-6">
            El monitoreo continuo permite detectar crisis de percepción antes de que escalen. 
            Un protocolo sistemático es esencial para respuesta efectiva.
          </p>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { fase: 'Detección', desc: 'Alertas automáticas de cambios anormales en métricas', tiempo: '0-2h' },
              { fase: 'Evaluación', desc: 'Análisis de gravedad, alcance y origen de la crisis', tiempo: '2-6h' },
              { fase: 'Estrategia', desc: 'Definición de mensaje y canales de respuesta', tiempo: '6-12h' },
              { fase: 'Ejecución', desc: 'Implementación coordinada de plan de respuesta', tiempo: '12-24h' },
              { fase: 'Monitoreo', desc: 'Seguimiento de efectividad y ajustes necesarios', tiempo: 'Continuo' }
            ].map((fase, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-red-200">
                <div className="text-red-600 mb-2">{fase.fase}</div>
                <p className="text-sm text-slate-700 mb-2">{fase.desc}</p>
                <div className="text-xs text-slate-500">{fase.tiempo}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
