import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../Redux/store";
import { useEffect } from "react";
import { refreshTodo } from "../../Redux/ToDo/operations";
import { InputBox, InputFilter, InputSelect, StyledDescription, StyledTodoLi, StyledTodoUl } from "./FilterTodoComp.style";
import { onFilter, onImportanceFilter, onMonthFilter } from "../../Redux/Filter/slice";
import { filteredTodos } from "../../Redux/Filter/selector";
import TodoModal from "../TodoModal/TodoModal";




export const FilterTodoComp = () => {


const dispatch = useDispatch() as Dispatch;
const TODO = useSelector(filteredTodos);

console.log(TODO);

useEffect(() => {
    dispatch(refreshTodo());
    
  }, [dispatch]);

  const handleInputChange = (event: { target: { value: string; }; }) => {
    const filterValue = event.target.value;
    dispatch(onFilter(filterValue));
  };

  const handleMonthChange = (event: { target: { value: string; }; }) => {
    const selectedMonth  = event.target.value;
    console.log(selectedMonth ); 
    dispatch(onMonthFilter(selectedMonth ));
  };

  const handleImportanceChange = (event: { target: { value: string; }; }) => {
    const selectedMonth  = event.target.value;
    console.log(selectedMonth ); 
    dispatch(onImportanceFilter(selectedMonth ));
  };


  return (<>
   <InputBox>
    <InputFilter
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
    
    <InputSelect id="importance" name="importance" onChange={handleImportanceChange}>
        <option value="">--Please choose a Importance-</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
               </InputSelect>

    <InputSelect id="month" name="month" onChange={handleMonthChange}>
        <option value="">--Please choose a Month-</option>
                  <option value="1">January </option>
                  <option value="2">February </option>
                  <option value="3">March </option>
                  <option value="4">April </option>
                  <option value="5">May </option>
                  <option value="6">June </option>
                  <option value="7">July </option>
                  <option value="8">August </option>
                  <option value="9">September </option>
                  <option value="10">October </option>
                  <option value="11">November </option>
                  <option value="12">December </option>
               </InputSelect>
      </InputBox>
    <StyledTodoUl>

    {TODO.map((todo)=>
    <StyledTodoLi  style={
        todo.importance === "High"
          ? { backgroundColor: "red" } 
          : todo.importance === "Medium"
          ? { backgroundColor: "#eb8034" } 
          : todo.importance === "Low"
          ? { backgroundColor: "green" } 
          : {} 
      }><span>{todo.title}</span>
      <StyledDescription>{todo.description}</StyledDescription>
      <TodoModal todo={todo}/>
      </StyledTodoLi>
    )}
    </StyledTodoUl>
    
    </>
  )
}
