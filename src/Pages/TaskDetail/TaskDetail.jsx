import "./TaskDetail.css";
import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { Button, Input, Grid, Textarea } from "@nextui-org/react";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { updateTask } from "../../api/api";
import TaskStatusSelect from "../../Components/TaskStatusSelect/TaskStatusSelect";
import { dates } from '../../utils/index'
import { dataHelpers } from '../../utils/data'
import { alerts } from "../../utils/index";


export default function TaskDetail() {
  
  const location = useLocation() || null;
  const { user, description, dbId, status, title, dueDate } = location.state;    
  const formattedDate = dates.getFormattedDate(dueDate)  
console.log(location.state)
  const [newUser, setNewUser] = useState([]);
  
  const createUpdatedTask = (data, newUser) => {
    let updatedTask = {
      title: data.title,
      description: data.description,
      status: data.status,
      dueDate: data.dueDate,    
    }
    const updatedUserId = { _id: newUser.userByName[0]._id } || null;
    if (updatedUserId) updatedTask.user = updatedUserId;
    return updatedTask;
}


  const { 
    register, 
    handleSubmit, 
    formState: { errors } } = useForm( {defaultValues: {
      title: title,
      description: description,
      status: status,
      firstName: user.firstName,
      lastName: user.lastName,
      dueDate: formattedDate,
  }});


  const onSubmit = (data) => {
    if (dataHelpers.isChangedUser(user, data)) {
      dataHelpers.checkForUserInDb(data, setNewUser)
    }
    const updatedTask = createUpdatedTask(data, newUser)    
    updateTask(dbId, updatedTask)
    console.log('Updated user from form has been submitted')
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
              {...register("title", {
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
            <Button className="task__btn" type="button" onPress={() => navigate(-1)}>Back</Button>
            <Button className="task__btn" type="submit">Save</Button>
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
