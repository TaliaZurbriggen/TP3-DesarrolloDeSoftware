import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Header = () => {
  const { cart } = useContext(CartContext);

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
