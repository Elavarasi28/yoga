import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Coffee, Apple, Monitor, Sparkles } from 'lucide-react';

export const DailyLifeSlide: React.FC = () => {
  const dailyPractices = [
    {
      icon: Clock,
      title: "5-Minute Breathing",
      description: "Start your day with deep breathing exercises",
      time: "5 min",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Monitor,
      title: "Sitting Straight",
      description: "Maintain good posture while working or studying",
      time: "All day",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Apple,
      title: "Mindful Eating",
      description: "Eat slowly, savor each bite, be present",
      time: "3 meals",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
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
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-0">
      <CardContent className="p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Yoga in Daily Life
            </h1>
            <p className="text-xl text-gray-600">
              Simple practices you can integrate into your everyday routine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {dailyPractices.map((practice) => (
              <motion.div
                key={practice.title}
                variants={itemVariants}
                className={`${practice.bgColor} rounded-xl p-6 shadow-lg`}
              >
                <div className="text-center mb-4">
                  <div className={`${practice.color} text-4xl mb-3`}>
                    <practice.icon className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {practice.title}
                  </h3>
                  <div className="bg-white rounded-full px-3 py-1 inline-block">
                    <span className="text-sm font-medium text-gray-600">
                      {practice.time}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-center">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Quick Tips for Students
              </h2>
              <ul className="space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex items-center text-gray-700"
                >
                  <Sparkles className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Take 2-minute breathing breaks between study sessions
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex items-center text-gray-700"
                >
                  <Sparkles className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Practice mindful posture while reading or typing
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="flex items-center text-gray-700"
                >
                  <Sparkles className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                  Use breathing techniques before exams for calm focus
                </motion.li>
              </ul>
            </div>

          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <Coffee className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <p className="text-lg text-gray-700">
                <strong>Remember:</strong> Yoga is like coffee for your soul - 
                it gives you energy, but the natural way!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
