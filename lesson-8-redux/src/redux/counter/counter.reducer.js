// import {DECREMENT, INCREMENT} from "./counter.constants";
import { createReducer} from "@reduxjs/toolkit";
import {decrement, increment} from "./counter.actions";

// const counterReducer = (state = 0, action) => {
//     switch (action.type) {
//         case DECREMENT:
//             return state - 1;
//         case INCREMENT:
//             return state + 1;
//         default:
//             return state;
//     }
// }

const counterReducer =  createReducer(0, {
    [increment]: (state) => state + 1,
    [decrement]: (state) => state === 0 ? 0 : state - 1
})

export default counterReducer;