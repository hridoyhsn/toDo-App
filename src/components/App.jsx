import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

function App() {
  const [items, setItems] = useState([]);

  function addItems(inputText) {
    setItems((preValue) => {
      return [...preValue, inputText];
    });
  }
  function deleteItem(id) {
    setItems((preV) => {
      return preV.filter((value, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItems} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              text={todoItem}
              key={index}
              id={index}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
