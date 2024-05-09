import React, { useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import List from "../List/List";

const TodoList = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const toggleItem = (id) => {
    const newItem = todos.map(item => {
      if(item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item;
    });
    setTodos(newItem);
  }

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Build a todo app", isCompleted: true },
    { id: 3, text: "Deploy to production", isCompleted: false },
  ]);

  return (
    <div className="container">

         <List
            title={"Todo List"}
            items={todos}
            onChangeItems={setTodos}
            toggleItem={toggleItem}
            Component={(props) => <TodoItem {...props} toggleItem={() => toggleItem(props.id)} />}
         />

    </div>
  );
};
export default TodoList;