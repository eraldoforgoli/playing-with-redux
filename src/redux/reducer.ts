import ActionTypes from "./actionTypes";
import { combineReducers } from "redux";

interface action {
  type: string;
  description: string;
}

// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// Do not mutate the state

//  (previousState = initialState, action: any) => {
//   return {
//     count: incrementDecrementReducer(previousState.count, action),
//     items: addItemReducer(previousState.items, action)
//   };
// };

export const incrementDecrementReducer = (state = 0, action: any) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;
    case ActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const addItemReducer = (state = [], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return [...state, action];
    default:
      return state;
  }
};

const mainReducer = combineReducers({
  count: incrementDecrementReducer,
  items: addItemReducer
});

export default mainReducer;
