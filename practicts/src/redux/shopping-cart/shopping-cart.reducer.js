import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem } from "./shopping-cart.actions";

const updateCartItem = (product, item = {}, count) => {
  const {
    _id = product._id,
    name = product.name,
    price = product.price,
    quantity = 0,
    total = 0,
    thumbnail = product.thumbnail,
  } = item;
  return {
    _id,
    name,
    thumbnail,
    price,
    quantity: quantity + count,
    total: total + count * product.price,
  };
};

const updateCartItems = (cartItems, product) => {
  const idx = cartItems.findIndex((item) => item._id === product._id);

  if (product.quantity === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, product];
  }

  return [...cartItems.slice(0, idx), product, ...cartItems.slice(idx + 1)];
};

const updateOrder = (state, action, count) => {
  const cartItem = state.find((item) => item._id === action.payload._id);
  const newItem = updateCartItem(action.payload, cartItem, count);

  return updateCartItems(state, newItem);
};

const items = createReducer([], {
  [addCartItem]: (state, action) => updateOrder(state, action, 1),
  [removeCartItem]: (state, action) => updateOrder(state, action, -1),
});

const totalItems = createReducer(0, {
  // [addCartItem]: (state, action) => ac
});

const shoppingCartReducer = combineReducers({ items, totalItems });

export default shoppingCartReducer;
