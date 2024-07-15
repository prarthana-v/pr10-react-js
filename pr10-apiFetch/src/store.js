import { applyMiddleware, createStore } from "redux";
import rootReduers from "./Redux/Reducer";
import { thunk } from "redux-thunk";

const store = createStore(rootReduers, applyMiddleware(thunk));

export default store;
