import React from 'react';
import CartRow from './CartRow';

const CartList = ({ items, onUpdateQuantity, onRemoveItem }) => {
  if (!items || items.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-list">
      <div className="cart-header">
        <div className="header-product">Product</div>
        <div className="header-price">Price</div>
        <div className="header-quantity">Quantity</div>
        <div className="header-subtotal">Subtotal</div>
      </div>
      
      <div className="cart-items">
        {items.map(item => (
          <CartRow
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemoveItem={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
