import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import dataTest from '../../dataTest/dataTest';
import Task from '../Task/Task';
import './TaskContainer.css'
import TaskBar from './TaskBar/TaskBar';
import TaskMenu from './TaskMenu/TaskMenu';
import uniqid from 'uniqid'
import { fetchTasks } from '../../api/api';


const TaskContainer = (props) => {
	
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		fetchTasks(setDocs)		
	}, [])





	return (
    <>
    <TaskMenu />
    <TaskBar />
		<section className='container__taskcontainer'>
			{docs.map(doc => (				
					<Task
						key={uniqid()}
						dbId={doc._id}
						title={doc.title}
						description={doc.description}
						// assigned={`${doc.user.firstName} ${doc.user.lastName}`}
						user={doc.user}
						status={doc.status}
						dueDate={doc.dueDate}
					/>
			))}
		</section>
    </>
	);
};

export default TaskContainer;
