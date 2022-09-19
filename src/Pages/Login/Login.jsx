import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>

      <main>
        <p>LOGIN</p>
        <article>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </article>
        <article>
          <label htmlFor="password">Pasword</label>
          <input type="password" name="password" id="password" />
        </article>
        {/* //todo si es admin va al admin si no al userdashboard */}
        <Link to='/dashboard'><button type="submit">LOGIN</button></Link>

      </main>

    </>
  )
}

export default Login