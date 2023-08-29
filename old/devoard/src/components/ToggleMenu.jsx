import { useRef, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 5rem;
`;

const Menu = styled.div`
  width: 11rem;
  height: 3rem;
  background: white;
  line-height: 3rem;
  padding: 0 1.5rem;
  font-size: 1.07rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: rgb(233, 232, 232);
  }
`;


const ToggleMenu = ({ isVisible, setIsVisible }) => { 
  const menu = useRef(null);
  const logout_menu = useRef(null);
  const { setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleCloseMenu = (e) => {
    if (!isVisible) return null;
    if (logout_menu.current === e.target)
      setLoggedIn();
    else if (menu.current.contains(e.target))
      navigate(e.target.attributes.getNamedItem("data-link").value)
 
    setIsVisible(false);
  }

  useEffect(()=>{
    window.addEventListener('mousedown', handleCloseMenu);

    return () => {
      window.removeEventListener('mousedown', handleCloseMenu);
    }
  });

  if (!isVisible) return null;
  return(
    <>
      <MenuWrapper
        ref={menu}
      >
        <Menu data-link="/scrap">스크랩</Menu>
        <Menu data-link="/my_project">나의 프로젝트</Menu>
        <Menu data-link="/my_page">마이페이지</Menu>
        <Menu
          ref={logout_menu}
        >로그아웃</Menu>
      </MenuWrapper>
    </>
  );
};

export default ToggleMenu;