import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

interface TitleSlideProps {
  onStart: () => void;
}

export const TitleSlide: React.FC<TitleSlideProps> = ({ onStart }) => {
  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0">
      <CardContent className="text-center p-4 md:p-6 lg:p-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4 md:space-y-6"
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Yoga: More than Just Exercise
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 md:mb-12 font-light">
            Union of Body, Mind & Breath
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            className="text-xl px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={onStart}
          >
            <Play className="mr-2 h-6 w-6" />
            Begin Your Journey
          </Button>
        </motion.div>


      </CardContent>
    </Card>
  );
};
