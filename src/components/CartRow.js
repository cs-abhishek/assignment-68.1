import React from 'react';

const CartRow = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    onRemoveItem(item.id);
  };

  const subtotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-row">
      <div className="remove-item">
        <button onClick={handleRemove} className="remove-btn">×</button>
      </div>
      
      <div className="product-info">
        <div className="product-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="product-name">
          {item.title}
        </div>
      </div>
      
      <div className="product-price">
        ${item.price.toFixed(2)}
      </div>
      
      <div className="product-quantity">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="quantity-input"
        />
      </div>
      
      <div className="product-subtotal">
        ${subtotal}
      </div>
    </div>
  );
};

export default CartRow;
