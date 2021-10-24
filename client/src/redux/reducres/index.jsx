import { combineReducers } from "redux";
import authReducer from "./authReducre";
import postReducer from "./postReducre";

const rootReducer = combineReducers({ authReducer, postReducer });

export default rootReducer;
