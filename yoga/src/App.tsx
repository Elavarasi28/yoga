import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, 
  ChevronRight, 
  X
} from 'lucide-react';
import { SlideProvider, useSlideContext } from '@/contexts/SlideContext';
import { SlideContainer } from '@/components/SlideContainer';
import { SlideNav } from '@/components/SlideNav';
import { slidesData } from '@/data/slidesData';

// Import all slide components
import { TitleSlide } from '@/slides/TitleSlide';
import { TypesOfYogaSlide } from '@/slides/TypesOfYogaSlide';
import { MythsFactsSlide } from '@/slides/MythsFactsSlide';
import { StressReliefSlide } from '@/slides/StressReliefSlide';
import { ProductivitySlide } from '@/slides/ProductivitySlide';
import { QuizSlide } from '@/slides/QuizSlide';
import { BreathingSlide } from '@/slides/BreathingSlide';
import { GenericTextSlide } from '@/slides/GenericTextSlide';

// Slide component mapping
const slideComponents: Record<string, React.ComponentType<any>> = {
  'Title': TitleSlide,
  'Types': TypesOfYogaSlide,
  'Myths': MythsFactsSlide,
  'Stress': StressReliefSlide,
  'Productivity': ProductivitySlide,
  'Quiz': QuizSlide,
  'Breathing': BreathingSlide,
  'Generic': GenericTextSlide,
};

// Main App Content Component
const AppContent: React.FC = () => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    presentMode,
    setPresentMode
  } = useSlideContext();

  const currentSlideData = slidesData[currentSlide];
  const CurrentSlideComponent = slideComponents[currentSlideData.component];

  const handleStart = () => {
    nextSlide();
  };



  const renderSlide = () => {
    if (currentSlideData.component === 'Title') {
      return <TitleSlide onStart={handleStart} />;
    }

    if (currentSlideData.component === 'Generic') {
      return (
        <GenericTextSlide
          title={currentSlideData.title}
          subtitle={currentSlideData.subtitle}
          bullets={currentSlideData.bullets}
          presenterScript={currentSlideData.presenterScript}
          memeFilename={currentSlideData.memeFilename}
        />
      );
    }

    // For other specific components, pass the slide data as props
    return <CurrentSlideComponent slideData={currentSlideData} />;
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">


      {/* Navigation Arrows - Hidden in present mode */}
      {!presentMode && (
        <>
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
              disabled={currentSlide === slidesData.length - 1}
              className="mb-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}

      {/* Slide Navigation - Hidden in present mode */}
      {!presentMode && <SlideNav />}

      {/* Main Content */}
      <div>
        <AnimatePresence mode="wait">
          <SlideContainer
            key={currentSlide}
            onNext={nextSlide}
            onPrev={prevSlide}
            slideIndex={currentSlide}
            totalSlides={slidesData.length}
          >
            {renderSlide()}
          </SlideContainer>
        </AnimatePresence>
      </div>



      {/* Presentation Mode Exit Button */}
      {presentMode && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setPresentMode(false)}
          className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm"
        >
          <X className="h-4 w-4 mr-2" />
          Exit Present
        </Button>
      )}


    </div>
  );
};

// Main App Component with Provider
function App() {
  return (
    <SlideProvider totalSlides={slidesData.length}>
      <AppContent />
    </SlideProvider>
  );
}

export default App;
