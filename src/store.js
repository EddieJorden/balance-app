import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './components/userName/nameSlice';

export const store = configureStore({
	reducer: {
		nameSlice: nameSlice
	},
})