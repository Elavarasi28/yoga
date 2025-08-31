import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { RotateCcw } from 'lucide-react';
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
      <CardContent className="p-4 md:p-6 lg:p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-6 md:mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Myths & Facts
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
              Let's bust some common yoga misconceptions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
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

        </motion.div>
      </CardContent>
    </Card>
  );
};
