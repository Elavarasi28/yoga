export interface Slide {
  id: number;
  title: string;
  description: string;
  component: React.ComponentType;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface BreathingState {
  isActive: boolean;
  currentPhase: 'inhale' | 'hold' | 'exhale' | 'rest';
  timeRemaining: number;
  totalTime: number;
}

export interface MythFact {
  id: number;
  myth: string;
  fact: string;
  isFlipped: boolean;
}
