import React from "react";

import List from "./components/List";

class App extends React.Component {
  state = { loading: true, drizzleState: null };
  componentDidMount() {
    const { drizzle } = this.props;
    this.unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    if (this.state.loading) return "Loading Drizzle...";
    console.log("drizzle state:", this.state.drizzleState);
    return (
      <div className="App">
        <List drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />
      </div>
    );
  }
}

export default App;
