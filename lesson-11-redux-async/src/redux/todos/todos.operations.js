import axios from "axios";

import {
  addNewToDoFailure,
  addNewToDoRequested,
  addNewToDoSuccess,
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

axios.defaults.baseURL = "http://localhost:3001/";

const addNewToDo = (todo) => async (dispatch, getState) => {
  // addNewRequested ===> loader ===> true // enable spinner && and clear error
  const items = getState().todos.items;

  if (!todo.title) {
      alert("Поле не может быть пустым!");
      return;
  }

  const isDuplicate = items.some((item) => item.title === todo.title);
  if (isDuplicate) {
      alert("Такок дело уже существует " + todo.title);
      return;
  }

  dispatch(addNewToDoRequested());
  try {
    // call server route if ok return response
    const { data } = await axios.post("todos", todo);
    // save server response in payload
    dispatch(addNewToDoSuccess(data));
  } catch (error) {
    dispatch(addNewToDoFailure(error));
  }
};

const getAllTodos = () => async (dispatch) => {
  dispatch(getAllTodosRequest());
  try {
    const { data } = await axios.get("todos");
    dispatch(getAllTodosSuccess(data));
  } catch (error) {
    dispatch(getAllTodosFailure(error));
  }
};

const removeTodo = (id) => async (dispatch) => {
  dispatch(removeToDoRequest());
  try {
    await axios.delete(`todos/${id}`);
    dispatch(removeToDoSuccess(id));
  } catch (error) {
    dispatch(removeToDoFailure(error));
  }
};

const toggleCompleted = (id, completed) => async (dispatch) => {
  dispatch(toggleCompletedRequest());
  try {
    const { data } = await axios.patch(`todos/${id}`, { completed });
    console.log(data, "data");
    dispatch(toggleCompletedSuccess(id));
  } catch (error) {
    dispatch(toggleCompletedFailure());
  }
};

export { addNewToDo, getAllTodos, toggleCompleted, removeTodo };
