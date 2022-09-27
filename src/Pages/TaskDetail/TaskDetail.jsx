import "./TaskDetail.css";
import { useState, useContext } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Grid, Textarea } from "@nextui-org/react";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { updateTask } from "../../api/api";
import TaskStatusSelect from "../../Components/TaskStatusSelect/TaskStatusSelect";
import { dates } from '../../utils/index'
import { dataHelpers } from '../../utils/index'
import { alerts } from "../../utils/index";
import { getUserFromName } from "../../api/api";
import AuthContext from "../../context/AuthContext";


export default function TaskDetail() {
  const {token} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation() || null;
  const { user, description, dbId, status, title, dueDate } = location.state;    
  const formattedDate = dates.getFormattedDate(dueDate) ;
  const minDate = dates.getFormattedDate(new Date(Date.now())) 

  
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


  const onSubmit = async (data) => {
    let newUser = false;
    if (dataHelpers.isChangedUser(data, user)) {
      console.log('line41')
      const urlPath = `http://localhost:4001/dashboard/users`;
      newUser = await getUserFromName(urlPath, data, token.token);
      console.log(newUser)
      if (newUser.userByName.length === 0) {
        Swal.fire(alerts.warningCreateUser);
        return;
      } 
    } 
    const task = dataHelpers.createUpdatedTask(data, newUser);
    console.log(task)
    updateTask(dbId, task)
    Swal.fire(alerts.updatedTaskSuccess);
    
    setTimeout(() => {
      navigate('/dashboard')
    }, 3000)
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
              placeholder={dueDate}
              min={minDate}
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
