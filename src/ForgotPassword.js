import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import './Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
    // Forgot password functionality will be implemented later
  };

  return (
    <div className="auth-container">
      <div className="auth-form-wrapper">
        <div className="cart-icon-wrapper">
          <FiShoppingCart className="cart-icon" />
        </div>
        
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group username">
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
                required
              />
            </div>
            
            <button type="submit" className="auth-button">
              RESET PASSWORD
            </button>
            
            <Link to="/login" className="forgot-password-link">
              Back to Login
            </Link>
          </form>
        ) : (
          <div className="auth-form">
            <div className="success-message">
              <p>Password reset link has been sent to your email!</p>
            </div>
            
            <Link to="/login" className="auth-button" style={{ textDecoration: 'none', textAlign: 'center' }}>
              BACK TO LOGIN
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
