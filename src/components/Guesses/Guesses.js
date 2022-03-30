import { useState, useEffect } from 'react';
import GuessRow from '../GuessRow/GuessRow';
import { useDispatch, useSelector } from 'react-redux';
import { isNotWordle } from '../../redux/wordleSlice';

const Guesses = () => {
	const { currentGuess, row, prevGuess, wordleLoading } = useSelector((state) => state.wordle);
	const dispatch = useDispatch();

	const [row0, setRow0] = useState([]);
	const [row1, setRow1] = useState([]);
	const [row2, setRow2] = useState([]);
	const [row3, setRow3] = useState([]);
	const [row4, setRow4] = useState([]);
	const [row5, setRow5] = useState([]);

	useEffect(() => {
		switch (row) {
			case 1:
				setRow0(prevGuess);
				break;
			case 2:
				setRow1(prevGuess);
				break;
			case 3:
				setRow2(prevGuess);
				break;
			case 4:
				setRow3(prevGuess);
				break;
			case 5:
				setRow4(prevGuess);
				break;
			case 6:
				setRow5(prevGuess);
				dispatch(isNotWordle());
				break;
			default:
		}
	}, [row]);

	const resetRows = () => {
		setRow0([]);
		setRow1([]);
		setRow2([]);
		setRow3([]);
		setRow4([]);
		setRow5([]);
	};

	if (row === 0)
		return (
			<>
				<GuessRow word={currentGuess} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
			</>
		);
	else if (row === 1)
		return (
			<>
				<GuessRow word={row0} colors={true} />
				<GuessRow word={currentGuess} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
			</>
		);
	else if (row === 2)
		return (
			<>
				<GuessRow word={row0} colors={true} />
				<GuessRow word={row1} colors={true} />
				<GuessRow word={currentGuess} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
			</>
		);
	else if (row === 3)
		return (
			<>
				<GuessRow word={row0} colors={true} />
				<GuessRow word={row1} colors={true} />
				<GuessRow word={row2} colors={true} />
				<GuessRow word={currentGuess} />
				<GuessRow word={[]} filler={true} />
				<GuessRow word={[]} filler={true} />
			</>
		);
	else if (row === 4)
		return (
			<>
				<GuessRow word={row0} colors={true} />
				<GuessRow word={row1} colors={true} />
				<GuessRow word={row2} colors={true} />
				<GuessRow word={row3} colors={true} />
				<GuessRow word={currentGuess} />
				<GuessRow word={[]} filler={true} />
			</>
		);
	else if (row === 5)
		return (
			<>
				<GuessRow word={row0} colors={true} />
				<GuessRow word={row1} colors={true} />
				<GuessRow word={row2} colors={true} />
				<GuessRow word={row3} colors={true} />
				<GuessRow word={row4} colors={true} />
				<GuessRow word={currentGuess} />
			</>
		);
	else {
		return (
			<>
				<GuessRow word={row0} colors={true} />
				<GuessRow word={row1} colors={true} />
				<GuessRow word={row2} colors={true} />
				<GuessRow word={row3} colors={true} />
				<GuessRow word={row4} colors={true} />
				<GuessRow word={row5} colors={true} />
			</>
		);
	}
};

export default Guesses;

// Handles guessing and row content with useState
// Provides the appropriate props in order to show a proper gried
