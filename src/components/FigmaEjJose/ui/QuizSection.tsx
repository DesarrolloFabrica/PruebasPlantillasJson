import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Trophy, Star, Send } from 'lucide-react';

export function QuizSection() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [email, setEmail] = useState('');

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const handleCompleteQuiz = () => {
    setQuizCompleted(true);
  };

  return (
    <section id="quiz" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {!quizStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl text-white mb-4">Evaluación Final</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Demuestra tu dominio del branding político y posicionamiento con nuestra evaluación integral
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">15</div>
                <p className="text-white/80">Preguntas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">30</div>
                <p className="text-white/80">Minutos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
                <div className="text-3xl mb-2">80%</div>
                <p className="text-white/80">Para Aprobar</p>
              </div>
            </div>

            <button
              onClick={handleStartQuiz}
              className="px-10 py-5 bg-white text-blue-600 rounded-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3"
            >
              <Trophy className="w-6 h-6" />
              <span className="text-lg">Comenzar Evaluación</span>
            </button>
          </motion.div>
        ) : !quizCompleted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl text-slate-900">Quiz de Certificación</h3>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                <span className="text-sm">Pregunta 1 de 15</span>
              </div>
            </div>

            <div className="h-2 bg-slate-200 rounded-full mb-8">
              <div className="h-full w-1/15 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>

            <div className="text-center py-12">
              <p className="text-lg text-slate-700 mb-8">
                Esta es una demostración del quiz. En el curso completo, aquí encontrarás 15 preguntas 
                que evaluarán tu comprensión de todos los módulos.
              </p>
              <button
                onClick={handleCompleteQuiz}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all"
              >
                Simular Completar Quiz
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            >
              <Trophy className="w-16 h-16 text-yellow-500" />
            </motion.div>

            <h2 className="text-4xl text-white mb-4">¡Felicitaciones!</h2>
            <p className="text-xl text-white/90 mb-8">
              Has completado exitosamente el curso de Branding Político y Posicionamiento
            </p>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <span className="text-5xl text-white">92%</span>
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-white/80">Puntuación Final</p>
            </div>

            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl text-slate-900 mb-4">Recibe tu Certificado</h3>
              <p className="text-slate-600 mb-4">
                Ingresa tu email para recibir tu certificado de finalización del curso
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-shadow flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  <span>Enviar</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
