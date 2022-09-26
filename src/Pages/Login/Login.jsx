import { Card, Button, Input, Text } from '@nextui-org/react';
import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/apiRequests';
import {AuthContext} from '../../context/AuthContext';
import './Login.css';

const Login = () => {
	const { user, setUser, token, setToken } = useContext(AuthContext)
	
	const [details, setDetails] = useState({email: "", password: ""})
	const [error, setError] = useState("")

	const navigate = useNavigate()

	console.log(details)
	
	const login = () => {
		if (details.email === '' || details.password === '') {
			setError('Please write your email and password')
			setTimeout(() => {
				setError('')
			}, 5000);
		} else if (!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(details.email)){
			setError('Please write a valid email')
			setTimeout(() => {
				setError('')
			}, 5000);
		}

		userLogin(details, setUser, setToken, setError)


		setTimeout(() => {
			setError('')
		}, 7000);
	
		if (user) {
			navigate('/dashboard', { replace: true })
			}
	}
		console.log("user: ",user)

	return (
		<main className='container__form'>
			<Card className='login__card' css={{ w:'30rem' }}>
				<Card.Body>
					<form className='login__form'>
						<h3 className='title__form'>LOGIN</h3>
						<p style={{color: 'red', fontSize: '1.2rem'}}>{error}</p>
						<Input className='input__form--name' label='Username' type='text' name='username' id='username' onChange={(e) =>
                setDetails({ ...details, email: e.target.value })} value={details.email}/>
						<Input className='input__form--pass' label='Password' type='password' name='password' id='password' onChange={(e) =>
                setDetails({ ...details, password: e.target.value })} value={details.password} />
						<Button onClick={login} className='btn__form'>
							SIGN IN
						</Button>
					</form>
				</Card.Body>
			</Card>
		</main>
	);
};

export default Login;
