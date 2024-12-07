import React from 'react';
import { Search, Filter } from 'lucide-react';

interface ForumHeaderProps {
  onNewPost: () => void;
  onSearch: (query: string) => void;
}

const ForumHeader: React.FC<ForumHeaderProps> = ({ onNewPost, onSearch }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher dans le forum..."
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <button className="flex items-center px-4 py-2 text-gray-400 hover:text-white transition-colors">
            <Filter size={20} className="mr-2" />
            Filtrer
          </button>
          <button
            onClick={onNewPost}
            className="flex-1 md:flex-none px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
          >
            Nouvelle Discussion
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForumHeader;