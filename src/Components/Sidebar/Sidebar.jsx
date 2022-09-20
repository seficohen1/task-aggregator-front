import { Container } from '@nextui-org/react'
import React from 'react'
import './Sidebar.css'


const Sidebar = () => {
  return (
    <Container className='container__sidebar'>
      <section className="sidebar__btn--section">
        <article className='sidebar__btn--article'>
          <button className='sidebar__task--btn'><i className='bx bx-task' ></i> Task</button>
          <button className='sidebar__icon--btn'><i className='add__icon--btn bx bx-book-add' ></i></button>
        </article>
        <article className='sidebar__btn--article'>
          <button className='sidebar__employee--btn'><i className=' bx bxs-user'></i> Employees</button>
          <button className='sidebar__icon--btn'><i className='add__icon--btn bx bxs-user-plus' ></i></button>
        </article>
      </section>
    </Container>
  )
}

export default Sidebar