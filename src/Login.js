import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Login functionality will be implemented later
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <div className="cart-icon-wrapper">
          <FiShoppingCart className="cart-icon" />
        </div>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group username">
            <input
              type="text"
              name="username"
              placeholder="USERNAME"
              value={formData.username}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>
          
          <div className="input-group password">
            <input
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>
          
          <button type="submit" className="auth-button">
            LOGIN
          </button>
          
          <Link to="/signup" className="auth-button signup-button" style={{ 
            textDecoration: 'none', 
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px'
          }}>
            SIGN UP
          </Link>
          
          <Link to="/forgot-password" className="forgot-password-link">
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
