import { createSelector } from "@reduxjs/toolkit";
import { TodoState } from "../ToDo/slice";
import { FilterState } from "./slice";

export const selectTodo = (state: { todo: TodoState }) => state.todo.todos;
export const selectFilter = (state: { filter: FilterState }) => state.filter.filter;
export const selectMonth = (state: { filter: FilterState }) => state.filter.monthFilter;
export const selectImportance = (state: { filter: FilterState }) => state.filter.importanceFilter;

export const filteredTodos = createSelector(
  [selectTodo, selectFilter, selectMonth, selectImportance],
  (todos, filter, monthFilter, importanceFilter) => {
    const filteredByMonth = todos.filter(todo => todo.month.includes(monthFilter));
    const filteredByImportance = filteredByMonth.filter(todo => todo.importance.includes(importanceFilter));
    return filteredByImportance.filter(todo => todo.title.toLowerCase().includes(filter.toLowerCase()));
  }
);