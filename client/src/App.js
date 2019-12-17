import React from "react";
import { DrizzleContext } from "drizzle-react";

import List from "./components/List";
import Control from "./components/Control";
import "bulma/bulma.sass";
import "./App.scss";
import img from "./assets/illustration.png";

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

            return (
              <div>
                <div className="flex">
                  <List drizzle={drizzle} drizzleState={drizzleState} />
                  <img src={img} />
                </div>
                <Control drizzle={drizzle} drizzleState={drizzleState} />
              </div>
            );
          }}
        </DrizzleContext.Consumer>
      </div>
    );
  }
}

export default App;
