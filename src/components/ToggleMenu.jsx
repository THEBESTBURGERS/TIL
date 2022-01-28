import { useRef, useEffect } from 'react';
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

  const handleCloseMenu = (e) => {
    if (menu.current && !(menu.current.contains(e.target))){
      setIsVisible(false);
    }
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
        <Menu>스크랩</Menu>
        <Menu>나의 프로젝트</Menu>
        <Menu>마이페이지</Menu>
        <Menu>로그아웃</Menu>
      </MenuWrapper>
    </>
  );
};

export default ToggleMenu;