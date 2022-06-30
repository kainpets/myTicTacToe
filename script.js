const xClass = "x";
const oClass = "o";
const fields = document.querySelectorAll("[data-cell]");
let xTurn;

fields.forEach((field) => {
  field.addEventListener("click", main, { once: true });
});

function main(event) {
  const field = event.target; // whatever was clicked
  const currentClass = xTurn ? xClass : oClass; // appropriate class to apply
  placeMark(field, currentClass);
  switchTurns();
}

function placeMark(field, currentClass) {
  field.classList.add(currentClass);
}

function switchTurns() {
  xTurn = !xTurn;
}
