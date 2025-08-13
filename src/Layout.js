import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from './CartContext';

const Layout = () => {
  const { getCartItemsCount } = useCart();
  const cartCount = getCartItemsCount();

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg" 
              alt="Amazon" 
              style={{
                height: '35px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>
          <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/login" style={{
              color: '#ef4444',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              Login/SignUp
            </Link>
            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px 15px',
              position: 'relative'
            }}>
              <span style={{
                color: '#ef4444',
                fontSize: '12px',
                fontWeight: 'bold',
                marginBottom: '2px'
              }}>
                {cartCount}
              </span>
              <Link to="/cart" style={{ 
                color: '#ef4444', 
                textDecoration: 'none', 
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <FiShoppingCart style={{ fontSize: '24px' }} />
                <span style={{ fontSize: '14px' }}>Cart</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <Outlet />

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
