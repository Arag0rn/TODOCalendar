import React from 'react';
import { CurrentDayStyle, StyledCalendarMonth, StyledDay, StyledDayHeader, StyledDays, StyledDaysGrid, StyledEmptyDay } from './Calendar.styled'; // Поменяйте на свой путь к стилям

interface CalendarMonthProps {
  year: number;
  month: number;
}

const CalendarMonth: React.FC<CalendarMonthProps> = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  
    const firstDayOfWeek = new Date(currentYear, currentMonth - 1, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
    return (
      <StyledCalendarMonth>
      
        <StyledDays>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <StyledDayHeader key={day}>
              {day}
            </StyledDayHeader>
          ))}
        </StyledDays>
        <StyledDaysGrid>
          {Array.from({ length: firstDayOfWeek }, (_, i) => (
            <StyledEmptyDay key={`empty-${i}`} />
          ))}
        {days.map((day) => (
            day === currentDay ? (
                <CurrentDayStyle key={day}>
                {day}
                </CurrentDayStyle>
            ) : (
                <StyledDay key={day}>
                {day}
            </StyledDay>
  )
))}
        </StyledDaysGrid>
      </StyledCalendarMonth>
    );
  };
  
  export default CalendarMonth;