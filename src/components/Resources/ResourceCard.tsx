import React from 'react';
import { motion } from 'framer-motion';
import { Book, Video, FileText, Download } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'documentation' | 'tutorial' | 'article' | 'download';
  link: string;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  type,
  link,
  index,
}) => {
  const icons = {
    documentation: <Book className="w-6 h-6" />,
    tutorial: <Video className="w-6 h-6" />,
    article: <FileText className="w-6 h-6" />,
    download: <Download className="w-6 h-6" />,
  };

  const colors = {
    documentation: 'from-blue-500/20 to-blue-600/20 text-blue-400',
    tutorial: 'from-green-500/20 to-green-600/20 text-green-400',
    article: 'from-purple-500/20 to-purple-600/20 text-purple-400',
    download: 'from-orange-500/20 to-orange-600/20 text-orange-400',
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
      <div className="bg-gray-800 rounded-lg p-6 h-full hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br ${colors[type]} mb-4`}>
          {icons[type]}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.a>
  );
};

export default ResourceCard;