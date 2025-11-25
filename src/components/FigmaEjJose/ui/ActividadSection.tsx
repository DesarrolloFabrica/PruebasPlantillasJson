import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PenTool, CheckCircle2, XCircle, RotateCcw, Award } from 'lucide-react';

export function ActividadSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const preguntas = [
    {
      pregunta: '¿Qué distingue al branding político de una simple identidad visual?',
      opciones: [
        'El presupuesto invertido en diseño gráfico',
        'La construcción de una narrativa coherente y emocionalmente significativa',
        'El uso de colores llamativos',
        'La cantidad de apariciones en medios'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El branding político va más allá del logo; implica construir una narrativa coherente, emocionalmente resonante y estratégicamente posicionada que cree una experiencia perceptiva integral para el votante.'
    },
    {
      pregunta: 'Según Pierre Bourdieu, ¿qué es el "capital simbólico" en política?',
      opciones: [
        'El presupuesto de campaña disponible',
        'Los símbolos visuales utilizados en la campaña',
        'La acumulación de prestigio, legitimidad y credibilidad que otorga poder',
        'La cantidad de seguidores en redes sociales'
      ],
      respuestaCorrecta: 2,
      explicacion: 'El capital simbólico para Bourdieu es la acumulación de prestigio, honor y reconocimiento que no es material pero que se traduce en legitimidad política y, por ende, en poder real.'
    },
    {
      pregunta: '¿Qué es el "framing" según Goffman y Lakoff?',
      opciones: [
        'El marco físico de una fotografía política',
        'Los marcos interpretativos que determinan cómo percibimos la realidad política',
        'El encuadre legal de una campaña',
        'La organización temporal de una campaña electoral'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El framing explica cómo los marcos interpretativos moldean nuestra percepción de la realidad. Un mismo hecho puede ser "enmarcado" de formas radicalmente diferentes, cambiando su significado político.'
    },
    {
      pregunta: '¿Cuál es la diferencia principal entre posicionamiento emocional y racional?',
      opciones: [
        'El emocional es más efectivo que el racional',
        'El emocional conecta con sentimientos mientras el racional persuade con datos y lógica',
        'El racional solo funciona con votantes educados',
        'El emocional es menos costoso de implementar'
      ],
      respuestaCorrecta: 1,
      explicacion: 'El posicionamiento emocional conecta con sentimientos, aspiraciones y temores mediante storytelling y arquetipos, mientras el racional persuade con argumentos lógicos, datos verificables y propuestas concretas.'
    },
    {
      pregunta: 'Según el modelo de dual processing de Petty y Cacioppo, ¿qué caracteriza la "ruta central"?',
      opciones: [
        'Procesamiento rápido basado en heurísticas simples',
        'Cambio de actitud poco duradero y fácil de modificar',
        'Análisis cuidadoso de argumentos que produce cambio duradero',
        'Decisiones basadas en el atractivo del candidato'
      ],
      respuestaCorrecta: 2,
      explicacion: 'La ruta central implica procesamiento elaborado donde el votante analiza cuidadosamente los argumentos. Requiere más esfuerzo cognitivo pero produce cambios de actitud más duraderos y resistentes a contra-argumentación.'
    },
    {
      pregunta: '¿Qué tipo de símbolos son más efectivos para generar "ventaja simbólica"?',
      opciones: [
        'Símbolos corporativos modernos y abstractos',
        'Símbolos patrióticos, religiosos o culturales con resonancia emocional profunda',
        'Símbolos importados de otras culturas políticas',
        'Símbolos puramente estéticos sin significado histórico'
      ],
      respuestaCorrecta: 1,
      explicacion: 'Los símbolos más efectivos son aquellos que conectan con valores patrióticos, religiosos o culturales profundos de la sociedad, generando resonancia afectiva automática y legitimidad simbólica.'
    },
    {
      pregunta: 'El caso de Barack Obama "Yes, We Can" (2008) demuestra principalmente:',
      opciones: [
        'Que solo las emociones importan en política',
        'Que el presupuesto determina el éxito electoral',
        'Que el equilibrio entre emoción y racionalidad es más efectivo',
        'Que las redes sociales son suficientes para ganar'
      ],
      respuestaCorrecta: 2,
      explicacion: 'La campaña de Obama demostró que emoción (esperanza, cambio, comunidad) y razón (propuestas detalladas, trayectoria académica, datos) no son opuestos sino complementarios, creando un posicionamiento integral y poderoso.'
    }
  ];

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: answerIndex
      });
    }
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === preguntas.length) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    preguntas.forEach((pregunta, index) => {
      if (selectedAnswers[index] === pregunta.respuestaCorrecta) {
        correct++;
      }
    });
    return correct;
  };

  const getScoreMessage = () => {
    const score = calculateScore();
    const percentage = (score / preguntas.length) * 100;
    
    if (percentage === 100) return { text: '¡Excelente! Dominas completamente los conceptos del branding político', color: 'text-green-600' };
    if (percentage >= 80) return { text: 'Muy bien. Tienes un sólido entendimiento del tema', color: 'text-blue-600' };
    if (percentage >= 60) return { text: 'Aprobado. Te recomendamos repasar algunos conceptos clave', color: 'text-amber-600' };
    return { text: 'Necesitas revisar el material del curso más detenidamente', color: 'text-red-600' };
  };

  return (
    <section id="actividad" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            <PenTool className="w-4 h-4" />
            <span className="text-sm">Actividad Evaluativa</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Evaluación de Conocimientos</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Demuestra tu comprensión del branding político y posicionamiento estratégico
          </p>
        </motion.div>

        {!showResults ? (
          <>
            <div className="space-y-8 mb-8">
              {preguntas.map((pregunta, qIndex) => (
                <motion.div
                  key={qIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: qIndex * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {qIndex + 1}
                    </div>
                    <h3 className="text-lg text-slate-900">{pregunta.pregunta}</h3>
                  </div>

                  <div className="space-y-3">
                    {pregunta.opciones.map((opcion, oIndex) => {
                      const isSelected = selectedAnswers[qIndex] === oIndex;
                      return (
                        <button
                          key={oIndex}
                          onClick={() => handleAnswerSelect(qIndex, oIndex)}
                          className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                isSelected ? 'border-blue-500 bg-blue-500' : 'border-slate-300'
                              }`}
                            >
                              {isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                            </div>
                            <span className="text-slate-700">{opcion}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(selectedAnswers).length !== preguntas.length}
                className={`px-10 py-4 rounded-xl text-white transition-all inline-flex items-center gap-3 ${
                  Object.keys(selectedAnswers).length === preguntas.length
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105'
                    : 'bg-slate-300 cursor-not-allowed'
                }`}
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="text-lg">Verificar Respuestas</span>
              </button>
              <p className="text-sm text-slate-600 mt-4">
                {Object.keys(selectedAnswers).length} de {preguntas.length} preguntas respondidas
              </p>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Resultados */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-slate-200 mb-8">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl text-slate-900 mb-2">Resultados de la Evaluación</h3>
                <div className="text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {calculateScore()} / {preguntas.length}
                </div>
                <p className="text-xl text-slate-600 mb-2">
                  {Math.round((calculateScore() / preguntas.length) * 100)}% de respuestas correctas
                </p>
                <p className={`text-lg ${getScoreMessage().color}`}>
                  {getScoreMessage().text}
                </p>
              </div>

              <button
                onClick={handleReset}
                className="mx-auto flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reintentar Evaluación</span>
              </button>
            </div>

            {/* Revisión de Respuestas */}
            <div className="space-y-6">
              {preguntas.map((pregunta, qIndex) => {
                const userAnswer = selectedAnswers[qIndex];
                const isCorrect = userAnswer === pregunta.respuestaCorrecta;
                return (
                  <motion.div
                    key={qIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: qIndex * 0.1 }}
                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
                      isCorrect ? 'border-green-300' : 'border-red-300'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <h4 className="text-slate-900 mb-3">{qIndex + 1}. {pregunta.pregunta}</h4>
                        
                        {!isCorrect && (
                          <div className="mb-3">
                            <p className="text-sm text-red-700 mb-1">Tu respuesta:</p>
                            <p className="text-slate-700">{pregunta.opciones[userAnswer]}</p>
                          </div>
                        )}
                        
                        <div className="mb-3">
                          <p className="text-sm text-green-700 mb-1">Respuesta correcta:</p>
                          <p className="text-slate-900">{pregunta.opciones[pregunta.respuestaCorrecta]}</p>
                        </div>
                        
                        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                          <p className="text-sm text-slate-700">
                            <span className="text-blue-600">💡 Explicación:</span> {pregunta.explicacion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
