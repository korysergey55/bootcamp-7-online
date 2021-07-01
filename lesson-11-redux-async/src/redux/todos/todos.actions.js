import { createAction } from "@reduxjs/toolkit";

const addNewToDoRequested = createAction("todos/addNewToDoRequested");
const addNewToDoSuccess = createAction("todos/addNewToDoSuccess");
const addNewToDoFailure = createAction("todos/addNewToDoFailure");

const getAllTodosRequest = createAction("todos/getAllTodosRequest");
const getAllTodosSuccess = createAction("todos/getAllTodosSuccess");
const getAllTodosFailure = createAction("todos/getAllTodosFailure");

const filterChange = createAction("todos/filterChange", (payload) => ({
  payload: payload.target.value,
}));

// const filterChange = (payload) => {
//     return {
//         type: FILTER_CHANGE,
//         payload: payload.target.value,
//     }
// }

const removeToDoRequest = createAction("todos/removeToDoRequest");
const removeToDoSuccess = createAction("todos/removeToDoSuccess");
const removeToDoFailure = createAction("todos/removeToDoFailure");

const toggleCompletedRequest = createAction("todos/toggleCompletedRequest");
const toggleCompletedSuccess = createAction("todos/toggleCompletedSuccess");
const toggleCompletedFailure = createAction("todos/toggleCompletedFailure");

// console.log(addNewToDo())

export {
  addNewToDoRequested,
  addNewToDoSuccess,
  addNewToDoFailure,
  getAllTodosRequest,
  getAllTodosSuccess,
  getAllTodosFailure,
  removeToDoRequest,
  removeToDoSuccess,
  removeToDoFailure,
  filterChange,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedFailure,
};
