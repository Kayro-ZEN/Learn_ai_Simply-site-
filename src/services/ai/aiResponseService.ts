const AI_RESPONSES = {
  GENERAL: [
    "Je comprends votre question sur l'IA. Les dernières avancées montrent des progrès significatifs dans le domaine du deep learning, notamment avec les transformers.",
    "C'est une excellente question. Dans le domaine du machine learning, nous observons une évolution constante des algorithmes et de leurs applications.",
  ],
  ETHICS: [
    "Votre interrogation sur l'éthique de l'IA est pertinente. Les enjeux de transparence et de responsabilité sont au cœur des débats actuels.",
    "La question de l'éthique en IA est cruciale. Nous devons assurer un développement responsable et équitable des technologies."
  ],
  APPLICATIONS: [
    "Les applications pratiques de l'IA dans ce domaine sont nombreuses et prometteuses. Nous voyons déjà des impacts positifs dans la santé et l'éducation.",
    "L'IA trouve des applications concrètes dans de nombreux secteurs, de la médecine à l'environnement."
  ]
};

const getResponseCategory = (message: string): keyof typeof AI_RESPONSES => {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.includes('ethique') || lowerMessage.includes('responsable')) {
    return 'ETHICS';
  }
  if (lowerMessage.includes('application') || lowerMessage.includes('utilisation')) {
    return 'APPLICATIONS';
  }
  return 'GENERAL';
};

export const getAIResponse = async (message: string): Promise<string> => {
  // Simulation d'un délai de réponse rapide (200ms)
  await new Promise(resolve => setTimeout(resolve, 200));
  
  const category = getResponseCategory(message);
  const responses = AI_RESPONSES[category];
  return responses[Math.floor(Math.random() * responses.length)];
};