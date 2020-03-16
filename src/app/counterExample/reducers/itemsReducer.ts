import { ItemsTypes } from "../actions/index";

export const addItemReducer = (state = [], action: any) => {
  switch (action.type) {
    case ItemsTypes.ADD_ITEM:
      return [...state, action];
    default:
      return state;
  }
};
