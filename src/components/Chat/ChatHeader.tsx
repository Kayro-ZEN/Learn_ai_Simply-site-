import React from 'react';
import { Bot, X, Maximize2, Minimize2, Trash2 } from 'lucide-react';

interface ChatHeaderProps {
  isMinimized: boolean;
  onMinimize: (e: React.MouseEvent) => void;
  onClose: (e: React.MouseEvent) => void;
  onClear: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isMinimized, onMinimize, onClose, onClear }) => {
  return (
    <div 
      className="p-4 border-b border-gray-700 flex items-center justify-between cursor-pointer"
      onClick={onMinimize}
    >
      <div className="flex items-center">
        <Bot className="w-6 h-6 text-blue-500 mr-2" />
        <h3 className="text-white font-semibold">Assistant IA</h3>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
          className="text-gray-400 hover:text-white transition-colors"
          title="Effacer l'historique"
        >
          <Trash2 size={18} />
        </button>
        {isMinimized ? (
          <Maximize2 className="w-5 h-5 text-gray-400 hover:text-white" />
        ) : (
          <Minimize2 className="w-5 h-5 text-gray-400 hover:text-white" />
        )}
        <X
          className="w-5 h-5 text-gray-400 hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            onClose(e);
          }}
        />
      </div>
    </div>
  );
};

export default ChatHeader;