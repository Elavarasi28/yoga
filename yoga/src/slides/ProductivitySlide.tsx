import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Sunrise, Clock, TrendingUp } from 'lucide-react';

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
      <CardContent className="p-4 md:p-6 lg:p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Yoga for Productivity
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
              Boost your efficiency naturally with mindful practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
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

          
        </motion.div>
      </CardContent>
    </Card>
  );
};
