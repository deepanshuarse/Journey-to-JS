let calculation = localStorage.getItem("calculation") || "";

showOutput();

function updateCalculation(value) {
  calculation += value;

  localStorage.setItem("calculation", calculation);
}

function showOutput() {
  document.querySelector(".js-output").innerHTML = calculation;

  if (calculation === "") {
    document.querySelector(".js-output").innerHTML = "clear";
  }
}
