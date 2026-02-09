import React, { createContext, useState, useEffect } from 'react';

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (page = 1) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://snb.thesagenext.com/wp-json/wp/v2/posts?_embed&per_page=20&page=${page}`
      );
      const data = await response.json();
      setPosts(data);
      setTotalPages(Number(response.headers.get('X-WP-TotalPages')));
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        currentPage,
        totalPages,
        setCurrentPage,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
