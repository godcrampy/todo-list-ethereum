pragma solidity ^0.5.0;

contract TodoList{
  string[10] public list;
  uint public numberOfTodos;

  function addTodo(string memory todo) public returns (bool) {
    if(numberOfTodos == 10){
      return false;
    }
    list[numberOfTodos] = todo;
    ++numberOfTodos;
    return true;
  }

  function deleteTodo(uint index) public {
    require(index >= 0 && index < 10, "Index out of bounds");
    for (uint i = index; i < numberOfTodos - 1; ++i){
      list[index] = list[index + 1];
    }
    --numberOfTodos;
  }
}
