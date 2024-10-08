import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => setProduct(response.data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.pictures[0].secure_url} alt={product.title} />
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      <Link to="/search">Volver a la búsqueda</Link>
    </div>
  );
};

export default ProductDetail;
