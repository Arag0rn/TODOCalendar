import { createSlice } from "@reduxjs/toolkit";

export interface FilterState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;

  filter: string;
  monthFilter: string;
  importanceFilter: string;
}

const initialState: FilterState = {
  filter: "",
  monthFilter: "",
  importanceFilter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    onFilter: (state, action) => {
      state.filter = action.payload;
    },
    onMonthFilter: (state, action) => {
      state.monthFilter = action.payload;
    },
    onImportanceFilter: (state, action) => {
      state.importanceFilter = action.payload;
    },
  },
});

export const { onFilter, onMonthFilter, onImportanceFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;