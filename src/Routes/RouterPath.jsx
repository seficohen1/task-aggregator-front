import React from "react";
import { Route, Routes } from "react-router-dom";
import TopMenu from "../Components/TopMenu/TopMenu";
import Admin from "../Pages/Admin/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TaskDetail from "../Pages/TaskDetail/TaskDetail";
import UserDetail from "../Pages/UserDetail/UserDetail";
import Login from "../Pages/Login/Login";
import Sidebar from "../Components/Sidebar/Sidebar";

const RouterPath = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="admin" element={<Admin />} />
        <Route path="dashboard/task" element={<TaskDetail />} />
      </Route>
    </Routes>
  );
};

export default RouterPath;
