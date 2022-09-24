import React from 'react';
import { Button, Container, Input } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import './RegisterTask.css'

const RegisterTask = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [user, setUser] = useState('');
	const [date, setDate] = useState('');

	const [tasks, setTasks] = useState([]);

	const url = 'http://localhost:4001/dashboard/tasks';
	const getTasks = async () => {
		const response = await fetch(url);
		const data = await response.json();
		setTasks(data.results);
	};
	useEffect(() => {
		getTasks();
	}, []);

	console.log(tasks);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title && description) {
			const taskInfo = { id: uniqid(), title, description, user, date };
			setTasks([...tasks, taskInfo]);
			setTitle('');
			setDescription('');
		}
	};

	return (
		<main className='registertask__container'>
			<form className='registertask__form' onSubmit={handleSubmit}>
					<h2 className='task__title'>NEW TASK</h2>
					<Input
          className='registertask__input'
						label='Title'
						type='text'
						id='title'
						name='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<Input
          className='registertask__input'
						label='Description'
						type='text'
						id='description'
						name='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<Input
          className='registertask__input'
						label='User'
						type='text'
						id='description'
						name='description'
						value={user}
						onChange={(e) => setUser(e.target.value)}
					/>
					<Input
          className='registertask__input'
						label='Date'
						type='date'
						id='description'
						name='description'
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				<Button className='registertask__btn' type='submit'>Add Task</Button>
			</form>
		</main>
	);
};

export default RegisterTask;


