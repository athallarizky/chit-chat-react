import {
  FETCH_ALL_POST,
  SET_POST,
  POST_LOADING,
  SUBMIT_POST,
  SUBMIT_POST_LOADING,
  UPDATE_POST_LOADING,
  DELETE_POST_LOADING,
} from "../types";
import axios from "configs/axios";

export const fetchAllPosts = () => async (dispatch) => {
  dispatch({
    type: POST_LOADING,
    payload: true,
  });
  const response = await axios
    .get("/api/post/all")
    .then((res) => {
      const { data } = res.data;
      dispatch({
        type: SET_POST,
        payload: data,
      });
    })
    .catch((err) => err.response);

  dispatch({
    type: POST_LOADING,
    payload: false,
  });

  return response;
};

export const submitPost = (token, data) => async (dispatch) => {
  dispatch({
    type: SUBMIT_POST_LOADING,
    payload: true,
  });

  let formData = new FormData();

  formData.set("text", data.statusText);
  formData.set("gambar", data.statusImage);

  const response = await axios
    .post("/api/post/add", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);

  dispatch({
    type: SUBMIT_POST_LOADING,
    payload: false,
  });

  return response;
};

export const updatePost = (id, token, statusText, statusImage = "-") => async (
  dispatch
) => {
  dispatch({
    type: UPDATE_POST_LOADING,
    payload: true,
  });

  let formData = new FormData();

  formData.set("text", statusText);
  formData.set("gambar", statusImage);

  const response = await axios
    .post(`/api/post/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);

  dispatch({
    type: UPDATE_POST_LOADING,
    payload: false,
  });

  return response;
};

export const deleteStatus = (token, id) => async (dispatch) => {
  dispatch({
    type: DELETE_POST_LOADING,
    payload: true,
  });

  const response = await axios
    .delete(`/api/post/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res)
    .catch((err) => err.response);

  dispatch({
    type: DELETE_POST_LOADING,
    payload: false,
  });
};
