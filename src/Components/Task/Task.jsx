import { Grid, Dropdown, Collapse, Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Task.css'
import { updateTask } from '../../api/api'
import { setStatusDropdownColors } from '../../utils/styles'


const Task = (props) => {
  const { dbId, title, user, dueDate } = props;
  // set status to update dropdown value
  const [currentStatus, setCurrentStatus] = useState({ status: 'none' })

  // load status value on render
  useEffect(() => {
    setCurrentStatus({ status: props.status })
  }, [])

  // update db and state with status changes
  function handleChange (e) {
    setCurrentStatus({ status: e.target.value })
    const body = {
      status: e.target.value
    }
    updateTask(dbId, body)
  }

  // set and maintain bg color on state changes, imported from utils
  const dropdownBackgroundColor = setStatusDropdownColors(currentStatus.status)
  
  return (
      <main className='container__task'>
        <Grid.Container className='container__grid' gap={2} justify='center'>
          <Grid className='task__grid' xs={5}>
            {title}
          </Grid>
          <Grid className='task__grid' xs={2}>
          <span className="task__username">{user.firstName} {user.lastName}</span>
          </Grid>
          <Grid className='task__grid' xs={2}>
            {/* set value to selected to match values with state option */}
            <select className='task__select' style={dropdownBackgroundColor} value={currentStatus.status} onChange={handleChange}>
              <option className='task__select--option' value="none">Status</option>
              <option className='task__select--option' value="complete">Complete</option>
              <option className='task__select--option' value="pending">Pending</option>
              <option className='task__select--option' value="in progress">In Progress</option>
              <option className='task__select--option' value="cancelled">Cancelled</option>
            </select>
          </Grid>
          <Grid className='task__grid' xs={3}>
            {dueDate}
            <Dropdown className='task__dropdown'>
              <Dropdown.Button color='secondary' light>
              <i className='dropdown__icon bx bx-dots-horizontal-rounded'></i>
              </Dropdown.Button>
              <Dropdown.Menu
                color='secondary'
                variant='light'
                aria-label='Actions'
              >
                <Dropdown.Item key='edit' textValue='edit task'>
                  <Link to='/dashboard/task' state={ props }>Edit</Link>
                </Dropdown.Item>
                <Dropdown.Item key='delete' color='error'>Delete</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </main>
  )
}

export default Task