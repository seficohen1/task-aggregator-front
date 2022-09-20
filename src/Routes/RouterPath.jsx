import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TopMenu from '../Components/TopMenu/TopMenu';
import DashboardAdmin from '../Pages/DashboardAdmin/DashboardAdmin';
import DashboardUser from '../Pages/DashboardUser/DashboardUser';
import Login from '../Pages/Login/Login';

const RouterPath = () => {
	return (
		<Routes>
			<Route index element={<Login />} />
			<Route path='/' element={<TopMenu />}>
				<Route path='dashboarduser' element={<DashboardUser />} />
				{/* <Route path="dashboarduser/:userId" element={} /> */}
				<Route path='dashboardadmin' element={<DashboardAdmin />} />
				{/* <Route path="dashboardadmin/:userId" element={} /> */}
			</Route>
		</Routes>
	);
};

export default RouterPath;
