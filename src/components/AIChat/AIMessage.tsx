import React from 'react';
import { Bot, User } from 'lucide-react';
import type { ChatMessage } from '../../types';

interface AIMessageProps {
  message: ChatMessage;
}

const AIMessage: React.FC<AIMessageProps> = ({ message }) => {
  const isUser = message.type === 'user';
  
  return (
    <div className={`flex items-start space-x-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-white'
        }`}
      >
        {message.content}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default AIMessage;