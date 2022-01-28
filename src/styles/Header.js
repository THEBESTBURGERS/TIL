import styled from 'styled-components';
import Button from '../components/Button';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 4.5rem;
`;

export const Logo = styled.span`
  color: var(--color-orange);
  font-family: var(--font-logo);
  font-size: 2rem;
  cursor: pointer;
`;

export const UserIcon = styled.div`
  border: 2px solid white;
  margin-right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 6rem;
  cursor: pointer;
`;


export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginBtn = styled(Button)``;
