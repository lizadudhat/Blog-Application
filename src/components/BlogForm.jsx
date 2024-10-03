import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; 
import { FaHome} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BlogForm = ({ addPost, editPost, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');
  

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
      setImagePreview(editingPost.image);
    } else {
      setTitle('');
      setContent('');
      setImagePreview('');
      
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title || !content || !imagePreview) {
        toast.error("fill all detains!"); 

      return; 
    }

    setError(''); 

    const newPost = {
      title,
      content,
      image: imagePreview,
      
    };

    if (editingPost) {
      editPost({ id: editingPost.id, ...newPost });
      
    } else {
      addPost(newPost);
      toast.success(" post your pic"); 
    }
    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    
    };
    reader.readAsDataURL(file);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    margin: '0 auto', 
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };
  
  const textareaStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    maxHeight: '150px', 
    overflowY: 'auto',
    resize: 'none'
  };
  
  const fileInputStyle = {
    marginBottom: '10px',
  };
  
  const imagePreviewStyle = {
    maxWidth: '30%',
    marginBottom: '10px',
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  
  const errorStyle = {
    color: 'red',
    marginBottom: '10px',
  };
  
  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={inputStyle}
      />
      <textarea
        placeholder="Caption"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={textareaStyle}
      />
      <input type="file" accept="image/*" onChange={handleImageChange} style={fileInputStyle} />
      {imagePreview && <img src={imagePreview} alt="Preview" style={imagePreviewStyle} />}
      {error && <div style={errorStyle}>{error}</div>} 
      <button type="submit" style={{ ...buttonStyle, backgroundColor: "green" }}>
        {editingPost ? 'Edit Post' : 'Add Post'}
      </button>
      <nav className="navigation">
        <ul>
          <li><Link to="/" className="icon" style={{textDecoration:"none"}}>Back To Home<FaHome style={{width:"50px"}} /></Link></li>
         
        </ul>
      </nav>
    </form>
    
  );
};


export default BlogForm;
