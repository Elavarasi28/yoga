import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Home, 
  Target,
  Menu,
  X,
  Copy,
  Monitor
} from 'lucide-react';
import { useSlideContext } from '@/contexts/SlideContext';
import { slidesData } from '@/data/slidesData';

export const SlideNav: React.FC = () => {
  const [showNav, setShowNav] = useState(false);
  const {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    goToFirstSlide,
    goToLastSlide,
    isAutoPlay,
    setIsAutoPlay,
    presentMode,
    setPresentMode,
    copyNotes
  } = useSlideContext();

  // Don't render in present mode
  if (presentMode) return null;

  return (
    <>
      {/* Navigation Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowNav(!showNav)}
        className="fixed left-4 top-20 z-50 bg-white/90 backdrop-blur-sm shadow-lg"
      >
        <Menu className="h-4 w-4" />
      </Button>

      {/* Navigation Panel */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed left-0 top-0 h-full bg-white/95 backdrop-blur-sm border-r border-gray-200 z-40 shadow-xl"
          >
            <Card className="h-full border-0 rounded-none">
              <CardContent className="p-4 w-72 h-full overflow-y-auto">
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

                {/* Present Mode Toggle */}
                <div className="mb-6">
                  <Button
                    variant={presentMode ? "default" : "outline"}
                    size="sm"
                    onClick={() => setPresentMode(!presentMode)}
                    className="w-full justify-start"
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    {presentMode ? "Exit Present" : "Enter Present"}
                  </Button>
                </div>

                {/* Slide List */}
                <div className="space-y-2 mb-6">
                  {slidesData.map((slide) => (
                    <Button
                      key={slide.id}
                      variant={currentSlide === slide.id ? "default" : "ghost"}
                      className="w-full justify-start text-sm"
                      onClick={() => {
                        goToSlide(slide.id);
                        setShowNav(false);
                      }}
                    >
                      <div className="w-3 h-3 rounded-full bg-current mr-3 opacity-60" />
                      <div className="text-left">
                        <div className="font-medium">{slide.title}</div>
                        <div className="text-xs text-gray-500 opacity-75">
                          {slide.component}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mb-6 pt-4 border-t border-gray-200">
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyNotes}
                      className="w-full justify-start text-xs"
                    >
                      <Copy className="h-3 w-3 mr-2" />
                      Copy Notes
                    </Button>
                  </div>
                </div>

                {/* Auto-play Controls */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-3">Auto-play</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsAutoPlay(!isAutoPlay)}
                    className="w-full justify-start text-xs"
                  >
                    {isAutoPlay ? (
                      <>
                        <Pause className="h-3 w-3 mr-2" />
                        Pause Auto-play
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3 mr-2" />
                        Start Auto-play
                      </>
                    )}
                  </Button>
                </div>

                {/* Navigation Arrows */}
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-700 mb-3">Navigation</h4>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className="flex-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextSlide}
                      disabled={currentSlide === slidesData.length - 1}
                      className="flex-1"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Current Slide Info */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-xs text-gray-500">
                    <p>Current: {currentSlide + 1} of {slidesData.length}</p>
                    <p className="mt-1">
                      {slidesData[currentSlide]?.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

