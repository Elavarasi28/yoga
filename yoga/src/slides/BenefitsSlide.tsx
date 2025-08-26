import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Activity, Brain, Heart, Sparkles } from 'lucide-react';

export const BenefitsSlide: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const benefits = [
    {
      icon: Activity,
      title: "Physical Benefits",
      items: ["Improved flexibility", "Better posture", "Increased strength", "Enhanced balance"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Brain,
      title: "Mental Benefits",
      items: ["Reduced stress", "Better focus", "Improved memory", "Mental clarity"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Heart,
      title: "Emotional Benefits",
      items: ["Inner peace", "Emotional balance", "Self-awareness", "Confidence boost"],
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-0">
      <CardContent className="p-8 max-w-6xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              Why Practice Yoga?
            </h1>
            <p className="text-xl text-gray-600">
              Discover the transformative benefits that go beyond the mat
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className={`${benefit.bgColor} rounded-xl p-6 shadow-lg`}
              >
                <div className="text-center mb-4">
                  <div className={`${benefit.color} text-4xl mb-3`}>
                    <benefit.icon className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) + (itemIndex * 0.1) }}
                      className="flex items-center text-gray-700"
                    >
                      <Sparkles className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <div className="text-4xl mb-4">😄</div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Meme Placeholder:</strong> Replace with your favorite yoga meme!
              </p>
              <p className="text-sm text-gray-500">
                Suggested: "Vadivelu Enna Koduma" meme or any yoga-related humor
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-sm">
                  📁 public/memes/yoga_benefits_meme.jpg
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
