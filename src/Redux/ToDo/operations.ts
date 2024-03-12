import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://todo-calendar-back.vercel.app';

interface TodoData {
    _id?: string;
    importance: string;
    title: string;
    position: string;
    description: string;
    month: string;
    time: string;
  }

export const addTodo = createAsyncThunk(
    'todo/add',
    async (newTodo:TodoData, thunkAPI) => {   
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
        const { _id, title, description, importance, time } = data;   
      try {
        const response = await axios.patch(`api/todo/${_id}`, {
            title,
            description,
            time,
            importance
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  )

  export const deleteTodo = createAsyncThunk(
    'todo/deleteTodo',
    async function(_id: string) {  
      try {
        const response = await axios.delete(`api/todo/${_id}`)
        return response.data
      } catch (error) {
        return (error)
      }
    }
  )

