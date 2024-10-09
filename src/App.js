import React, { createContext, useState, useContext } from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/Detail';
import Cart from './components/Cart';
import './App.css'

// Crea el contexto para el carrito
const CartContext = createContext();

const App = () => {
  // Estado y funciones para gestionar el carrito
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== id));
  };

  return (
    <div>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        <BrowserRouter>
        <Header />
        <SearchBar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>

  );
};

// Exportar el contexto para usarlo en otros componentes
export const useCartContext = () => useContext(CartContext);

export default App;


