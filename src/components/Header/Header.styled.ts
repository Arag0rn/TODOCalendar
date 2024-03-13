import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 56px;
  padding: 4px 0;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1000;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: grey;

  @media screen and (min-width: 768px) {
    height: 64px;
    padding: 8px 0;
  }
  @media screen and (min-width: 1440px) {
    height: 60px;
    padding: 6px 0;
  }
`;
export const HeaderWrap = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 48px;
  
  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 704px;
  }
  @media screen and (min-width: 1440px) {
    width: 1216px;
  }
`;




export const LogOut = styled.button`
    display: flex;
    padding: 5px 18px;
    justify-content: center;
    align-items: center;
    color:  #FCFBF5;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; 
    text-transform: uppercase;
    gap: 10px;
    border: none;
    border-radius: 10px;
    background-color: #4753AB;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.8, 1);
    cursor: pointer;
    &:hover{
        background-color: #5461c0;
    }
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  transition: color 250ms cubic-bezier(0.4, 0, 0.8, 1);
  &:hover{
      color: #5461c0;
    }
`;