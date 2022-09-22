import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegisterUser = () => {

	const { register, handleSubmit } = useForm();
  const [data, setData] = useState('')

  const sendInfo = (data) => {
    setData(data)
  }
  console.log(data)

	return (
		<>
			<h2>Register User</h2>
			<form onSubmit={handleSubmit(sendInfo)}>
        <article>
          <label>Name</label>
          <input type="text" {...register('name')} />
        </article>
        <article>
          <label>Last name</label>
          <input type="text" {...register('lastname')} />
        </article>
        <article>
          <label>Email</label>
          <input type="text" {...register('email', {
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i
          })} />
        </article>
        <article>
          <label>Password</label>
          <input type="password" {...register('password')} />
        </article>
        <article>
          <label>Role</label>
          <input type="text" {...register('role')} />
        </article>
        <button type="submit">Create</button>
      </form>
		</>
	);
};

export default RegisterUser;
