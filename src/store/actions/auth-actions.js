import { REGISTER_DATA, AUTH_LOADING, LOGIN_DATA, LOGOUT_USER } from "../types";
import axios from "configs/axios";
import querystring from "querystring";

export const registerData = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
    payload: true,
  });
  let formData = new FormData();

  formData.set("nama", data.fullName);
  formData.set("username", data.username);
  formData.set("email", data.email);
  formData.set("password", data.password);

  const response = await axios
    .post("/api/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);

  dispatch({
    type: AUTH_LOADING,
    payload: false,
  });
  return response;
};

export const loginData = (data) => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
    payload: true,
  });

  let parseData = querystring.stringify(data);

  const response = await axios
    .post("/api/users/login", parseData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      const { data } = res.data;
      dispatch({
        type: LOGIN_DATA,
        payload: data,
      });
      return res;
    })
    .catch((err) => err.response);

  dispatch({
    type: AUTH_LOADING,
    payload: false,
  });

  return response;
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
    payload: true,
  });

  dispatch({
    type: LOGOUT_USER,
  });

  dispatch({
    type: AUTH_LOADING,
    payload: false,
  });
};

export const fetchLoggedUser = (token) => async (dispatch) => {
  const response = await axios
    .get("/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res)
    .catch((err) => err.response);

  return response;
};
