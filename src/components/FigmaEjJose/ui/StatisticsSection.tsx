import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

export function StatisticsSection() {
  const stats = [
    {
      icon: Users,
      value: '73%',
      label: 'De votantes toman decisiones basadas en percepción de marca',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'De campañas exitosas tienen branding coherente y consistente',
      color: 'purple'
    },
    {
      icon: Target,
      value: '5x',
      label: 'Más efectivo el posicionamiento temprano vs. tardío',
      color: 'green'
    },
    {
      icon: Award,
      value: '92%',
      label: 'De jóvenes votantes se informan por canales digitales',
      color: 'amber'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
    amber: { bg: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-200' }
  };

  return (
    <section id="statistics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-slate-900 mb-4">El Impacto del Branding Político</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Datos y estadísticas que demuestran la importancia del branding en campañas políticas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colors = colorMap[stat.color];
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className={`p-8 rounded-2xl border-2 ${colors.border} ${colors.bg} text-center`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 border ${colors.border}`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <div className={`text-5xl mb-3 ${colors.text}`}>{stat.value}</div>
                <p className="text-slate-700">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
        >
          <h3 className="text-2xl text-slate-900 mb-4 text-center">Insight Clave</h3>
          <p className="text-lg text-slate-700 text-center max-w-4xl mx-auto">
            En la era digital, <span className="text-blue-600">el branding político ya no es opcional</span>. 
            Las campañas que invierten en construir una identidad coherente y un posicionamiento estratégico 
            tienen <span className="text-purple-600">significativamente más probabilidades de éxito</span> que 
            aquellas que solo se enfocan en tácticas de corto plazo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
