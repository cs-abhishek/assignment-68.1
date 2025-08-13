import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductList } from './api';
import Loading from './Loading';
import './App.css';

const ProductList = () => {
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProductList();
        setProducts(response.data.products);
        setError(null);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push('☆');
    }
    return stars.join('');
  };

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'default':
      default:
        return a.id - b.id;
    }
  });

  const ProductCard = ({ product }) => (
    <div className="product-card" onClick={() => handleProductClick(product)}>
      {product.discountPercentage > 10 && <div className="sale-badge">Sale</div>}
      <img 
        src={product.thumbnail || product.images?.[0]} 
        alt={product.title}
        className="product-image"
        loading="lazy"
        decoding="async"
      />
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          <span className="stars">{renderStars(product.rating)}</span>
        </div>
        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.discountPercentage > 0 && (
            <span className="original-price">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="error-message" style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: '#d32f2f',
            fontSize: '18px',
            backgroundColor: '#ffebee',
            borderRadius: '8px',
            margin: '20px 0'
          }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="main-content">
        <div className="container">
          <div className="search-section">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="sorting">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default Sort</option>
              <option value="title">Sort by title</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>

          <div className="products-grid">
            {sortedProducts.length > 0 ? (
              sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="no-products">
                <p>No products found matching your search.</p>
              </div>
            )}
          </div>

          <div className="pagination">
            <button disabled>‹</button>
            <button className="active">1</button>
            <button>2</button>
            <button>›</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
