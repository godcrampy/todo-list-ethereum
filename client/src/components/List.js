import React from "react";

class List extends React.Component {
  state = { dataKey: null };
  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.TodoList;
    const dataKey = contract.methods["numberOfTodos"].cacheCall();
    this.setState({ dataKey });
  }
  render() {
    const { TodoList } = this.props.drizzleState.contracts;
    console.log(TodoList);
    console.log(this.state);
    const todoListCount = TodoList.numberOfTodos[this.state.dataKey];
    console.log(todoListCount);
    return <p>Number of Todos: {todoListCount && todoListCount.value}</p>;
  }
}

export default List;
