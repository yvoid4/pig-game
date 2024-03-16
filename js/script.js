const btnRoll = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const btnNew = document.querySelector(".new");
const dice = document.querySelector(".dice");
const playerOne = document.querySelector(".player-0");
const playerTwo = document.querySelector(".player-1");
const scoreOne = document.querySelector("#score-0");
const scoreTwo = document.querySelector("#score-1");
const currentOne = document.querySelector("#current-0");
const currentTwo = document.querySelector("#current-1");
let activePlayer, current, scores, playing;

const init = () => {
  activePlayer = 0;
  current = 0;
  scores = [0, 0];
  playing = true;
  scoreOne.textContent = 0;
  scoreTwo.textContent = 0;
  currentOne.textContent = 0;
  currentTwo.textContent = 0;
  playerOne.classList.remove("player-winner");
  playerTwo.classList.remove("player-winner");
  playerTwo.classList.remove("player-winner");
  playerOne.classList.remove("player-winner");
};
init();
let = 0;

let = [0, 0];
let = true;

const switchPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  current = 0;
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  playerOne.classList.toggle("player-active");
  playerTwo.classList.toggle("player-active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const random = Math.floor(Math.random() * 6) + 1;
    dice.src = `img/dice-${random}.png`;
    if (random !== 1) {
      current = current + random;
      document.getElementById(`current-${activePlayer}`).textContent = current;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + current;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 100) {
      playing = false;
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  init();
});
