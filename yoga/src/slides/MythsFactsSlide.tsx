import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw, Lightbulb, X } from 'lucide-react';
import type { MythFact } from '@/types';
import { Button } from '@/components/ui/button';

export const MythsFactsSlide: React.FC = () => {
  const [mythsFacts, setMythsFacts] = useState<MythFact[]>([
    {
      id: 1,
      myth: "Yoga is only for flexible people",
      fact: "Yoga is for everyone! Flexibility comes with practice, not as a prerequisite.",
      isFlipped: false
    },
    {
      id: 2,
      myth: "Yoga is just stretching",
      fact: "Yoga is a complete system including breathing, meditation, philosophy, and physical postures.",
      isFlipped: false
    },
    {
      id: 3,
      myth: "You need expensive equipment",
      fact: "All you need is your body and a quiet space. A yoga mat is optional!",
      isFlipped: false
    }
  ]);

  const flipCard = (id: number) => {
    setMythsFacts(prev => 
      prev.map(mf => 
        mf.id === id ? { ...mf, isFlipped: !mf.isFlipped } : mf
      )
    );
  };

  const resetAll = () => {
    setMythsFacts(prev => prev.map(mf => ({ ...mf, isFlipped: false })));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 border-0">
      <CardContent className="p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Myths & Facts
            </h1>
            <p className="text-xl text-gray-600">
              Let's bust some common yoga misconceptions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {mythsFacts.map((mythFact) => (
              <motion.div
                key={mythFact.id}
                variants={itemVariants}
                className="perspective-1000"
              >
                <div
                  className="relative w-full h-80 cursor-pointer"
                  onClick={() => flipCard(mythFact.id)}
                >
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{
                      rotateY: mythFact.isFlipped ? 180 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front of card - Myth */}
                    <div
                      className="absolute inset-0 w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="text-4xl mb-4">🤔</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Myth #{mythFact.id}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {mythFact.myth}
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        Click to reveal the truth
                      </div>
                    </div>

                    {/* Back of card - Fact */}
                    <div
                      className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 flex flex-col justify-center items-center text-center"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <div className="text-4xl mb-4">💡</div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        The Truth
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {mythFact.fact}
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        Click to see myth again
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mb-8">
            <Button
              onClick={resetAll}
              variant="outline"
              size="lg"
              className="px-8 py-3"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Reset All Cards
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Why These Myths Exist
              </h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  Social media shows only advanced poses
                </li>
                <li className="flex items-center text-gray-700">
                  <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  Commercialization of yoga industry
                </li>
                <li className="flex items-center text-gray-700">
                  <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                  Lack of proper education about yoga
                </li>
              </ul>
            </div>

            <div className="text-center">
              <div className="text-8xl mb-4">🎭</div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Meme Placeholder:</strong> Myth busting humor
              </p>
              <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">
                  📁 public/memes/myths_facts_meme.jpg
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Replace with myth busting meme
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 shadow-lg text-white">
              <Lightbulb className="h-12 w-12 mx-auto mb-3" />
              <p className="text-lg">
                <strong>Remember:</strong> Yoga is a journey, not a destination. 
                Start where you are, not where you think you should be!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
