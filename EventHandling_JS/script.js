function BulbON() {
  document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function BulbOFF() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}

function BulbRed() {
  document.getElementById("bulb1").style.backgroundColor = "Red";
}
function BulbGreen() {
  document.getElementById("bulb1").style.backgroundColor = "Green";
}
function BulbBlue() {
  document.getElementById("bulb1").style.backgroundColor = "Blue";
}
//

function BulbBlack() {
  document.getElementById("bulb1").style.backgroundColor = "Black";
}

document.getElementById("bulbBlack").addEventListener("click", BulbBlack);

//

document.getElementById("BulbColor");
document.addEventListener("change", changeColor);

function changeColor() {
  const color = document.getElementById("BulbColor").value;
  document.getElementById("bulb1").style.backgroundColor = color;
}

// Task

// background

document.getElementById("backcolor").addEventListener("change", changeBack);

function changeBack() {
  const color = document.getElementById("backcolor").value;
  document.getElementById("backg").style.backgroundColor = color;
}

// heading

document.getElementById("headcolor").addEventListener("change", changeBack);

function changeBack() {
  const color = document.getElementById("headcolor").value;
  document.getElementById("head").style.backgroundColor = color;
}
