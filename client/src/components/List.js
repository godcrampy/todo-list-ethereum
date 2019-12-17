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
    const todoListCount = TodoList.numberOfTodos[this.state.dataKey];
    return <p>Number of Todos: {todoListCount && todoListCount.value}</p>;
  }
}

export default List;
