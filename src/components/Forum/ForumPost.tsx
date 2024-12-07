import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, Bookmark, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Post, Comment } from '../../services/forumService';

interface ForumPostProps {
  post: Post;
  onLike: (id: number) => void;
  onComment: (postId: number, comment: Omit<Comment, 'id' | 'likes' | 'date'>) => void;
}

const ForumPost: React.FC<ForumPostProps> = ({ post, onLike, onComment }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    onComment(post.id, {
      author: "Utilisateur",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      content: newComment
    });

    setNewComment('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 rounded-lg p-6 mb-4"
    >
      <div className="flex items-start space-x-4">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">{post.title}</h3>
              <p className="text-gray-400 text-sm">
                Par <span className="text-blue-400">{post.author}</span> • {post.date}
              </p>
            </div>
          </div>
          <p className="text-gray-300 mt-4 mb-4">{post.content}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-6 text-gray-400">
            <button
              onClick={() => onLike(post.id)}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <ThumbsUp size={18} />
              <span>{post.likes}</span>
            </button>
            <button 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
            >
              <MessageSquare size={18} />
              <span>{post.replies.length}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
              <Share2 size={18} />
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
              <Bookmark size={18} />
            </button>
          </div>

          {showComments && (
            <div className="mt-6 space-y-4">
              {post.replies.map((reply) => (
                <div key={reply.id} className="flex items-start space-x-3 bg-gray-700/50 p-4 rounded-lg">
                  <img
                    src={reply.avatar}
                    alt={reply.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-blue-400 text-sm">{reply.author}</span>
                      <span className="text-gray-500 text-xs">{reply.date}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{reply.content}</p>
                  </div>
                </div>
              ))}

              <form onSubmit={handleSubmitComment} className="mt-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Ajouter un commentaire..."
                    className="flex-1 bg-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ForumPost;