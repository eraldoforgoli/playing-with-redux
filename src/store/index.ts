import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  incrementDecrementReducer,
  addItemReducer
} from "../app/counterExample/reducers/index";

const mainReducer = combineReducers({
  count: incrementDecrementReducer,
  items: addItemReducer
});

const store = createStore(mainReducer, composeWithDevTools());

export default store;
