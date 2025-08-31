export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  bullets: string[];
  presenterScript: string;
  memeFilename?: string;
  component: 'Title' | 'Types' | 'Myths' | 'Stress' | 'Productivity' | 'Quiz' | 'Breathing' | 'Generic' | 'ThankYou';
}

export interface SlideContextType {
  currentSlide: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  goToFirstSlide: () => void;
  goToLastSlide: () => void;
  isAutoPlay: boolean;
  setIsAutoPlay: (value: boolean) => void;
  presentMode: boolean;
  setPresentMode: (value: boolean) => void;
  copyNotes: () => void;
}

export interface SlideContainerProps {
  children: React.ReactNode;
  onNext: () => void;
  onPrev: () => void;
  slideIndex: number;
  totalSlides: number;
}

export interface GenericTextSlideProps {
  title: string;
  subtitle?: string;
  bullets: string[];
  presenterScript: string;
  memeFilename?: string;
}

export interface BreathingDemoProps {
  duration?: {
    inhale: number;
    hold: number;
    exhale: number;
  };
  loop?: boolean;
  autoStart?: boolean;
}

export interface MemeCardProps {
  filename?: string;
  fallbackCaption: string;
  altText?: string;
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
