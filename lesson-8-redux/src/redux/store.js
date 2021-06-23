import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import counterReducer from "./counter/counter.reducer";
import todosReducer from "./todos/todos.reducer";

const persistConfig = {
    key: 'todos',
    storage,
    whitelist: ['items']
}

const persistedReducer = persistReducer(persistConfig, todosReducer);

const store  = configureStore({
    devTools: true,
    reducer: {
        counter: counterReducer,
        todos: persistedReducer
    }
})


const persistedStore = persistStore(store)

export { store, persistedStore };