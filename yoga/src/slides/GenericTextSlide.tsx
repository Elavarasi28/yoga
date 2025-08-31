import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MemeCard } from '@/components/MemeCard';
import type { GenericTextSlideProps } from '@/types';

export const GenericTextSlide: React.FC<GenericTextSlideProps> = ({
  title,
  subtitle,
  bullets,
  presenterScript,
  memeFilename
}) => {
  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0">
      <CardContent className="p-4 md:p-6 lg:p-8 max-w-6xl w-full">
        <div className="flex items-center justify-center h-full">
          {/* Left side - Content */}
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 
                id={`slide-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
              >
                {title}
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-3 md:space-y-4"
            >
                          <ul className="space-y-2 md:space-y-3 text-left">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-2 md:space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 md:mt-3 flex-shrink-0" />
                  <span className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
            </motion.div>

          </div>

        </div>
      </CardContent>
    </Card>
  );
};
