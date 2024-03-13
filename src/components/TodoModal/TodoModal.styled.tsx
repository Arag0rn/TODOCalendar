import { Field, Form} from 'formik';
import styled from 'styled-components';

export const StyledButton = styled.div`
    padding: 10px;
    text-align: center;
    cursor: pointer;
    background: url('../images/add-button.svg') no-repeat center center;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.8, 1);
    &:hover{
      scale: 110%;
    }
`;


export const StyledField = styled(Field)`
    border: none;
    text-align:center;
    border-bottom: 1px solid grey;
    background-color: transparent;
    font-weight: 700;
    color: #2c0c0f;
    padding-top: 5px;
`

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
   
    
`

export const ButtonBox = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
`;


export const ButtonModal = styled.button`
    width: 100%;
    display: flex;
    padding: 10px 18px;
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