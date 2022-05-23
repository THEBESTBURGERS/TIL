import styled from 'styled-components';
import Button from '../components/Button';
import { BsBell, BsChatSquareDots } from "react-icons/bs";

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

export const UserIcon = styled.img`
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

export const AlertBtn = styled(BsBell)`
  margin-right: 1rem;
  cursor: pointer;
`;

export const MessageBtn = styled(BsChatSquareDots)`
  margin-right: 1rem;
  padding-top: 0.3rem;
  cursor: pointer;
`