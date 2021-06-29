import React from "react";

const ProductsList = ({ data, selectProduct, addCartItem }) => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {data.map((item) => (
        <li key={item._id}>
          <h3 onClick={() => selectProduct(item)}>{item.name.ukr}</h3>
          <button
            className="bg-blue-500 px-2 py-2"
            type="button"
            onClick={() => addCartItem(item)}
          >
            Купить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
