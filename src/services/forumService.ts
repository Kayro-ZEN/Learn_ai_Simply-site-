import { useState, useEffect } from 'react';
import { getItem, setItem, StorageKeys } from './storage/localStorageService';
import type { Post, Comment } from '../types';

const POSTS_PER_PAGE = 5;

const initialForumData: Post[] = [
  {
    id: 1,
    author: "Marie Dubois",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "L'impact de l'IA sur la médecine moderne",
    content: "Les avancées récentes en IA transforment radicalement le diagnostic médical...",
    likes: 24,
    replies: [],
    date: new Date(Date.now() - 7200000).toISOString(),
    tags: ["Médecine", "Deep Learning", "Innovation"]
  }
];

export const useForumPosts = (initialPage: number = 1) => {
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = getItem<Post[]>(StorageKeys.FORUM_POSTS);
    return savedPosts || initialForumData;
  });
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setItem(StorageKeys.FORUM_POSTS, posts);
  }, [posts]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const addPost = (newPost: Omit<Post, 'id' | 'likes' | 'replies' | 'date'>) => {
    const post: Post = {
      ...newPost,
      id: Date.now(),
      likes: 0,
      replies: [],
      date: new Date().toISOString()
    };
    setPosts(prevPosts => [post, ...prevPosts]);
  };

  const addComment = (postId: number, comment: Omit<Comment, 'id' | 'likes' | 'date'>) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        const newComment: Comment = {
          ...comment,
          id: Date.now(),
          likes: 0,
          date: new Date().toISOString()
        };
        return {
          ...post,
          replies: [...post.replies, newComment]
        };
      }
      return post;
    }));
  };

  const likePost = (postId: number) => {
    setPosts(prevPosts => prevPosts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const deletePost = (postId: number) => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  const editPost = (postId: number, updates: Partial<Post>) => {
    setPosts(prevPosts => prevPosts.map(post =>
      post.id === postId ? { ...post, ...updates } : post
    ));
  };

  return {
    posts: paginatedPosts,
    currentPage,
    totalPages,
    setCurrentPage,
    addPost,
    addComment,
    likePost,
    deletePost,
    editPost
  };
};