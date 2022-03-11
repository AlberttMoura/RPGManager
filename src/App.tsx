import { relative } from 'path'
import { Logo, LoginForm, Footer, Container } from './components/index'

export const App = () => {
	return (
		<Container
			style={{
				position: 'relative',
				minHeight: 'calc(100vh + 8rem)',
			}}>
			<Logo />
			<LoginForm />
			<Footer />
		</Container>
	)
}
