import { TodoState } from "./slice";

export const selectTodo = (state: { todo: TodoState })=> state.todo.todos;