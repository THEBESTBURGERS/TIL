import { useState, useEffect } from 'react';
import LoginPopUp from '../components/LoginPopUp';
import {
  HeaderWrapper,
  Logo,
  UserMenuWrapper,
  UserIcon,
  LoginBtn
} from '../styles/Header'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);

  const onToggleLogin = () => {
    if (isLogin == true) {
      setIsLogin(false);
    }
    else if (isLogin === false) {
      setIsLogin(true);
    }
  }

  return (
    <>
      <HeaderWrapper>
        <Logo>Devoard</Logo>
        <UserMenuWrapper>
          <UserIcon />
          <LoginBtn
            color='orange'
            outline
            onClick={()=>{setIsLoginPopUp(true)}}
          >
            로그인
          </LoginBtn>
        </UserMenuWrapper>
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