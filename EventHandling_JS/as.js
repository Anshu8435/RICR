// background color

document.getElementById("bgColor").addEventListener("change", changeBack);

function changeBack() {
  const color = document.getElementById("bgColor").value;
  document.getElementById("bgg").style.backgroundColor = color;
}
// heading color4

document.getElementById("headColor").addEventListener("change", changeHead);

function changeHead() {
  const color = document.getElementById("headColor").value;
  document.getElementById("head").style.color = color;
}

//  paragraph
document.getElementById("paragColor").addEventListener("change", ChangeParag);

function ChangeParag() {
  const color = document.getElementById("paragColor").value;
  document.getElementById("paragraph").style.color = color;
}

// reset

function reset() {
  window.location.reload();
}
