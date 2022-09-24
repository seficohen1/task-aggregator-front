import { useLocation } from "react-router-dom"
import { Button, Input, Grid, Textarea } from '@nextui-org/react';
import './TaskDetail.css'
import { useForm } from 'react-hook-form';
import { updateTask } from "../../api/api";
import { useState } from 'react'


export default function TaskDetail() {
  const location = useLocation() || null;
  const { register, handleSubmit } = useForm();
  const { firstName, lastName, description, _id, status, title, startDate, dueDate } = location.state ;
  const [data, setData ] = useState([]);

  const onSubmit = data => console.log(data);
  console.log(location.state.firstName)

  return (
    <>
      <Grid.Container className='task__container'>
        <form className='task__form' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='task__title'>TASK DETAILS</h2>
          <article>
            <Input 
              className='task__input wide '
              label='Task:'
              type='text'
              value={title && title}
              {...register('task-title')}
             />
          </article>          
          <article>
            <Input
                className='task__input'
                label='First Name'
                type='text'
                value={firstName && firstName}
                {...register('task-firstName')}
            />
            <Input
                className='task__input'
                label='Last Name'
                type='text'
                value={lastName && lastName}
                {...register('task-lastName')}
            />
          </article>
          <article>
              <Textarea
                className='task__input wide'
                label='Description:'
                type='text'
                value={description && description}
                {...register('task-description')}
              />
            </article>
            <article>
              <Input
                  className='task__input'
                  label='Start Date'
                  type='date'
                  value={startDate && startDate}
                  {...register('start-date')}
                />
              <Input
                className='task__input'
                label='Due Date'
                type='date'
                value={dueDate && dueDate}
                {...register('due-date')}
              />

            </article>
            <article>
            <Input
                className='task__input'
                label='Status'
                type='text'
                value={status && status}
                {...register('status')}
            />
            </article>
      <Button className='task__btn' type='submit'>Edit Task</Button>
        </form>
      </Grid.Container>
    </>
  )
}



export { TaskDetail }