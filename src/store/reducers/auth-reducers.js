import {
  REGISTER_DATA,
  LOGIN_DATA,
  AUTH_LOADING,
  LOGOUT_USER,
  FETCH_USER_DATA,
} from "../types";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  email: user !== null ? user.email : "",
  fullname: user !== null ? user.nama : "",
  username: user !== null ? user.username : "",
  bio: user !== null ? user.bio : "",
  photo: user !== null ? user.foto : "",
  token: user !== null ? user.token : "",
  isLoading: false,
  isAuthenticated: localStorage.getItem("user") !== null ? true : false,
};

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOGIN_DATA:
      console.log("action.payload", action.payload);
      //   localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        email: action.payload.email,
        fullname: action.payload.nama,
        username: action.payload.username,
        bio: action.payload.bio,
        photo: action.payload.foto,
        token: action.payload.token,
      };

    case LOGOUT_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        email: "",
        fullname: "",
        username: "",
        bio: "",
        photo: "",
        token: "",
      };

    default:
      return state;
  }
};

export default AuthReducers;
