import { configureStore } from '@reduxjs/toolkit';
import wordleReducer from '../redux/wordleSlice';

export const store = configureStore({
	reducer: {
		wordle: wordleReducer,
	},
});
