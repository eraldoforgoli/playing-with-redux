import React, { useState } from "react";
import { connect } from "react-redux";

import store from "../redux/store";
import { incrementAction, decrementAction, addItem } from "../redux/action";
import { Item } from "../redux/reducer";

interface TestProps {
  count: number;
  items: Item[];
  onIncrementClick: () => void;
  onDecrementClick: () => void;
  onAddItemClick: (item: string) => void;
}

const TestComponent: React.FC<TestProps> = ({
  count,
  items,
  onIncrementClick,
  onDecrementClick,
  onAddItemClick
}) => {
  const [inputMessage, setInputMessage] = useState<string>("");

  const handleTextChange = (event: any) => {
    setInputMessage(event.target.value);
  };
  debugger;
  return (
    <div>
      <h4>the counter is : {count}</h4>
      <button
        onClick={() => {
          onIncrementClick();
        }}
      >
        Increment
      </button>

      <button onClick={() => onDecrementClick()}>Decrement</button>

      <div>
        <input onChange={handleTextChange} value={inputMessage} type="text" />
        <button
          onClick={() => {
            onAddItemClick(inputMessage);
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrementClick: () => {
      dispatch(incrementAction());
    },
    onDecrementClick: () => {
      dispatch(incrementAction());
    },
    onAddItemClick: (item: string) => {
      dispatch(addItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
