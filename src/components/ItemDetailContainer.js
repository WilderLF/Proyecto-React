import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/getData.js';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = ({ id }) => {
  
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    getProductById(Number(id), setProduct);
    
  }, [id]);
 

  return (
    <section>
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;