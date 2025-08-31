import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Heart, Brain } from 'lucide-react';

export const StressReliefSlide: React.FC = () => {
  const stressSigns = [
    {
      icon: AlertTriangle,
      sign: "Physical Tension",
      description: "Headaches, muscle tightness, fatigue",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Brain,
      sign: "Mental Overload",
      description: "Racing thoughts, poor concentration, forgetfulness",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      sign: "Emotional Distress",
      description: "Irritability, anxiety, mood swings",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  const breathingBenefits = [
    "Activates the parasympathetic nervous system",
    "Reduces cortisol (stress hormone) levels",
    "Increases oxygen flow to the brain",
    "Calms the mind and body naturally"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 border-0">
      <CardContent className="p-4 md:p-6 lg:p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Yoga for Stress Relief
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
              Recognize stress and learn how breathing can be your natural remedy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {stressSigns.map((sign) => (
              <motion.div
                key={sign.sign}
                variants={itemVariants}
                className={`${sign.bgColor} rounded-xl p-6 shadow-lg`}
              >
                <div className="text-center mb-4">
                  <div className={`${sign.color} text-4xl mb-3`}>
                    <sign.icon className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {sign.sign}
                  </h3>
                </div>
                <p className="text-gray-700 text-center">
                  {sign.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                How Breathing Helps
              </h2>
              <ul className="space-y-3">
                {breathingBenefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + (index * 0.1) }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Yoga Transformation</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Me before yoga:</h4>
                    <div className="bg-gray-100 rounded-lg p-4 mb-3">
                      <div className="text-6xl mb-2">😫</div>
                      <div className="text-sm text-gray-600">
                        Stressed, overwhelmed, scattered thoughts
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-700 mb-4">Me after yoga:</h4>
                    <div className="bg-green-50 rounded-lg p-4 mb-3">
                      <div className="text-6xl mb-2">🧘‍♀️</div>
                      <div className="text-sm text-green-700">
                        Calm, centered, peaceful mind
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4 italic">
                  "Yoga: Turning stress into serenity, one breath at a time"
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </CardContent>
    </Card>
  );
};
