/*----- constants -----*/
const WORDS = ['MOON', 'NOVA', 'PLANET', 'ROCKET', 'MILKY WAY',];
const MAX_WRONG_GUESSES = 6;
const toyAudio = new Audio('https://cdn.freesound.org/previews/232/232017_4063700-lq.mp3')

/*----- state variables -----*/
let correctWord;
let wordStatus;
let wrongGuesses;
let winner;
/*----- cached elements  -----*/
const imgResultsEl = document.getElementById('game-result');
const winResultEl = document.querySelector('p');
const wordStatEL = document.querySelector('div');
const allBtn = document.querySelectorAll('main > button');
const playAgainBtn = document.getElementById('play');

/*----- event listeners -----*/
document.querySelector('main').addEventListener('click', handleLetterClick);
playAgainBtn.addEventListener('click', initialize)

/*----- functions -----*/
initialize();

function initialize() {
	correctWord = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase().split("");
	console.log(correctWord, "this is line #26");
	wordStatus = correctWord.map(ltr => ltr === " " ? " " : "_");
	wrongGuesses = [];
	winner = null;
	toyAudio.play();
	render();
}

function handleLetterClick(evt) {
	const letter = evt.target.textContent;
	if (evt.target.tagName !== 'BUTTON' || wrongGuesses.includes(letter) || wordStatus.includes(letter) || winner) return;
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
	toyAudio.play();
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

function render() {
	renderWordStatus();
	renderSpaceMan();
	renderResults();
	renderButton();
}
function renderWordStatus() {
	wordStatEL.textContent = wordStatus.join(' ');
}

function renderSpaceMan() {
	imgResultsEl.src = `spaceman-images/spaceman-${wrongGuesses.length}.jpg`
}

function renderResults() {
	if (winner === "W") {
		winResultEl.innerText = "You Win!!!";
	} else if (winner === "L") {
		winResultEl.innerText = "HAHA YOU LOST";
	} else {
		winResultEl.innerText = `Guesses Remaining: ${MAX_WRONG_GUESSES - wrongGuesses.length}`;
	}
}

function renderButton() {
	allBtn.forEach(function (btn) {
		letter = btn.innerHTML
		if (wrongGuesses.includes(letter)) {
			btn.classList.add('wrong');
		} else if (wordStatus.includes(letter)) {
			btn.classList.add('right');
		} else {
			btn.classList.remove('wrong', 'right');  /*  ask Mario or whoever about the return tmrw */
		}
	});
}

