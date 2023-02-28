'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);
let score = 20;
let highScore = 0;

let audio = document.getElementById('myAudio');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  //NO INPUT
  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  // WRONG INPUT
  else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //CORRECT GUESS
  else if (guess === randomNumber) {
    displayMessage('🎉 Correct Guess!');
    audio.play();
    document.querySelector('.number').textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#bc986a';
    } else {
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#bc986a';
    }
  }
});

//Reset values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  document.querySelector('.score').textContent = score;
  // document.querySelector('.highscore').textContent = 0;
  // console.log('reset');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#659dbd';
});

document
  .querySelector('.resetHighscore')
  .addEventListener('click', function () {
    document.querySelector('.highscore').textContent = '';
  });
