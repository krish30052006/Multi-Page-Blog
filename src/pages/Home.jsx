import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Welcome to My Blog!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
        Explore articles on React and web development.
      </p>
      <Link
        to="/blogs"
        style={{
          background: 'linear-gradient(90deg, #667eea, #764ba2)',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '1rem',
        }}
      >
        Go to Blog List
      </Link>
    </div>
  );
};

export default Home;
