import React, { useEffect, useState } from 'react';
import { ButtonStyle, CurrentDayStyle, StyledCalendarMonth, StyledDay, StyledDayHeader, StyledDays, StyledDaysGrid, StyledEmptyDay, StyledTodo } from './Calendar.styled';
import BasicModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo } from '../../Redux/ToDo/selectors';
import { refreshTodo } from '../../Redux/ToDo/operations';
import { Dispatch } from '../../Redux/store';
// import { nanoid } from 'nanoid'

interface CalendarMonthProps {
  year: number;
  month: number;
}

interface Todo {
  id: number;
  text: string;
  originalDay: string;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ year }) => {
  const TODO = useSelector(selectTodo)

  const dispatch = useDispatch() as Dispatch;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const handleNextMonth = () => {
      setSelectedMonth((prevMonth) => (prevMonth === 12 ? 1 : prevMonth + 1));
    };
  
    const handlePrevMonth = () => {
      setSelectedMonth((prevMonth) => (prevMonth === 1 ? 12 : prevMonth - 1));
    };
    const [selectedMonth, setSelectedMonth] = useState(currentMonth);
    const [todos, setTodos] = useState<Record<number, Todo[]>>({});
    const [draggedTodo, setDraggedTodo] = useState<Todo | null>(null);

 
 useEffect(() => {
  console.log("User refresh");
  dispatch(refreshTodo());
}, [dispatch]);

    
  console.log(TODO);
    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(currentYear, selectedMonth, 0).getDate();
  
    const firstDayOfWeek = new Date(currentYear, selectedMonth - 1, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    // const handleAddTodo = (day: number, todoText: string) => {
  
    // };
  
    // const handleStartDrag = (todo: Todo, day: number) => {
    //   setDraggedTodo({
    //     ...todo,
    //     originalDay: day.toString(),
    //   });
      
    // };
  
    const handleEndDrag = (day: number) => {
      if (draggedTodo) {
        setTodos((prevTodos) => ({
          ...prevTodos,
          [day]: [
            ...(prevTodos[day] || []),
            draggedTodo,
          ],
        }));
        setDraggedTodo(null);
      }
    };
  
    useEffect(() => {
        console.log('Выбран новый месяц:', selectedMonth);
      }, [selectedMonth]);
  
    return (
      <StyledCalendarMonth>
        
        <ButtonStyle>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>{new Date(year, selectedMonth - 1).toLocaleString('default', { month: 'long' })} {currentYear}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </ButtonStyle>

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
          <StyledDay
            key={day}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleEndDrag(day)}
          >
            {day === currentDay ? (
              <CurrentDayStyle>
                {day}
              </CurrentDayStyle>
            ) : (
              <div>
                {day}
                {todos[day] && (
                  <ul>
                    {todos[day].map((todo) => (
                      <StyledTodo
                        key={todo.id}
                        draggable
                        // onDragStart={() => handleStartDrag(todo)}
                      >
                        {todo.text}
                      </StyledTodo>
                    ))}
                  </ul>
                )}
              </div>
            )}
         <BasicModal day={day}/>
          </StyledDay>
          
))}
        </StyledDaysGrid>
      </StyledCalendarMonth>
    );
  };
  
  export default CalendarMonth;