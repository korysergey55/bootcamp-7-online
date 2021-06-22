import {ADD_NEW_TODO, FILTER_CHANGE, REMOVE_TODO} from "./todos.constants";
import {TodosStatusEnum} from "../../components/Todos/todos-status.enum";

const initialState = {
    items: [],
    filter: '',
    status: TodosStatusEnum.ALL,
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TODO:
            return {
                ...state,
               items:  [action.payload, ...state.items]
            };
        case REMOVE_TODO:
            return  {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload)
            }
        case FILTER_CHANGE:
            return {
                ...state,
                filter: action.payload,
            }
        default:
            return state;
    }
}

export default todosReducer;