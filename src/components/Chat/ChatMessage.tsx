import React from 'react';
import type { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          message.type === 'user'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-700 text-white'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;