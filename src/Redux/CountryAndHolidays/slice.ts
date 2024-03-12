import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { GetPublicHolidays } from './apiOperatins';


export interface holidaysState {
  holidays: Array<{
    date: string,
    localName: string,
    name: string,
  }>;
  isLoading: boolean,
}

type InitState = holidaysState;

const initialState: InitState = {
  holidays: [
    {
      date: '',
      localName: '',
      name: '',
    },
  ],
  isLoading: false,
};

const holidaysSlice = createSlice({
  name: 'holidays',
  initialState,
  
  reducers: {},
  extraReducers: (builder) => {
    // fulfilled
    builder.addCase(GetPublicHolidays.fulfilled, (state, action) => {
    state.holidays = action.payload;
      toast.success('Registration successful!');
    });

    // builder.addCase(refreshTodo.fulfilled, (state, action) => {
    //   state.todos = [...action.payload];
    // });
    // builder.addCase(editTodoPosition.fulfilled, (state, action) => {
    //   const updatedTodo = action.payload;
    //   const existingIndex = state.todos.findIndex(todo => todo.title === updatedTodo.title);
    //   if (existingIndex !== -1) {
    //     state.todos[existingIndex] = updatedTodo;
    //   } else {
    //     state.todos.push(updatedTodo);
    //   }
    //   state.isLoading = false;
    // });
    // builder.addCase(editTodo.fulfilled, (state, action) => {
    //     const updatedTodo = action.payload;
    //     const index = state.todos.findIndex((todo) => todo._id === updatedTodo._id);
    //     if (index !== -1) {
    //       state.todos[index] = { ...state.todos[index], ...updatedTodo };
    //     }
      
    //     state.isLoading = false;
    //   });
    //   builder.addCase(editTodoPosition.pending, (state) => {
    //     state.isLoading = true;
    //   });

  },
});


export const holidaysReducer = holidaysSlice.reducer;