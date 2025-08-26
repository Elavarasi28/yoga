import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import type { BreathingState } from '@/types';

export const BreathingPracticeSlide: React.FC = () => {
  const [breathingState, setBreathingState] = useState<BreathingState>({
    isActive: false,
    currentPhase: 'inhale',
    timeRemaining: 4,
    totalTime: 4
  });

  const [cycle, setCycle] = useState(0);

  const breathingPhases = {
    inhale: { duration: 4, text: "Inhale", color: "bg-blue-500" },
    hold: { duration: 2, text: "Hold", color: "bg-green-500" },
    exhale: { duration: 6, text: "Exhale", color: "bg-purple-500" },
    rest: { duration: 1, text: "Rest", color: "bg-gray-400" }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (breathingState.isActive) {
      interval = setInterval(() => {
        setBreathingState(prev => {
          if (prev.timeRemaining > 1) {
            return { ...prev, timeRemaining: prev.timeRemaining - 1 };
          } else {
            // Move to next phase
            const phases = Object.keys(breathingPhases) as Array<keyof typeof breathingPhases>;
            const currentIndex = phases.indexOf(prev.currentPhase);
            const nextPhase = phases[(currentIndex + 1) % phases.length];
            const nextDuration = breathingPhases[nextPhase].duration;

            if (nextPhase === 'inhale') {
              setCycle(c => c + 1);
            }

            return {
              ...prev,
              currentPhase: nextPhase,
              timeRemaining: nextDuration,
              totalTime: nextDuration
            };
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [breathingState.isActive, breathingState.currentPhase]);

  const startBreathing = () => {
    setBreathingState({
      isActive: true,
      currentPhase: 'inhale',
      timeRemaining: 4,
      totalTime: 4
    });
    setCycle(0);
  };

  const stopBreathing = () => {
    setBreathingState({
      isActive: false,
      currentPhase: 'inhale',
      timeRemaining: 4,
      totalTime: 4
    });
    setCycle(0);
  };

  const resetBreathing = () => {
    setBreathingState({
      isActive: false,
      currentPhase: 'inhale',
      timeRemaining: 4,
      totalTime: 4
    });
    setCycle(0);
  };

  const getCircleScale = () => {
    const phase = breathingPhases[breathingState.currentPhase];
    const progress = (phase.duration - breathingState.timeRemaining) / phase.duration;
    
    if (breathingState.currentPhase === 'inhale') {
      return 0.5 + (progress * 0.5); // 0.5 to 1.0
    } else if (breathingState.currentPhase === 'exhale') {
      return 1.0 - (progress * 0.5); // 1.0 to 0.5
    } else {
      return 1.0; // Hold and rest maintain size
    }
  };

  const currentPhase = breathingPhases[breathingState.currentPhase];

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 border-0">
      <CardContent className="text-center p-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Breathing Practice
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Experience the power of conscious breathing
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="relative">
            {/* Breathing Circle */}
            <motion.div
              className={`w-64 h-64 rounded-full ${currentPhase.color} flex items-center justify-center shadow-2xl`}
              animate={{
                scale: getCircleScale(),
                transition: { duration: 0.5, ease: "easeInOut" }
              }}
            >
              <div className="text-white text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={breathingState.currentPhase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl font-bold mb-2">
                      {currentPhase.text}
                    </div>
                    <div className="text-6xl font-bold">
                      {breathingState.timeRemaining}
                    </div>
                    <div className="text-lg opacity-90">
                      seconds
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Progress Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-white opacity-30"></div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          {!breathingState.isActive ? (
            <Button
              size="lg"
              onClick={startBreathing}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Breathing
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={stopBreathing}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              <Pause className="mr-2 h-5 w-5" />
              Pause
            </Button>
          )}
          
          <Button
            size="lg"
            variant="outline"
            onClick={resetBreathing}
            className="px-8 py-3"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            Reset
          </Button>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            How to Practice:
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Phase 1: Inhale (4s)</h4>
              <p className="text-sm text-gray-600">Breathe in slowly through your nose</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Phase 2: Hold (2s)</h4>
              <p className="text-sm text-gray-600">Keep the breath in gently</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Phase 3: Exhale (6s)</h4>
              <p className="text-sm text-gray-600">Release slowly through your mouth</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Phase 4: Rest (1s)</h4>
              <p className="text-sm text-gray-600">Brief pause before next cycle</p>
            </div>
          </div>
        </div>

        {/* Cycle Counter */}
        <div className="mt-8 text-center">
          <div className="bg-blue-100 rounded-full px-6 py-2 inline-block">
            <span className="text-blue-800 font-semibold">
              Cycle: {cycle}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
