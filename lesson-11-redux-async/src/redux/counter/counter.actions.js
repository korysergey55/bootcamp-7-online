import { createAction } from '@reduxjs/toolkit'

import {DECREMENT, INCREMENT} from "./counter.constants";
//
// const increment = {
//     type: INCREMENT
// }
//
// const decrement = {
//     type: DECREMENT
// }
//
// export {
//     increment,
//     decrement
// }

const increment = createAction(INCREMENT);
const decrement = createAction(DECREMENT);

export {
    increment,
    decrement
}
