import React from 'react';
import { FaHeart, FaComment, FaShare } from 'react-icons/fa';

const Blog = ({ post, onEditClick, deletePost }) => {
  return (
    <div className="blog-post">
      {post.image && <img src={post.image} alt={post.title} />}
      <div className="blog-actions">
        <div>
          <FaHeart size={20} style={{color:"red",paddingRight:"10px"}} />
          <FaComment size={20} style={{color:"white",paddingRight:"10px"}} />
          <FaShare size={20} style={{color:"grey",paddingRight:"10px"}} />
        </div>
        <div>
          <button onClick={() => onEditClick(post)}style={{margin:"2px"}}>Edit Post</button>
          <button onClick={() => deletePost(post.id)} style={{background:"red"}}>Delete</button>
        </div>
      </div>
      <div style={{ padding: '10px', fontSize: '14px' }}>
        <p><strong>{post.title}</strong></p>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Blog;
