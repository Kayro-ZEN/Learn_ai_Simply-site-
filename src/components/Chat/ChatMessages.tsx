import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import type { ChatMessage as ChatMessageType } from '../../types';

interface ChatMessagesProps {
  messages: ChatMessageType[];
  loading: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, loading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-[400px] overflow-y-auto p-4 space-y-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      {loading && (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;