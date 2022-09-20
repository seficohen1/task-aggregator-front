import { Container, Grid } from '@nextui-org/react'
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './DashboardUser.css'

const DashboardUser = () => {
  return (
    <>
    <main className="container__dashboard">
      <Grid.Container gap={2} justify='center'>
        <Grid md={2}>
          <Sidebar />
        </Grid>
        <Grid md={10}>
          <Container>hola</Container>
        </Grid>
      </Grid.Container>
    </main>
    </>
  )
}

export default DashboardUser