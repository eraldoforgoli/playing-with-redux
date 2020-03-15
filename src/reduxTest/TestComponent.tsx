import React, { useState } from "react";

import store from "../redux/store";
import { incrementAction, decrementAction, addItem } from "../redux/action";
import { Item } from "../redux/reducer";
const TestComponent = () => {
  const [count, setCount] = useState<number>(
    store.getState().incrementDecrementReducer
  );
  const [inputMessage, setInputMessage] = useState<string>("");
  const [items, setItems] = useState<Item[]>(store.getState().addItemReducer);

  const render = () => {
    const currentState = store.getState();
    setCount(currentState.incrementDecrementReducer);
    setItems(currentState.addItemReducer);
  };

  store.subscribe(render);

  const handleTextChange = (event: any) => {
    setInputMessage(event.target.value);
  };
  return (
    <div>
      <h4>the counter is : {count}</h4>
      <button
        onClick={() => {
          store.dispatch(incrementAction());
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          store.dispatch(decrementAction());
        }}
      >
        Decrement
      </button>

      <div>
        <input onChange={handleTextChange} value={inputMessage} type="text" />
        <button
          onClick={() => {
            store.dispatch(addItem(inputMessage));
            setInputMessage("");
          }}
        >
          Save the item
        </button>
        <h4>
          Your items :
          {items.map((item, index) => (
            <p>{item.value}</p>
          ))}
        </h4>
      </div>
    </div>
  );
};

export default TestComponent;
