import { Form, ErrorMessage, Field  } from 'formik';
import styled from 'styled-components';


export const SightInContainer = styled.div`
   @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const ForFormContainer = styled.div`
   @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-self: center;
  }

`  

export const FormHead = styled.h2`
    font-size: 26px;
    font-weight: 500;
    line-height: 1.2; 

`

export  const StyledForm = styled(Form)`

 @media screen and (min-width: 250px) {
    display: flex;
    flex-direction:column;
    border-radius: 5px;
    width: 280px;
 }
  @media screen and (min-width: 768px) {
    width: 336px;
  
  }

  @media screen and (min-width: 1440px) {
    justify-content: start;
    width: 384px;
    grid-column:7/9;
    grid-row: 1;
    align-self: center;
    
  }
`

export const ErMsg = styled(ErrorMessage )`
    font-size: 12px;  
    color: red;
`;

export const StyledField = styled(Field)`
    margin-top: 8px;
    display: flex;
    padding: 12px 10px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    outline: none;
    border-radius: 6px;
    border: 1px solid rgb(215, 227, 255);
    background: white;
    &::placeholder{
        color: rgb(215, 227, 255);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.23; 
    }
    

`

export const Styledlabel = styled.label`
        margin-top: 16px;
        position: relative;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.33; 
 
    
`

export const FormBtnStyled = styled.button`
    margin-top: 16px;
    width: 100%;
    display: flex;
    padding: 10px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: blue;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    outline: none;
    border: none;
    color: white;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active{
      box-shadow: none;
    }
    cursor: pointer;
    @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  
  }

`

export const SightUp = styled.p`
    margin-top: 16px;
    color: blue;
    font-size: 16px;
    font-weight: 400;
    line-height: 0.8; 
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover{
      color: lightblue;
    }
`

export const StyledBtn = styled.div`
    position: absolute;
    border: none;
    top: calc(50% + 34px);
    right: 4%;
    cursor: pointer;
    
`

export const BottomBtnBox = styled.div`
    display: flex;
    justify-content: space-between;
`
export const GoogleBtn = styled.button`
  display: inline-flex;
  gap: 20px;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  background-color: white; 
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  color: blue; 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    }
    &:active{
      box-shadow: none;
    }
`