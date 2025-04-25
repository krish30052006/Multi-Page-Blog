import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogs from '../data';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p style={{ padding: '50px' }}>Blog not found.</p>;
  }

  return (
    <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{blog.title}</h1>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{blog.content}</p>
      <button
        onClick={() => navigate('/blogs')}
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '20px',
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          color: '#fff',
          cursor: 'pointer',
        }}
      >
        ← Back to Blog List
      </button>
    </div>
  );
};

export default BlogPost;
