import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;

  filter: string;
}

const initialState: FilterState = {
    filter: '',
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { onFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;