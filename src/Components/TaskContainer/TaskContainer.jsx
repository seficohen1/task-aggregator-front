import React from 'react';
import dataTest from '../../dataTest/dataTest';
import Task from '../Task/Task';
import './TaskContainer.css'
import TaskBar from './TaskBar/TaskBar';
import TaskMenu from './TaskMenu/TaskMenu';


const TaskContainer = () => {
	return (
    <>
    <TaskMenu />
    <TaskBar />
		<section className='container__taskcontainer'>
			{dataTest.map(({ id, title, assigned, status, date }) => {
				return (
					<Task
						key={id}
						id={id}
						title={title}
						assigned={assigned}
						status={status}
						date={date}
					/>
				);
			})}
		</section>
    </>
	);
};

export default TaskContainer;
