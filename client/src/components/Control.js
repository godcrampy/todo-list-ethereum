import React from "react";

class Control extends React.Component {
  state = {
    newTodo: "",
    deleteIndex: 1,
    deleteKey: null
  };
  componentDidMount() {}
  handleNewTodo = event => {
    this.setState({ newTodo: event.target.value });
  };
  handleCount = event => {
    this.setState({ deleteIndex: event.target.value });
  };
  addTodo = () => {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.TodoList;
    contract.methods.addTodo.cacheSend(this.state.newTodo);
    this.setState({ newTodo: "" });
  };
  deleteTodo = () => {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.TodoList;
    contract.methods.deleteTodo.cacheSend(this.state.deleteIndex - 1);
  };
  render() {
    return (
      <div className="Control">
        <label>
          <b>New Todo</b>
          <input
            className="input"
            type="text"
            value={this.state.newTodo}
            onChange={this.handleNewTodo}
            placeholder="Invest in ETH"
          />
          <button className="button is-success" onClick={this.addTodo}>
            Add
          </button>
        </label>
        <label>
          <br />
          <b>Delete Todo</b>
          <input
            className="input"
            type="number"
            value={this.state.deleteIndex}
            onChange={this.handleCount}
            placeholder="Index to Delete"
          />
          <button className="button is-danger" onClick={this.deleteTodo}>
            Delete
          </button>
        </label>
      </div>
    );
  }
}

export default Control;
