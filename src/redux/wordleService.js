import axios from 'axios';

const getWordle = async () => {
	const options = {
		method: 'GET',
		url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
		params: { count: '2', wordLength: '5' },
		headers: {
			'X-RapidAPI-Host': process.env.REACT_APP_GET_RANDOM_HOST,
			'X-RapidAPI-Key': process.env.REACT_APP_GET_RANDOM_KEY,
		},
	};
	// const response = await axios.request(options);
	// return response.data[0].toUpperCase();

	return 'hello'.toUpperCase();
};

const checkIfValidWord = async (word) => {
	const options = {
		method: 'GET',
		url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
		params: { entry: word },
		headers: {
			'X-RapidAPI-Host': process.env.REACT_APP_GET_WORD_HOST,
			'X-RapidAPI-Key': process.env.REACT_APP_GET_WORD_KEY,
		},
	};

	// const response = await axios.request(options);
	// return response.data[0];

	return true;
};

const wordleService = {
	getWordle,
	checkIfValidWord,
};

export default wordleService;
