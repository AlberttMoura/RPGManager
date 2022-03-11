import { Container } from '../components/styles/Container.styled'
import {
	LogoImg,
	LogoTitle,
	LogoSlogan,
} from '../components/styles/Logo.styled'
import WarfogLogo from '../assets/WarfogLogo.png'

export const Logo = () => {
	return (
		<Container style={{ margin: '30px 0px 30px 0px' }}>
			<Container>
				<LogoImg src={WarfogLogo} />
			</Container>
			<Container>
				<LogoTitle>Warfog</LogoTitle>
			</Container>
			<Container>
				<LogoSlogan>The Missing RPG manager</LogoSlogan>
			</Container>
		</Container>
	)
}
