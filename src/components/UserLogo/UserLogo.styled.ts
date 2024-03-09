import styled from 'styled-components';

export const UserLogoWrapper = styled.div`
  position: relative;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  font-size: 16px;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
`;

export const IconOpenUserMenu = styled.img`
  width: 16px;
  height: 16px;
`;

export const UserLogoStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;