import React from 'react';
import { Download, HardDrive, Users } from 'lucide-react';
import { motion } from 'framer-motion';

interface DownloadCardProps {
  title: string;
  description: string;
  size: string;
  downloads: number;
  format: string;
  link: string;
  index: number;
}

const DownloadCard: React.FC<DownloadCardProps> = ({
  title,
  description,
  size,
  downloads,
  format,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-2">
          <HardDrive className="w-5 h-5 text-blue-400" />
          <span className="text-sm text-gray-400">{format}</span>
        </div>
        <span className="text-sm text-gray-400">{size}</span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray-500">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">{downloads.toLocaleString()} téléchargements</span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
        >
          <Download className="w-4 h-4 mr-2" />
          Télécharger
        </a>
      </div>
    </motion.div>
  );
};

export default DownloadCard;