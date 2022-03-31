import { useState, useEffect } from 'react';
import { getWordle } from '../../redux/wordleSlice';
import { useSelector, useDispatch } from 'react-redux';
import Keyboard from '../Keyboard/Keyboard';
import Guesses from '../Guesses/Guesses';
import { reset } from '../../redux/wordleSlice';

const Game = () => {
	const { wordle, wordleLoading, message, isWon, isLost } = useSelector((state) => state.wordle);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWordle());
	}, []);

	const resetPage = () => {
		window.location.reload(false);
	};

	if (wordleLoading) return <div className="spinner-border" role="status"></div>;

	return (
		<div className="game-container">
			<h1 className="title-container">Wordle</h1>
			<Guesses />
			<Keyboard />
			{/* {wordle && <div>Current Wordle: {wordle}</div>} */}
			{isWon && (
				<>
					<div>You won! Today's Wordle was {wordle}!</div>
					<button className="btn btn-light" onClick={resetPage}>
						RESET
					</button>
				</>
			)}
			{isLost && (
				<>
					<div>You Lost! Today's Wordle was {wordle}!</div>
					<button className="btn btn-light" onClick={resetPage}>
						RESET
					</button>
				</>
			)}
		</div>
	);
};

export default Game;

// Controls whether to allow the player to play the game or not
