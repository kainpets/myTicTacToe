const xClass = "x";
const oClass = "o";
const fields = document.querySelectorAll("[data-cell]");
const winMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.getElementById("winningMessage");
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];
let xTurn;

fields.forEach((field) => {
  field.addEventListener("click", main, { once: true });
});

function main(event) {
  const field = event.target; // whatever was clicked
  const currentPlayer = xTurn ? oClass : xClass; // appropriate class to apply
  placeMark(field, currentPlayer);
  if (checkWin(currentPlayer)) {
    //checks for winner by looking at current player
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    switchTurns();
  }
}

function endGame(draw) {
  if (draw) {
    winMessageTextElement.innerText = "Draw!";
  } else {
    winMessageTextElement.innerText = `${xTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessage.classList.add("show");
}

function isDraw() {
  return [...fields].every(field => {
    return field.classList.contains(xClass || field.classList.contains(oClass))
  })
}

function placeMark(field, currentPlayer) {
  field.classList.add(currentPlayer);
}

function switchTurns() {
  xTurn = !xTurn;
}

function checkWin(currentPlayer) {
  return winConditions.some((combination) => {
    return combination.every((index) => {
      return fields[index].classList.contains(currentPlayer);
    });
  });
}
