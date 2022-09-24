import React from 'react';
import RegisterUser from './RegisterUser/RegisterUser';
import RegisterTask from './RegisterTask/RegisterTask';
import './AdminContainer.css';
import { Grid } from '@nextui-org/react';

const AdminContainer = () => {
	return (
		<>
			<main className='admin__main'>
				<Grid.Container className='admin__grid--container'>
					<Grid className='admin__grid' xs={6}>
						<RegisterUser />
					</Grid>
					<Grid className='admin__grid' xs={6}>
						<RegisterTask />
					</Grid>
				</Grid.Container>
			</main>
		</>
	);
};

export default AdminContainer;