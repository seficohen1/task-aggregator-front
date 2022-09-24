import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
import './UserDetail.css'

import UserBar from '../../Components/UserBar/UserBar'
import Employee from '../../Components/Employee/Employee'





function UserDetail() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4001/dashboard/users').then(data => {
      setEmployees(data.data.results)
    })
  }, [])


  return (
    <>
     <UserBar></UserBar>
      {employees.map(({firstName, lastName, email, role, _id: id}) => {
       return <Employee key={id} firstName={firstName} lastName={lastName} email={email} role={role} id={id}/>
      })}
    </>

  )


}

export default UserDetail