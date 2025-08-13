import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useCart } from './CartContext';
import './ProductDetails.css';

const ProductDetails = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);
  };

  return (
    <div className="product-details">
      <div className="container">
        <Link to="/" className="back-button-improved">
          <HiArrowNarrowLeft className="back-icon" />
          HOME
        </Link>
        
        <div className="product-details-content">
          <div className="product-image-section">
            <img 
              src={product.thumbnail || product.images?.[0]} 
              alt={product.title}
              className="product-details-image"
            />
          </div>
          
          <div className="product-info-section">
            <h1 className="product-details-title">{product.title}</h1>
            
            <div className="product-details-price">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="original-price">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
              )}
            </div>
            
            <div className="product-description">
              <p>
                {product.description}
              </p>
            </div>
            
            <div className="product-actions">
              {showSuccess && (
                <div className="success-message" style={{
                  color: '#4caf50',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  padding: '8px 12px',
                  backgroundColor: '#e8f5e8',
                  borderRadius: '4px',
                  border: '1px solid #4caf50'
                }}>
                  ✅ Added to cart successfully!
                </div>
              )}
              
              <input
                type="number"
                id="quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="quantity-input"
              />
              
              {!showSuccess && (
                <button 
                  className="add-to-cart-btn"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <div>
            {product.id > 1 && (
              <Link to={`/product/${product.id - 1}`} className="nav-button prev-button">
                <HiArrowNarrowLeft className="nav-icon" />
                Previous
              </Link>
            )}
          </div>
          
          <div>
            <Link to={`/product/${product.id + 1}`} className="nav-button next-button">
              Next
              <HiArrowNarrowRight className="nav-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
