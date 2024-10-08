import { Link } from 'react-router-dom';
import React from 'react';
import { useCartContext } from '../App';

const Header = () => {
  const { cart } = useCartContext();

  return (
    <header>
      <h1>Mi Tienda</h1>
      <nav>
        <Link to="/search">Buscar Productos</Link>
        <Link to="/cart">
          Carrito ({cart.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
