const fields = document.querySelectorAll("[data-cell]");

function play() {
  clickField();
  checkWin();
}

function checkWin() {}

function clickField() {
  fields.forEach((field) => {
    field.addEventListener("click", (event) => {
      field.classList.add(`x`);
    });
  });
}

play();
