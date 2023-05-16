let bigText = document.querySelector(".textArea-big");
let smallText = document.querySelector(".textArea-small");
let blinkBar = document.querySelector(".bar");
let enteredValue1 = "";
let enteredValue2 = "";
let catchSymbol = "";
let show = 0;

function getNumbers(e) {
  enteredValue1 += e;
  bigText.innerHTML += e;
  if (enteredValue1.length > 14) {
    bigText.style.fontSize = "24px";
  }
  if (enteredValue1.length > 20) {
    smallText.innerHTML = "";
    enteredValue1 = "";
    enteredValue2 = "";
    alert("Número de caracteries excedido!");
    bigText.innerHTML = "";
    bigText.style.fontSize = "35px";
  }
  blink();
}
function account(e) {
  if (catchSymbol !== "") {
    enteredValue2 = bigText.innerHTML;
    bigText.innerHTML = " " + enteredValue2 + "  " + e + " ";
  } else if (catchSymbol.length === 0) {
    enteredValue2 = enteredValue1;
    bigText.innerHTML = enteredValue2 + " " + e + " ";
    enteredValue1 = "";
    catchSymbol = e;
  }
}
function calculate() {
  smallText.innerHTML = bigText.innerHTML;
  switch (catchSymbol) {
    case "+":
      show = Number(enteredValue2) + Number(enteredValue1);
      break;
    case "-":
      show = Number(enteredValue2) - Number(enteredValue1);
      break;
    case "*":
      show = Number(enteredValue2) * Number(enteredValue1);
      break;
    case "/":
      show = Number(enteredValue2) / Number(enteredValue1);
      break;
    case "%":
      show = (Number(enteredValue2) / 100) * Number(enteredValue1);
      break;
  }
  bigText.innerHTML = show.toString();
  enteredValue1 = show.toString();
  catchSymbol = "";
}
function clean(w) {
  if (w == "clear") {
    bigText.innerHTML = "";
    smallText.innerHTML = "";
    enteredValue1 = "";
  } else if (w == "CE") {
    var del = enteredValue1.slice(-1);
    bigText.innerHTML = enteredValue1.replace(del, "");
    enteredValue1 = bigText.innerHTML;
  }
  blink();
}
function blink() {
  if (bigText.innerHTML == "") {
    blinkBar.classList.remove("show");
  } else {
    blinkBar.classList.add("show");
  }
}