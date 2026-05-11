document.querySelector("form").addEventListener("Submit", (event) => {
  event.preventDefault();

  const PAmount = document.getElementById("Billamount").value;
  const Tip = document.getElementById("tip").value;
  const Person = document.getElementById("person").value;

  const Amount = Number(PAmount/Person);

  document.getElementById("MyTip").innerText = Amount;
});
