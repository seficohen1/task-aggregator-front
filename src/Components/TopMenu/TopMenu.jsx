import React from 'react';
import { Navbar, Button, Image } from '@nextui-org/react';
import { Link, Outlet } from 'react-router-dom';
import logoTopMenu from '../../assets/images/logo-navbar.png'
import './TopMenu.css'

const TopMenu = () => {
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
					<Link className='link__navbar' to='/'><Button size='sm' className='btn__navbar'>Logout</Button></Link>
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
