import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a todo app", completed: true },
    { id: 3, text: "Deploy to production", completed: false },
  ];

  return (
    <div className="container">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
