// let n = 5;

// if (n > 0) {
//   console.log("positive integer");
// } else {
//   console.log("negative");
// }

// let a = 3;

// if (a % 2 == 0) {
//   console.log("even nuber");
// } else {
//   console.log("odd number");
// }

// let m = 86;

// if (m >= 50) {
//   console.log("C");
// } else if (m >= 75  ) {
//   console.log("B");
// } else if (m >= 90) {
//   console.log("A");
// } else {

// }

// let usr ="abcde"

// short hand

let data;
let Name = "anshu";

data = Name || "N/A";
console.log(data);

// break & continue

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// switch

let choice = 52;

switch (choice) {
  case 1: {
    console.log("tea");
    break;
  }

  case 2: {
    console.log("coffee");
    break;
  }

  case 3: {
    console.log("lassi");
    break;
  }

  default: {
    console.log("pani");
  }
}
