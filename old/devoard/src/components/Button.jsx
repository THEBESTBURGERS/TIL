import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';


const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      ${props => 
        props.outline && 
        css`
          color: ${selected};
          background: none;
          border: 2px solid ${selected};
        `
      }
    `;
  }}
`;

const StyledButton = styled.button`
  background: transparent;
  color: white;
  height: 2.125rem;
  font-family: var(--font-title);
  font-size: 1.125rem;
  line-height: 1.7rem;
  padding: 0 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  ${colorStyles}
`;




const Button = ({ children, color, outline, ...rest }) => {
  return (
    <StyledButton
      color={color}
      outline={outline}
     {...rest}
    >
      {children}
    </StyledButton>
  );
}

export default Button;