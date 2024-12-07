import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

interface NewPostFormProps {
  onSubmit: (post: { title: string; content: string; tags: string[] }) => void;
  onClose: () => void;
}

const NewPostForm: React.FC<NewPostFormProps> = ({ onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    onSubmit({ title, content, tags });
    setTitle('');
    setContent('');
    setTags([]);
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tag.trim()) {
      e.preventDefault();
      if (!tags.includes(tag.trim())) {
        setTags([...tags, tag.trim()]);
      }
      setTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de votre discussion"
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Partagez vos réflexions..."
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 min-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder="Ajouter des tags (Appuyez sur Entrée)"
            className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400 flex items-center"
              >
                {t}
                <button
                  type="button"
                  onClick={() => removeTag(t)}
                  className="ml-2 hover:text-red-400"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
          >
            <Send size={18} className="mr-2" />
            Publier
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;