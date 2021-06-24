import { configureStore} from "@reduxjs/toolkit";
import shoppingCartReducer from "./shopping-cart/shopping-cart.reducer";


const store = configureStore({
  reducer: {
    cart: shoppingCartReducer,
    // wishlist: ,
    // callback: ,
  },
});

export default store;