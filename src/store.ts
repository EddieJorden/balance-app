/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './components/tasksSlice';
import userSlice from './components/userSlice';
import userProfileSlice from './components/userProfileSlice';

const rootReducer = {
  tasks: tasksSlice,
  userProfileSlice,
  userSlice,
  // add other reducers here if needed
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
  // reducer: {
  //   userSlice,
  //   userProfileSlice,
  //   tasksSlice,
  // },

});

export default store;
