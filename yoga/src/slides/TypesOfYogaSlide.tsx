import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame, Heart, BookOpen, Target, Lightbulb } from 'lucide-react';

export const TypesOfYogaSlide: React.FC = () => {
  const yogaTypes = [
    {
      id: "hatha",
      name: "Hatha Yoga",
      subtitle: "The Physical Discipline",
      description: "The most common form of yoga in the West. Focuses on physical postures (asanas), breathing (pranayama), and relaxation. 'Ha' means sun, 'Tha' means moon → it balances opposite energies in the body. Great for beginners because it's gentle, slow, and builds the foundation.",
      icon: Flame,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: "raja",
      name: "Raja Yoga",
      subtitle: "The Royal Path – Meditation & Mind Control",
      description: "Known as the 'Yoga of Meditation.' Systemized by Sage Patanjali in the Yoga Sutras. Focuses on the 8 Limbs of Yoga (Yama, Niyama, Asana, Pranayama, Pratyahara, Dharana, Dhyana, Samadhi). Goal = control the mind → reach inner peace and self-realization.",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: "bhakti",
      name: "Bhakti Yoga",
      subtitle: "The Path of Devotion",
      description: "Focuses on love, devotion, and surrender to the divine. Involves chanting, singing, prayers, and rituals. Develops emotional purity, compassion, and connection with others. Teaches you to see God in everyone.",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: "karma",
      name: "Karma Yoga",
      subtitle: "The Path of Action & Selfless Service",
      description: "Doing your duty without expecting results. Teaches detachment: focus on action, not on the outcome. Builds humility, reduces ego, and helps community. Bhagavad Gita strongly emphasizes Karma Yoga.",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "jnana",
      name: "Jnana Yoga",
      subtitle: "The Path of Knowledge & Wisdom",
      description: "The intellectual approach to yoga. Focuses on self-inquiry: 'Who am I?' Involves study of scriptures, contemplation, and meditation. Goal = realize the difference between the self (Atman) and illusion (Maya).",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-0">
      <CardContent className="p-4 md:p-6 lg:p-8 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 md:mb-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Types of Yoga
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8">
            Different paths, same destination - find your perfect yoga style
          </p>
        </motion.div>

        <Tabs defaultValue="hatha" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mb-6 md:mb-8">
            {yogaTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TabsTrigger 
                  value={type.id}
                  className="text-xs md:text-sm px-1 md:px-2 lg:px-4 py-2"
                >
                  {type.name}
                </TabsTrigger>
              </motion.div>
            ))}
          </TabsList>

          {yogaTypes.map((type) => (
            <TabsContent key={type.id} value={type.id}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${type.bgColor} rounded-xl p-8 shadow-lg`}
              >
                <div className="text-center mb-6">
                  <div className={`${type.color} text-6xl mb-4`}>
                    <type.icon className="h-16 w-16 mx-auto" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                    {type.name}
                  </h2>
                  <h3 className="text-lg md:text-xl text-gray-600 mb-6 font-medium">
                    {type.subtitle}
                  </h3>
                </div>

                <div className="max-w-4xl mx-auto">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Description:
                  </h3>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};
