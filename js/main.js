/*----- constants -----*/
const WORDS = ['MOON', 'NOVA', 'PLANET', 'ROCKET', 'MILKY WAY'];
const MAX_WRONG_GUESSES = 6;
// const imgPath = imgs/spaceman-0${wrongGuesses.length};

/*----- state variables -----*/
/*let result;   correct word? Maybe this will come ones I start with the functions   */
let correctWord;
let wordStatus;
let wrongGuesses;
let winner;

// let correctGuess;  look at what jim said in the gc

/*----- cached elements  -----*/
const imgResultsEl = document.getElementById('game-result');
const winResultEl = document.querySelector('p');
const rightLetterEl = document.querySelector('div');
/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleLetterClick);

/*----- functions -----*/
initialize();

function initialize() {
	correctWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase().split("");
	console.log(correctWord, "this is line #26");
	wordStatus = correctWord.map(ltr => ltr === " " ? " " : "_");
	console.log(wordStatus)
	/*playerWord = "_".repeat(correctWord.length); */ /* you can also use a for loop to visualize this better for a ex- for (let i = 0; i < correctWord.length; i++) {playerWord += "_";}  */
	wrongGuesses = [];
	winner = null;
	render();

}

function handleLetterClick(evt) {
	const letter = evt.target.textContent;
	if (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter) || wordStatus.includes(letter)) return;
	if (correctWord.includes(letter)) {
		correctWord.forEach(function (ltr, idx) {
			if (ltr === letter) {
				wordStatus[idx] = letter;
			}
		});
	} else {
		wrongGuesses.push(letter);
	}
	winner = updateOutcome();
	render();
}

function updateOutcome() {
	if (!wordStatus.includes('_')) {
		return 'W'
	} else if (wrongGuesses.length >= MAX_WRONG_GUESSES) {
		return 'L'
	} else {
		return null;
	}
}

// Remember that the render is to vizualizing everything or all state om the DOM
function render() {
	renderWordStatus();
	/*  to toggle the play again button also to make the apphabet  buttons un clocalbe */
	renderSpaceMan();
	//renderResults();
	// renderButton();
}
// function render 
function renderWordStatus() {
	rightLetterEl.textContent = wordStatus.join(' ');
}

function renderSpaceMan() {
	// todo change the img source to wronguesses.length src="spaceman-images/spaceman-{wrongGuesses.length}.jpg
	imgResultsEl.src = `spaceman-images/spaceman-${wrongGuesses.length}.jpg`
}

// function renderResults() {  
// 	// todo if game satus is === W change winresults text content to "YOU WIN!!"
// 	// if game satus is === L change winf result to text content `YOU LOSE the correct word is {correct.join("")}`
// 	// else change text content to maxwrong - wronggueses.length 
// 	if () {  

// 	} else if () {

// 	} else {

// 	}
// }

function renderButton() {
//todo cache the elment buttons "main > button" forEach that element 
// letter = button.tectContent or run check
//if wrongguess.included letter change bttuon class name to wrong
// else if word status includes letter change the button class to correct
// else button.class name is epmepty string
}


// const imgPath = imgs/spaceman-0${wrongGuesses.length};

