import React from "react";
import { Button, Container, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
// import {dates} from "../../../utils/index"
import axios from "axios";
import uniqid from "uniqid";

// import TaskStatusSelect from "../../TaskStatusSelect/TaskStatusSelect";
import "./RegisterTask.css";

const RegisterTask = () => {
  
  const navigate = useNavigate();


  const [task, setTask] = useState({
    title: "",
    description: "",
    firstName: "",
    lastName: "",    
    date: "",
    status: ""
  });

    const handleChange = (e) => {
      // console.log(e.target)
  	// e.preventDefault()
      const { name, value } = e.target;
  	// console.log(value)
      setTask((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    };

  console.log(task);

  const createTask = (e) => {
    e.preventDefault();
    console.log("Add task!");
    console.log(task);

	const taskPost = {
		title: task.title,
		description: task.description,
		// user: {
		// firstName: task.firstName,
		// lastName: task.lastName,
		// },
		// date: task.date,
		// status: ""
	}

	console.log(taskPost)

    axios
      .post("http://localhost:4001/dashboard/tasks", taskPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/dashboard");
    window.location.reload();
  };
 	


  

  return (
    <main className="registertask__container">
      <form className="registertask__form">
        <h2 className="task__title">NEW TASK</h2>


        
        <Input
          className="registertask__input"
          label="Title"
          type="text"
          id="title"
          name="title"
          value={task.title}
          onChange={handleChange}
        />
        <Input
          className="registertask__input"
          label="Description"
          type="text"
          id="description"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
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
        <Input
          className="registertask__input"
          label="Date"
          type="date"
          id="date"
          name="date"
          value={task.date}
          onChange={handleChange}
        />

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
