import styled from 'styled-components';

export const StyledTodoUl = styled.ul`
  margin-top: 15px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const StyledTodoLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 160px;
  border-radius:15px;
  color: white;
  overflow:hidden;
`;

export const StyledDescription = styled.span`
margin-top: 10px;
font-size: 12px;
  color: white;
  overflow:hidden;
`;

export const InputFilter = styled.input`
border: solid 1px black;
border-radius: 10px;
width: 100%;
height: 30px;
padding-left: 15px;
`

export const InputSelect = styled.select`
border: solid 1px black;
border-radius: 10px;
width: 100%;
height: 30px;
padding-left: 15px;
`
export const InputBox = styled.div`
    display: flex;
    gap: 20px;
`