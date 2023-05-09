/*----- constants -----*/
const WORDS = ['MOON', 'NOVA', 'PLANET', 'ROCKET'];
const MAX_WRONG_GUESSES = 6;
// const imgPath = imgs/spaceman-0${wrongGuesses.length};

/*----- state variables -----*/
/*let result;   correct word? Maybe this will come ones I start with the functions   */
let correctWord;
let playerWord;
let wrongGuesses;
let winner;

// let correctGuess;  look at what jim said in the gc

/*----- cached elements  -----*/
const imgResultsEl = document.getElementById('game-result');
const guessesRemainEl = document.querySelector('p');
const rightLetterEl = document.querySelector('div')
/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleLetterClick);

/*----- functions -----*/
initialize();

function handleLetterClick(evt) {
	//my guard so that it will on handle evt when clicking in a button 
	if (evt.target.tagName !== 'BUTTON') return;
	// I need to make it so that the letter variable is set to whatever button the player picks
	const letter = evt.target.innerText;
	if (correctWord.includes(letter)) {
		return playerWord;
	} else {
		// wrongGuesses.push(...)
	}
	render();
}
function initialize() {
	correctWord = WORDS[Math.floor(Math.random() * WORDS.length)];
	playerWord = "_".repeat(correctWord.length);
	wrongGuesses = [];
	winner = null;
	render();
}

function correctLtr() {
	for (let i = 0; i < correctWord.length; i++) {
		if (playerWord === correctWord[i]) {
			return playerWord += correctWord
		} else {
			wrongGuesses.push()
		}
	}
}

// function putLetter(letter) {
// 	let updatedLetter = '';
// 	for (let i = 0; i < correctWord.length; i++) {
// 		if (correctWord[i] === letter) {
// 			updatedLetter = updatedLetter + letter;
// 		} else {
// 			updatedLetter = updatedLetter + playerWord
// 		}
// 	}
// 	playerWord = updatedLetter;
// }

// Remember that the render is to vizualizing everything or all state om the DOM
function render() {
	renderResults();
	/*  to toggle the play again button also to make the apphabet  buttons un clocalbe */
	renderButton();
}
// function render 
function renderResults() {
	// playerWord = correctWord.length
	rightLetterEl.innerText = playerWord;
	

}

function renderButton() {

}
// const imgPath = imgs/spaceman-0${wrongGuesses.length};

