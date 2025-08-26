import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Home, 
  Target,
  Menu,
  X
} from 'lucide-react';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { TitleSlide } from '@/slides/TitleSlide';
import { IntroductionSlide } from '@/slides/IntroductionSlide';
import { BenefitsSlide } from '@/slides/BenefitsSlide';
import { TypesOfYogaSlide } from '@/slides/TypesOfYogaSlide';
import { DailyLifeSlide } from '@/slides/DailyLifeSlide';
import { StressReliefSlide } from '@/slides/StressReliefSlide';
import { ProductivitySlide } from '@/slides/ProductivitySlide';
import { BreathingPracticeSlide } from '@/slides/BreathingPracticeSlide';
import { MythsFactsSlide } from '@/slides/MythsFactsSlide';
import { QuizSlide } from '@/slides/QuizSlide';
import { ClosingSlide } from '@/slides/ClosingSlide';

const slides = [
  { id: 0, title: "Title", component: TitleSlide },
  { id: 1, title: "Introduction", component: IntroductionSlide },
  { id: 2, title: "Benefits", component: BenefitsSlide },
  { id: 3, title: "Types of Yoga", component: TypesOfYogaSlide },
  { id: 4, title: "Daily Life", component: DailyLifeSlide },
  { id: 5, title: "Stress Relief", component: StressReliefSlide },
  { id: 6, title: "Productivity", component: ProductivitySlide },
  { id: 7, title: "Breathing Practice", component: BreathingPracticeSlide },
  { id: 8, title: "Myths & Facts", component: MythsFactsSlide },
  { id: 9, title: "Quiz", component: QuizSlide },
  { id: 10, title: "Closing", component: ClosingSlide }
];

function App() {
  const [showNav, setShowNav] = useState(false);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  
  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    goToFirstSlide,
    goToLastSlide,
    isAutoPlay,
    setIsAutoPlay
  } = useSlideNavigation(slides.length);

  const handleStart = () => {
    nextSlide();
  };

  const togglePresentationMode = () => {
    setIsPresentationMode(!isPresentationMode);
    setShowNav(false);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Navigation Overlay */}
      {!isPresentationMode && (
        <>
          {/* Top Progress Bar */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
            <div className="max-w-4xl mx-auto px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Slide {currentSlide + 1} of {slides.length}
                </span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="text-xs"
                  >
                    {isAutoPlay ? (
                      <>
                        <Pause className="h-3 w-3 mr-1" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3 mr-1" />
                        Auto
                      </>
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={togglePresentationMode}
                    className="text-xs"
                  >
                    <Target className="h-3 w-3 mr-1" />
                    Present
                  </Button>
                </div>
              </div>
              <Progress 
                value={((currentSlide + 1) / slides.length) * 100} 
                className="h-2"
              />
            </div>
          </div>

          {/* Left Navigation Panel */}
          <div className={`fixed left-0 top-0 h-full bg-white/95 backdrop-blur-sm border-r border-gray-200 transition-transform duration-300 z-40 ${
            showNav ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="p-4 w-64 h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-800">Navigation</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowNav(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {slides.map((slide) => (
                  <Button
                    key={slide.id}
                    variant={currentSlide === slide.id ? "default" : "ghost"}
                    className="w-full justify-start text-sm"
                    onClick={() => {
                      goToSlide(slide.id);
                      setShowNav(false);
                    }}
                  >
                    <div className="w-4 h-4 rounded-full bg-current mr-3 opacity-60" />
                    {slide.title}
                  </Button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3">Quick Actions</h4>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToFirstSlide}
                    className="w-full justify-start text-xs"
                  >
                    <Home className="h-3 w-3 mr-2" />
                    First Slide
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToLastSlide}
                    className="w-full justify-start text-xs"
                  >
                    <Target className="h-3 w-3 mr-2" />
                    Last Slide
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Toggle */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowNav(!showNav)}
            className="fixed left-4 top-20 z-50"
          >
            <Menu className="h-4 w-4" />
          </Button>

          {/* Navigation Arrows */}
          <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="mb-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30">
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="mb-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className={`${!isPresentationMode ? 'pt-20' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {currentSlide === 0 ? (
              <TitleSlide onStart={handleStart} />
            ) : (
              <CurrentSlideComponent onStart={function (): void {
                  throw new Error('Function not implemented.');
                } } {...{}} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Presentation Mode Exit Button */}
      {isPresentationMode && (
        <Button
          variant="outline"
          size="sm"
          onClick={togglePresentationMode}
          className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm"
        >
          <X className="h-4 w-4 mr-2" />
          Exit Present
        </Button>
      )}

      {/* Keyboard Navigation Hint */}
      {!isPresentationMode && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm">
            Use ← → arrows or Space to navigate • ESC to stop auto-play
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
