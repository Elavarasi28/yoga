import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BreathingDemo } from '@/components/BreathingDemo';

export const BreathingSlide: React.FC = () => {
  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 border-0">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Breathing: The Foundation of Everything
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Diaphragmatic breathing</strong> - Deep belly breathing for maximum oxygen intake
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Energy regulation</strong> - Control your stress response through conscious breath
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Mental clarity</strong> - Enhanced oxygen flow improves focus and decision-making
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">
                    <strong>Stress control</strong> - Activate your body's natural relaxation response
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </CardContent>
    </Card>
  );
};
