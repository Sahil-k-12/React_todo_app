import React from "react";
import "./Todo.css";
const Todo = ({ item, onDelete, onDone, onEdit, editItem }) => {
  const deleteHandler = (item) => {
    onDelete(item.id);
  };
  const doneHandler = (item) => {
    onDone(item);
  };
  const editHandler = (item) => {
    onEdit(item.id);
  };

  return (
    <div
      className={`todo + ${item.isDone && "done"} + ${
        editItem === item && "edit"
      }`}
    >
      <div className="todo-text">{item.text}</div>
      <div className="todo-buttons">
        <div className="todo-edit">
          <button onClick={() => editHandler(item)}>Edit</button>
        </div>
        <div className="todo-done">
          <button onClick={() => doneHandler(item)}>Done</button>
        </div>
        <div className="todo-delete">
          <button onClick={() => deleteHandler(item)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
