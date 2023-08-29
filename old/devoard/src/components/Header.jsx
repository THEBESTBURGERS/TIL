import { useState, useEffect, useRef, useContext } from 'react';
import { UserContext } from '../context/user';
import { Link } from 'react-router-dom';
import LoginPopUp from '../components/LoginPopUp';
import ToggleMenu from '../components/ToggleMenu';
import {
  HeaderWrapper,
  Logo,
  UserMenuWrapper,
  UserIcon,
  LoginBtn,
  AlertBtn,
  MessageBtn
} from '../styles/Header'

const Header = () => {
  const [isLoginPopUp, setIsLoginPopUp] = useState(false);
  const [isToggleMenuPopUp, setIsToggleMenuPopUp] = useState(false);
  const { loggedIn, loggedUser } = useContext(UserContext);
  const userIcon = useRef(null);
  
  const handleCloseMenu = (e) => {
    if (!isToggleMenuPopUp && (userIcon.current === e.target)){
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
        <Link to='/' style={{textDecoration: 'none'}}>
          <Logo>Devoard</Logo>
        </Link>
        <UserMenuWrapper>
          {loggedIn ? 
          (<>
          <MessageBtn 
            color="white"
            size="30"
          />
          <AlertBtn
            color="white"
            size="32"
          />
          <UserIcon 
            ref={userIcon}
            src={loggedUser.imageUrl}
          />
          
          
          </>) :
          (<LoginBtn
            color='orange'
            outline
            onClick={()=>{setIsLoginPopUp(true)}}
          >
            로그인
          </LoginBtn>)}
        </UserMenuWrapper>
        <ToggleMenu
          isVisible={isToggleMenuPopUp}
          setIsVisible={setIsToggleMenuPopUp}
        />
      </HeaderWrapper>

      <LoginPopUp
        loggedIn={loggedIn}
        isVisible={isLoginPopUp}
        setIsLoginPopUp={setIsLoginPopUp}
      >
      </LoginPopUp>
    </>
  );
}

export default Header;