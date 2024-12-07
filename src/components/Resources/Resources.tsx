import React from 'react';
import { motion } from 'framer-motion';
import ResourceSection from './ResourceSection';
import type { Resource } from '../../types';

const documentationResources: Resource[] = [
  {
    title: "Guide Complet de l'IA",
    description: "Une documentation complète sur les fondamentaux de l'intelligence artificielle et ses applications.",
    type: 'documentation',
    link: 'https://developers.google.com/machine-learning/crash-course'
  },
  {
    title: "Documentation PyTorch",
    description: "Guide officiel de PyTorch pour le deep learning et l'apprentissage automatique.",
    type: 'documentation',
    link: 'https://pytorch.org/docs/stable/index.html'
  },
  {
    title: "TensorFlow Guide",
    description: "Documentation complète de TensorFlow avec exemples pratiques et tutoriels.",
    type: 'documentation',
    link: 'https://www.tensorflow.org/guide'
  },
  {
    title: "Guide scikit-learn",
    description: "Documentation officielle de scikit-learn pour le machine learning en Python.",
    type: 'documentation',
    link: 'https://scikit-learn.org/stable/user_guide.html'
  },
  {
    title: "Guide Keras",
    description: "Documentation détaillée de Keras pour le deep learning simplifié.",
    type: 'documentation',
    link: 'https://keras.io/guides/'
  },
  {
    title: "Documentation Hugging Face",
    description: "Guide complet sur les transformers et le traitement du langage naturel.",
    type: 'documentation',
    link: 'https://huggingface.co/docs'
  }
];

const tutorialResources: Resource[] = [
  {
    title: "Deep Learning Specialization",
    description: "Formation complète sur le deep learning par Andrew Ng sur Coursera.",
    type: 'tutorial',
    link: 'https://www.coursera.org/specializations/deep-learning'
  },
  {
    title: "Fast.ai Practical Deep Learning",
    description: "Cours pratique de deep learning pour les codeurs par fast.ai.",
    type: 'tutorial',
    link: 'https://course.fast.ai/'
  },
  {
    title: "Stanford CS231n",
    description: "Cours de vision par ordinateur et deep learning de Stanford.",
    type: 'tutorial',
    link: 'http://cs231n.stanford.edu/'
  },
  {
    title: "MIT Introduction to Deep Learning",
    description: "Cours d'introduction au deep learning du MIT.",
    type: 'tutorial',
    link: 'http://introtodeeplearning.com/'
  },
  {
    title: "Google AI Education",
    description: "Ressources éducatives et tutoriels par Google AI.",
    type: 'tutorial',
    link: 'https://ai.google/education/'
  },
  {
    title: "Microsoft AI School",
    description: "Parcours d'apprentissage IA par Microsoft.",
    type: 'tutorial',
    link: 'https://microsoft.com/ai/ai-school'
  }
];

const articleResources: Resource[] = [
  {
    title: "State of AI Report 2024",
    description: "Rapport annuel sur l'état de l'IA et ses avancées majeures.",
    type: 'article',
    link: 'https://www.stateof.ai/'
  },
  {
    title: "AI Index Report - Stanford HAI",
    description: "Analyse approfondie des tendances en IA par Stanford.",
    type: 'article',
    link: 'https://hai.stanford.edu/research/ai-index-2024'
  },
  {
    title: "Nature: AI Review",
    description: "Revue des dernières découvertes en IA publiée dans Nature.",
    type: 'article',
    link: 'https://www.nature.com/articles/s41586-021-03580-6'
  },
  {
    title: "DeepMind Research Blog",
    description: "Articles de recherche et avancées par l'équipe DeepMind.",
    type: 'article',
    link: 'https://deepmind.com/blog'
  },
  {
    title: "OpenAI Research",
    description: "Publications et articles de recherche d'OpenAI.",
    type: 'article',
    link: 'https://openai.com/research'
  },
  {
    title: "arXiv AI Papers",
    description: "Derniers articles scientifiques en IA sur arXiv.",
    type: 'article',
    link: 'https://arxiv.org/list/cs.AI/recent'
  }
];

const toolsResources: Resource[] = [
  {
    title: "Kaggle Datasets IA",
    description: "Collection de datasets pour l'apprentissage automatique.",
    type: 'download',
    link: 'https://www.kaggle.com/datasets'
  },
  {
    title: "Google Cloud AI Tools",
    description: "Suite d'outils IA dans le cloud par Google.",
    type: 'download',
    link: 'https://cloud.google.com/products/ai'
  },
  {
    title: "Azure AI Services",
    description: "Services et outils IA de Microsoft Azure.",
    type: 'download',
    link: 'https://azure.microsoft.com/services/cognitive-services/'
  },
  {
    title: "AWS AI Services",
    description: "Services d'intelligence artificielle d'Amazon Web Services.",
    type: 'download',
    link: 'https://aws.amazon.com/machine-learning/'
  },
  {
    title: "Hugging Face Models",
    description: "Bibliothèque de modèles pré-entraînés pour le NLP.",
    type: 'download',
    link: 'https://huggingface.co/models'
  },
  {
    title: "TensorFlow Model Garden",
    description: "Collection de modèles TensorFlow implémentés.",
    type: 'download',
    link: 'https://github.com/tensorflow/models'
  }
];

const Resources: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Centre de Ressources IA
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explorez notre collection complète de ressources pour approfondir vos connaissances en intelligence artificielle
          </p>
        </motion.div>

        <ResourceSection
          title="Documentation Technique"
          description="Guides complets et documentation détaillée pour maîtriser les concepts de l'IA"
          resources={documentationResources}
          startIndex={0}
        />

        <ResourceSection
          title="Tutoriels et Formations"
          description="Apprenez par la pratique avec nos tutoriels et cours interactifs"
          resources={tutorialResources}
          startIndex={6}
        />

        <ResourceSection
          title="Articles et Publications"
          description="Restez à jour avec les dernières recherches et analyses dans le domaine de l'IA"
          resources={articleResources}
          startIndex={12}
        />

        <ResourceSection
          title="Outils et Ressources"
          description="Téléchargez des outils, datasets et modèles pour vos projets d'IA"
          resources={toolsResources}
          startIndex={18}
        />
      </div>
    </section>
  );
};

export default Resources;