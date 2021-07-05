import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "./auth/auth.reducer";

// TODO: Add auth reducer in persist reducer
const persistedReducer = persistReducer(
  { key: "auth", storage, whitelist: ["token"] },
  auth
);

const rootReducer = {
  auth: persistedReducer,
};

export default rootReducer;