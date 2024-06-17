import React, { useState, useEffect } from "react";
import List from "./components/List";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function getLocalStorage() {
  let items = localStorage.getItem("items");

  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
}

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!text) {
      toast.error("There is no text in the input");
    } else {
      const newItem = {
        text,
        id: new Date().getTime().toString(),
      };
      setItems([newItem, ...items]);
      setText("");
      setIsEditing(false);
      toast.success("New item added");
    }
  }

  // Edit function
  function handleEdit(id) {
    setIsEditing(true);

    const editingItem = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setText(editingItem.text);
    toast.info("Editing item");
  }

  // Delete function
  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
    alert("Do you really want to delete this item?");
    toast.info("Item deleted");
  }

  function handleClearList() {
    setItems([]);
    alert("Do you really want to clear your todo list?");
    toast.info("List cleared!");
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div>
      <ToastContainer theme="colored" />
      <div className="container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="todo-item">Add a todo item</label>
            <input
              type="text"
              name="todo-item"
              id="todo-item"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* {isEditing ? (
            <button type="submit" onClick={handleSubmit}>
              Add Edited Item
            </button>
          ) : (
            <button type="submit" onClick={handleSubmit}>
              + Add Todo item
            </button>
          )} */}
          <button type="submit" onClick={handleSubmit}>
            {isEditing ? "Add Edited Item" : "+ Add Todo Item"}
          </button>
        </form>

        <button onClick={handleClearList}>Clear List</button>

        <List
          items={items}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}
