export enum CounterTypes {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT"
}

export interface Increment {
  type: CounterTypes.INCREMENT;
}

export interface Decrement {
  type: CounterTypes.DECREMENT;
}

export const incrementAction = (): Increment => {
  return {
    type: CounterTypes.INCREMENT
  };
};

export const decrementAction = (): Decrement => {
  return {
    type: CounterTypes.DECREMENT
  };
};
