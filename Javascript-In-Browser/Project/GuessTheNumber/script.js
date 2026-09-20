"use strict";

/*
// selecting elements
console.log(document.querySelector('.message').textContent);

// Changing elements text content
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 22;

// Get the value of the input element
document.querySelector('.guess').value = 13;
*/

// Actual game logic
// Below Math.random() provides the value between 0 and 1 like 0.89787 to remove the decimal I'm using Math.trunc() and to get a value from 0 to 20 I multiply by 20 and add 1 because of getting number between 1 and 20
// I declared this secretNumber at outside of the handler because we need a one secret number per game
// To create a new secret number whenever the user clicks the again button add a eventlistener for it
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  // Note that input field always returns the input as a string
  // So always use Number() method to change the type of the field whenever it needs.
  const guess = Number(document.querySelector(".guess").value);

  // 1. First always think about the base case. Here if user doesn't give any value in the input field then the message start guessing is change into No number
  // When user gives no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number";

  // When user wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

  // Refactoring our code 
  } else if(guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too High" : '📉 Too Low';
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😭 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  
  
  
  
 // When user guess is too high  
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  // // When user guess is too low 
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too Low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😭 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

// To create a new secret number whenever the user clicks the again button, create a new eventlistener for it
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})


