import React, { useState } from 'react';
import { useCart } from './CartContext';
import CartList from './CartList';
import './App.css';

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');

  const applyCoupon = () => {
    console.log('Applying coupon:', couponCode);
  };

  const updateCart = () => {
    console.log('Updating cart');
  };

  const proceedToCheckout = () => {
    console.log('Proceeding to checkout');
    alert('Checkout functionality would be implemented here!');
  };

  const subtotal = getCartTotal();
  const total = subtotal;

  return (
    <div className="main-content">
      <div className="container">
        <div className="cart-page">
          <div className="cart-content">
            <div className="cart-items-section">
              <CartList 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
              />
              
              <div className="coupon-section">
                <div className="coupon-container">
                  <input
                    type="text"
                    placeholder="Coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="coupon-input"
                  />
                  <button onClick={applyCoupon} className="apply-coupon-btn">
                    APPLY COUPON
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={updateCart} className="update-cart-btn">
                    UPDATE CART
                  </button>
                  {cartItems.length > 0 && (
                    <button 
                      onClick={clearCart} 
                      className="update-cart-btn"
                      style={{ backgroundColor: '#ff6b6b', color: 'white' }}
                    >
                      CLEAR CART
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="cart-summary">
              <div className="cart-totals">
                <h3>Cart totals</h3>
                
                <div className="totals-row">
                  <span className="totals-label">Subtotal</span>
                  <span className="totals-value">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="totals-row total-row">
                  <span className="totals-label">Total</span>
                  <span className="totals-value">${total.toFixed(2)}</span>
                </div>
                
                <button onClick={proceedToCheckout} className="checkout-btn">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
