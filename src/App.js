import React, { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput";
import TodoList from "./Components/TodoList";

function App() {
  const [formInput, setFormInput] = useState("");
  const [editItem, setEditItem] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Do Assignment",
      isDone: false,
    },
    {
      id: 2,
      text: "Make a todo-app",
      isDone: false,
    },
  ]);

  return (
    <div className="App">
      <FormInput
        formInput={formInput}
        setFormInput={setFormInput}
        items={items}
        setItems={setItems}
        editItem={editItem}
        setEditItem={setEditItem}
      />
      <TodoList
        items={items}
        setItems={setItems}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </div>
  );
}

export default App;
