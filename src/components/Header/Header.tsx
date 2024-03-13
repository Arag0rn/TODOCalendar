import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/Auth/selectors';
import  { HeaderStyled, HeaderWrap, LogOut, NavLinkStyled } from './Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserLogo } from '../UserLogo/UserLogo';
import { logOut } from '../../Redux/Auth/operations';
import { Dispatch } from '../../Redux/store';


export const Header = () => {
  const dispatch: Dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <HeaderStyled>
      <HeaderWrap>
      <NavLinkStyled to={'/filter-todo'}>Sort Todo</NavLinkStyled>
      <NavLinkStyled to={"/"} >Calendar</NavLinkStyled>
        {isLoggedIn ? <UserLogo /> : <AuthNav />}
        <LogOut type="button" onClick={handleLogout}>Logout</LogOut>
      </HeaderWrap> 
    </HeaderStyled>
  );
};