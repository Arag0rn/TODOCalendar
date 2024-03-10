import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';
import { toast } from 'react-toastify';

export interface AuthState {
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isError: boolean;
  token: string | null;
  user: {
    email: string | null;
    avatarURL: string;
  } | null;
}

type InitState = AuthState;  

const initialState: InitState = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUserData: () => initialState,
  },

  extraReducers: builder => {
    //fullfilled
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isRefreshing = false;
      state.isError = false;
      toast.success('Registration successful!');
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isError = false;
      toast.success('Login successful!');
    });
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = { email: null, avatarURL: ""};
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.isError = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
       console.log(action);
    })
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
    builder.addCase(logIn.rejected, (state) => {
      state.isRefreshing = false;
      toast.error(`Some error, try again`);
    });
    builder.addCase(register.rejected, (state) => {
      state.isRefreshing = false;
      toast.error(`Some error, try again`);
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
      toast.error(`Some error, try again`);
    })
  },
});

export const { clearUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;