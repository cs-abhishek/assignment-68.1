import React, { useState } from 'react';
import './App.css';
import ProductDetails from './ProductDetails';

const App = () => {
  const [sortBy, setSortBy] = useState('default');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentView, setCurrentView] = useState('products'); // 'products' or 'details'

  // Product data based on the image
  const products = [
    {
      id: 1,
      title: 'Black Printed Coffee Mug',
      category: 'Mugs',
      price: 15.00,
      originalPrice: null,
      rating: 0,
      image: require('./images/img1.jpg'),
      onSale: false
    },
    {
      id: 2,
      title: "Father's Day Coffee Mug",
      category: 'Mugs',
      price: 19.00,
      originalPrice: null,
      rating: 0,
      image: require('./images/img10.jpg'),
      onSale: false
    },
    {
      id: 3,
      title: 'Green Printed Tshirt',
      category: 'Tshirts',
      price: 34.00,
      originalPrice: null,
      rating: 0,
      image: require('./images/img9.jpg'),
      onSale: false
    },
    {
      id: 4,
      title: 'Personalised Mug',
      category: 'Mugs',
      price: 16.00,
      originalPrice: null,
      rating: 0,
      image: require('./images/img3.jpg'),
      onSale: false
    },
    {
      id: 5,
      title: 'Printed Brown Tshirt',
      category: 'Tshirts',
      price: 25.00,
      originalPrice: 34.00,
      rating: 0,
      image: require('./images/img4.jpg'),
      onSale: true
    },
    {
      id: 6,
      title: 'Printed Dark Blue Tshirt',
      category: 'Tshirts',
      price: 34.00,
      originalPrice: null,
      rating: 0,
      image: require('./images/img8.jpg'),
      onSale: false
    },
    {
      id: 7,
      title: 'Printed Green Tshirt',
      category: 'Tshirts',
      price: 28.00,
      originalPrice: 35.00,
      rating: 0,
      image: require('./images/img7.jpg'),
      onSale: true
    },
    {
      id: 8,
      title: 'Printed Tshirt Coffee Black Color',
      category: 'Tshirts',
      price: 25.00,
      originalPrice: 35.00,
      rating: 0,
      image: require('./images/img2.jpg'),
      onSale: true
    },
    {
      id: 9,
      title: 'Typography Teal Printed Tshirt',
      category: 'Tshirts',
      price: 32.00,
      originalPrice: 34.00,
      rating: 0,
      image: require('./images/img11.jpg'),
      onSale: true
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push('☆');
    }
    return stars.join('');
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('details');
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
  };

  const ProductCard = ({ product }) => (
    <div className="product-card" onClick={() => handleProductClick(product)}>
      {product.onSale && <div className="sale-badge">Sale</div>}
      <img 
        src={product.image} 
        alt={product.title}
        className="product-image"
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
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="/" className="logo">
            <img src="/Amazon_logo.svg" alt="Amazon" onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='inline'}} />
            <span style={{display: 'none'}}>amazon</span>
          </a>
        </div>
      </header>

      {currentView === 'products' ? (
        <>
          {/* Main Content */}
          <div className="main-content">
            <div className="container">
              {/* Sorting */}
              <div className="sorting">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>

              {/* Products Grid */}
              <div className="products-grid">
                {products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
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
      ) : (
        <ProductDetails 
          product={selectedProduct} 
          onBack={handleBackToProducts}
        />
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>Copyright © 2023 | CodeYogi</p>
            <p>Powered by CodeYogi</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
