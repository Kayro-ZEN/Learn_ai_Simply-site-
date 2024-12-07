import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface InnovationCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  index: number;
}

const InnovationCard: React.FC<InnovationCardProps> = ({
  title,
  description,
  image,
  category,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-[1.02] group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400">
              {category}
            </span>
            <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default InnovationCard;