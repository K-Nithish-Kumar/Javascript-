"use strict";

// Selecting Elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0ScoreEl = document.getElementById("current--0");
const current1ScoreEl = document.getElementById("current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting Conditions
let scores, activePlayer, currentScore, playing;
const init = function () {
  
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0ScoreEl.textContent = 0;
  current1ScoreEl.textContent = 0;
  dice.classList.add("hidden");

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1.Generate random
    const random = Math.trunc(Math.random() * 6) + 1;
    console.log(random);

    // 2. Dice Display
    dice.classList.remove("hidden");
    dice.src = `./images/dice-${random}.png`;

    // 3. Check for rolled 1: if true switch to next player
    if (random !== 1) {
      currentScore += random;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch Player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1.Add current score to the active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add("hidden");

      // Finish game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove(".player-active");
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Resetting the game
btnNew.addEventListener("click", init);
