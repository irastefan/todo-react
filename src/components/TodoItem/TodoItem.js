const TodoItem = ({ text, isCompleted }) => {
  return (
    <li className="todo-item">
      <input type="checkbox" checked={isCompleted} />
      <span>{text}</span>
      <div className="delete-todo">Delete</div>
    </li>
  );
};

export default TodoItem;
