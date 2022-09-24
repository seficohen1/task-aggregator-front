import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './RegisterUser.css';

const RegisterUser = () => {
	const { register, handleSubmit } = useForm();
	const [data, setData] = useState('');

	const createUser = (data) => {
		setData(data);
	};
	console.log(data);

	return (
		<>
			<main className='register__container'>
				<form className='register__form' onSubmit={handleSubmit(createUser)}>
					<h2 className='register__title'>REGISTER USER</h2>
					<Input
						className='register__input'
						label='Name'
						type='text'
						{...register('name')}
					/>
					<Input
						className='register__input'
						label='Lastname'
						type='text'
						{...register('lastname')}
					/>
					<Input
						className='register__input'
						label='Email'
						type='text'
						{...register('email', {
							pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
						})}
					/>
					<Input.Password
						className='register__input'
						label='Password'
						type='password'
						{...register('password')}
					/>
					<Input
						className='register__input'
						label='Role'
						type='text'
						{...register('role')}
					/>
					<Button className='register__btn' type='submit'>
						Create
					</Button>
				</form>
			</main>
		</>
	);
};

export default RegisterUser;
