import React from "react";
import { Button, Container, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import uniqid from "uniqid";
import "./RegisterTask.css";

const RegisterTask = () => {
  // const [title, setTitle] = useState('');
  // const [description, setDescription] = useState('');
  // const [user, setUser] = useState('');
  // const [date, setDate] = useState('');

  // const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const [task, setTask] = useState({});

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value } = e.target;
    setTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(task);

  const createTask = (e) => {
    // e.preventDefault()
    console.log("Add task!");

    axios
      .post("http://localhost:4001/dashboard/tasks", task)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/dashboard");
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
        {/* <Input
          className='registertask__input'
						label='First name'
						type='text'
						id='user'
						name='user'
						value={task.user.firstName}
						onChange={handleChange}
					/> */}
        {/* <Input
          className='registertask__input'
						label='Last name'
						type='text'
						id='user'
						name='user'
						value={task.user.lastName}
						onChange={handleChange}
					/> */}

        {/* <Input
          className='registertask__input'
						label='Date'
						type='date'
						id='date'
						name='date'
						value={task.date}
						onChange={handleChange}
					/> */}
        <Button
          className="registertask__btn"
          type="submit"
          onClick={createTask}
        >
          Add Task
        </Button>
      </form>
    </main>
  );
};

export default RegisterTask;
