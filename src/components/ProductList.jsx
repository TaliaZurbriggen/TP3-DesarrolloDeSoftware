import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useCartContext } from '../App'; // Importa el contexto del carrito

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const { addToCart } = useCartContext(); // Accede a la función de agregar al carrito

  useEffect(() => {
    if (query) {
      axios
        .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then((response) => setProducts(response.data.results))
        .catch((error) => console.error('Error fetching products:', error));
    }
  }, [query]);

  return (
    <div className='list'>
      <h2>Resultados de búsqueda</h2>
      <ul style={{ padding: '0', listStyleType: 'none' }}>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              {/* Botón para agregar el producto al carrito */}
              <div className='container'>
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                <Link to={`/product/${product.id}`}>Ver detalles</Link>
              </div>
            </li>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
