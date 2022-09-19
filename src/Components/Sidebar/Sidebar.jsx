import React from 'react'

const Sidebar = () => {
  return (
    <main>
      <article>
        <button><i className='bx bx-task' ></i> Task</button>
        <button><i className='bx bx-book-add' ></i></button>
      </article>
      <article>
        <button><i className='bx bxs-user'></i> Employees</button>
        <button><i className='bx bxs-user-plus' ></i></button>
      </article>
    </main>
  )
}

export default Sidebar