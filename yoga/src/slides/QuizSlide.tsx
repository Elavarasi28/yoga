import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RotateCcw, CheckCircle, XCircle } from 'lucide-react';
import type { QuizQuestion } from '@/types';

export const QuizSlide: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "What does 'Yoga' mean in Sanskrit?",
      options: ["Exercise", "Union", "Flexibility", "Meditation"],
      correctAnswer: 1,
      explanation: "Yoga means 'Union' - the union of body, mind, and spirit."
    },
    {
      id: 2,
      question: "Which breathing technique is best for stress relief?",
      options: ["Quick shallow breaths", "Deep diaphragmatic breathing", "Holding breath", "Rapid breathing"],
      correctAnswer: 1,
      explanation: "Deep diaphragmatic breathing activates the parasympathetic nervous system, reducing stress."
    },
    {
      id: 3,
      question: "How long should you practice yoga daily to see benefits?",
      options: ["1 hour minimum", "5-10 minutes", "Only on weekends", "2 hours daily"],
      correctAnswer: 1,
      explanation: "Even 5-10 minutes of daily practice can bring significant benefits over time."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);

    if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
      setScore(prev => prev + 1);
    }

    // Auto-advance after showing feedback
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQ = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  if (quizCompleted) {
    return (
      <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-0">
        <CardContent className="text-center p-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-8xl mb-6">🏆</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Quiz Complete!
            </h1>
            
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="text-6xl mb-4">
                {score === quizQuestions.length ? "🎉" : "📊"}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Your Score: {score}/{quizQuestions.length}
              </h2>
              
              {score === quizQuestions.length ? (
                <div className="text-green-600 text-xl">
                  Perfect! You're a yoga expert! 🌟
                </div>
              ) : score >= quizQuestions.length * 0.7 ? (
                <div className="text-blue-600 text-xl">
                  Great job! You have a solid understanding! 👍
                </div>
              ) : (
                <div className="text-orange-600 text-xl">
                  Good effort! Keep learning and practicing! 💪
                </div>
              )}
            </div>

            <Button
              onClick={resetQuiz}
              size="lg"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Take Quiz Again
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-0">
      <CardContent className="p-8 max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Yoga Quiz
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-lg text-gray-600">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <div className="bg-blue-100 rounded-full px-4 py-2">
                <span className="text-blue-800 font-semibold">
                  Score: {score}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    className={`w-full p-4 h-auto text-left justify-start text-lg ${
                      selectedAnswer === index
                        ? index === currentQ.correctAnswer
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-red-500 bg-red-50 text-red-700'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center w-full">
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center mr-4 flex-shrink-0">
                        {selectedAnswer === index && (
                          <AnimatePresence>
                            {index === currentQ.correctAnswer ? (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                              >
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              </motion.div>
                            ) : (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                              >
                                <XCircle className="h-5 w-5 text-red-600" />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                        {selectedAnswer === null && (
                          <span className="text-gray-500 font-medium">
                            {String.fromCharCode(65 + index)}
                          </span>
                        )}
                      </div>
                      <span>{option}</span>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`mt-6 p-4 rounded-lg ${
                    isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                  }`}
                >
                  <div className="flex items-center">
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600 mr-3" />
                    )}
                    <div>
                      <h4 className={`font-semibold ${
                        isCorrect ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {isCorrect ? 'Correct!' : 'Incorrect'}
                      </h4>
                      <p className={`text-sm ${
                        isCorrect ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {currentQ.explanation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-center">
            <Button
              onClick={resetQuiz}
              variant="outline"
              size="lg"
              className="px-8 py-3"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset Quiz
            </Button>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
