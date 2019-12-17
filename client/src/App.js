import React from "react";
import { DrizzleContext } from "drizzle-react";

import List from "./components/List";
import "bulma/bulma.sass";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 className="title is-1">Todo List</h1>
        <DrizzleContext.Consumer>
          {drizzleContext => {
            const { drizzle, drizzleState, initialized } = drizzleContext;

            if (!initialized) {
              return "Loading...";
            }

            return <List drizzle={drizzle} drizzleState={drizzleState} />;
          }}
        </DrizzleContext.Consumer>
      </div>
    );
  }
}

export default App;
