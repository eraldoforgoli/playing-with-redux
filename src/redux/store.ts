import { createStore, compose } from "redux";
import mainReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(mainReducer, composeWithDevTools());

export default store;
