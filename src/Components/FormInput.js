import React from "react";
import "./FormInput.css";
const FormInput = ({
  formInput,
  setFormInput,
  items,
  setItems,
  editItem,
  setEditItem,
}) => {
  const updateItem = (text, id, isDone) => {
    const newItem = items.map((todo) => {
      return todo.id === id ? { text, id, isDone } : todo;
    });
    setItems(newItem);
    setEditItem("");
  };

  const changeHandler = (event) => {
    setFormInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!editItem) {
      setItems((prev) => {
        return [
          {
            id: Math.random().toString(),
            text: formInput,
            isDone: false,
          },
          ...prev,
        ];
      });
    } else {
      updateItem(formInput, editItem.id, editItem.isDone);
    }
    setFormInput("");
  };

  return (
    <form className="form-todo" onSubmit={submitHandler}>
      <span>
        <h1>Add Your Todo</h1>{" "}
      </span>
      <div className="form-input">
        <input
          type="text"
          required
          className="form-text"
          placeholder={editItem ? "Update todo" : "Create a todo"}
          value={formInput}
          onChange={changeHandler}
        />
      </div>
      <button>{editItem ? "Update Todo" : "Add Todo"}</button>
    </form>
  );
};

export default FormInput;
