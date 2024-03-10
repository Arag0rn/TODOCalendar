import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

interface TodoData {
    id: null;
    title: string;
    position: string;
    description: string;
    completed: boolean;
    month: string;
  }

export const addTodo = createAsyncThunk(
    'todo/add',
    async (newTodo:TodoData, thunkAPI) => {
      console.log(newTodo);
      try {
        const res = await axios.post('/api/todo', newTodo);
        console.log(res)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  

  export const refreshTodo = createAsyncThunk(
    'todo/getAlls',
    async function(_, { rejectWithValue }) {
      try {
        const response = await axios.get(`api/todo/`) 
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  )