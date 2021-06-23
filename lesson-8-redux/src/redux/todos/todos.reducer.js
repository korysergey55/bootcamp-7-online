import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {addNewToDo, filterChange, removeToDo, toggleCompleted} from "./todos.actions";

// const initialState = {
//     items: [],
//     filter: '',
//     status: TodosStatusEnum.ALL,
// }

// const todosReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NEW_TODO:
//             return {
//                 ...state,
//                 items: [action.payload, ...state.items]
//             };
//         case REMOVE_TODO:
//             return {
//                 ...state,
//                 items: state.items.filter((item) => item.id !== action.payload)
//             }
//         case TOGGLE_COMPLETED_TODO:
//             return {
//                 ...state,
//                 items: state.items.map((item) =>
//                     item.id === action.payload
//                         ? {
//                             ...item,
//                             completed: !item.completed,
//                         }
//                         : item
//                 )
//             }
//         case FILTER_CHANGE:
//             return {
//                 ...state,
//                 filter: action.payload,
//             }
//         default:
//             return state;
//     }
// }

const items = createReducer([], {
    [addNewToDo]: (state, action) => [action.payload, ...state],
    [removeToDo]: (state, action) => state.filter((item) => item.id !== action.payload),
    [toggleCompleted]: (state, action) => state.map((item) =>
        item.id === action.payload
            ? {
                ...item,
                completed: !item.completed,
            }
            : item),
});

const filter = createReducer('', {
    [filterChange]: (_, action) => action.payload
});

const todosReducer = combineReducers({
    items,
    filter
})

export default todosReducer;