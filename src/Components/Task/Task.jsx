import { Grid, Dropdown, Collapse, Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import "./Task.css";
import TaskStatusSelect from "../TaskStatusSelect/TaskStatusSelect";
import { dates } from "../../utils/index";

const Task = (props) => {
  const { dbId, user, title, status } = props;
  // format date for dashboard, using func from utils
  const dueDate = dates.getLongDate(props.dueDate);
  
  return (
    <main className="container__task">
      <Grid.Container className="container__grid" gap={2} justify="center">
        <Grid className="task__grid" xs={5}>
          {title}
        </Grid>
        <Grid className="task__grid" xs={2}>
          <span className="task__username">
            {user.firstName} {user.lastName}
          </span>
        </Grid>
        <Grid className="task__grid" xs={2}>
          {/* set value to selected to match values with state option */}
          <TaskStatusSelect dbId={dbId} status={status} user={user} />
        </Grid>
        <Grid className="task__grid" xs={3}>
          {dueDate}
          <Dropdown className="task__dropdown">
            <Dropdown.Button color="secondary" light>
              <i className="dropdown__icon bx bx-dots-horizontal-rounded"></i>
            </Dropdown.Button>
            <Dropdown.Menu
              color="secondary"
              variant="light"
              aria-label="Actions"
            >
              <Dropdown.Item key="edit" textValue="edit task">
                <Link to="dashboard/task" state={props}>
                  Edit
                </Link>
              </Dropdown.Item>
              <Dropdown.Item key="delete" color="error">
                Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Grid>
      </Grid.Container>
    </main>
  );
};

export default Task;
