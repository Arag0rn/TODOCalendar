import { configureStore } from "@reduxjs/toolkit";
import { authReducer, AuthState } from "./Auth/slice";

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { todoReducer } from "./ToDo/slice";
import { holidaysReducer } from "./CountryAndHolidays/slice";
import { filterReducer } from "./Filter/slice";



const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({

  reducer: {
    auth: persistReducer<AuthState>(authPersistConfig, authReducer),
    todo: todoReducer,
    holidays: holidaysReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

export const persistor = persistStore(store);

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
