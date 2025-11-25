import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

export function InteractiveExerciseSection() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const exercises = [
    {
      question: '¿Cuál es el objetivo principal del branding político?',
      options: [
        'Aumentar la visibilidad en redes sociales',
        'Crear una identidad coherente y diferenciada en la mente del electorado',
        'Ganar debates políticos',
        'Recaudar fondos para la campaña'
      ],
      correctAnswer: 1,
      explanation: 'El branding político busca crear una identidad coherente, memorable y diferenciada que posicione al candidato o movimiento de manera única en la percepción del electorado.'
    },
    {
      question: 'En posicionamiento político, ¿qué significa encontrar un "espacio de oportunidad"?',
      options: [
        'Tener más presupuesto que los competidores',
        'Identificar segmentos electorales desatendidos o posiciones ideológicas no ocupadas',
        'Conseguir más tiempo en medios de comunicación',
        'Tener más seguidores en redes sociales'
      ],
      correctAnswer: 1,
      explanation: 'Un espacio de oportunidad es una posición en el espectro político o un segmento electoral que no está siendo atendido efectivamente por los competidores, permitiendo diferenciación estratégica.'
    },
    {
      question: '¿Qué elemento NO es parte de la arquitectura de marca política?',
      options: [
        'Propuesta de valor política',
        'Identidad visual (logo, colores, tipografía)',
        'Precio de productos/servicios',
        'Narrativa y storytelling'
      ],
      correctAnswer: 2,
      explanation: 'La arquitectura de marca política incluye propuesta de valor, identidad visual, narrativa y personalidad de marca. El precio es un elemento del marketing comercial, no político.'
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
    if (Object.keys(selectedAnswers).length === exercises.length) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    exercises.forEach((exercise, index) => {
      if (selectedAnswers[index] === exercise.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <section id="exercise" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Brain className="w-4 h-4" />
            <span className="text-sm">Ejercicio Práctico</span>
          </div>
          <h2 className="text-4xl text-slate-900 mb-4">Pon a Prueba tus Conocimientos</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Responde estas preguntas para reforzar los conceptos aprendidos
          </p>
        </motion.div>

        <div className="space-y-8">
          {exercises.map((exercise, qIndex) => (
            <motion.div
              key={qIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: qIndex * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl text-slate-900 mb-6">
                {qIndex + 1}. {exercise.question}
              </h3>

              <div className="space-y-3 mb-6">
                {exercise.options.map((option, oIndex) => {
                  const isSelected = selectedAnswers[qIndex] === oIndex;
                  const isCorrect = oIndex === exercise.correctAnswer;
                  const showCorrect = showResults && isCorrect;
                  const showIncorrect = showResults && isSelected && !isCorrect;

                  return (
                    <button
                      key={oIndex}
                      onClick={() => handleAnswerSelect(qIndex, oIndex)}
                      disabled={showResults}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-50'
                          : showIncorrect
                          ? 'border-red-500 bg-red-50'
                          : isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                      } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                            showCorrect
                              ? 'border-green-500 bg-green-500'
                              : showIncorrect
                              ? 'border-red-500 bg-red-500'
                              : isSelected
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-slate-300'
                          }`}
                        >
                          {showCorrect && <CheckCircle2 className="w-4 h-4 text-white" />}
                          {showIncorrect && <XCircle className="w-4 h-4 text-white" />}
                          {!showResults && isSelected && <div className="w-2 h-2 bg-white rounded-full"></div>}
                        </div>
                        <span
                          className={`${
                            showCorrect
                              ? 'text-green-900'
                              : showIncorrect
                              ? 'text-red-900'
                              : 'text-slate-700'
                          }`}
                        >
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-4 bg-blue-50 rounded-xl border border-blue-200"
                >
                  <p className="text-sm text-slate-700">
                    <span className="text-blue-600">Explicación:</span> {exercise.explanation}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4">
          {!showResults ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(selectedAnswers).length !== exercises.length}
              className={`px-8 py-4 rounded-xl text-white transition-all ${
                Object.keys(selectedAnswers).length === exercises.length
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-xl hover:scale-105'
                  : 'bg-slate-300 cursor-not-allowed'
              }`}
            >
              Verificar Respuestas
            </button>
          ) : (
            <div className="text-center">
              <div className="mb-4 p-6 bg-white rounded-2xl shadow-lg">
                <p className="text-slate-600 mb-2">Tu puntuación:</p>
                <p className="text-4xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    {calculateScore()} / {exercises.length}
                  </span>
                </p>
                {calculateScore() === exercises.length && (
                  <p className="text-green-600 mt-2">¡Excelente! Dominas los conceptos.</p>
                )}
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-6 py-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Reintentar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
