import axios from "axios";
import {
  loginFailure,
  loginRequested,
  loginSuccess,
  registerFailure,
  registerRequested,
  registerSuccess,
} from "./auth.actions";

// I Hate Redux

axios.defaults.baseURL = "https://amz-app.herokuapp.com/api/v1/";

const login =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(loginRequested());
    try {
      // console.log(email, password);
      const { data } = await axios.post("auth/accounts/signin", {
        email,
        password,
      });
      dispatch(loginSuccess(data));
    } catch (error) {
      console.log(error);
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

export { login, register };
