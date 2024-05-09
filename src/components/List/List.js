import React, { useCallback, useState } from "react";

const List = ({items, onChangeItems, Component, title, deleteButtonLabel, toggleItem, extraProps}) => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleAddTodo = () => {
    const newItem = {
      id: items.length + 1,
      text: inputValue,
      isCompleted: false
    }
    onChangeItems([...items, newItem]);
    setInputValue("");
  }

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    onChangeItems(newItems);
  }

  return (
    <div className="container">
      <h1>{title}</h1>

      <div className="add-todo">
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {
          items.map(useCallback((item) => (
            <Component key={item.id} {...item} deleteItem={() => deleteItem(item.id)} toggleItem={() => toggleItem(item.id)}  />
          ), [items])
          )
        }
      </ul>

    </div>
  );
};
export default List;