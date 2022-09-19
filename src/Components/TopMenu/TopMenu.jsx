import React from 'react';
import { Navbar, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import './TopMenu.css'

const TopMenu = () => {
	return (
		<Navbar className='container__navbar'>
			<Navbar.Brand>
				<div className='logo__navbar'>LOGO</div>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Item>
					<Link className='link__navbar' to='/'><Button size='sm' className='btn__navbar'>Logout</Button></Link>
				</Navbar.Item>
			</Navbar.Content>
		</Navbar>
	);
};

export default TopMenu;
