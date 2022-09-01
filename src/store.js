/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './components/userSlice';

export const store = configureStore({
  reducer: {
    userSlice,
  },
});
