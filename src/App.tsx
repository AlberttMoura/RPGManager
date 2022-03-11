import { Container } from './components/styles/Container.styled'
import { Logo, LoginForm } from './components/index'

export const App = () => {
	return (
		<Container>
			<Logo />
			<LoginForm />
		</Container>
	)
}
