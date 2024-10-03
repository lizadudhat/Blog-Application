import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import BlogList from '../components/BlogList';
import '../App.css';

const Home = ({ blogs, setBlogs }) => { 
  const [editingPost, setEditingPost] = useState(null);

  const deletePost = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id)); 
    toast.error("Post deleted!"); 
  };

  const editPost = (updatedPost) => {
    setBlogs(blogs.map((blog) => (blog.id === updatedPost.id ? updatedPost : blog))); 
    setEditingPost(null);
    toast.info("Post updated!"); 
  };

  const handleEditClick = (blog) => {
    setEditingPost(blog);
  };

  return (
    <div className="container">
      <h1>Blog Application</h1>
      <BlogList blogs={blogs} deletePost={deletePost} onEditClick={handleEditClick} />
    </div>
  );
};

export default Home;
