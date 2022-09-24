import React, {useState, useMemo, useContext} from 'react';
import './UpdateUserForm.css'
import {Input, Button, Dropdown, Grid } from '@nextui-org/react'
import AuthContext from '../../context/AuthContext';
import axios from 'axios'

const UpdateUserForm = ({id, firstName, lastName, email, role}) => {
  const {user} = useContext(AuthContext)
  const [selected, setSelected] = useState(new Set(["User"]));
  const [formValues, setFormValues] = useState({firstName, lastName, email})
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
   const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormValues({...formValues, [name]: value})
   }

   const handleSubmit = (e) => {
     e.preventDefault()
     const {firstName, lastName, email} = formValues
     
    axios({
      method: 'patch',
      url: `http://localhost:4001/dashboard/users/${id}`,
      data: {
        firstName,
        lastName,
        email,
        role: role === 'undefined' ? 'user' : selected.currentKey
      }
    }).then(res => console.log(res))
    window.location.reload();


   }
  
  return (
    <>
      <form onSubmit={handleSubmit} >
      <Grid.Container>
      <Grid className='update-from-field'>
          <Input label='First Name' name="firstName" onChange={handleChange} placeholder={firstName}/>
        </Grid>
        <Grid className='update-from-field'>
          <Input  label='Last Name' name="lastName" onChange={handleChange} placeholder={lastName}/> 
        </Grid>
        <Grid className='update-from-field'>
          <Input label='email' name="email"  onChange={handleChange} placeholder={email}/>  
        </Grid>
        {user.role === 'admin' && (
          <Grid>
          <Dropdown>
          <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
            {selectedValue}
          </Dropdown.Button>
          <Dropdown.Menu
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          >
            <Dropdown.Item key="user">User</Dropdown.Item>
            <Dropdown.Item key="admin">Admin</Dropdown.Item>
          </Dropdown.Menu>
          </Dropdown>
        </Grid>
        )}
        <Button className='update-from-field' type="submit" value={`I'm done`}>I'm Done</Button>   
      </Grid.Container>
      </form>
    </>
 );
};

export default UpdateUserForm;