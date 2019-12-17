const TodoList = artifacts.require("./TodoList.sol");

contract("TodoList", accounts => {
  describe("Initial Setup", () => {
    it("should set initial todos to zero", async () => {
      const todoList = await TodoList.deployed();

      const numberOfTodos = await todoList.numberOfTodos();

      assert.equal(numberOfTodos, 0, "Initial number of todos not zero");
    });
  });

  describe("Add and Delete Todos", async () => {
    it("should add todos and increase todo count by one", async () => {
      const todoList = await TodoList.deployed();
      await todoList.addTodo("Hello World!");
      const todo = await todoList.list(0);
      const numberOfTodos = await todoList.numberOfTodos();

      assert.equal(todo, "Hello World!", "Todo not added");
      assert.equal(numberOfTodos, 1, "Number of todos not increasing");
    });
    it("should delete todos and decrease todo count by one", async () => {
      const todoList = await TodoList.deployed();
      // list already contains "Hello World"
      await todoList.addTodo("First");
      await todoList.addTodo("Second");
      await todoList.deleteTodo(1);

      const todo = await todoList.list(1);
      const deletedTodo = await todoList.list(2);
      const numberOfTodos = await todoList.numberOfTodos();

      assert.equal(todo, "Second", "Error in todo deletion");
      assert.equal(deletedTodo, "", "Error in todo deletion");
      assert.equal(numberOfTodos, 2, "Number of todos not decreasing");
    });
  });
});
