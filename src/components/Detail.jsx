import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [description, setDescription] = useState(''); // Estado para la descripción

  useEffect(() => {
    // Llamada para obtener los detalles del producto
    axios.get(`https://api.mercadolibre.com/items/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));

    // Llamada para obtener la descripción del producto
    axios.get(`https://api.mercadolibre.com/items/${id}/description`)
      .then((response) => setDescription(response.data.plain_text)) // Aquí se obtiene la descripción
      .catch((error) => console.error('Error fetching product description:', error));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className='detail'>
      <h2>{product.title}</h2>
      <img src={product.pictures[0].secure_url} alt={product.title} />
      <p className='precio'>Precio: ${product.price}</p>
      <p>{description ? description : 'Descripción no disponible'}</p> {/* Mostrar la descripción */}
      <Link to="/">Volver a la búsqueda</Link>
    </div>
  );
};

export default Detail;
