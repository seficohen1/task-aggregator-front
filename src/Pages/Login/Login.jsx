import { Card, Button, Input, Text } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
	return (
		<main className='container__form'>
			<Card className='login__card' css={{ w:'30rem' }}>
				<Card.Body>
					<form className='login__form'>
						<h3 className='title__form'>LOGIN</h3>
						<Input className='input__form--name' label='Username' type='text' name='username' id='username' />
						<Input className='input__form--pass' label='Password' type='text' name='password' id='password' />
						<Link className='link__form' to='dashboard'>
							<Button className='btn__form'>
								SIGN UP
							</Button>
						</Link>
					</form>
				</Card.Body>
			</Card>
		</main>
	);
};

export default Login;
