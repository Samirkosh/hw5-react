import React, { useState } from "react";
import { MyButton } from "./MyButton";
import "./TodoForm.css";

export const TodoForm = () => {
  const [tovar, setTovar] = useState("");
  const [todos, setTodos] = useState([]);
  const [updateId, setUpdateId] = useState(null);

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id != id;
    });
    setTodos(removeItem);
  }

  function handleTovarChange(event) {
    setTovar(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!tovar) {
      alert("Please write a product!!!");
      return;
    }

    if (updateId) {
      setTodos(
        todos.map((todo) =>
          todo.id === updateId ? { ...todo, title: tovar } : todo
        )
      );
      setUpdateId(null);
    } else {
      const newTovar = {
        title: tovar,
        id: Date.now(),
      };
      setTodos([...todos, newTovar]);
    }

    setTovar("");
  }

  const updateHandler = (item) => {
    console.log(item);
    setTovar(item.title);
    setUpdateId(item.id);
  };

  return (
    <div className="FormBlock">
      <section>
        <input
          value={tovar}
          type="text"
          onChange={handleTovarChange}
          placeholder="Enter..."
        />

        <MyButton className="btnAdd" type="submit" onclick={handleSubmit}>
          add
        </MyButton>
      </section>
      <ul>
        {todos.map((item) => (
          <div className="container" key={item.id}>
            <li>{item.title} </li>
            <MyButton
              className="btn"
              onClick={() => handleDeleteClick(item.id)}
            >
              Delete
            </MyButton>

            <MyButton className="btn" onClick={() => updateHandler(item)}>
              Update
            </MyButton>
          </div>
        ))}
      </ul>
    </div>
  );
};
