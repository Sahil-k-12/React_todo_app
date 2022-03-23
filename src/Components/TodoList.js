import React from "react";
import Todo from "./Todo";

const TodoList = ({ items, setItems, editItem, setEditItem }) => {
  const deleteHandler = (id) => {
    setItems((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const doneHandler = (todo) => {
    setItems(
      items.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };

  const editHandler = (id) => {
    const thatTodo = items.find((todo) => todo.id === id);
    setEditItem(thatTodo);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <Todo
            key={item.id}
            item={item}
            onDelete={deleteHandler}
            onDone={doneHandler}
            onEdit={editHandler}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
