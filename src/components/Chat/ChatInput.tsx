import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  loading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, loading }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Posez votre question..."
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2 text-white transition-colors"
          disabled={loading}
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;