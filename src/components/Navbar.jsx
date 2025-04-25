import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        background: 'linear-gradient(90deg, #667eea, #764ba2)',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
      }}
    >
      <h2>My Blog</h2>
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/blogs" style={{ color: '#fff', textDecoration: 'none' }}>
          Blog List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
