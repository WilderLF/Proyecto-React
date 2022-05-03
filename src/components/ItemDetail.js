import React from 'react';
import ItemCount from './ItemCount';



//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
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
      <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
    </div>
  </div>
</div>
  );
};

export default ItemDetail;