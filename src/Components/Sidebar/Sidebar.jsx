import { Container } from "@nextui-org/react";

import { useState, useReducer, useEffect } from "react";
import uniqid from "uniqid";

import { taskReducer } from "../../reducer/taskReducer";
import "./Sidebar.css";

import { useFetch } from "../../customHooks/useFetch"; 

// console.log(useFetch)
const Sidebar = () => {
  // const tasks = useContext(TaskContext)
  const defaultState = []
  const [taskState, taskDispatch] = useReducer(taskReducer, defaultState);
  const taskDb = useFetch("http://localhost:4001/dashboard/tasks")
  
  useEffect(() => {
    taskDb.map((taskItem) => {
      taskDispatch({ type: 'ADD_TASK', payload: taskItem})
    })    
  }, [taskDb])
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log(taskState)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title && description) {
      const newTask = { id: uniqid(), title, description };
      taskDispatch({ type: "ADD_TASK", payload: newTask });
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
