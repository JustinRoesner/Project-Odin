'use strict';

// selecting elements
// bg lighting
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// big score
const player0scoreEl = document.querySelector('#score--0');
const player1scoreEl = document.querySelector('#score--1');
// current score
const player0currentEl = document.querySelector('#current--0');
const player1currentEl = document.querySelector('#current--1');
// dice picture
const diceEl = document.querySelector('.dice');
// buttons
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');

let player0score, player1score, currentScore, activePlayer, scores, playing;

const init = function () {
  // starting conditions
  player0score = 0;
  player1score = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  player0scoreEl.textContent = 0;
  player1scoreEl.textContent = 0;
  player0currentEl.textContent = 0;
  player1currentEl.textContent = 0;
  diceEl.classList.add('hidden');
  console.log('new game');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// hide dice
const hideDice = () => {
  if (!diceEl.classList.contains('hidden')) diceEl.classList.add('hidden');
};

// reset game
btnNewEl.addEventListener('click', init);

// player rolls
btnRollEl.addEventListener('click', function () {
  if (playing) {
    console.log('player rolls');
    // generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    // check for rolled 1
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// player holds
btnHoldEl.addEventListener('click', function () {
  if (playing) {
    console.log('player holds');
    // add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player's score is >= 100
    // won the game
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});
