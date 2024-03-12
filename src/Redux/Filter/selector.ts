import { createSelector } from "@reduxjs/toolkit";
import { TodoState } from "../ToDo/slice";
import { FilterState } from "./slice";


export const selectTodo = (state: { todo: TodoState })=> state.todo.todos;

export const selectFilter = (state: { filter: FilterState }) => state.filter.filter;


export const filteredTodos = createSelector(

  [selectTodo, selectFilter],
  (todos, filter) => {
    return todos.filter(todo => todo.title.toLowerCase().includes(filter.toLowerCase()));
  }
);