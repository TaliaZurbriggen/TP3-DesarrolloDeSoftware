import React from 'react';
import { useCartContext } from '../App';


const Cart = () => {
  const { cart, removeFromCart } = useCartContext();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
  <div className='contenedor-lista'>
  <h2>Carrito de Compras</h2>
  <ul>
    {cart.map((product) => (
      <li key={product.id}>
        <div className='carrito-producto'>
          <img src={product.thumbnail} alt={product.title} />
          <div className='producto-detalle'>
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
            <button onClick={() => removeFromCart(product.id)} className='boton-eliminar-carrito'>
              Eliminar
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
  <h3>Total: ${totalPrice}</h3>
</div>

  );
};

export default Cart;
