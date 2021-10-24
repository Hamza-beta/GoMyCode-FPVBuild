import { USER_LOGIN, USER_REGISTER, USER_LOADING, LOGOUT, AUTH_ERRORS, CURRENT, LIST_USERS } from "../types/authTypes";
const initialstate = {
  isAuth: false,
  loading: false,
  user: null,
  msg: null,
  errors: null,
  users: [],
};
const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_REGISTER:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loading: false,
        ...action.payload,
        isAuth: true,
        user: action.payload.user,
      };
    case USER_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        loading: false,
        ...action.payload,
        isAuth: true,
        user: action.payload.finduser,
      };
    case CURRENT:
      return { ...state, isAuth: true, user: action.payload.user };
    case AUTH_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload.errors,
        isAuth: false,
      };
    case LIST_USERS:
      return { ...state, users: action.payload.Users };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        errors: null,
        auth: false,
        loading: false,
        token: null,
      };

    default:
      return state;
  }
};
export default authReducer;
