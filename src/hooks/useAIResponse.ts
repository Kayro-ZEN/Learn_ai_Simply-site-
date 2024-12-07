import { useState, useCallback } from 'react';
import type { ChatMessage } from '../types';
import { getItem, setItem, StorageKeys } from '../services/storage/localStorageService';
import { getAIResponse } from '../services/ai/aiResponseService';

export const useAIResponse = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return getItem(StorageKeys.CHAT_MESSAGES) || [];
  });
  const [loading, setLoading] = useState(false);

  const addMessage = useCallback(async (message: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => {
      const newMessages = [...prev, userMessage];
      setItem(StorageKeys.CHAT_MESSAGES, newMessages);
      return newMessages;
    });

    setLoading(true);
    
    const aiResponse = await getAIResponse(message);
    
    const aiMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: aiResponse,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => {
      const newMessages = [...prev, aiMessage];
      setItem(StorageKeys.CHAT_MESSAGES, newMessages);
      return newMessages;
    });
    
    setLoading(false);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setItem(StorageKeys.CHAT_MESSAGES, []);
  }, []);

  return { messages, loading, addMessage, clearMessages };
};