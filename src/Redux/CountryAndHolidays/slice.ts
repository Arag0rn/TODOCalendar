import { createSlice } from '@reduxjs/toolkit';
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
    });

  },
});


export const holidaysReducer = holidaysSlice.reducer;