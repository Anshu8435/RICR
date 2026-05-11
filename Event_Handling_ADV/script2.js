document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const DataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(DataPacket);

  document.getElementById("FullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  confirm("Are You Sure") && window.location.reload();
});

//

document.addEventListener("keydown", (event) => {
  let keyLPress = event.key;
  keyLPress === "Escape" && window.location.reload();
});
