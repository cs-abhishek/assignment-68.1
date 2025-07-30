import React, { useState } from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product, onBack }) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`);
    // Add to cart logic here
  };

  return (
    <div className="product-details">
      <div className="container">
        <button className="back-button" onClick={onBack}>
          ← Back to Products
        </button>
        
        <div className="product-details-content">
          <div className="product-image-section">
            <img 
              src={product.image} 
              alt={product.title}
              className="product-details-image"
            />
          </div>
          
          <div className="product-info-section">
            <h1 className="product-details-title">{product.title}</h1>
            
            <div className="product-details-price">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            
            <div className="product-description">
              <p>
                Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, 
                consectetur adipisci velit, sed quia non incidunt lores ta porro ame. 
                numquam eius modi tempora incidunt lores ta porro ame.
              </p>
            </div>
            
            <div className="product-actions">
              <input
                type="number"
                id="quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="quantity-input"
              />
              
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
