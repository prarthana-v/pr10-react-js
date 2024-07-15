import { combineReducers } from "redux";
import Reducers from "./reducers";

const rootReduers = combineReducers({
  user: Reducers,
});
export default rootReduers;
