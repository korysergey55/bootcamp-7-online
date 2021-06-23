import {createAction} from "@reduxjs/toolkit";

const ADD_NEW_TODO = 'todos/addNewToDo';
const REMOVE_TODO = 'todos/removeToDo';
const TOGGLE_COMPLETED_TODO = 'todos/toggleCompleted';
const FILTER_CHANGE = 'todos/filterChange';
const STATUS_CHANGE = 'todos/statusChange';

const addNewToDo = createAction(ADD_NEW_TODO);
const filterChange = createAction(FILTER_CHANGE, (payload) => ({
    payload: payload.target.value
}))

// const filterChange = (payload) => {
//     return {
//         type: FILTER_CHANGE,
//         payload: payload.target.value,
//     }
// }

const removeToDo = createAction(REMOVE_TODO);

const toggleCompleted = createAction(TOGGLE_COMPLETED_TODO);

// console.log(addNewToDo())

export {
    addNewToDo,
    filterChange,
    removeToDo,
    toggleCompleted
}