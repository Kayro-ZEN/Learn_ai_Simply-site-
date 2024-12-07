import React from 'react';
import { FileText, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  source: string;
  link: string;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  date,
  readTime,
  source,
  link,
  index,
}) => {
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
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-400">{date}</span>
          </div>
          <span className="text-sm text-blue-400">{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
          <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex items-center">
          <FileText className="w-4 h-4 text-gray-500 mr-2" />
          <span className="text-sm text-gray-500">{source}</span>
        </div>
      </div>
    </motion.a>
  );
};

export default ArticleCard;