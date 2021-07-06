import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserSuccess,
  loginSuccess,
  logoutSuccess,
} from "./auth.actions";

const token = createReducer(null, {
  [loginSuccess]: (state, action) => action.payload.accessToken,
  [logoutSuccess]: () => null,
});

const user = createReducer(
  {},
  {
    [getCurrentUserSuccess]: (state, action) => action.payload,
    [loginSuccess]: (state, action) => action.payload.user,
    [logoutSuccess]: () => {},
  }
);

const loading = createReducer(false, {});

const error = createReducer(null, {});

const authReducer = combineReducers({ token, error, loading, user });

export default authReducer;
