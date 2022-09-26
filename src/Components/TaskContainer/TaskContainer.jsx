import { useEffect, useState, useContext } from 'react';
import dataTest from '../../dataTest/dataTest';
import Task from '../Task/Task';
import './TaskContainer.css'
import TaskBar from './TaskBar/TaskBar';
import TaskMenu from './TaskMenu/TaskMenu';
import uniqid from 'uniqid'
import { fetchTasks } from '../../api/api';
import { getTasks } from '../../api/apiRequests';
import { TaskContext } from '../../context/TaskContext';


const TaskContainer = () => {
	const [docs, setDocs] = useState([]);
	const { token } = useContext(TaskContext)
	
	const tokenNum = token.token

	useEffect(() => {
		getTasks(setDocs, tokenNum)
	}, [])

	return (
    <>
    <TaskMenu />
    <TaskBar />
		<section className='container__taskcontainer'>
			{docs.map(doc => (				
					<Task
						key={uniqid()}
						id={doc.id}
						title={doc.title}
						assigned={`${doc.user.firstName} ${doc.user.lastName}`}
						status={doc.status}
						date={doc.date}
					/>
			))}
		</section>
    </>
	);
};

export default TaskContainer;
