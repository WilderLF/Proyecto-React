import React from 'react';
import ItemCount from './ItemCount.js';


const Item = (item) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} Envíos 📦`);
  };

  return (

    <div class="container mx-auto card w-96 bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={item.thumbnail} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
  <h2 class="card-title">
  {item.name}
      
    </h2>
    
   
    <div class="card-actions">
        <ItemCount stock={item.stock} onAdd={onAdd} initial={1}/>
    </div>
  </div>
</div>
  );
};

export default Item;