import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from "./counter/counter.reducer";
import todosReducer from "./todos/todos.reducer";

// const initialState = 0;
//
// const rootReducer = (state = initialState, action) => {
//
// }

const rootReducer = combineReducers({ counter: counterReducer, todos: todosReducer })

const store = createStore(rootReducer, composeWithDevTools());

// const actionInc = {
//     type: 'INCREMENT',
// }
//
// const actionDec = {
//     type: 'DECREMENT',
// }
//
// console.log(store.dispatch(actionInc))
// console.log(store.getState());
//
// console.log(store.dispatch(actionInc))
// console.log(store.getState());
//
// console.log(store.dispatch(actionDec))
// console.log(store.getState());

export default store;