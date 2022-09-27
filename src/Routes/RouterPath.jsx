import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TaskDetail from "../Pages/TaskDetail/TaskDetail";
import Login from "../Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedAdmin from "./ProtectedAdmin";
import TopMenu from '../Components/TopMenu/TopMenu';

const RouterPath = () => {
  return (
    <Routes>
      <Route path='/' element={<TopMenu />} >
        <Route index element={<Login />} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="admin" element={<ProtectedAdmin><Admin /></ProtectedAdmin>} />
        <Route path="task" element={<ProtectedRoute><TaskDetail /></ProtectedRoute>} />
          {/* <Route path="dashboard/:userId" element={<UserDetail />} /> */}
      </Route>
    </Routes>
  );
};

export default RouterPath;
