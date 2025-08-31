import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { SlideContainerProps } from '@/types';

export const SlideContainer: React.FC<SlideContainerProps> = ({
  children,
  onNext,
  onPrev,
  slideIndex
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus management for accessibility
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [slideIndex]);

  // Removed click handler - navigation only through navigation buttons

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowRight':
      case ' ':
        event.preventDefault();
        onNext();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        onPrev();
        break;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      role="region"
      aria-labelledby={`slide-title-${slideIndex}`}
      aria-live="polite"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      className="w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
