import { Grid, Dropdown, Collapse, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import "./Task.css";
import { deleteTask } from "../../api/api";
import TaskStatusSelect from "../TaskStatusSelect/TaskStatusSelect";
import { dates, alerts } from "../../utils/index";
import Swal from "sweetalert2";

const Task = (props) => {
  const { dbId, user, title, status } = props;
  // format date for dashboard, using func from utils
  // console.log("user", user.firstName)
  const navigate = useNavigate();
  const dueDate = dates.getLongDate(props.dueDate);

  

  return (
    <main className="container__task">
      <Grid.Container className="container__grid" gap={2} justify="center">
        <Grid className="task__grid" xs={5}>
          {title}
        </Grid>
        <Grid className="task__grid" xs={2}>
          <span className="task__username">
            {user?.firstName} {user?.lastName}
          </span>
        </Grid>
        <Grid className="task__grid" xs={2}>
          {/* set value to selected to match values with state option */}
          <TaskStatusSelect dbId={dbId} status={status} user={user} />
        </Grid>
        <Grid className="task__grid" xs={3}>
          {dueDate}
          <Dropdown className="task__dropdown">
            <Dropdown.Button className="edit_emp" color="secondary" light>
              <i className="dropdown__icon bx bx-dots-horizontal-rounded"></i>
            </Dropdown.Button>
            <Dropdown.Menu
              color="secondary"
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="edit" textValue="edit task">
                <Button onClick={() => {
                  navigate('/task', { state: props})
                // to='/task' state={props}>
                }}>
                Edit
                </Button>
              </Dropdown.Item>
              <Dropdown.Item key="delete" color="error">
                <Button onClick={() => {
                  Swal.fire(alerts.confirmAlert).then((result)=> {
                    if (result.isConfirmed) {
                      deleteTask(dbId)
                      Swal.fire(alerts.taskDeleted)
                    }
                  })
            }}>Delete</Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
    </main>
  );
};

export default Task;
