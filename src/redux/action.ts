import ActionTypes from "./actionTypes";

export const incrementAction = () => {
  return {
    type: ActionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.DECREMENT
  };
};

export const addItem = (value: string) => {
  return {
    type: ActionTypes.ADD_ITEM,
    value: value
  };
};
