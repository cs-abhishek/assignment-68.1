import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img src="/Amazon_logo.svg" alt="Amazon" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='inline'}} />
            <span style={{display: 'none'}}>amazon</span>
          </Link>
          <nav style={{ marginLeft: 'auto' }}>
            <Link to="/cart" style={{ 
              color: '#232f3e', 
              textDecoration: 'none', 
              fontWeight: '600',
              padding: '10px 15px',
              borderRadius: '4px',
              transition: 'background-color 0.2s ease'
            }}>
              Cart
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content will be rendered here */}
      <Outlet />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>Copyright © 2023 | CodeYogi</p>
            <p>Powered by CodeYogi</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
