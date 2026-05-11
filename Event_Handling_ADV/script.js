// Event MOveOver - MoveOut
document.getElementById("redbox").addEventListener("mouseover", fillRedCOlor);

document.getElementById("redbox").addEventListener("mouseout", fillBaseColor);

document.getElementById("greenbox").addEventListener("mouseover", fillGreenCOlor);

document.getElementById("greenbox").addEventListener("mouseout", fillBaseColor);

document.getElementById("bluebox").addEventListener("mouseover", fillBlueCOlor);

document.getElementById("bluebox").addEventListener("mouseout", fillBaseColor);

function fillRedCOlor() {
  document.getElementById("bulb1").style.backgroundColor = "red";
}
function fillGreenCOlor() {
  document.getElementById("bulb1").style.backgroundColor = "Green";
}
function fillBlueCOlor() {
  document.getElementById("bulb1").style.backgroundColor = "blue";
}

function fillBaseColor() {
  document.getElementById("bulb1").style.backgroundColor = "white";
}
