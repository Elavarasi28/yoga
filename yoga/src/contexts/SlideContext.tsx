import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import type { SlideContextType } from '@/types';

const SlideContext = createContext<SlideContextType | undefined>(undefined);

interface SlideProviderProps {
  children: React.ReactNode;
  totalSlides: number;
}

export const SlideProvider: React.FC<SlideProviderProps> = ({ children, totalSlides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [presentMode, setPresentMode] = useState(false);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= 0 && slideIndex < totalSlides) {
      setCurrentSlide(slideIndex);
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToFirstSlide = useCallback(() => {
    setCurrentSlide(0);
  }, []);

  const goToLastSlide = useCallback(() => {
    setCurrentSlide(totalSlides - 1);
  }, [totalSlides]);

  const copyNotes = useCallback(async () => {
    try {
      // This will be implemented when we have access to current slide data
      await navigator.clipboard.writeText('Presenter notes copied to clipboard');
    } catch (err) {
      console.error('Failed to copy notes:', err);
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keys in present mode or when not in input fields
      if (!presentMode && event.target instanceof HTMLInputElement) return;

      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevSlide();
          break;
        case 'Home':
          event.preventDefault();
          goToFirstSlide();
          break;
        case 'End':
          event.preventDefault();
          goToLastSlide();
          break;
        case 'Escape':
          event.preventDefault();
          setIsAutoPlay(false);
          if (presentMode) {
            setPresentMode(false);
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          event.preventDefault();
          const slideNumber = parseInt(event.key) - 1;
          if (slideNumber < totalSlides) {
            goToSlide(slideNumber);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [presentMode, nextSlide, prevSlide, goToFirstSlide, goToLastSlide, goToSlide, totalSlides]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      if (currentSlide < totalSlides - 1) {
        nextSlide();
      } else {
        setIsAutoPlay(false);
      }
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide, totalSlides, nextSlide]);

  const value: SlideContextType = {
    currentSlide,
    totalSlides,
    goToSlide,
    nextSlide,
    prevSlide,
    goToFirstSlide,
    goToLastSlide,
    isAutoPlay,
    setIsAutoPlay,
    presentMode,
    setPresentMode,
    copyNotes,
  };

  return (
    <SlideContext.Provider value={value}>
      {children}
    </SlideContext.Provider>
  );
};

export const useSlideContext = (): SlideContextType => {
  const context = useContext(SlideContext);
  if (context === undefined) {
    throw new Error('useSlideContext must be used within a SlideProvider');
  }
  return context;
};
