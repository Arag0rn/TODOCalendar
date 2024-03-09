import styled from 'styled-components';

export const StyledCalendarMonth = styled.div`
  margin: 20px;
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
  padding: 10px;
  min-height:100px;
  border: 1px solid #ddd;
`;

export const StyledEmptyDay = styled.div`
  flex: 1;
`;

export const CurrentDayStyle = styled.div`
   border: 1px solid red;
`;