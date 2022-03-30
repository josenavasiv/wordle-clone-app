import KeyBox from '../KeyBox/KeyBox';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Keyboard = () => {
	const { existInWordleLetters, inCorrectSlotLetters, usedUpLetters } = useSelector((state) => state.wordle);

	const letters = [
		'Q',
		'W',
		'E',
		'R',
		'T',
		'Y',
		'U',
		'I',
		'O',
		'P',
		'A',
		'S',
		'D',
		'F',
		'G',
		'H',
		'J',
		'K',
		'L',
		'ENTER',
		'Z',
		'X',
		'C',
		'V',
		'B',
		'N',
		'M',
		'«',
	];

	const [inputsLeft, setInputsLeft] = useState(5);
	const [index, setIndex] = useState(0);
	// console.log('inputsLeft', inputsLeft);
	// console.log('index', index);

	return (
		<div className="key-container">
			{letters.map((letter) =>
				inCorrectSlotLetters.includes(letter) ? (
					<KeyBox
						key={letter}
						letter={letter}
						inputsLeft={inputsLeft}
						index={index}
						setInputsLeft={setInputsLeft}
						setIndex={setIndex}
						inCorrectSlot={true}
					/>
				) : existInWordleLetters.includes(letter) ? (
					<KeyBox
						key={letter}
						letter={letter}
						inputsLeft={inputsLeft}
						index={index}
						setInputsLeft={setInputsLeft}
						setIndex={setIndex}
						existsInWordle={true}
					/>
				) : usedUpLetters.includes(letter) ? (
					<KeyBox
						key={letter}
						letter={letter}
						inputsLeft={inputsLeft}
						index={index}
						setInputsLeft={setInputsLeft}
						setIndex={setIndex}
						usedLetter={true}
					/>
				) : (
					<KeyBox
						key={letter}
						letter={letter}
						inputsLeft={inputsLeft}
						index={index}
						setInputsLeft={setInputsLeft}
						setIndex={setIndex}
					/>
				)
			)}
		</div>
	);
};

export default Keyboard;

// Need to add in-line conditional into JSX within the return
// Pass in the existsInWordle and inCorrectSlot Bools to the keybox
