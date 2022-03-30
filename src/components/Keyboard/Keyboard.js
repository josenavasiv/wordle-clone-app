import KeyBox from '../KeyBox/KeyBox';
import { useState } from 'react';

const Keyboard = () => {
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
			{letters.map((letter) => (
				<KeyBox
					key={letter}
					letter={letter}
					inputsLeft={inputsLeft}
					index={index}
					setInputsLeft={setInputsLeft}
					setIndex={setIndex}
				/>
			))}
		</div>
	);
};

export default Keyboard;
