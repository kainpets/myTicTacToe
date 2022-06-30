const xClass = "x";
const oClass = "o";
const fields = document.querySelectorAll("[data-cell]");
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
]
let xTurn;

fields.forEach((field) => {
  field.addEventListener("click", main, { once: true });
});

function main(event) {
  const field = event.target; // whatever was clicked
  const currentClass = xTurn ? oClass : xClass; // appropriate class to apply
  placeMark(field, currentClass);
  switchTurns();
}

function placeMark(field, currentClass) {
  field.classList.add(currentClass);
}

function switchTurns() {
  xTurn = !xTurn;
}
