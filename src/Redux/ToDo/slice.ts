import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addTodo, refreshTodo } from './operations';

export interface TodoState {
  todos: Array<{
    id: null;
    title: string;
    position: number;
    description: string;
    completed: boolean;
  }>;
}

type InitState = TodoState;

const initialState: InitState = {
  todos: [
    {
      id: null,
      title: '',
      description: '',
      position: 0,
      completed: false,
    },
  ],
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