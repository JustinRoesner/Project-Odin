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

// starting conditions
let player0score = 0;
player0scoreEl.textContent = 0;
let player1score = 0;
player1scoreEl.textContent = 0;
let currentScore = 0;
diceEl.classList.add('hidden');
let activePlayer = 0;
const scores = [0, 0];

// hide dice
const hideDice = () => {
  if (!diceEl.classList.contains('hidden')) diceEl.classList.add('hidden');
};

// reset game
btnNewEl.addEventListener('click', function () {
  console.log('new game');
  player0score = 0;
  player1score = 0;
  player0scoreEl.textContent = 0;
  player1scoreEl.textContent = 0;

  player0current = 0;
  player1current = 0;
  player0currentEl.textContent = 0;
  player1currentEl.textContent = 0;
  hideDice();
});

// player rolls
btnRollEl.addEventListener('click', function () {
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});

// player holds
btnHoldEl.addEventListener('click', function () {
  console.log('player holds');
});
