import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetails from '../ProductDetails';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === parseInt(id));

  const handleBackToProducts = () => {
    navigate('/');
  };

  if (!product) {
    return (
      <div className="container">
        <h2>Product not found</h2>
        <button onClick={handleBackToProducts}>← Back to Products</button>
      </div>
    );
  }

  return (
    <ProductDetails 
      product={product} 
      onBack={handleBackToProducts}
    />
  );
};

export default ProductDetailPage;
