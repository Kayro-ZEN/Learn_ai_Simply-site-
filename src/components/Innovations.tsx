import React from 'react';
import InnovationCard from './InnovationCard';
import { motion } from 'framer-motion';

const innovations = [
  {
    title: "GPT-4 Multimodal",
    description: "Une IA capable de comprendre et d'analyser à la fois le texte et les images, ouvrant de nouvelles possibilités d'interaction.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    category: "Language Models",
    link: "https://openai.com/gpt-4"
  },
  {
    title: "AlphaFold",
    description: "Révolutionne la biologie en prédisant la structure 3D des protéines avec une précision sans précédent.",
    image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e",
    category: "Science",
    link: "https://deepmind.com/research/case-studies/alphafold"
  },
  {
    title: "DALL·E 3",
    description: "Génération d'images de haute qualité à partir de descriptions textuelles, repoussant les limites de la créativité.",
    image: "https://images.unsplash.com/photo-1686191128892-3261ef360667",
    category: "Art & Création",
    link: "https://openai.com/dall-e-3"
  },
  {
    title: "LaMDA",
    description: "Un modèle de langage conversationnel qui comprend et génère du texte naturel avec une fluidité remarquable.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    category: "Conversation",
    link: "https://blog.google/technology/ai/lamda/"
  },
  {
    title: "Stable Diffusion XL",
    description: "Une nouvelle génération de modèle de génération d'images offrant un niveau de détail et de cohérence sans précédent.",
    image: "https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9",
    category: "Art & Création",
    link: "https://stability.ai/stable-diffusion"
  },
  {
    title: "Claude 2",
    description: "Assistant IA avancé capable de raisonnement complexe et d'analyse approfondie.",
    image: "https://images.unsplash.com/photo-1676299081847-c0326a0333d5",
    category: "Assistant IA",
    link: "https://anthropic.com/claude"
  }
];

const Innovations: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Dernières Innovations en IA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez les avancées les plus récentes qui transforment notre façon de vivre et de travailler.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <InnovationCard 
              key={innovation.title} 
              {...innovation} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;