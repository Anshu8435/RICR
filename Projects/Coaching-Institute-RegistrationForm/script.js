document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const emailName = document.getElementById("emailName").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("DOB").value;

    const qualification = document.getElementById("qualification").value;
    const marks = document.getElementById("marks").value;
    const course = document.getElementById("course").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const pin = document.getElementById("pin").value;

    const gendr = document.querySelector(
      "input[name = 'gender']:checked",
    )?.value;
    const timings = [];
    document
      .querySelectorAll("input[name = 'timingd']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    const registrationData = {
      FullName: fullName,
      EmailName: emailName,
      Phone: phone,
      Dob: dob,
      Qualification: qualification,
      Marks: marks,
      Course: course,
      Timings: timings,
      Address: address,
      City: city,
      PinCode: pin,
      Course: course,
      Timings: timings,
      Address: address,
      City: city,
      PinCode: pin,
    };

    validateData(registrationData)
      ? (console.log("registration Data", registrationData),
        alert("Registration successfull console for Data"))
      : alert("Registration Unsuccessful ! Enter Valid Date");
  });

// resert Button

document
  .getElementById("registrationForm")
  .addEventListener("reset", (event) => {
    window.location.reload();
  });
