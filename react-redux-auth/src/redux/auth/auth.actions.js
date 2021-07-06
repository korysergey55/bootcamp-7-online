import { createAction } from "@reduxjs/toolkit";

const registerRequested = createAction("auth/registerRequested");
const registerSuccess = createAction("auth/registerSuccess");
const registerFailure = createAction("auth/registerFailure");

const loginRequested = createAction("auth/loginRequested");
const loginSuccess = createAction("auth/loginSuccess");
const loginFailure = createAction("auth/loginFailure");

const getCurrentUserRequested = createAction("auth/getCurrentUserRequested");
const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
const getCurrentUserFailure = createAction("auth/getCurrentUserFailure");

const logoutSuccess = createAction("auth/logoutSuccess");

export {
  getCurrentUserRequested,
  loginRequested,
  getCurrentUserFailure,
  registerFailure,
  registerSuccess,
  getCurrentUserSuccess,
  loginFailure,
  loginSuccess,
  registerRequested,
  logoutSuccess,
};
