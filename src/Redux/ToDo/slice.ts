import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addTodo, editTodo, editTodoPosition, refreshTodo } from './operations';

export interface TodoState {
  todos: Array<{
    title: string;
    position: string;
    description: string;
    completed: boolean;
    month: string;
    time: string;
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
      time: ''
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
      toast.success('Registration successful!');
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

//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//       state.isError = false;
//       toast.success('Login successful!');
//     });
//     builder.addCase(logOut.fulfilled, (state) => {
//       state.user = { email: null, avatarURL: ""};
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isRefreshing = false;
//       state.isError = false;
//     });
//     builder.addCase(refreshUser.fulfilled, (state, action) => {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isRefreshing = false;
//        console.log(action);
//     })
//     //pending
//     builder.addCase(register.pending, state => {
//       state.isRefreshing = true;
//       state.isError = false;
//     });
//     builder.addCase(logIn.pending, state => {
//       state.isRefreshing = true;
//       state.isError = false;
//     });
//     //rejected
//     builder.addCase(logIn.rejected, (state) => {
//       state.isRefreshing = false;
//       toast.error(`Some error, try again`);
//     });
//     builder.addCase(register.rejected, (state) => {
//       state.isRefreshing = false;
//       toast.error(`Some error, try again`);
//     });
//     builder.addCase(refreshUser.rejected, (state) => {
//       state.isRefreshing = false;
//       toast.error(`Some error, try again`);
//     })
  },
});


export const todoReducer = todoSlice.reducer;