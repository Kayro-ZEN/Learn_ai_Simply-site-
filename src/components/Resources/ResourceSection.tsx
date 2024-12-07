import React from 'react';
import { motion } from 'framer-motion';
import ResourceCard from './ResourceCard';
import type { Resource } from '../../types';

interface ResourceSectionProps {
  title: string;
  description: string;
  resources: Resource[];
  startIndex: number;
}

const ResourceSection: React.FC<ResourceSectionProps> = ({
  title,
  description,
  resources,
  startIndex,
}) => {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={resource.title}
            {...resource}
            index={startIndex + index}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;