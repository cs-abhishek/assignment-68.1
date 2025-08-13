import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from './api';
import ProductDetails from './ProductDetails';
import Loading from './Loading';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await getProduct(id);
        setProduct(response.data);
        setError(null);
      } catch (err) {
        setError('Product not found');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBackToProducts = () => {
    navigate('/');
  };

  if (loading) return <Loading />;

  if (error || !product) {
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
