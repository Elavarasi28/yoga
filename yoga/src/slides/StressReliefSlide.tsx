import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Heart, Brain, ArrowRight } from 'lucide-react';

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
      <CardContent className="p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Yoga for Stress Relief
            </h1>
            <p className="text-xl text-gray-600">
              Recognize stress and learn how breathing can be your natural remedy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
              <div className="text-8xl mb-4">😰</div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Meme Placeholder:</strong> Stress + relief humor
              </p>
              <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">
                  📁 public/memes/stress_relief_meme.jpg
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Replace with stress relief meme
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Try Breathing?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Experience the power of conscious breathing in our interactive demo
              </p>
              <div className="flex items-center justify-center space-x-2 text-lg">
                <span>Next slide: Breathing Practice</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
