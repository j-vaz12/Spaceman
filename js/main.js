/*----- constants -----*/
const Words = ['MOON', 'NOVA', 'PLANET', 'ROCKET'];
const MAX_WRONG_GUESSES = 6;
const SPACEMAN_LOOKUP = {
	
}
/*----- state variables -----*/
/*let result;   correct word? Maybe this will come ones I start with the functions   */
let correctWord;
let playerWord; 
let wrongGuesses; 
let winner;

// let correctGuess;  look at what jim said in the gc

/*----- cached elements  -----*/
const imgResultsEl = document.getElementById('game-result');
const guessesRemain = document.querySelector('p');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleEvent)

/*----- functions -----*/
initialize();

function handleEvent(evt) {
	//my guard so that it will on handle evt when clicking in a button 
	if (evt.target.tagName !== 'BUTTON') return; 
	console.log(evt);

	render();
}
function initialize() {
	correctWord = null;
	playerWord = '';
	wrongGuesses = 0;
	winner = playerWord;
	render();
}

// Remember that the render is to visuualoze everyhing or all state om the DOM
function render() {
	renderResults();

	/*  to toggle the play again button also to make the apphabet  buttons un clocalbe */
	renderButton();
}
 
function renderResults() {
	if (playerWord === correctWord) {
		return winner; 
	} else if (playerWord !== correctWord) {
		return wrongGuesses++
	// } else if (wrongGuesses === MAX_WRONG_GUESSES) {
		 
	// } I think i can add this on my evthanndle 
}

function renderButton() {

}

// const imgPath = imgs/spaceman-0${wrongGuesses.length};
