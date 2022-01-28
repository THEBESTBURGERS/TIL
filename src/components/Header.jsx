import { useState } from 'react';
import LoginPopUp from '../components/LoginPopUp';
import ToggleMenu from '../components/ToggleMenu';
import {
  HeaderWrapper,
  Logo,
  UserMenuWrapper,
  UserIcon,
  LoginBtn
} from '../styles/Header'

const Header = () => {
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);
  const [isToggleMenuPopUp, setIsToggleMenuPopUp] = useState(false);


  const onToggleMenu = () => {
    isToggleMenuPopUp ? setIsToggleMenuPopUp(false) : setIsToggleMenuPopUp(true);
  }

  return (
    <>
      <HeaderWrapper>
        <Logo>Devoard</Logo>
        <UserMenuWrapper>
          <UserIcon 
            onClick={onToggleMenu}
          />
          <LoginBtn
            color='orange'
            outline
            onClick={()=>{setIsLoginPopUp(true)}}
          >
            로그인
          </LoginBtn>
        </UserMenuWrapper>
        <ToggleMenu
          isVisible={isToggleMenuPopUp}
          setIsVisible={setIsToggleMenuPopUp}
        />
      </HeaderWrapper>

      <LoginPopUp
        isVisible={isLoginPopUp}
        setIsLoginPopUp={setIsLoginPopUp}
      >
      </LoginPopUp>
    </>
  );
}

export default Header;