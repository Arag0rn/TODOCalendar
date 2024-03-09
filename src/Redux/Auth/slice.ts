import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './operations';
// import {
//   logIn,
//   logOut,
//   refreshUser,
//   register,
//   restoreUserPass,
//   updateAvatar,
//   updateDailyNormal,
//   updateUserData,
// } from './operations';


type InitState = {
    isLoggedIn: boolean;
    isRefreshing: boolean;
    isError: boolean;
    token: string | null;
    user: {
        email: string;
    } | null;
};

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
} as InitState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUserData: () => initialState,
    google: (state, action) => ({
      ...initialState,
      token: action.payload,
    }),
  },

  extraReducers: builder => {
    //fullfilled
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isRefreshing = false;
      state.isError = false;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isError = false;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.isError = false;
    });
    //pending
    builder.addCase(register.pending, state => {
      state.isRefreshing = true;
      state.isError = false;
    });
    builder.addCase(logIn.pending, state => {
      state.isRefreshing = true;
      state.isError = false;
    });
    //rejected
    builder.addCase(logIn.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
  },
});

export const { clearUserData , google} = authSlice.actions;
export const authReducer = authSlice.reducer;