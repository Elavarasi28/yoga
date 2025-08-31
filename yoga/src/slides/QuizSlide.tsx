import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface SuryaNamaskarPose {
  id: number;
  sanskrit: string;
  english: string;
  description: string;
  benefits: string[];
}

export const QuizSlide: React.FC = () => {
  const [selectedPose, setSelectedPose] = useState<number>(1);

  const poses: SuryaNamaskarPose[] = [
    {
      id: 1,
      sanskrit: "Pranamasana",
      english: "Prayer Pose",
      description: "Stand upright, hands folded at the chest in namaskar.",
      benefits: ["Calms the mind", "Improves posture", "Prepares body for sequence"]
    },
    {
      id: 2,
      sanskrit: "Hasta Uttanasana",
      english: "Raised Arms Pose",
      description: "Arms stretched overhead, slight backbend.",
      benefits: ["Expands chest", "Improves digestion", "Tones arms"]
    },
    {
      id: 3,
      sanskrit: "Hasta Padasana",
      english: "Hand to Foot Pose",
      description: "Bend forward, palms touching feet.",
      benefits: ["Improves flexibility", "Strengthens spine", "Stimulates digestion"]
    },
    {
      id: 4,
      sanskrit: "Ashwa Sanchalanasana",
      english: "Equestrian Pose",
      description: "One leg stretched back, chest open, hands on floor.",
      benefits: ["Strengthens legs", "Improves hip flexibility", "Boosts balance"]
    },
    {
      id: 5,
      sanskrit: "Dandasana",
      english: "Stick/Plank Pose",
      description: "Body straight like a stick, arms perpendicular to floor.",
      benefits: ["Builds core strength", "Tones arms", "Improves posture"]
    },
    {
      id: 6,
      sanskrit: "Ashtanga Namaskara",
      english: "Eight-Limbed Pose",
      description: "Chest, knees, and chin touch ground; hips raised.",
      benefits: ["Strengthens arms & chest", "Improves spine flexibility"]
    },
    {
      id: 7,
      sanskrit: "Bhujangasana",
      english: "Cobra Pose",
      description: "Chest lifted, elbows close, legs stretched back.",
      benefits: ["Strengthens spine", "Improves lung capacity", "Reduces stress"]
    },
    {
      id: 8,
      sanskrit: "Adho Mukha Svanasana",
      english: "Downward Dog Pose",
      description: "Body forms inverted V, heels down, palms on floor.",
      benefits: ["Improves circulation", "Strengthens arms & legs", "Energizes body"]
    },
    {
      id: 9,
      sanskrit: "Ashwa Sanchalanasana",
      english: "Equestrian Pose (opposite leg)",
      description: "Repeat pose 4 with other leg forward.",
      benefits: ["Balances left/right body flexibility", "Tones thighs"]
    },
    {
      id: 10,
      sanskrit: "Hasta Padasana",
      english: "Hand to Foot Pose",
      description: "Repeat pose 3, fold forward, palms to feet.",
      benefits: ["Improves digestion", "Relieves stress", "Enhances flexibility"]
    },
    {
      id: 11,
      sanskrit: "Hasta Uttanasana",
      english: "Raised Arms Pose",
      description: "Repeat pose 2, arms overhead, slight backbend.",
      benefits: ["Expands lungs", "Improves balance", "Strengthens shoulders"]
    },
    {
      id: 12,
      sanskrit: "Tadasana",
      english: "Mountain Pose",
      description: "Stand straight, hands by side, relax.",
      benefits: ["Improves body awareness", "Restores calm", "Enhances posture"]
    }
  ];

  const selectedPoseData = poses.find(pose => pose.id === selectedPose) || poses[0];

  // Calculate position for each pose in the circle
  const getPosePosition = (index: number) => {
    const angle = (index * 30) - 90; // 30 degrees apart, starting from top
    const radius = 180; // Circle radius
    const x = Math.cos(angle * Math.PI / 180) * radius;
    const y = Math.sin(angle * Math.PI / 180) * radius;
    return { x, y };
  };

  return (
    <Card className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border-0 overflow-hidden">
      <CardContent className="p-4 md:p-6 lg:p-8 max-w-7xl w-full h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center">
          
          {/* Left Side - Circular Pose Layout */}
          <div className="relative flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-96 h-96"
            >
              {/* Center Sun Symbol */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl">
                ☀️
              </div>
              
              {/* Circular Path */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-orange-200 rounded-full opacity-30"></div>
              
              {/* Pose Circles */}
              {poses.map((pose, index) => {
                const position = getPosePosition(index);
                const isSelected = pose.id === selectedPose;
                
                return (
                  <motion.div
                    key={pose.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
                    style={{
                      left: `calc(50% + ${position.x}px)`,
                      top: `calc(50% + ${position.y}px)`
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: isSelected ? 1.2 : 1,
                    }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ scale: isSelected ? 1.3 : 1.1 }}
                    onClick={() => setSelectedPose(pose.id)}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${
                      isSelected 
                        ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-orange-300 shadow-2xl' 
                        : 'bg-gradient-to-br from-orange-400 to-amber-400 hover:from-orange-500 hover:to-red-500'
                    }`}>
                      {pose.id}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Side - Pose Details Card */}
          <motion.div
            key={selectedPose}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full flex items-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl w-full max-w-lg">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  {selectedPoseData.id}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedPoseData.sanskrit}
                </h2>
                <h3 className="text-lg text-gray-600 mb-4">
                  {selectedPoseData.english}
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Description
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedPoseData.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedPoseData.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Surya Namaskar
          </h1>
          <p className="text-xl text-gray-600 mt-2">
            Sun Salutation - 12 Sacred Poses
          </p>
        </motion.div>
      </CardContent>
    </Card>
  );
};
