import "./TaskDetail.css";
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Input, Grid, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { updateTask } from "../../api/api";
import TaskStatusSelect from "../../Components/TaskStatusSelect/TaskStatusSelect";
import { dates } from '../../utils/index'
import { dataHelpers } from '../../utils/data'

export default function TaskDetail() {
  const location = useLocation() || null;
  const { user, description, dbId, status, title, dueDate } = location.state;    
  const formattedDate = dates.getFormattedDate(dueDate)  

  const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();
  const [existingUser, setExistingUser] = useState([]);
  const [updatedTask, setUpdatedTask] = useState({})
  const [data, setData] = useState();
  
  
const createUpdatedTask = (data) => {
  let updatedTask = {
    title: data.taskTitle,
    description: data.description,
    status: data.status,
    dueDate: data.dueDate,    
  }

  if (dataHelpers.checkForUser(data, user, setExistingUser) === true) {
    console.log(existingUser)
    const updatedUserId = { _id: existingUser.userByName[0]._id };
    updatedTask.user = updatedUserId;
  }
  return updatedTask;
}

  const onSubmit = (data) => {
    const task = createUpdatedTask(data)
    updateTask(dbId, task)
  }
   
  
  return (
    <>
      <Grid.Container className="task__container">
        <form className="task__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="task__title">TASK DETAILS</h2>
          <article className="task__article">
            <Input
              className="task__input wide "
              label="Task:"
              type="text"
              placeholder="Task Title"
              value={title && title}
              {...register("taskTitle", {
                required: 'Task name is required'
              }) }
            />
          </article>
          <article className="task__article">
            <Input
              className="task__input"
              label="First Name"
              type="text"
              placeholder="First Name"
              value={user.firstName && user.firstName}
              {...register("firstName", {
                required: 'First name is required'
              }) }  
              // readOnly
            />
            <Input
              className="task__input"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              value={user.lastName && user.lastName}
              {...register("lastName", {
                required: 'Last name is required'
              }) }  
              // readOnly           
            />
          </article>
          <article className="task__article">
            <Textarea
              className="task__input wide"
              label="Description:"
              type="text"
              placeholder="Task Description"
              value={description && description}
              {...register("description", {
                required: 'Task description is required'
              }) }              
            />
          </article>
          <article className="task__article">            
            <Input
              className="task__input"
              label="Due Date"
              type="date"
              placeholder={Date()}
              value={formattedDate && formattedDate}
              min={Date()}
              max="2022-12-31"
              {...register("dueDate", {
                required: 'Due date is required', 
                valueAsDate: true,
              }) }
            />
            {/* set value to selected to match values with state option */}
            <TaskStatusSelect dbId={dbId} status={status} user={user} />
          </article>
          <article className="task__article">
          <Button className="task__btn" type="submit">Edit Task</Button>
          </article>
          <article className="task__article errors">
            {errors.taskTitle && <div>{errors.taskTitle.message}</div>}
            {errors.firstName && <div>{errors.firstName.message}</div>}
            {errors.lastName && <div>{errors.lastName.message}</div>}
            {errors.description && <div>{errors.description.message}</div>}
            {errors.dueDate && <div>{errors.dueDate.message}</div>}
          </article>
        </form>
      </Grid.Container>
    </>
  );
}

export { TaskDetail };
