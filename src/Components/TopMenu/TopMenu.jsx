import { Navbar, Button, Image } from '@nextui-org/react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logoTopMenu from '../../assets/images/logo-navbar.png'
import './TopMenu.css'
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';


const TopMenu = () => {
	const { setUser, setToken, user:loggedUser } = useContext(AuthContext)
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
						onClick={() => {navigate("/dashboard")}}
					 />
				</div>
			</Navbar.Brand>
			<Navbar.Content>
				<Navbar.Item className='role__navbar--p'>
					<p><span className="firstname__span">{loggedUser.firstName}</span> <span className="role__span">{loggedUser.role}</span></p>
				</Navbar.Item>
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
