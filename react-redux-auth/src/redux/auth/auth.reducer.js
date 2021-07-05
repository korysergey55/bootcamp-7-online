import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { loginSuccess } from "./auth.actions";

const token = createReducer(null, {
  [loginSuccess]: (state, action) => action.payload.accessToken,
});

const user = createReducer({}, {
  [loginSuccess]: (state, action) => action.payload.user,
});

const loading = createReducer(false, {});

const error = createReducer(null, {});

const authReducer = combineReducers({ token, error, loading, user });

export default authReducer;
