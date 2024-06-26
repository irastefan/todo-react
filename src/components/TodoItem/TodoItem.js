const TodoItem = ({ id, text, isCompleted, deleteItem , toggleItem}) => {

  return (
        <li  className="todo-item">
           <label style={isCompleted ? {textDecoration: "line-through"} : {}}>
              <input  type="checkbox" onChange={() => toggleItem(id)} checked={isCompleted} />
              {text}
           </label>
           <div className="delete-todo" onClick={deleteItem}>Delete</div>
        </li>
  );
};

export default TodoItem;
