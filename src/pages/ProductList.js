import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import '../App.css';

const ProductList = () => {
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

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

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on selected sorting option
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
        return a.id - b.id; // Original order
    }
  });

  const ProductCard = ({ product }) => (
    <div className="product-card" onClick={() => handleProductClick(product)}>
      {product.onSale && <div className="sale-badge">Sale</div>}
      <img 
        src={product.image} 
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
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Content */}
      <div className="main-content">
        <div className="container">
          {/* Search Section */}
          <div className="search-section">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Sorting */}
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

          {/* Products Grid */}
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

          {/* Pagination */}
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
