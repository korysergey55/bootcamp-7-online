import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  PERSIST,
  REGISTER,
  PAUSE,
  PURGE,
  FLUSH,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import shoppingCartReducer from "./shopping-cart/shopping-cart.reducer";

const persistedCartReducer = persistReducer(
  { key: "shopping-cart", storage },
  shoppingCartReducer
);

const store = configureStore({
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE, PERSIST, REGISTER, REHYDRATE, PAUSE, FLUSH],
      },
    }),
  ],
  reducer: {
    cart: persistedCartReducer,
    // wishlist: ,
    // callback: ,
  },
});

const persistor = persistStore(store);

export { store, persistor };
