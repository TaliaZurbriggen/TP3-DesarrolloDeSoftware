import React from 'react';
import { useCartContext } from '../App';


const Cart = () => {
  const { cart, removeFromCart } = useCartContext();

  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
