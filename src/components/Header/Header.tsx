import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/Auth/selectors';

// import logo from '../../images/svg/logo.svg';
import  { HeaderStyled, HeaderWrap, StyledNavLink } from './Header.styled';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserLogo } from '../UserLogo/UserLogo';


export const Header = () => {
  const authentificated = useSelector(selectIsLoggedIn);
  return (
    <HeaderStyled>
      <HeaderWrap>
        <StyledNavLink to="/">
          {/* <LogoStyled src={logo} alt="Logo" /> */}
        </StyledNavLink>
        {authentificated ? <UserLogo /> : <AuthNav />}
      </HeaderWrap>
    </HeaderStyled>
  );
};