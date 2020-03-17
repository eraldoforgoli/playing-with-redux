export enum ItemsTypes {
  ADD_ITEM = "ADD_ITEM"
}

export interface AddItem {
  type: ItemsTypes.ADD_ITEM;
  value: string;
}

export const addItem = (value: string): AddItem => {
  return {
    type: ItemsTypes.ADD_ITEM,
    value: value
  };
};
