import "./TaskDetail.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input, Grid, Textarea } from "@nextui-org/react";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { updateTask } from "../../api/api";
import TaskStatusSelect from "../../Components/TaskStatusSelect/TaskStatusSelect";
import { dates } from '../../utils/index'
import { alerts } from "../../utils/index";


export default function TaskDetail() {
  
  const location = useLocation() || null;
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { user, description, dbId, status, title, dueDate } = location.state;    
  const formattedDate = dates.getFormattedDate(dueDate)  

  const onSubmit = (data) => {
    const updatedTask = {
      title: data.taskTitle,
      description: data.description,
      status: data.status,
      dueDate: data.dueDate,
    }
    Swal.fire(alerts.updatedTaskConfirmAlert).then(result => {
      if (result.isConfirmed) {
        updateTask(dbId, updatedTask);
        Swal.fire(alerts.updatedTaskSuccess);
        setTimeout(() => {
          navigate(-1)
        }, 2000);
      }
    })
    
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
              readOnly
            />
            <Input
              className="task__input"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              value={user.lastName && user.lastName}
              readOnly           
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
