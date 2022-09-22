import { useEffect, useState } from 'react';
import dataTest from '../../dataTest/dataTest';
import Task from '../Task/Task';
import './TaskContainer.css'
import TaskBar from './TaskBar/TaskBar';
import TaskMenu from './TaskMenu/TaskMenu';
import uniqid from 'uniqid'


const TaskContainer = () => {

	const [docs, setDocs] = useState([]);

	async function fetchTasks () {
		try {
			const res = await fetch('http://localhost:4001/dashboard/tasks')
			const data = await res.json();
			const results = data.results;
			setDocs(results)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchTasks()
	}, [])


	console.log(typeof docs)
	return (
    <>
    <TaskMenu />
    <TaskBar />
		<section className='container__taskcontainer'>
			{docs.map(doc => (
				<>
					<Task
						key={uniqid()}
						id={doc.id}
						title={doc.title}
						assigned={doc.assigned}
						status={doc.status}
						date={doc.date}
					/>
				</>
			))}
		</section>
    </>
	);
};

export default TaskContainer;
