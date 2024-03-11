import React, { useEffect, useState } from 'react';
import { ButtonStyle, StyledCalendarMonth, StyledCurrentHead, StyledDay, StyledDayHeader, StyledDays, StyledDaysGrid, StyledEmptyDay, StyledTodo, StyledTodoList } from './Calendar.styled';
import BasicModal from '../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo } from '../../Redux/ToDo/selectors';
import { editTodoPosition, refreshTodo } from '../../Redux/ToDo/operations';
import { Dispatch } from '../../Redux/store';
import { nanoid } from 'nanoid'
import TodoModal from '../TodoModal/TodoModal';
// import { sortedTodoByTime } from '../../Redux/Filter/selectors';
// import { onFilter } from '../../Redux/Filter/slice';

interface CalendarMonthProps {
  year: number;
  month: number;
}

interface Todo {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  title: string;
  position: string;
  description: string;
  completed: boolean;
  month:string;
  time: string;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({ year }) => {
  const TODO: Todo[] = useSelector(selectTodo);

  console.log(TODO);
  
  const sortedTODO = [...TODO].sort((a, b) => {
    const timeA = a?.time || ""; // Если a.time определено, используем его, иначе используем пустую строку
    const timeB = b?.time || ""; // Аналогично для b.time
    return timeA.localeCompare(timeB);
  });

  console.log(sortedTODO);
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
    const [draggedTodo, setDraggedTodo] = useState<Todo | null>(null);

 
 useEffect(() => {
  dispatch(refreshTodo());
  // dispatch(onFilter(TODO))
  
}, [dispatch]);

    const currentDay = currentDate.getDate();
    const daysInMonth = new Date(currentYear, selectedMonth, 0).getDate();
  
    const firstDayOfWeek = new Date(currentYear, selectedMonth - 1, 1).getDay();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
    const onDragStart = (event: React.DragEvent, todo: Todo) => {
      event.dataTransfer.setData('text/plain', ''); 
      setDraggedTodo(todo);
    };


    const onDragOver = (event: React.DragEvent) => {
      event.preventDefault();
    };
  
    const handleDrop = (event: React.DragEvent, day: number) => {
      event.preventDefault();
      if (draggedTodo) {
        const newPosition = `${day}`; 
         dispatch(
          editTodoPosition({
            ...draggedTodo,
            position: newPosition,
          })
        );
        setDraggedTodo(null);
      }
    }
  
    useEffect(() => {
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
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => handleDrop(e, day)}
          >
              <div>
              {day === currentDay && currentMonth === selectedMonth ? (<StyledCurrentHead>{day}</StyledCurrentHead>):(<span>{day}</span>)}
                  <StyledTodoList>
                    {sortedTODO
                    .map((todo: Todo) => ( todo.position === day.toString() && todo.month === selectedMonth.toString() &&
                      <StyledTodo
                        key={nanoid()}
                        draggable
                        onDragStart={(e) => onDragStart(e, todo)}
                      ><span>{todo.title}</span>
                        <span>{todo.time}</span>
                        <TodoModal todo={todo}  day={day.toString()} selectedMonth={selectedMonth.toString()}/>
                      </StyledTodo>
                    ))}
                  </StyledTodoList>
              </div>
         
         <BasicModal day={day.toString()} selectedMonth={selectedMonth.toString()}/>
          </StyledDay>
          
))}
        </StyledDaysGrid>
      </StyledCalendarMonth>
    );
  };
  
  export default CalendarMonth;