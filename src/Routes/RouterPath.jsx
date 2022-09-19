import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardAdmin from "../Pages/DashboardAdmin/DashboardAdmin"
import DashboardUser from '../Pages/DashboardUser/DashboardUser'
import Login from "../Pages/Login/Login"


const RouterPath = () => {
  return (
    <Routes>

      <Route path='/' element={<Login/>} />
      <Route path='/dashboarduser' element={<DashboardUser/>} />
      {/* <Route path="/dashboarduser/:userId" element={} /> */}
      <Route path='/dashboardadmin' element={<DashboardAdmin/>} />
      {/* <Route path="/dashboardadmin/:userId" element={} /> */}

    </Routes>
  )
}

export default RouterPath