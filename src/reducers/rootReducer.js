import { combineReducers } from "redux";
import userReducer from "./userReducer";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
});

export default rootReducer;
