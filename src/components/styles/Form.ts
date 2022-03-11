import styled from 'styled-components'

export const UserForm = styled.form`
	width: 261px;
`

export const FormTitle = styled.p`
	font-weight: 600;
	font-size: 26px;
	color: #454545;
	text-align: left;
	margin: 10px 0px;
`

export const FormInput = styled.input`
	width: 260px;
	height: 62px;
	border-radius: 5px;
	border: 1px solid #8c8c8c;
	text-align: left;
	font-weight: 400;
	font-size: 20px;
	color: #a7a7a7;
	margin: 10px 0px;
	padding: 0px 20px;
`

export const FormSubmit = styled.input`
	width: 132px;
	height: 45px;
	border-radius: 5px;
	background-color: #0d5aa0;
	margin: 20px 0px;
	border: none;
	text-align: center;
	font-weight: 400;
	font-size: 20px;
	color: #ffffff;
	:active {
		background-color: #1573ca;
	}
`

export const FormLink = styled.p`
	font-weight: 500;
	font-size: 14px;
	color: #7785ff;
	margin: 10px 0px;
`
