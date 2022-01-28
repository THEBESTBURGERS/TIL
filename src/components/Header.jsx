import { useState, useEffect, useRef } from 'react';
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

  const userIcon = useRef(null);

  const handleCloseMenu = (e) => {
    if (!isToggleMenuPopUp && userIcon.current.contains(e.target)){
      setIsToggleMenuPopUp(true);
    }
  }
  
  useEffect(()=>{
    window.addEventListener('mousedown', handleCloseMenu);

    return () => {
      window.removeEventListener('mousedown', handleCloseMenu);
    }
  });

  return (
    <>
      <HeaderWrapper>
        <Logo>Devoard</Logo>
        <UserMenuWrapper>
          <UserIcon 
            ref={userIcon}
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