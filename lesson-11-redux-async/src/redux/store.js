import { configureStore } from '@reduxjs/toolkit';
// import {persistReducer, persistStore} from "redux-persist";
// import storage from 'redux-persist/lib/storage';

import counterReducer from "./counter/counter.reducer";
import todosReducer from "./todos/todos.reducer";

// const persistConfig = {
//     key: 'todos',
//     storage,
//     whitelist: ['items']
// }

// const persistedReducer = persistReducer(persistConfig, todosReducer);

// const logger = (store) => (next) => (action) => {
//     console.log(`[%c${action.type}]`, 'color: green;');
//     return next(action);
// }
//

const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
}

// function thunk(store) {
//     return function (next) {
//         return function (action) {
//
//             return next(action);
//         }
//     }
// }

const store  = configureStore({
    // middleware: [],
    devTools: true,
    reducer: {
        counter: counterReducer,
        todos: todosReducer
    }
})

// const persistedStore = persistStore(store)

export { store };