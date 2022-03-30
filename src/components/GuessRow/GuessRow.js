import GuessLetter from '../GuessLetter/GuessLetter';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const createTrackerObject = (wordArray) => {
	const trackObj = {};
	for (const letter of wordArray) {
		if (letter in trackObj) trackObj[letter] += 1;
		else trackObj[letter] = 1;
	}
	// console.log(trackObj);
	return trackObj;
};

const GuessRow = ({ word, filler, colors }) => {
	const { wordle } = useSelector((state) => state.wordle);

	let wordleLetterTracker = createTrackerObject(wordle);
	useEffect(() => {
		wordleLetterTracker = createTrackerObject(wordle);
	}, [wordle]);

	useEffect(() => {
		letterChecker();
	}, [word]);

	const letterChecker = () => {
		word.forEach((x, i) => {
			if (wordle[i] === x) {
				wordleLetterTracker[x] -= 1;
			}
		});
	};

	let fillers_remaining = 5;

	if (word && !filler) {
		fillers_remaining = 5 - word.length;
		// console.log('fillers_remaining', fillers_remaining);
		// Using the current word's length to see how many filler boxes are needed
	}

	if (filler)
		return (
			<div className="tile-container">
				<div>
					<GuessLetter letter=" " />
					<GuessLetter letter=" " />
					<GuessLetter letter=" " />
					<GuessLetter letter=" " />
					<GuessLetter letter=" " />
				</div>
			</div>
		);

	// Animations will play after the game moves onto the next row
	if (colors) {
		letterChecker(); // Need to rerun func
		return (
			<div className="tile-container">
				<div>
					{word.map((char, index) =>
						wordle[index] === char ? (
							<GuessLetter key={index} letter={char} inCorrectSlot={true} />
						) : wordleLetterTracker[char] > 0 ? (
							<GuessLetter key={index} letter={char} existsInWordle={true} />
						) : (
							<GuessLetter key={index} letter={char} />
						)
					)}
					{Array.from(Array(fillers_remaining)).map((filler_keybox, index) => (
						<GuessLetter letter=" " key={index} />
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="tile-container">
			<div>
				{word.map((char, index) => (
					<GuessLetter key={index} letter={char} />
				))}
				{Array.from(Array(fillers_remaining)).map((filler_keybox, index) => (
					<GuessLetter letter=" " key={index} />
				))}
			</div>
		</div>
	);
};

export default GuessRow;

// Fills in the remaining amount of filler keyboxes required

// {word.map((char, index) =>
// 	wordle.includes(char) ? (
// 		<GuessLetter key={index} letter={char} existsInWordle={true} />
// 	) : (
// 		<GuessLetter key={index} letter={char} />
// 	)
