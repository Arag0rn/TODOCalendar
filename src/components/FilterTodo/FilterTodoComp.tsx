import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "../../Redux/store";
import { useEffect } from "react";
import { refreshTodo } from "../../Redux/ToDo/operations";
import { NavLink } from "react-router-dom";
import { InputFilter, StyledTodoLi, StyledTodoUl } from "./FilterTodoComp.style";
import { onFilter } from "../../Redux/Filter/slice";
import { filteredTodos } from "../../Redux/Filter/selector";




export const FilterTodoComp = () => {


const dispatch = useDispatch() as Dispatch;
const TODO = useSelector(filteredTodos);

console.log(TODO);

useEffect(() => {
    dispatch(refreshTodo());
    
  }, [dispatch]);

  const handleInputChange = (event: { target: { value: string; }; }) => {
    const filterValue = event.target.value;
    console.log(filterValue); 
    dispatch(onFilter(filterValue));
  };

  return (<>
    <NavLink to={"/"} >Calendar</NavLink>
    <InputFilter
        type="text"
        placeholder="Search"
        onChange={handleInputChange}
      />
    <StyledTodoUl>
    {TODO.map((todo)=>
    <StyledTodoLi>{todo.title}</StyledTodoLi>
    )}
    </StyledTodoUl>
    </>
  )
}
