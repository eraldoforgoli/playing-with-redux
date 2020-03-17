import React, { useState, Dispatch } from "react";
import { connect } from "react-redux";

import * as actions from "../actions/index";
import { Item } from "../../../types";
import { AppState } from "../../../store/index";

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
            if (inputMessage !== "") {
              onAddItemClick(inputMessage);
              setInputMessage("");
            }
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

export type AllActions =
  | actions.Increment
  | actions.Decrement
  | actions.AddItem;

const mapDispatchToProps = (dispatch: Dispatch<AllActions>) => {
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
