import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, RotateCcw } from 'lucide-react';
import type { BreathingDemoProps } from '@/types';

export const BreathingDemo: React.FC<BreathingDemoProps> = ({
  duration = { inhale: 4, hold: 2, exhale: 6 },
  loop = true,
  autoStart = false
}) => {
  const [isActive, setIsActive] = useState(autoStart);
  const [currentPhase, setCurrentPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [timeLeft, setTimeLeft] = useState(duration.inhale);
  const [totalCycles, setTotalCycles] = useState(0);



  const startBreathing = useCallback(() => {
    setIsActive(true);
    setCurrentPhase('inhale');
    setTimeLeft(duration.inhale);
    setTotalCycles(0);
  }, [duration]);

  const stopBreathing = useCallback(() => {
    setIsActive(false);
    setCurrentPhase('inhale');
    setTimeLeft(duration.inhale);
  }, [duration]);

  const resetBreathing = useCallback(() => {
    stopBreathing();
    setTotalCycles(0);
  }, [stopBreathing]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Move to next phase
          if (currentPhase === 'inhale') {
            setCurrentPhase('hold');
            return duration.hold;
          } else if (currentPhase === 'hold') {
            setCurrentPhase('exhale');
            return duration.exhale;
          } else {
            // Completed one cycle
            setTotalCycles(prev => prev + 1);
            if (loop) {
              setCurrentPhase('inhale');
              return duration.inhale;
            } else {
              setIsActive(false);
              return duration.inhale;
            }
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, currentPhase, duration, loop]);

  const getPhaseColor = () => {
    switch (currentPhase) {
      case 'inhale':
        return 'from-blue-400 to-green-400';
      case 'hold':
        return 'from-green-400 to-yellow-400';
      case 'exhale':
        return 'from-yellow-400 to-red-400';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  const getPhaseText = () => {
    switch (currentPhase) {
      case 'inhale':
        return 'Inhale';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Exhale';
      default:
        return 'Ready';
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-blue-50 to-purple-50 border-0">
      <CardContent className="p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Breathing Practice
          </h3>

          {/* Animated Circle */}
          <div className="relative mb-8">
            <motion.div
              className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-r ${getPhaseColor()} shadow-lg`}
              animate={{
                scale: currentPhase === 'inhale' ? [1, 1.2, 1] : 
                       currentPhase === 'hold' ? [1.2, 1.2, 1.2] : 
                       [1.2, 1, 1],
              }}
              transition={{
                duration: currentPhase === 'hold' ? 0.5 : 1,
                repeat: currentPhase === 'hold' ? 0 : Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">
                {timeLeft}
              </span>
            </div>
          </div>

          {/* Phase Text */}
          <motion.div
            key={currentPhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-gray-700 mb-4"
          >
            {getPhaseText()}
          </motion.div>

          {/* Timer Display */}
          <div className="text-lg text-gray-600 mb-6">
            <p>Time remaining: {timeLeft}s</p>
            <p className="text-sm text-gray-500">
              Cycle: {totalCycles + 1}
            </p>
          </div>

          {/* Controls */}
          <div className="flex space-x-3 justify-center">
            <Button
              onClick={isActive ? stopBreathing : startBreathing}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isActive ? (
                <>
                  <Pause className="w-4 h-4 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start
                </>
              )}
            </Button>
            <Button
              onClick={resetBreathing}
              variant="outline"
              className="border-gray-300"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Instructions */}
          <div className="mt-6 text-sm text-gray-600">
            <p className="mb-2">
              <strong>Pattern:</strong> {duration.inhale}s inhale, {duration.hold}s hold, {duration.exhale}s exhale
            </p>
            {loop && (
              <p className="text-xs text-gray-500">
                Will continue looping until stopped
              </p>
            )}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
