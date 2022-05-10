import React, { useEffect, useState } from 'react';
import Item from './Item';
import { getAllProductsFromDB } from '../helpers/getData.js';


const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProductsFromDB(setProducts);
  }, []);

  return (
    <div>
      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <Item
                  name={product.name}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  stock={product.stock}
                  description={product.description}
                  delivery={product.delivery}
                  type={product.type}
                  id={product.id}
                                                                        
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};

export default ItemList;