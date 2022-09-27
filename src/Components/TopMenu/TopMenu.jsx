import React, {useContext} from 'react';
import { Navbar, Button, Image } from '@nextui-org/react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logoTopMenu from '../../assets/images/logo-navbar.png'
import './TopMenu.css'
import AuthContext from '../../context/AuthContext';

const TopMenu = () => {
	const { setUser, setToken } = useContext(AuthContext)
	const navigate = useNavigate()
	const logout = () => {
		navigate('/', { replace: true })
		setToken([])
		setUser([])
	}
	
	return (
		<>
		<Navbar className='container__navbar'>
			<Navbar.Brand>
				<div className='logo__navbar'>
					<Image
						className='logo__navbar--image'
						src={logoTopMenu}
						alt='logotype'
					 />
				</div>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Item>
					<Button size='sm' className='btn__navbar' onClick={logout}>Logout</Button>
				</Navbar.Item>
			</Navbar.Content>
		</Navbar>
		<section>
			<Outlet />
		</section>
		</>
	);
};

export default TopMenu;
