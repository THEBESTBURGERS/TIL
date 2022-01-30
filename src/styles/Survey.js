import styled from 'styled-components';

export const Survey_text = styled.div`
	display: flex;
	font-family: var(--font-body);
	font-size: 1.7rem;
	font-weight: bold;
	color: white;
	padding : 2rem;
	padding-bottom:3rem;
`;


export const Content = styled.section`
	display: flex;
	flex-direction:column;
	align-content: center;
	align-items: center;
`;


export const Bar_background = styled.div`
	background-color: white;
	width: 50em;
	height: 1.2em;
	align-items: center;
	border-radius: 20px;
`;

export const Bar_content = styled.div`
	background-color: var(--color-orange);
	width: ${props => props.width};
	height: 1.2em;
	align-items: center;
	border-radius: 20px;
	transition-delay: 0.5s;
	transition: 1s ease;
`;


export const Text = styled.h1`
	font-family: var(--font-body);
	font-size: 1.7rem;
	color: white;
	padding:1.5em;
	margin:0;
`;



export const Checkbox = styled.div`
	color: white;
	padding : 1rem;
`;