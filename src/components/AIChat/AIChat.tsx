import React, { useState, useCallback } from 'react';
import { Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAIResponse } from '../../hooks/useAIResponse';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const { messages, loading, addMessage, clearMessages } = useAIResponse();

  const toggleChat = useCallback(() => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  }, [isOpen]);

  const toggleMinimize = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  }, [isMinimized]);

  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.button
          onClick={toggleChat}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Bot className="w-6 h-6" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-4 right-4 w-80 bg-gray-800 rounded-lg shadow-lg ${
            isMinimized ? 'h-auto' : 'h-[500px]'
          }`}
        >
          <ChatHeader
            isMinimized={isMinimized}
            onMinimize={toggleMinimize}
            onClose={toggleChat}
            onClear={clearMessages}
          />
          
          {!isMinimized && (
            <>
              <ChatMessages messages={messages} loading={loading} />
              <ChatInput onSend={addMessage} loading={loading} />
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIChat;