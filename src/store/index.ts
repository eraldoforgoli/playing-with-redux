import {
  combineReducers,
  applyMiddleware,
  AnyAction,
  createStore
} from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  incrementDecrementReducer,
  addItemReducer,
  usersReducer
} from "../app/example/reducers/index";

const mainReducer = combineReducers({
  count: incrementDecrementReducer,
  items: addItemReducer,
  users: usersReducer
});

export type AppState = ReturnType<typeof mainReducer>;

const store = createStore(
  mainReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
