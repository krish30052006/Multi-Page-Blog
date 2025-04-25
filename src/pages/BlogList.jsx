import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data';

const BlogList = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Blog Posts</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              padding: '20px',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <h3>{blog.title}</h3>
            <p>{blog.content.substring(0, 60)}...</p>
            <Link
              to={`/blogs/${blog.id}`}
              style={{
                marginTop: '10px',
                display: 'inline-block',
                textDecoration: 'none',
                color: '#764ba2',
                fontWeight: 'bold',
              }}
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
