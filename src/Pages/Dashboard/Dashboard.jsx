import { Container, Grid, Button } from "@nextui-org/react";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import TaskContainer from "../../Components/TaskContainer/TaskContainer";
import "./Dashboard.css";
import TopMenu from "../../Components/TopMenu/TopMenu";
import UserDetail from "../UserDetail/UserDetail";

const DashboardUser = () => {
  const [isTaskSelected, setIsTaskSelected] = useState(true);
  return (
    <>
      <main className="container__dashboard">
        <TopMenu />
        <Grid.Container gap={2} justify="center">
          <Grid md={2}>
            {/* use sidebar component */}
            <Sidebar />
          </Grid>
          <Grid md={10}>
            <Container>
              {/* use task container component */}
              <Container className="taskmenu__container">
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
