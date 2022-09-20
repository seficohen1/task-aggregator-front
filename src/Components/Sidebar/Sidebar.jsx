import { Container } from "@nextui-org/react";
import React from "react";
import { useState, useReducer } from "react";
import uniqid from "uniqid";

import { taskReducer } from "../../reducer/taskReducer";
import "./Sidebar.css";

// Delete taskDb when backend works
import { taskDb } from "../../db/taskDb";

const Sidebar = () => {
  const defaultState = taskDb;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [state, dispatch] = useReducer(taskReducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      const newTask = { id: uniqid(), title, description };
      dispatch({ type: "ADD_TASK", payload: newTask });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Container className="container__sidebar">
      <section className="sidebar__btn--section">
        <article className="sidebar__btn--article">          
          <form className="" onSubmit={handleSubmit}>
            <div className="">
              <label className="title" htmlFor="title">
                Task title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="insert title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="">
              <label className="description" htmlFor="description">
                Task title:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="insert description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit">Add Task</button>
          </form>

          <button className="sidebar__task--btn">
            <i className="bx bx-task"></i> Task
          </button>
          <button className="sidebar__icon--btn">
            <i className="add__icon--btn bx bx-book-add"></i>
          </button>
        </article>
        <article className="sidebar__btn--article">
          <button className="sidebar__employee--btn">
            <i className=" bx bxs-user"></i> Employees
          </button>
          <button className="sidebar__icon--btn">
            <i className="add__icon--btn bx bxs-user-plus"></i>
          </button>
        </article>
      </section>
    </Container>
  );
};

export default Sidebar;
