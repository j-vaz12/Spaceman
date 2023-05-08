/*----- constants -----*/
const Words = ['MOON', 'NOVA', 'PLANET', 'ROCKET'];
const MAX_WRONG_GUESSES = 6;

/*----- state variables -----*/
/*let result;   correct word? Maybe this will come ones I start with the functions   */
let correctWord;
let playerWord; 
let wrongGuesses; 
let wiiner;
/* also as player letter?   */
// let correctGuess;  dont think I needs this if I have the const above 

/*----- cached elements  -----*/
const imgResultsEl = document.getElementById('game-result');
const guessesRemain = document.querySelector('p');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleEvent)

/*----- functions -----*/
initialize();

function handleEvent(evt) {
	// evt.target = 'main'	
	console.log(evt);

	render();
}
function initialize() {
	correctWord = null;
	playerWord = '';
	wrongGuesses = null;
	wiiner = null;
	render();
}

function render() {
	// renderResults();
	// renderButton();
}

// const imgPath = imgs/spaceman-0${wrongGuesses.length};
