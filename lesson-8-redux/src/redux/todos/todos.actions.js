import {ADD_NEW_TODO, FILTER_CHANGE, REMOVE_TODO} from "./todos.constants";

const addNewToDo = (payload) => {
    return {
        type: ADD_NEW_TODO,
        payload
    }
}

const filterChange = (payload) => {
    return {
        type: FILTER_CHANGE,
        payload: payload.target.value,
    }
}

const removeToDo = (payload) => {
    return {
        type: REMOVE_TODO,
        payload
    }
}

// console.log(addNewToDo())

export {
    addNewToDo,
    filterChange,
    removeToDo
}