import React from "react";

const ProductsGrid = ({ cartItems, removeCartItem, addCartItem }) => {
  return (
    <ul>
      {cartItems.map((item) => (
        <li className="flex gap-2" key={item.id}>
          <img src={item.thumbnail} alt={item.name.ukr} />
          <span>{item.name.ukr}</span>
          <span>price: {item.price}</span>
          <span>quantity: {item.quantity}</span>
          <span>total: {item.total}</span>
          <button
            className="bg-yellow-500 px-2 py-2"
            onClick={() => removeCartItem(item)}
          >
            -
          </button>
          <button
            className="bg-blue-500 px-2 py-2"
            onClick={() => addCartItem(item)}
          >
            +
          </button>
          <button className="bg-red-500 px-2 py-2">Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsGrid;