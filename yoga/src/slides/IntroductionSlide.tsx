import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Heart, Zap } from 'lucide-react';

export const IntroductionSlide: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-0">
      <CardContent className="text-center p-8 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
              What is Yoga?
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <div className="text-6xl mb-6">🧘‍♀️</div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Yoga originates from ancient India and means <span className="font-semibold text-emerald-700">"Union"</span> - 
              the perfect harmony between your body, mind, and breath.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ancient Wisdom</h3>
              <p className="text-gray-600">5000+ years of proven practices</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Holistic Approach</h3>
              <p className="text-gray-600">Body, mind, and spirit together</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Modern Science</h3>
              <p className="text-gray-600">Backed by research today</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 italic">
                "Yoga is not about touching your toes, it's about what you learn on the way down."
              </p>
              <p className="text-sm text-gray-500 mt-2">- Jigar Gor</p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
