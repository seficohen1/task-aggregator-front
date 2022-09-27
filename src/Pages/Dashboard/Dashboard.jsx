import { Container, Grid, Button } from "@nextui-org/react";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TaskContainer from "../../Components/TaskContainer/TaskContainer";
import "./Dashboard.css";
import TopMenu from "../../Components/TopMenu/TopMenu";
import UserDetail from "../UserDetail/UserDetail";
import { useNavigate } from 'react-router-dom';


const DashboardUser = () => {
  const [isTaskSelected, setIsTaskSelected] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <main className="container__dashboard">
        {/* <TopMenu /> */}
        <Grid.Container gap={2} justify="center">
          <Grid md={2}>
            {/* use sidebar component */}
            <Sidebar />
          </Grid>
          <Grid md={10}>
            <Container>
              {/* use task container component */}
              <Container className="taskmenu__container">
                <article className='taskmenu__article'>
                  <Button
                    size="sm"
                    onClick={() => setIsTaskSelected(true)}
                    className={
                      !isTaskSelected ? "taskmenu__btn" : "taskmenu__btn selected"
                    }
                  >
                    Task
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setIsTaskSelected(false)}
                    className={
                      isTaskSelected ? "taskmenu__btn" : "taskmenu__btn selected"
                    }
                  >
                    Employees
                  </Button>
                </article>
              <Button className='taskmenu__office--btn' size='xs'onClick={() => {navigate("admin")}}>OFFICE</Button>
              </Container>
              {isTaskSelected ? <TaskContainer /> : <UserDetail />}
              {/* <TaskContainer /> */}
            </Container>
          </Grid>
        </Grid.Container>
      </main>
    </>
  );
};

export default DashboardUser;
