import React from 'react';
import { Brain } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreInnovations = () => {
    navigate('/innovations');
  };

  const handleJoinCommunity = () => {
    navigate('/forum');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Brain className="h-20 w-20 text-blue-500" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        >
          <TypeAnimation
            sequence={[
              'L\'Intelligence Artificielle du Futur',
              1000,
              'Innovez avec l\'IA',
              1000,
              'Créez le Futur',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto text-gray-300"
        >
          Découvrez les dernières innovations en IA et rejoignez une communauté passionnée
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={handleExploreInnovations}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-colors flex items-center justify-center"
          >
            Explorer les Innovations
          </button>
          <button 
            onClick={handleJoinCommunity}
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-full font-semibold transition-colors flex items-center justify-center"
          >
            Rejoindre la Communauté
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;