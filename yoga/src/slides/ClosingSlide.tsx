import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Copy, Download, Share2, Heart, Sparkles, ArrowRight } from 'lucide-react';

export const ClosingSlide: React.FC = () => {
  const [showNotes, setShowNotes] = useState(false);

  const keyTakeaways = [
    "Yoga is more than exercise - it's a complete lifestyle",
    "Start with just 5 minutes daily for lasting benefits",
    "Breathing is your natural stress relief tool",
    "Flexibility comes with practice, not as a requirement",
    "Yoga improves focus, memory, and productivity"
  ];

  const practiceTips = [
    "Morning breathing (5 min)",
    "Mindful posture throughout the day",
    "Evening relaxation breathing",
    "Weekend longer sessions (15-30 min)"
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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const downloadNotes = () => {
    const notes = `
Yoga: More than Just Exercise - Key Takeaways

${keyTakeaways.map((takeaway, index) => `${index + 1}. ${takeaway}`).join('\n')}

Daily Practice Tips:
${practiceTips.map((tip, index) => `• ${tip}`).join('\n')}

Remember: Start where you are, not where you think you should be.
Yoga is a journey of self-discovery and inner peace.

Namaste 🙏
    `;
    
    const blob = new Blob([notes], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'yoga-notes.txt';
    a.click();
    URL.revokeObjectURL(url);
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
              Your Yoga Journey Begins
            </h1>
            <p className="text-xl text-gray-600">
              Thank you for exploring the world of yoga with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-yellow-500 mr-2" />
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {keyTakeaways.map((takeaway, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    className="flex items-start text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {takeaway}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-2" />
                Daily Practice Tips
              </h2>
              <ul className="space-y-3">
                {practiceTips.map((tip, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + (index * 0.1) }}
                    className="flex items-start text-gray-700"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4">
                Start with 5 Minutes Daily
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Small steps lead to big changes. Your yoga journey starts now!
              </p>
              <div className="flex items-center justify-center space-x-2 text-lg">
                <span>Begin your practice today</span>
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="px-6 py-3">
                  <Copy className="mr-2 h-5 w-5" />
                  Copy Notes
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Copy Notes to Clipboard</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Click the button below to copy the key takeaways to your clipboard.
                  </p>
                  <Button
                    onClick={() => copyToClipboard(keyTakeaways.join('\n\n'))}
                    className="w-full"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Key Takeaways
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              onClick={downloadNotes}
              variant="outline"
              size="lg"
              className="px-6 py-3"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Notes
            </Button>

            <Button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Yoga: More than Just Exercise',
                    text: 'Check out this amazing yoga presentation!',
                    url: window.location.href
                  });
                } else {
                  copyToClipboard(window.location.href);
                }
              }}
              variant="outline"
              size="lg"
              className="px-6 py-3"
            >
              <Share2 className="mr-2 h-5 w-5" />
              Share
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl mx-auto">
              <div className="text-6xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Namaste
              </h3>
              <p className="text-gray-600">
                "The light in me honors the light in you"
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Thank you for your presence and curiosity
              </p>
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};
