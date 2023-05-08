/*----- constants -----*/
const allWords = ['Moon', 'Nova', 'Planet', 'Rocket']
const MAX_WRONG_GUESSES = 6

/*----- state variables -----*/
let result; /*  correct word? Maybe this will come ones I start with the functions   */
let correctWord;
let playerWord; /* also as player letter?   */
// let correctGuess;  dont think I needs this if I have the const above 

/*----- cached elements  -----*/
const imgResultsEl = document.getElementById('game-result')
const guessesRemain = document.querySelector('p')
/*----- event listeners -----*/


/*----- functions -----*/


function initialize() {

result = {
	pGuess: " ",
	correctWord: ""

};


	render()
}

function render() {
	renderResults();

}