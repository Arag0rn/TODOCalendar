import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addTodo, deleteTodo, editTodo, editTodoPosition, refreshTodo } from './operations';

export interface TodoState {
  todos: Array<{
    title: string;
    position: string;
    description: string;
    completed: boolean;
    month: string;
    time: string;
    importance: string;
    _id?: string;
  }>;
  isLoading: boolean,
}

type InitState = TodoState;

const initialState: InitState = {
  todos: [
    {
      title: '',
      description: '',
      position: '',
      completed: false,
      month: '',
      time: '',
      importance: '',
    },
  ],
  isLoading: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  
  reducers: {},
  extraReducers: (builder) => {
    // fulfilled
    builder.addCase(addTodo.fulfilled, (state, action) => {
    state.todos.push(action.payload);
    });

    builder.addCase(refreshTodo.fulfilled, (state, action) => {
      state.todos = [...action.payload];
    });
    builder.addCase(editTodoPosition.fulfilled, (state, action) => {
      const updatedTodo = action.payload;
      const existingIndex = state.todos.findIndex(todo => todo.title === updatedTodo.title);
      if (existingIndex !== -1) {
        state.todos[existingIndex] = updatedTodo;
      } else {
        state.todos.push(updatedTodo);
      }
      state.isLoading = false;
    });
    builder.addCase(editTodo.fulfilled, (state, action) => {
        const updatedTodo = action.payload;
        const index = state.todos.findIndex((todo) => todo._id === updatedTodo._id);
        if (index !== -1) {
          state.todos[index] = { ...state.todos[index], ...updatedTodo };
        }
        state.isLoading = false;
      });
      builder.addCase(editTodoPosition.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(deleteTodo.fulfilled, (state, action ) => {
        state.todos = state.todos.filter(todo => todo._id !== action.meta.arg);
        toast.success('Todo was deleted!');
        state.isLoading = false;
      });
  },
});



export const todoReducer = todoSlice.reducer;