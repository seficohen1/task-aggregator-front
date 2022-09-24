import React from 'react';
import './UserBar.css'
import { Container, Grid } from '@nextui-org/react'

const UserBar = () => {
  return (

      <Grid.Container className='container__employees' gap={2} justify='space-between'>
        <Grid xs={2}>First name</Grid>
        <Grid  xs={2}>Last name</Grid>
        <Grid  xs={2}>Email</Grid>
        <Grid  xs={2}>Role</Grid>
      </Grid.Container>
 

  );
};

export default UserBar;