import { Button, Container } from '@nextui-org/react'
import React from 'react'
import './TaskMenu.css'

const TaskMenu = () => {
  return (
    <Container className='taskmenu__container'>
      <Button size='sm' className='taskmenu__btn'>Task</Button>
      <Button size='sm' className='taskmenu__btn'>Employees</Button>
    </Container>
  )
}

export default TaskMenu