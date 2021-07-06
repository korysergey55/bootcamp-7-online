import axios from "axios";
import {
  getCurrentUserFailure,
  getCurrentUserRequested,
  getCurrentUserSuccess,
  loginFailure,
  loginRequested,
  loginSuccess,
  logoutSuccess,
  registerFailure,
  registerRequested,
  registerSuccess,
} from "./auth.actions";

// I Hate you Redux

const token = {
  setToken(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.Authorization = null;
  },
};

axios.defaults.baseURL = "https://amz-app.herokuapp.com/api/v1/";

const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(loginRequested());
    try {
      const { data } = await axios.post("auth/accounts/signin", {
        email,
        password,
      });
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };

const register =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(registerRequested());
    try {
      await axios.post("auth/accounts/signup", {
        email,
        password,
        redirectUrl: window.location.href,
      });
      dispatch(registerSuccess());
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };

const getCurrentUser = () => async (dispatch, getState) => {
  const accessToken = getState().auth.token;

  if (!accessToken) return;

  dispatch(getCurrentUserRequested());
  try {
    token.setToken(accessToken);
    const { data } = await axios.get(`users/info`);
    dispatch(getCurrentUserSuccess(data));
  } catch (error) {
    dispatch(getCurrentUserFailure(error));
  }
};

const logout = () => async (dispatch) => {
  try {
    dispatch(logoutSuccess());
    window.location.reload();
  } catch (error) {
    return error;
  }
};

export { login, register, getCurrentUser, logout };
