import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addNewToDoFailure,
  addNewToDoRequested,
  addNewToDoSuccess,
  filterChange,
  getAllTodosFailure,
  getAllTodosRequest,
  getAllTodosSuccess,
  removeToDoFailure,
  removeToDoRequest,
  removeToDoSuccess,
  toggleCompletedFailure,
  toggleCompletedRequest,
  toggleCompletedSuccess,
} from "./todos.actions";

const loading = createReducer(false, {
  [getAllTodosRequest]: () => true,
  [getAllTodosSuccess]: () => false,
  [getAllTodosFailure]: () => false,
  [addNewToDoRequested]: () => true,
  [addNewToDoSuccess]: () => false,
  [addNewToDoFailure]: () => false,
  [toggleCompletedRequest]: () => true,
  [toggleCompletedSuccess]: () => false,
  [toggleCompletedFailure]: () => false,
  [removeToDoRequest]: () => true,
  [removeToDoSuccess]: () => false,
  [removeToDoFailure]: () => false,
});

const handleError = (_, action) => action.payload;
const clearError = () => null;

const error = createReducer(null, {
  [getAllTodosRequest]: clearError,
  [getAllTodosFailure]: handleError,
  [addNewToDoRequested]: clearError,
  [addNewToDoSuccess]: handleError,
  [toggleCompletedRequest]: clearError,
  [toggleCompletedFailure]: handleError,
  [removeToDoRequest]: clearError,
  [removeToDoFailure]: handleError
});

const items = createReducer([], {
  [getAllTodosSuccess]: (_, action) => action.payload,
  [addNewToDoSuccess]: (state, action) => [action.payload, ...state],
  [removeToDoSuccess]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
  [toggleCompletedSuccess]: (state, action) =>
    state.map((item) =>
      item.id === action.payload
        ? {
            ...item,
            completed: !item.completed,
          }
        : item
    ),
});

const filter = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

const todosReducer = combineReducers({
  items,
  filter,
  loading,
  error,
});

export default todosReducer;
