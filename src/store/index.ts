import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    contacts: searchReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
