import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardAdmin from '../assets/Pages/DashboardAdmin/DashboardAdmin'
import DashboardUser from '../assets/Pages/DashboardUser/DashboardUser'
import Login from '../assets/Pages/Login/Login'


const RouterPath = () => {
  return (
    <Routes>

      <Route path='/' element={<Login/>} />
      <Route path='/dashboarduser' element={<DashboardUser/>} />
      <Route path='/dashboardadmin' element={<DashboardAdmin/>} />

    </Routes>
  )
}

export default RouterPath