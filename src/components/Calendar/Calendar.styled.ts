import styled from 'styled-components';

export const StyledCalendarMonth = styled.div`
  margin-top: 60px;
  padding: 10px;
  text-align: center;
`;

export const StyledDays= styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #eee;
`;

export const StyledDaysHeader = styled.div`
    margin-top: 10px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  background-color: #eee;
`;

export const StyledDayHeader = styled.div`
  flex: 1;
  font-weight: bold;
`;

export const StyledDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-top: 10px;
`;

export const StyledDay = styled.div`
    position: relative;
  padding: 10px;
  min-height:100px;
  background-color: #f2f0ed;
  border: 1px solid #ddd;
`;

export const StyledEmptyDay = styled.div`
  flex: 1;
`;

export const CurrentDayStyle = styled.div`
   border: 1px solid red;
`;

export const ButtonStyle = styled.div`
    display:flex;
`;

export const Todo = styled.button`
    position: absolute;
    top: 5px;
    right:5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;
export const StyledTodo = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    align-items: center;
    background-color: #abf7b5;
`;

export const StyledCurrentHead = styled.span`
    padding: 3px;
    background-color: #d44e4e;
    border-radius:50%;
    color: white;
`;

export const StyledTodoList = styled.ul`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  gap: 5px;

`;

export const StyledHoliday = styled.span`
  display: block;
  color:red;
  opacity: 0.5;
 
`;