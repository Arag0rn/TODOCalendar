import { AuthState } from '../Auth/slice'; 

export const selectIsLoggedIn = (state: { auth: AuthState })=> state.auth.isLoggedIn;

export const selectUser = (state: { auth: AuthState }) => state.auth.user;

// export const selectUserId = (state: AuthState) => state.user?._id;

export const selectAvatar = (state: { auth: AuthState }) => state.auth.user?.avatarURL;

export const selectIsRefreshing = (state: { auth: AuthState }) => state.auth.isRefreshing;

export const selectIsError = (state: { auth: AuthState }) => state.auth.isError;