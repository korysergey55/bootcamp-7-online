import { createAction } from "@reduxjs/toolkit";

const addCartItem = createAction("cart/addCartItem");
const removeCartItem = createAction("cart/removeCartItem");

export { addCartItem, removeCartItem };
