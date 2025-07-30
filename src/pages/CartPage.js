import React, { useState } from 'react';
import CartList from '../components/CartList';
import '../App.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Black Printed Coffee Mug',
      price: 15.00,
      quantity: 2,
      image: require('../images/img1.jpg')
    },
    {
      id: 6,
      title: 'Printed Dark Blue Tshirt',
      price: 34.00,
      quantity: 4,
      image: require('../images/img8.jpg')
    }
  ]);

  const [couponCode, setCouponCode] = useState('');

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    // Handle coupon application logic here
    console.log('Applying coupon:', couponCode);
  };

  const updateCart = () => {
    // Handle cart update logic here
    console.log('Updating cart');
  };

  const proceedToCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal; // Add any taxes or shipping costs here

  return (
    <div className="main-content">
      <div className="container">
        <div className="cart-page">
          <div className="cart-content">
            <div className="cart-items-section">
              <CartList 
                items={cartItems}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeItem}
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
                <button onClick={updateCart} className="update-cart-btn">
                  UPDATE CART
                </button>
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
