import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import 'react-toastify/dist/ReactToastify.css'; 
import Header from './Pages/Header';
import BlogForm from './components/BlogForm'; 

const App = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: '  first post', content: 'This is my first  post' },
    { id: 2, title: 'Second  Post', content: 'This is my  second  post' }
  ]);

  const addPost = (newPost) => {
    setBlogs([...blogs, { id: blogs.length + 1, ...newPost }]);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home blogs={blogs} setBlogs={setBlogs} />} /> 
          <Route path="/blog/:id" element={<Blog blogs={blogs} />} />
          <Route path="/new-post" element={
            <div className="container">
              <h1>Add New Post</h1>
              <BlogForm addPost={addPost} />
            </div>
          } />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
