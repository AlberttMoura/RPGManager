import {
	Container,
	UserForm,
	FormInput,
	FormSubmit,
	FormTitle,
	FormLink,
} from './index'
import { FormEvent, useState } from 'react'

export const LoginForm = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const username = (
			document.getElementById('username') as HTMLInputElement
		).value
		const password = (
			document.getElementById('password') as HTMLInputElement
		).value
		console.log(username, password)
		/*
        Do stuffs
        */
	}

	return (
		<Container>
			<UserForm
				noValidate
				onSubmit={(e) => {
					handleSubmit(e)
				}}>
				<FormTitle>Sign In</FormTitle>
				<FormInput
					id='username'
					type='text'
					placeholder='Username or Email'
					value={username}
					onChange={(e) => {
						setUsername(e.target.value)
					}}
				/>
				<FormInput
					id='password'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				/>
				<FormSubmit type='submit' value='Login' />
				<FormLink>Don't have an account? Register now</FormLink>
				<FormLink>Forgot your password?</FormLink>
			</UserForm>
		</Container>
	)
}
