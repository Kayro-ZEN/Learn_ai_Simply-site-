import React from 'react';
import { Video, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface TutorialCardProps {
  title: string;
  description: string;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  participants: number;
  link: string;
  index: number;
}

const TutorialCard: React.FC<TutorialCardProps> = ({
  title,
  description,
  duration,
  level,
  participants,
  link,
  index,
}) => {
  const getLevelColor = () => {
    switch (level) {
      case 'Débutant': return 'text-green-400 bg-green-500/20';
      case 'Intermédiaire': return 'text-yellow-400 bg-yellow-500/20';
      case 'Avancé': return 'text-red-400 bg-red-500/20';
    }
  };

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="block"
    >
      <div className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Video className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">{duration}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs ${getLevelColor()}`}>
            {level}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center text-gray-500">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">{participants.toLocaleString()} participants</span>
        </div>
      </div>
    </motion.a>
  );
};

export default TutorialCard;