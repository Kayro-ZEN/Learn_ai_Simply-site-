import type { Tutorial, Article, Download } from '../../types';

export const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Deep Learning Fundamentals",
    description: "Formation complète sur les bases du deep learning avec PyTorch",
    duration: "12 heures",
    level: "Débutant",
    participants: 15420,
    link: "https://www.coursera.org/learn/deep-learning-fundamentals"
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Maîtrisez le traitement du langage naturel avec les transformers",
    duration: "8 heures",
    level: "Intermédiaire",
    participants: 8750,
    link: "https://www.coursera.org/learn/natural-language-processing"
  },
  {
    id: 3,
    title: "Computer Vision Advanced",
    description: "Techniques avancées de vision par ordinateur avec TensorFlow",
    duration: "15 heures",
    level: "Avancé",
    participants: 6300,
    link: "https://www.coursera.org/learn/computer-vision-advanced"
  }
];

export const articles: Article[] = [
  {
    id: 1,
    title: "L'avenir de l'IA générative",
    description: "Analyse approfondie des dernières avancées en IA générative",
    date: "2024-03-15",
    readTime: "10 min",
    source: "AI Research Journal",
    link: "https://ai-research-journal.com/future-of-generative-ai"
  },
  {
    id: 2,
    title: "Éthique et IA : les défis actuels",
    description: "État des lieux des enjeux éthiques dans le développement de l'IA",
    date: "2024-03-10",
    readTime: "15 min",
    source: "Tech Ethics Review",
    link: "https://tech-ethics-review.com/ai-ethics-challenges"
  },
  {
    id: 3,
    title: "IA et santé : révolution médicale",
    description: "Comment l'IA transforme le diagnostic et le traitement médical",
    date: "2024-03-05",
    readTime: "12 min",
    source: "Medical AI Journal",
    link: "https://medical-ai-journal.com/ai-healthcare-revolution"
  }
];

export const downloads: Download[] = [
  {
    id: 1,
    title: "Dataset IA médicale",
    description: "Collection d'images médicales annotées pour l'entraînement de modèles",
    size: "2.5 GB",
    downloads: 12500,
    format: "ZIP",
    link: "https://datasets.org/medical-ai-dataset"
  },
  {
    id: 2,
    title: "Modèles pré-entraînés NLP",
    description: "Ensemble de modèles BERT optimisés pour le français",
    size: "4.8 GB",
    downloads: 8900,
    format: "TAR.GZ",
    link: "https://models.org/french-bert-models"
  },
  {
    id: 3,
    title: "Outils d'annotation IA",
    description: "Suite d'outils pour l'annotation de données d'apprentissage",
    size: "156 MB",
    downloads: 25600,
    format: "EXE",
    link: "https://tools.org/ai-annotation-suite"
  }
];