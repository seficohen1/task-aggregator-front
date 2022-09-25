import { useLocation } from "react-router-dom";
import { Button, Input, Grid, Textarea } from "@nextui-org/react";
import "./TaskDetail.css";
import { useForm } from "react-hook-form";
import { updateTask } from "../../api/api";
import { useState } from "react";
import TaskStatusSelect from "../../Components/TaskStatusSelect/TaskStatusSelect";

export default function TaskDetail() {
  const location = useLocation() || null;
  const { register, handleSubmit } = useForm();
  const { user, description, dbId, status, title, startDate, dueDate } =
    location.state;
  const [data, setData] = useState([]);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Grid.Container className="task__container">
        <form className="task__form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="task__title">TASK DETAILS</h2>
          <article>
            <Input
              className="task__input wide "
              label="Task:"
              type="text"
              value={title && title}
              {...register("task-title")}
            />
          </article>
          <article>
            <Input
              className="task__input"
              label="First Name"
              type="text"
              value={user.firstName && user.firstName}
              {...register("task-firstName")}
            />
            <Input
              className="task__input"
              label="Last Name"
              type="text"
              value={user.lastName && user.lastName}
              {...register("task-lastName")}
            />
          </article>
          <article>
            <Textarea
              className="task__input wide"
              label="Description:"
              type="text"
              value={description && description}
              {...register("task-description")}
            />
          </article>
          <article>
            <Input
              className="task__input"
              label="Start Date"
              type="date"
              value={startDate && startDate}
              {...register("start-date")}
            />
            <Input
              className="task__input"
              label="Due Date"
              type="date"
              value={dueDate && dueDate}
              {...register("due-date")}
            />
          </article>
          <article>
            {/* set value to selected to match values with state option */}
            <TaskStatusSelect status={status} user={user} />
          </article>
          <Button className="task__btn" type="submit">
            Edit Task
          </Button>
        </form>
      </Grid.Container>
    </>
  );
}

export { TaskDetail };
