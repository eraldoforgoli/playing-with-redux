import { CounterTypes } from "../actions/index";

export const incrementDecrementReducer = (state = 0, action: any) => {
  switch (action.type) {
    case CounterTypes.INCREMENT:
      return state + 1;
    case CounterTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
