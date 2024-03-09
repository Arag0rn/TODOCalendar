import { useSelector } from 'react-redux';
import {
  User,
  UserAvatar,
  UserLogoStyled,
  UserLogoWrapper,
  UserName,
} from './UserLogo.styled';
import { selectAvatar, selectUser } from '../../Redux/Auth/selectors';

export const UserLogo = () => {
  const userData = useSelector(selectUser);
  const Avatar = useSelector(selectAvatar);
  console.log(Avatar);
  
  
  
  const usernameFromEmail = userData?.email ? userData.email.split('@')[0] : 'V';


 console.log(userData);
 
  return (
    <UserLogoWrapper>
      <UserLogoStyled

      >
        <User>
          <UserName>{usernameFromEmail}</UserName>
          <UserAvatar
            src={Avatar}
            alt="User avatar"
          ></UserAvatar>
        </User>
      </UserLogoStyled>
    </UserLogoWrapper>
  );
};