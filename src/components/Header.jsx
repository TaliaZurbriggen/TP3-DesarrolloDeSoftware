import { Link } from 'react-router-dom';
import React from 'react';
import { useCartContext } from '../App';

const Header = () => {
  const { cart } = useCartContext();

  return (
    <header>
      <nav>
        <Link to="/search" className='nav-link'>Buscar Productos</Link>
        <Link to="/cart" className='nav-link'>
          Carrito ({cart.length})
        </Link>
      </nav>
      <h1>Mi Tienda</h1>
    </header>
  );
};

export default Header;
