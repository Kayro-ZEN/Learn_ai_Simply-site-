import React from 'react';
import { Brain, Cpu, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: "Intelligence Artificielle",
    description: "Comprendre les fondements et les applications de l'IA moderne."
  },
  {
    icon: <Cpu className="h-8 w-8 text-blue-500" />,
    title: "Machine Learning",
    description: "Explorer les algorithmes qui permettent aux machines d'apprendre."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Communauté",
    description: "Rejoignez une communauté passionnée d'experts et d'apprenants."
  },
  {
    icon: <Lock className="h-8 w-8 text-blue-500" />,
    title: "Éthique & Sécurité",
    description: "Développer l'IA de manière responsable et sécurisée."
  }
];

const About: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            À Propos de l'IA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            L'intelligence artificielle révolutionne notre monde. Découvrez comment elle fonctionne et son impact sur notre futur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Notre Mission
          </h3>
          <p className="text-gray-400 mb-6">
            Nous nous engageons à démystifier l'intelligence artificielle et à la rendre accessible à tous. Notre plateforme offre des ressources éducatives, des actualités et un espace de discussion pour explorer ensemble le futur de l'IA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <h4 className="text-xl font-semibold text-white mb-2">Education</h4>
              <p className="text-gray-400">Ressources pédagogiques pour tous les niveaux</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
              <p className="text-gray-400">Dernières avancées en intelligence artificielle</p>
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-white mb-2">Collaboration</h4>
              <p className="text-gray-400">Espace d'échange et de partage de connaissances</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;