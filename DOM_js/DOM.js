// function submit() {
//   console.log("submit button clicked");

//   const fn = document.getElementById("fullname").value;
//   console.log(fn);

//   document.getElementById("mydata").innerText = fn;
//   document.getElementById("mydata2").innerText = fn;
//   document.getElementById("fullname").value = "";

//   document.getElementById("datacard").classList.add("divshow");

//   document.getElementById("datacard").classList.remove("divhide");
// }

function submit() {
  console.log("submit button clicked");

  const fn = document.getElementById("Name").value;

  document.getElementById("as1-1data").innerText = fn;

  const gn = document.getElementById("City").value;

  document.getElementById("as1-2data").innerText = gn;
  document.getElementById("Name").value = "";
  document.getElementById("City").value = "";

  document.getElementById("dataCard").classList.add("divshow");
  document.getElementById("dataCard").classList.remove("divhide");
}
