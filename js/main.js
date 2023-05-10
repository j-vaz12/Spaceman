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
const guessesRemainEl = document.querySelector('p');
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
	//my guard so that it will on handle evt when clicking in a button 
	if (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter) || wordStatus.includes(letter)) return;
	// I need to make it so that the letter variable is set to whatever button the player picks
	if (correctWord.includes(letter)) {
		correctWord.forEach(function (ltr, idx) {
			if (ltr === letter) {
				wordStatus[idx] = letter;
			} else {
				wrongGuesses.push(letter);  /*  this code is broken: not displaying wrong words to the array  */
			}
		});
	}
	updateOutcome();
	render();
}

function updateOutcome() {
	if (wordStatus === correctWord) {
		/* winner =   I know this has more to it  */
	} else if (wordStatus.length > MAX_WRONG_GUESSES) {
		/*   assing 'L' to outcome   */
	} else {
		return null;
	}
}

// Remember that the render is to vizualizing everything or all state om the DOM
function render() {
	renderResults();
	/*  to toggle the play again button also to make the apphabet  buttons un clocalbe */
	// renderButton();
}
// function render 
const imgPath = imgs/spaceman-0${wrongGuesses.length};
function renderResults() {
	rightLetterEl.textContent = wordStatus.join(' ');
	imgResultsEl.src = imgPath;
	
}

function renderButton() {
	
}


// const imgPath = imgs/spaceman-0${wrongGuesses.length};

