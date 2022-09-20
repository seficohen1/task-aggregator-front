import { Container, Grid } from '@nextui-org/react'
import './TaskBar.css'

const TaskBar = () => {
  return (
    <Container className='container__taskbar'>
    <Grid.Container className='taskbar__grid' gap={2} justify='center'>
      <Grid className='taskbar__item' xs={5}>
        <p>Title</p>
      </Grid>
      <Grid xs={2}>
        Assigned to
      </Grid>
      <Grid xs={2}>
        Status
      </Grid>
      <Grid xs={3}>
        Due date
      </Grid>
    </Grid.Container>
  </Container>
  )
}

export default TaskBar