import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import wordleService from './wordleService';

const initialState = {
	currentGuess: [],
	prevGuess: [],
	wordle: [], // On success of asyncthunk add to this
	existInWordleLetters: [],
	inCorrectSlotLetters: [],
	message: '',
	isWon: false,
	isLost: false,
	row: 0, // The current row the game is focused on
	wordleLoading: false,
	wordleSuccess: false,
	wordleError: false,
	checkWordLoading: false,
	checkWordSuccess: false,
	checkWordError: false,
};

export const getWordle = createAsyncThunk('wordle/get', async (_, thunkAPI) => {
	try {
		return await wordleService.getWordle();
	} catch (error) {
		const message =
			(error.response && error.response.data && error.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message); // Returns the message as the payload if an error occurs
	}
});

export const checkIfValidWord = createAsyncThunk('wordle/check', async (word, thunkAPI) => {
	try {
		return await wordleService.checkIfValidWord(word);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.data.message) || error.message || error.toString();
		return thunkAPI.rejectWithValue(message); // Returns the message as the payload if an error occurs
	}
});

export const wordleSlice = createSlice({
	name: 'wordle',
	initialState,
	reducers: {
		reset: (state) => initialState,
		pushKey: (state, action) => {
			state.currentGuess.push(action.payload.letter);
		},
		removeKey: (state) => {
			state.currentGuess.pop();
		},
		nextRow: (state) => {
			state.prevGuess = state.currentGuess;
			state.currentGuess = [];
			state.row = state.row + 1;
		},
		resetMessage: (state) => {
			state.message = '';
		},
		invalidWordMessage: (state) => {
			state.message = 'Not a valid Word!';
		},
		isWordle: (state) => {
			state.isWon = true;
			state.message = 'You won!';
		},
		isNotWordle: (state) => {
			state.isLost = true;
			state.message = 'You Lost LOL!';
		},
		pushExistingLetter: (state, action) => {
			state.existInWordleLetters.push(action.payload.letter);
		},
		pushInCorrectSlotLetter: (state, action) => {
			state.inCorrectSlotLetters.push(action.payload.letter);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWordle.pending, (state) => {
				state.wordleLoading = true;
			})
			.addCase(getWordle.fulfilled, (state, action) => {
				state.wordleLoading = false;
				state.wordleSuccess = true;
				state.wordle = action.payload.split('');
			})
			.addCase(getWordle.rejected, (state, action) => {
				state.wordleLoading = false;
				state.wordleError = true;
				state.message = action.payload;
			})
			.addCase(checkIfValidWord.pending, (state) => {
				state.checkWordLoading = true;
			})
			.addCase(checkIfValidWord.fulfilled, (state, action) => {
				state.checkWordLoading = false;
				state.checkWordSuccess = true;
			})
			.addCase(checkIfValidWord.rejected, (state, action) => {
				state.checkWordLoading = false;
				state.checkWordError = true;
				state.message = action.payload;
			});
	},
});

export const {
	reset,
	pushKey,
	removeKey,
	nextRow,
	resetMessage,
	invalidWordMessage,
	isWordle,
	isNotWordle,
	pushExistingLetter,
	pushInCorrectSlotLetter,
} = wordleSlice.actions;

export default wordleSlice.reducer;

// The CorrectInSlot Letters will override the ExistsInSlots Letters
