import React, { useContext, useState, useEffect } from 'react';
import './Employee.css'
import { Grid,  Modal, Button, Text, Input, Row, Checkbox } from '@nextui-org/react';
import AuthContext from '../../context/AuthContext';


import UserModal from '../UserModal/UserModal';

const Employee = ({firstName, lastName, email, role, id}) => {
  const {user} = useContext(AuthContext)
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)
  const closeHandle = () => setVisible(false)


  return (
      <Grid.Container className='employee__container' gap={2} justify="space-between" >
      <Grid xs={2} >{firstName}</Grid>
      <Grid xs={2} >{lastName}</Grid>
      <Grid xs={2}>{email}</Grid>
      <Grid xs={1}>{role}</Grid>

      {(user?.role === "admin" || user._id === id) && <Grid xs={1}>

      <Button  onPress={handler} onClose={closeHandle}>  <i className='dropdown__icon bx bx-dots-horizontal-rounded'></i></Button>
      <UserModal visible={visible} closeHandler={closeHandle} firstName={firstName} lastName={lastName} email={email} role={role} id={id}/>
      </Grid>}
      </Grid.Container>

  );
};

export default Employee;



