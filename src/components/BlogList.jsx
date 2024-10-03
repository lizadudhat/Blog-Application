import React from 'react';
import Blog from '../Pages/Blog';
import { Link } from 'react-router-dom';
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaHome, FaSearch, FaHeart, FaUserCircle } from 'react-icons/fa';
const BlogList = ({ blogs, deletePost, onEditClick }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} post={blog} onEditClick={onEditClick} deletePost={deletePost} />
        
      ))}
       <nav className="navigation">
        <ul>
         
          <li><Link to="/new-post" className="icon"style={{textDecoration:"none"}}> Add Post<IoMdAddCircleOutline style={{width:"50px",alignItems:"center"}} /></Link></li> 
          
        </ul>
      </nav>
    </div>
    
  );
};

export default BlogList;
