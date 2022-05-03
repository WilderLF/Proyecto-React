import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <section class="container mx-auto">
      <h2 class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ...">Productos destacados</h2>

      <ItemList />
    </section>
  );
};

export default ItemListContainer;