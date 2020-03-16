import React, { useState } from "react";
import { connect } from "react-redux";

import store from "../redux/store";
import { incrementAction, decrementAction, addItem } from "../redux/action";
import {
  Item,
  incrementDecrementReducer,
  addItemReducer
} from "../redux/reducer";

interface TestProps {
  count: number;
  items: Item[];
}

const TestComponent: React.FC<TestProps> = ({ count, items }) => {
  const [inputMessage, setInputMessage] = useState<string>("");

  const render = () => {};

  store.subscribe(render);

  const handleTextChange = (event: any) => {
    setInputMessage(event.target.value);
  };
  debugger;
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

const mapStateToProps = (state: any) => {
  return {
    count: state.incrementDecrementReducer,
    items: state.addItemReducer
  };
};

export default connect(mapStateToProps)(TestComponent);
