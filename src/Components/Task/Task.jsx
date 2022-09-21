import { Grid, Dropdown, Collapse, Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Task.css'


const Task = (props) => {
  const { id, title, assigned, status, date } = props;
  const [color, setColor] = useState()    
  const navigate = useNavigate();
 
  const handleEditClick = (taskObject) => {
    navigate('task', {state: props})
  }



  return (    
      <main className='container__task'>
        <Grid.Container className='container__grid' gap={2} justify='center'>
          <Grid className='task__grid' xs={5}>
            {title}
          </Grid>
          <Grid className='task__grid' xs={2}>
          <span className="task__username">{assigned}</span>
          </Grid>
          <Grid className='task__grid' xs={2}>
            <select className='task__select'>
              <option className='task__select--option' value="0">Status</option>
              <option className='task__select--option' value="1">Complete</option>
              <option className='task__select--option' value="2">Waiting</option>
              <option className='task__select--option' value="3">In process</option>
              <option className='task__select--option' value="4">Cancelled</option>
            </select>
          </Grid>
          <Grid className='task__grid' xs={3}>
            {date}
            <Dropdown className='task__dropdown'>
              <Dropdown.Button color='secondary' light>
              <i className='dropdown__icon bx bx-dots-horizontal-rounded'></i>
              </Dropdown.Button>
              <Dropdown.Menu
                color='secondary'
                variant='light'
                aria-label='Actions'
              >
                
                <Dropdown.Item key='edit' textValue='edit task'><Button type="button" onPress={handleEditClick}>Edit</Button></Dropdown.Item>
                
                <Dropdown.Item key='delete' color='error'>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </main>
  )
}

export default Task