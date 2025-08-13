import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './CartContext';
import Layout from './Layout';
import ProductList from './ProductList';
import ProductDetailPage from './ProductDetailPage';
import CartPage from './CartPage';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          {/* Authentication routes without Layout */}
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
