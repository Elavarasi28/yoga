import React from 'react';
import { motion } from 'framer-motion';
import { useSlideContext } from '@/contexts/SlideContext';

export const ProgressDots: React.FC = () => {
  const { currentSlide, totalSlides, goToSlide } = useSlideContext();

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        {Array.from({ length: totalSlides }, (_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-600 scale-125'
                : index < currentSlide
                ? 'bg-blue-400'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
