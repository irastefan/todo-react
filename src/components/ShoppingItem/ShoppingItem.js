const ShoppingItem = ({ id,  image, text, isCompleted, deleteItem, toggleItem }) => {


  return (
        <li  className="todo-item">
           <label style={isCompleted ? {textDecoration: "line-through"} : {}}>
              <input  type="checkbox" onChange={toggleItem} checked={isCompleted} />
              <img width={"30px"} height={"30px"} src={image} alt={text} />
              {text}
           </label>
           <div className="delete-todo" onClick={deleteItem}>Delete</div>
        </li>
  );
};

export default ShoppingItem;