import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sunrise, Coffee, Zap, Clock, TrendingUp } from 'lucide-react';

export const ProductivitySlide: React.FC = () => {
  const productivityTips = [
    {
      icon: Sunrise,
      title: "Morning Breathing",
      description: "Start with 5 minutes of deep breathing to activate your energy",
      time: "5 min",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Mindful Breaks",
      description: "Take 2-minute breathing breaks every hour for sustained focus",
      time: "2 min/hour",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "Posture Awareness",
      description: "Maintain good posture for better energy flow and concentration",
      time: "All day",
      color: "text-green-600",
      bgColor: "bg-green-50"
    }
  ];

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
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 border-0">
      <CardContent className="p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Yoga for Productivity
            </h1>
            <p className="text-xl text-gray-600">
              Boost your efficiency naturally with mindful practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {productivityTips.map((tip) => (
              <motion.div
                key={tip.title}
                variants={itemVariants}
                className={`${tip.bgColor} rounded-xl p-6 shadow-lg`}
              >
                <div className="text-center mb-4">
                  <div className={`${tip.color} text-4xl mb-3`}>
                    <tip.icon className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {tip.title}
                  </h3>
                  <div className="bg-white rounded-full px-3 py-1 inline-block">
                    <span className="text-sm font-medium text-gray-600">
                      {tip.time}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-center">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Energy vs Coffee: The Natural Way
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center mb-2">
                    <Coffee className="h-5 w-5 text-orange-600 mr-2" />
                    <span className="font-semibold text-gray-800">Coffee Energy</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Quick spike, followed by crash, dependency, jitters
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 shadow-md border-l-4 border-green-500">
                  <div className="flex items-center mb-2">
                    <Zap className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-800">Yoga Energy</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Sustained energy, no crash, natural, calming
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-8xl mb-4">⚡</div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Meme Placeholder:</strong> Productivity + energy humor
              </p>
              <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">
                  📁 public/memes/productivity_energy_meme.jpg
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Replace with productivity meme
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-3">
                Pro Tip: The 4-7-8 Breathing Technique
              </h3>
              <p className="text-lg opacity-90">
                Inhale for 4 counts, hold for 7, exhale for 8. 
                Perfect for quick energy boost during work!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
