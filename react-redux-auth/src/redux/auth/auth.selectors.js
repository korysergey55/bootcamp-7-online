import {createSelector} from "@reduxjs/toolkit";

const selectIsAuth = (state) => Boolean(state.auth.token);

const reselect = createSelector([selectIsAuth], (auth) => auth);

export { selectIsAuth, reselect };