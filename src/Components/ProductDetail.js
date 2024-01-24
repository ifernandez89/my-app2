import React, { useState } from 'react';

const ProductDetail = () => {
  const [message, setMessage] = useState('');

  const handleBuyClick = () => {
    setMessage('Gracias por su compra');
  };

  return (
    <div>
      <h1>Nombre del Producto</h1>
      <p>Descripción del Producto</p>
      <p>Precio: $XX.XX</p>
      <p>SKU: XXXXXX</p>
      <p>Cantidad disponible: XX</p>

      <button onClick={handleBuyClick}>Comprar</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductDetail;