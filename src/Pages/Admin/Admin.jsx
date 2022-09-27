import { Container, Grid } from '@nextui-org/react'
import React from 'react'
import AdminContainer from '../../Components/AdminContainer/AdminContainer'
import Sidebar from '../../Components/Sidebar/Sidebar'


function Admin() {
  return (
    <>
    <main className='container__dashboard'>
      <Grid.Container gap={2} justify='center'>
        <Grid md={2}>
          {/* use sidebar component */}
          <Sidebar />
        </Grid>
        <Grid md={10}>
          <Container>
            {/* use admin container component  */}
            <AdminContainer />
          </Container>
        </Grid>
      </Grid.Container>
    </main>
  </>
  )
}

export default Admin