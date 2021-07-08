import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { persistStore, PERSIST, FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE } from "redux-persist";

import reducer from "./root-reducer";

const store = configureStore({
  middleware: [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [PERSIST, FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE]
    }
  })],
  reducer,
});

const persistor = persistStore(store);

export { store, persistor };