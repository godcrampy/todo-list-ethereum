import React from "react";

class List extends React.Component {
  state = { dataKey: null, keys: [] };
  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.TodoList;

    const dataKey = contract.methods.numberOfTodos.cacheCall();
    this.setState({ dataKey });
    for (let i = 0; i < 10; ++i) {
      const key = contract.methods.list.cacheCall(i);
      this.setState(prevState => ({
        keys: [...prevState.keys, key]
      }));
    }
  }
  render() {
    const { TodoList } = this.props.drizzleState.contracts;
    const todoListCount = TodoList.numberOfTodos[this.state.dataKey];
    return (
      <div>
        Number of Todos: {todoListCount && todoListCount.value}
        <br />
        <b>Todos:</b>
        <ol>
          {this.state.keys.map((key, index) => {
            const todo = TodoList.list[key];
            if (todo && todo.value !== "") return <li key={index}>{todo.value}</li>;
            return "";
          })}
        </ol>
      </div>
    );
  }
}

export default List;
