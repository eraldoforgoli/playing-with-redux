import React, { useState, Dispatch } from "react";
import { connect } from "react-redux";

import * as actions from "../redux/action";
import { Item, AppState } from "../types";

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

const mapStateToProps = (state: AppState) => {
  return {
    count: state.count,
    items: state.items
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.AllActions>) => {
  return {
    onIncrementClick: () => {
      dispatch(actions.incrementAction());
    },
    onDecrementClick: () => {
      dispatch(actions.incrementAction());
    },
    onAddItemClick: (item: string) => {
      dispatch(actions.addItem(item));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
