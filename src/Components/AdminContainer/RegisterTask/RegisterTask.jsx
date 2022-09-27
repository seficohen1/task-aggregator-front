import React from "react";
import { Button, Container, Input, Textarea } from "@nextui-org/react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { dates, alerts, dataHelpers } from "../../../utils/index";
import axios from "axios";
import uniqid from "uniqid";
import AuthContext from '../../../context/AuthContext';

// import TaskStatusSelect from "../../TaskStatusSelect/TaskStatusSelect";
import "./RegisterTask.css";
import { getUserFromName, createNewTask } from "../../../api/api";

const RegisterTask = () => {
  const navigate = useNavigate();
  const minDate = dates.getFormattedDate(new Date(Date.now())) 
  
  const { token } = useContext(AuthContext)

  const [task, setTask] = useState({
    title: "",
    description: "",
    firstName: "",
    lastName: "",
    date: "",
    status: "",
  });

  const handleChange = (e) => {    
    // e.preventDefault()
    const { name, value } = e.target;    
    setTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createTask = async (e) => {
    // e.preventDefault();
    const urlPath = "http://localhost:4001/dashboard/users";
    const user = await getUserFromName(urlPath, task, token.token);
    console.log(user);

    if (user.userByName.length === 0) {
      return Swal.fire(alerts.warningCreateUser);
    } 

	const taskPost = dataHelpers.createUpdatedTask(task, user) 
	console.log("taskPost", taskPost)

	createNewTask(taskPost)
  };

  return (
    <main className="registertask__container">
      <form className="registertask__form">
        <h2 className="task__title">NEW TASK</h2>
        <article className='register__task--article'>
          <Input
            className="registertask__input wide"
            label="Title"
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
          />
        </article>
        <article className='register__task--article'>
          <Input
            className="registertask__input"
            label="First name"
            type="text"
            id="firstName"
            name="firstName"
            value={task.firstName}
            onChange={handleChange}
          />
          <Input
            className="registertask__input"
            label="Last name"
            type="text"
            id="lastName"
            name="lastName"
            value={task.lastName}
            onChange={handleChange}
          />
        </article>
        <article className="register__task--article">
          <Textarea
            className="registertask__input wide"
            label="Description"
            type="text"
            id="description"
            name="description"
            value={task.description}
            onChange={handleChange}
          />
        </article>
        <article className="register__task--article">
          <Input
            className="registertask__input"
            label="Date"
            type="date"
            id="date"
            name="date"
            placeholder={minDate}
            min={minDate}
            value={task.date}
            onChange={handleChange}
          />
        </article>

        {/* <TaskStatusSelect dbId={dbId} status={status} user={user} /> */}
        {/* <TaskStatusSelect /> */}

        <button
          className="registertask__btn"
          type="submit"
          onClick={createTask}
        >
          Add Task
        </button>
      </form>
    </main>
  );
};

export default RegisterTask;
