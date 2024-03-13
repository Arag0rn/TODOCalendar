
import styled from 'styled-components';

export const StyledButton = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    background: url('../images/add-button.svg') no-repeat center center;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.8, 1);
    &:hover{
      scale: 110%;
    }
`;


