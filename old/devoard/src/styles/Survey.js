import styled from 'styled-components';
import Button from '../components/Button';

export const SurveyWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`
export const SurveyText = styled.div`
	color: white;
	font-family: var(--font-body);
	font-weight: 600;;
	font-size: 1.7rem;
	padding: 2rem 0 2rem 0;
`;


export const Content = styled.div`
	display: flex;
	flex-direction:column;
	align-items: center;
	margin: 0 12rem 0 12rem;
`;


export const BarBackground = styled.div`
	width: 100%;
	background-color: white;
	height: 1.2em;
	align-items: center;
	border-radius: 20px;
`;

export const BarContent = styled.div`
	background-color: var(--color-orange);
	width: ${props => props.width};
	height: 1.2em;
	align-items: center;
	border-radius: 20px;
	transition-delay: 0.5s;
	transition: 1s ease;
`;


export const Text = styled.div`
	font-family: var(--font-body);
	font-size: 1.7rem;
	color: white;
	padding:1.5em 0 1.5em 0;
	margin-right: auto;
`;


export const InputWrapper=styled.div`
  display: flex;
	flex-direction:column;
	justify-content: center;
	width: 100%;
`


export const InputBox = styled.div`
	color: white;
	width: 100%;
  margin-bottom: 1rem;
	`

export const CheckBtn = styled.div`
	background-color: white;
	font-size: 1.4rem;
	text-align: center;
	vertical-align: middle;
	line-height: 3rem;
	border-radius: 10px;
	color: var(--basic-color);
	width: 100%;
	height : 3rem;
	margin-bottom : 0.5rem; 
`
