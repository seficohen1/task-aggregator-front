import React from 'react'
import RegisterUser from './RegisterUser/RegisterUser'
import './AdminContainer.css'


const AdminContainer = () => {
  return (
    <>
      <main className="admincontainer__main">
        <RegisterUser />
      </main>
    </>
  )
}

export default AdminContainer