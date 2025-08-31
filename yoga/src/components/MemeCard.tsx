import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';
import type { MemeCardProps } from '@/types';

export const MemeCard: React.FC<MemeCardProps> = ({
  filename,
  fallbackCaption,
  altText
}) => {
  const memePath = filename ? `/memes/${filename}` : null;
  const displayAltText = altText || fallbackCaption;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300">
        <CardContent className="p-6 text-center">
          {memePath ? (
            <div className="space-y-3">
              <img
                src={memePath}
                alt={displayAltText}
                className="w-full h-48 object-cover rounded-lg shadow-md"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-sm text-gray-600 bg-gray-100 p-3 rounded">
                <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="font-medium">{fallbackCaption}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Image not found: {filename}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <ImageIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium text-gray-700 mb-2">
                Meme Placeholder
              </p>
              <p className="text-sm text-gray-500 mb-3">
                {fallbackCaption}
              </p>
              <div className="bg-gray-100 p-3 rounded text-xs text-gray-600">
                <p>📁 Add image to: public/memes/</p>
                <p>Suggested: {fallbackCaption.toLowerCase().replace(/\s+/g, '_')}.jpg</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};
