import { useLocation } from "react-router-dom"
import TopMenu from '../../Components/TopMenu/TopMenu'
import { Button, Input, Grid, Textarea } from '@nextui-org/react';
import './TaskDetail.css'
import { useForm } from 'react-hook-form';


export default function TaskDetail() {
  const location = useLocation();
  const { assigned, description, id, date, status, title } = location.state;

  const handleSubmit = () => {
    console.log('hello')
  }



  return (
    <>
      <Grid.Container className='task__container'>
        <form className='task__form' onSubmit={handleSubmit()}>
          <h2 className='task__title'>TASK DETAILS</h2>
          <article>
            <Input 
              className='task__input wide '
              label='Task:'
              type='text'
              value={title}
              // {...register('name')}
             />
          </article>          
          <article>
            <Input
                className='task__input'
                label='First Name'
                type='text'
                // value={user.firstName}
            />
            <Input
                className='task__input'
                label='Last Name'
                type='text'
                // value={user.lastName}
            />
          </article>
          <article>
              <Textarea
                className='task__input wide'
                label='Description:'
                type='text'
                value={description}
                // {...register('name')}
              />
            </article>
            <article>
              <Input
                  className='task__input'
                  label='Start Date'
                  type='date'
                  value={assigned.startDate}
                />
              <Input
                className='task__input'
                label='Due Date'
                type='date'
                value={assigned.dueDate}
              />

            </article>
            <article>
            <Input
                className='task__input'
                label='Status'
                type='text'
                value={assigned.status}
            />
            </article>
      <Button className='task__btn' type='submit'>Edit Task</Button>
        </form>
      </Grid.Container>
    </>
  )
}



export { TaskDetail }