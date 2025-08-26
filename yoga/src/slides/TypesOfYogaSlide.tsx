import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Flame, Heart, BookOpen, Target, Lightbulb } from 'lucide-react';

export const TypesOfYogaSlide: React.FC = () => {
  const yogaTypes = [
    {
      id: "hatha",
      name: "Hatha Yoga",
      description: "Physical postures and breathing techniques for balance and strength",
      analogy: "Like 'Thalapathy' - strong foundation and classic approach",
      icon: Flame,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      id: "raja",
      name: "Raja Yoga",
      description: "Meditation and mental discipline for spiritual growth",
      analogy: "Like 'Superstar' - the king of all yogas, complete mastery",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: "bhakti",
      name: "Bhakti Yoga",
      description: "Devotion and love as a path to spiritual enlightenment",
      analogy: "Like 'Ilayathalapathy' - emotional depth and heart",
      icon: Heart,
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      id: "karma",
      name: "Karma Yoga",
      description: "Selfless service and action without attachment to results",
      analogy: "Like 'Ulaganayagan' - universal appeal and selfless work",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: "jnana",
      name: "Jnana Yoga",
      description: "Knowledge and wisdom through study and contemplation",
      analogy: "Like 'Thalaivar' - leadership through knowledge and wisdom",
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-0">
      <CardContent className="p-8 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Types of Yoga
          </h1>
          <p className="text-xl text-gray-600">
            Different paths, same destination - find your perfect yoga style
          </p>
        </motion.div>

        <Tabs defaultValue="hatha" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {yogaTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TabsTrigger 
                  value={type.id}
                  className="text-xs md:text-sm px-2 md:px-4"
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
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {type.name}
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      What it is:
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {type.description}
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Tamil Movie Analogy:
                    </h3>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <p className="text-lg text-gray-700 italic">
                        "{type.analogy}"
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-8xl mb-4">🎬</div>
                    <p className="text-lg text-gray-600 mb-4">
                      <strong>Meme Placeholder:</strong>
                    </p>
                    <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                      <p className="text-gray-500 text-sm">
                        📁 public/memes/{type.id}_yoga_meme.jpg
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        Replace with {type.name} related meme
                      </p>
                    </div>
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
