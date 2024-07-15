import { combineReducers } from "redux";
import userReducers from "./reducers";

const rootReducers = combineReducers({
  user: userReducers,
});

export default rootReducers;
