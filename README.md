# Wordle Clone

First iteration of the Wordle clone created with React and React-Redux w/ Redux Toolkit. Consumes the [Random Words](https://rapidapi.com/sheharyar566/api/random-words5/) and the [Word Dictionary](https://rapidapi.com/twinword/api/word-dictionary/) APIs from RapidAPI with Axios in order to get a random word to use for the game. Live at https://wordlecloneiv.netlify.app/ and hosted on [Netlify](https://www.netlify.com/).

![alt text](https://i.imgur.com/JxQG89i.png)

### Built with:

-   [React](https://reactjs.org/)
-   [React Redux](https://react-redux.js.org/)
-   [Axios](https://axios-http.com/)
-   [RapidAPI](https://rapidapi.com/)
-   [Bootstrap](https://getbootstrap.com/)

## Getting Started

1. Install dependencies

    ```bash
    npm install
    ```

2. Create and set environmental variables within .env in root directory

    ```bash
    REACT_APP_GET_RANDOM_HOST = random-words5.p.rapidapi.com
    REACT_APP_GET_RANDOM_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    REACT_APP_GET_WORD_HOST = twinword-word-graph-dictionary.p.rapidapi.com
    REACT_APP_GET_WORD_KEY = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
3. Start development server

    ```bash
    npm start
    ```
