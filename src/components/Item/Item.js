const Item = ({ id, text, isCompleted, deleteItem, toggleTodo }) => {
  return (
        <li  className="todo-item">
           <label style={isCompleted ? {textDecoration: "line-through"} : {}}>
              <input  type="checkbox" onChange={() => toggleTodo(id)} checked={isCompleted} />
              {text}
           </label>
           <div className="delete-todo" onClick={deleteItem}>Delete</div>
        </li>
  );
};

export default Item;
