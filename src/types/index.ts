export interface Tutorial {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  participants: number;
  link: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  source: string;
  link: string;
}

export interface Download {
  id: number;
  title: string;
  description: string;
  size: string;
  downloads: number;
  format: string;
  link: string;
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export interface Resource {
  title: string;
  description: string;
  type: 'documentation' | 'tutorial' | 'article' | 'download';
  link: string;
}