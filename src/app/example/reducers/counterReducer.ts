import { CounterTypes, IncrementDecrementAction } from "../actions/index";

export const incrementDecrementReducer = (
  state = 0,
  action: IncrementDecrementAction
) => {
  switch (action.type) {
    case CounterTypes.INCREMENT:
      return state + 1;
    case CounterTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
