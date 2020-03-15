import React, { useState } from "react";

import logo from "./logo.svg";
import store from "./redux/store";
import { incrementAction, addItem } from "./redux/action";
import { Item } from "./redux/reducer";
import "./App.css";

function App() {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h4>the store is {count}</h4>
        <button
          onClick={() => {
            store.dispatch(incrementAction());
          }}
        >
          Increment the counter
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
            you have entered:
            {items.map((item, index) => (
              <p>{item.value}</p>
            ))}
          </h4>
        </div>
      </header>
    </div>
  );
}

export default App;
