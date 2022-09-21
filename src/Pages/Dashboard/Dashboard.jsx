import { Container, Grid } from '@nextui-org/react';
import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import TaskContainer from '../../Components/TaskContainer/TaskContainer';
import './Dashboard.css';

const DashboardUser = () => {
	return (
		<>
			<main className='container__dashboard'>
				<Grid.Container gap={2} justify='center'>
					<Grid md={2}>
						{/* use sidebar component */}
						<Sidebar />
					</Grid>
					<Grid md={10}>
						<Container>
							{/* use task container component */}
							<TaskContainer />
						</Container>
					</Grid>
				</Grid.Container>
			</main>
		</>
	);
};

export default DashboardUser;
