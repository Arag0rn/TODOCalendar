import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

interface TodoData {
    _id?: string;
    title: string;
    position: string;
    description: string;
    completed: boolean;
    month: string;
    time: string;
  }

export const addTodo = createAsyncThunk(
    'todo/add',
    async (newTodo:TodoData, thunkAPI) => {
      console.log(newTodo);
      
      try {
        const res = await axios.post('/api/todo', newTodo);
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
        const response = await axios.get(`/api/todo`) 
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error)
      }
    }
  )

  export const editTodoPosition = createAsyncThunk(
    'todo/editPosition',
    async (data:TodoData, thunkAPI) => {
        const { _id, position } = data;   
      try {
        const response = await axios.patch(`api/todo/${_id}`, {
            position,
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

  export const editTodo = createAsyncThunk(
    'todo/editTodo',
    async (data:TodoData, thunkAPI) => {
        const { _id, title, description, time } = data;   
      try {
        const response = await axios.patch(`api/todo/${_id}`, {
            title,
            description,
            time
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )