import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ForumHeader from './Forum/ForumHeader';
import ForumPost from './Forum/ForumPost';
import NewPostForm from './Forum/NewPostForm';
import { useForumPosts } from '../services/forumService';
import type { Comment } from '../services/forumService';

const Forum: React.FC = () => {
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const {
    posts,
    currentPage,
    totalPages,
    setCurrentPage,
    addPost,
    addComment,
    likePost
  } = useForumPosts();

  const handleNewPost = (postData: { title: string; content: string; tags: string[] }) => {
    addPost({
      ...postData,
      author: "Utilisateur",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    });
    setShowNewPostForm(false);
  };

  const handleComment = (postId: number, comment: Omit<Comment, 'id' | 'likes' | 'date'>) => {
    addComment(postId, comment);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Forum de Discussion
          </h2>
          <p className="text-gray-400">
            Échangez avec la communauté sur les dernières avancées en IA
          </p>
        </motion.div>

        <ForumHeader
          onNewPost={() => setShowNewPostForm(true)}
          onSearch={setSearchQuery}
        />

        {showNewPostForm && (
          <NewPostForm
            onSubmit={handleNewPost}
            onClose={() => setShowNewPostForm(false)}
          />
        )}

        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <ForumPost
              key={post.id}
              post={post}
              onLike={likePost}
              onComment={handleComment}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Forum;