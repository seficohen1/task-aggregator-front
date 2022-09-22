import { Container } from "@nextui-org/react";
// import React, { useContext } from "react";
import { useState, useReducer, useEffect } from "react";
import uniqid from "uniqid";
// import { taskReducer } from "../../reducer/taskReducer";
import "./Sidebar.css";

// Delete taskDb when backend works
import { taskDb } from "../../db/taskDb";
import { useFetch } from "../../customHooks/useFetch";


const Sidebar = () => { 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");  
  const [user, setUser] = useState("")
  const [date, setDate] = useState("")

  const [tasks, setTasks] = useState([]);

  // const url = "http://localhost:4001/dashboard/tasks";
  // const getTasks = async () => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setTasks(data.results);
  // };
  // useEffect(() => {
  //   getTasks();
  // }, []);  

  console.log(tasks);  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {      
      const taskInfo = { id: uniqid(), title, description, user, date };      
      setTasks([...tasks, taskInfo])
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
                placeholder="Insert title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="">
              <label className="description" htmlFor="description">
                Task description:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Insert description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="">
              <label className="description" htmlFor="description">
                User:
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Insert description"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>


            <div className="">
              <div>
                <label className="description" htmlFor="description">
                Date:
                </label>
              </div>
              <input
                type="date"
                id="description"
                name="description"
                placeholder="Insert date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
