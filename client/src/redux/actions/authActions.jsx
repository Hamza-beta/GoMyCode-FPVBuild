import axios from "axios";
import { AUTH_ERRORS, CURRENT, LIST_USERS, LOGOUT, USER_LOADING, USER_LOGIN, USER_REGISTER } from "../types/authTypes";
export const register = (formData, history) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const res = await axios.post("/api/users/Signup", formData);
    dispatch({
      type: USER_REGISTER,
      payload: res.data,
    });
    await history.push("/signin");
    dispatch(current());
  } catch (error) {
    dispatch({
      type: AUTH_ERRORS,
      payload: error.response.data,
    });
  }
};
export const login = (formData, history) => async (dispatch) => {
  dispatch({ type: USER_LOADING });
  try {
    const res = await axios.post("/api/users/SignIn", formData);
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
    await history.push("/");
    dispatch(current());
  } catch (error) {
    dispatch({
      type: AUTH_ERRORS,
      payload: error.response.data,
    });
  }
};

export const current = () => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/users/Current", config);
    dispatch({ type: CURRENT, payload: res.data });
    // console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
export const signout = () => {
  return { type: LOGOUT };
};
export const deleteUser = (id) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.delete(`/api/users/DeleteUser/${id}`, config);
    dispatch(listAllUsers());
  } catch (error) {
    console.log(error);
  }
};

export const listAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("api/users/ListUsers");
    dispatch({ type: LIST_USERS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
