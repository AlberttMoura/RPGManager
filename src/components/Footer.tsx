import { Container } from './index'
import styled from 'styled-components'

const FooterLinks = styled.p`
	font-size: 14px;
	font-weight: 400;
	color: #ffffff;
	margin: 10px 0px;
`

export const Footer = () => {
	return (
		<Container
			style={{
				backgroundColor: '#343434',
				width: '100%',
				margin: '20px 0px 0px 0px',
			}}>
			<Container
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
				}}>
				<FooterLinks>About</FooterLinks>
				<FooterLinks>Contact us</FooterLinks>
				<FooterLinks>Help</FooterLinks>
				<FooterLinks>Terms and rules</FooterLinks>
			</Container>
			<Container>
				<FooterLinks>Warfog ® 2022 - All rights reserved</FooterLinks>
			</Container>
		</Container>
	)
}
