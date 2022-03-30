import React from 'react';

const GuessLetter = ({ letter, existsInWordle, inCorrectSlot }) => {
	// Can render with class btn-warning if letter in wordle
	// Can render with class btn-success if letter in right index of wordle

	if (inCorrectSlot) return <div className="tile btn-success">{letter}</div>;
	else if (existsInWordle) return <div className="tile btn-warning ">{letter}</div>;
	else return <div className="tile ">{letter}</div>;
};

export default GuessLetter;
