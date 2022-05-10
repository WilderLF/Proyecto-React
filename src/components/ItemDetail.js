import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';





const ItemDetail = ({ item }) => {
  const [terminar, setTerminar] = useState (false)
  const onAdd = (qty) => {
    setTerminar(true)
    alert(`Has agregado ${qty} Envíos 📦`);
  };

  console.log(item);
  return (
    <div class= "container mx-auto card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={item.thumbnail} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
  <h2 class="card-title">
  {item.name}
      <div class="badge badge-secondary">${item.price}</div>
    </h2>
    <p>{item.description}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{item.delivery}</div> 
      <div class="badge badge-outline">{item.type}</div>
    </div>
    <div class="card-actions">
      {terminar ? (
      
          <Link to='/cart/'
            className="btn btn-primary">
            Terminar Comprar
          </Link>
      ) : (      
        <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
    )}
      
    </div>
  </div>
</div>
  );
};

export default ItemDetail;