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
    dueDate: "",
    status: "",
  });

  const handleChange = (e) => {    
    const { name, value } = e.target;    
    setTask((prev) => {
      return {
          ...prev,
          [name]: value,
      };
    });
  };

  const createTask = async (e) => {
    e.preventDefault();
    const urlPath = "http://localhost:4001/dashboard/users";
    const user = await getUserFromName(urlPath, task, token.token);

    if (user.userByName.length === 0) {
      return Swal.fire(alerts.warningCreateUser);
    } 
    const taskPost = dataHelpers.createUpdatedTask(task, user) 
    console.log(taskPost)

    createNewTask(taskPost)
    Swal.fire(alerts.taskCreated);

    setTimeout(() => {
      navigate('/dashboard')
      
    }, 3000)
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
            name="dueDate"
            placeholder={minDate}
            min={minDate}
            value={minDate || task.dueDate}
            onChange={handleChange}
          />
        </article>        

        <button
          className="registertask__btn"
          type="submit"
          onClick={createTask}
        >
          Add Task
        </button>

        <button
          className="registertask__btn"
          type="submit" 
          onClick={() => navigate('/dashboard')}
        >
          Dashboard
        </button>
      </form>
    </main>
  );
};

export default RegisterTask;
