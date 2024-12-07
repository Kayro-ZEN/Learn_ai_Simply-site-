export const StorageKeys = {
  FORUM_POSTS: 'forum_posts',
  CHAT_MESSAGES: 'chat_messages',
  USER_PREFERENCES: 'user_preferences'
} as const;

export const getItem = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const setItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error writing to localStorage:', error);
  }
};

export const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};