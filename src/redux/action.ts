import ActionTypes from "./actionTypes";

export interface Increment {
  type: ActionTypes.INCREMENT;
}

export interface Decrement {
  type: ActionTypes.DECREMENT;
}

export interface AddItem {
  type: ActionTypes.ADD_ITEM;
  value: string;
}

export const incrementAction = (): Increment => {
  return {
    type: ActionTypes.INCREMENT
  };
};

export const decrementAction = (): Decrement => {
  return {
    type: ActionTypes.DECREMENT
  };
};

export type AllActions = Increment | Decrement | AddItem;

export const addItem = (value: string): AddItem => {
  return {
    type: ActionTypes.ADD_ITEM,
    value: value
  };
};
