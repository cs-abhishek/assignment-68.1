import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Auth.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('SignUp attempt:', formData);
    // SignUp functionality will be implemented later
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
          
          <div className="input-group username">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
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
          
          <div className="input-group password">
            <input
              type="password"
              name="confirmPassword"
              placeholder="CONFIRM PASSWORD"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="auth-input"
              required
            />
          </div>
          
          <button type="submit" className="auth-button">
            SIGN UP
          </button>
          
          <Link to="/login" className="forgot-password-link">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
