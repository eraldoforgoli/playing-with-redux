import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./App.css";
import CounterComponent from "./app/example/components/Counter";
import UsersComponent from "./app/example/components/Users";
import Navigation from "./commons/components/navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className="header">
            <Navigation />
          </div>

          <Switch>
            <Route exact path="/" component={CounterComponent} />
            <Route exact path="/users" component={UsersComponent} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
