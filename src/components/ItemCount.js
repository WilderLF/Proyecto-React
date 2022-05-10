import React from 'react';
import { useState } from 'react';


const ItemCount = ({ initial, stock, onAdd }) => {
  
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="text-2xl font-bold tracking-wide ">
      <div className="">
        <button
          className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 "
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="">{qty}</span>
        <button
          className="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => onAdd(qty)}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
    </div>
  );
};

export default ItemCount;