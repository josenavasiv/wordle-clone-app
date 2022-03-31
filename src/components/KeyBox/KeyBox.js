import { useDispatch, useSelector } from 'react-redux';
import {
	pushKey,
	removeKey,
	nextRow,
	resetMessage,
	invalidWordMessage,
	isWordle,
	pushExistingLetter,
	pushInCorrectSlotLetter,
	pushUsedUpLetter,
} from '../../redux/wordleSlice';
import { checkIfValidWord } from '../../redux/wordleSlice';

const KeyBox = ({ inputsLeft, setInputsLeft, index, setIndex, letter, existsInWordle, inCorrectSlot, usedLetter }) => {
	const { currentGuess, wordle } = useSelector((state) => state.wordle);
	const dispatch = useDispatch();

	const checkIfWordle = (guess, word) => {
		return JSON.stringify(guess) === JSON.stringify(word);
	};

	const addLetterIfExistsInWordle = () => {
		currentGuess.forEach((char, i) => {
			if (wordle[i] === char) dispatch(pushInCorrectSlotLetter(char));
			else if (wordle.includes(char)) {
				console.log('shoved');
				console.log(char);
				dispatch(pushExistingLetter(char));
			} else {
				dispatch(pushUsedUpLetter(char));
			}
		});
	};

	const handleClick = () => {
		if (letter === 'ENTER') {
			if (index === 5 && inputsLeft === 0) {
				// console.log('enter key pressed');
				dispatch(resetMessage());
				if (!dispatch(checkIfValidWord())) {
					// Dispatch If Current Guess is a Word
					// (if not word won't let user input it)
					dispatch(invalidWordMessage());
				} else if (checkIfWordle(currentGuess, wordle)) {
					// Dispatch If Current Guess is Correct
					dispatch(nextRow());
					dispatch(isWordle());
				} else {
					addLetterIfExistsInWordle();
					dispatch(nextRow());
					setIndex(0);
					setInputsLeft(5);
				}
			}
		} else if (letter === '«') {
			if (index > 0 && index <= 5) {
				// console.log('delete key pressed');
				dispatch(removeKey());
				setInputsLeft(inputsLeft + 1);
				setIndex(index - 1);
			}
		} else {
			if (inputsLeft >= 1) {
				// console.log(`${letter} pressed`);
				dispatch(pushKey({ letter }));
				setInputsLeft(inputsLeft - 1);
				setIndex(index + 1);
			}
		}
	};

	if (inCorrectSlot) {
		return (
			<button className="btn btn-success" onClick={handleClick}>
				{letter}
			</button>
		);
	}

	if (existsInWordle) {
		return (
			<button className="btn btn-warning" onClick={handleClick}>
				{letter}
			</button>
		);
	}

	if (usedLetter) {
		return (
			<button className="btn btn-secondary" onClick={handleClick}>
				{letter}
			</button>
		);
	}

	return (
		<button className="btn btn-light keyboard-tile" onClick={handleClick}>
			{letter}
		</button>
	);
};

export default KeyBox;

// All the game flow reducers are called from here
