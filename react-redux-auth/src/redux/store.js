import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

import reducer from "./root-reducer";

const store = configureStore({
  reducer,
});

const persistor = persistStore(store);

export { store, persistor };