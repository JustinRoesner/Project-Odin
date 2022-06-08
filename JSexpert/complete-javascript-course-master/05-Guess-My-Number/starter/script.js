'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

const lostGame = () => {
  document.querySelector('body').style.backgroundColor = '#61090f';
  document.querySelector('.number').style.width = '30rem';
};

const calcHighScore = () => {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // win condition
    displayMessage('Correct Number!!!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    calcHighScore();
  } else {
    if (score > 1) {
      // too high or too low
      guess > secretNumber
        ? displayMessage('Too high!')
        : displayMessage('Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // lost condition
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
      lostGame();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = 20;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
