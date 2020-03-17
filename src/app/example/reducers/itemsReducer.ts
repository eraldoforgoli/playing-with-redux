import { ItemsTypes, AddItem as AddItemAction } from "../actions/index";

export const addItemReducer = (state = [], action: AddItemAction) => {
  switch (action.type) {
    case ItemsTypes.ADD_ITEM:
      return [...state, action];
    default:
      return state;
  }
};
