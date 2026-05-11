// let fd = [
//   ["raj vardhan", "15-66-451", 8435404198, "Bhopal", "Teacher"][
//     ("pranay", "15-66451", 8435404198, "Bhopal", "Teacher")
//   ][("mohit", "15-66451", 8435404198, "Bhopal", "Teacher")][
//     ("arunav", "15-66451", 8435404198, "Bhopal", "Teacher")
//   ],
// ];

// fd.forEach((Element) => {
//   console.log(Element);
// });

let FData = [
  {
    name: "Riya Sharma",
    dob: "1998-07-15",
    phone: "9876543210",
    city: "Bhopal",
    profession: "Software Engineer",
  },
  {
    name: "Arjun Mehta",
    dob: "1992-03-22",
    phone: "9123456780",
    city: "Delhi",
    profession: "Graphic Designer",
  },
  {
    name: "Sneha Kapoor",
    dob: "2000-11-05",
    phone: "9988776655",
    city: "Mumbai",
    profession: "Doctor",
  },
  {
    name: "Rahul Verma",
    dob: "1985-01-30",
    phone: "9090909090",
    city: "Indore",
    profession: "Teacher",
  },
  {
    name: "Priya Nair",
    dob: "1995-09-12",
    phone: 9191919191,
    city: "Chennai",
    profession: "Architect",
  },
];

FData.forEach((Element) => {
  console.log(Element);
});

console.log(FData["name"]);

//  Object key & Values
let anshu = {
  name: "Priya Nair",
  dob: "1995-09-12",
  phone: "9191919191",
  city: "Chennai",
  profession: "Architect",
};

console.log(Object.keys(anshu));
console.log(Object.values(anshu));
console.log(Object.entries(anshu));

// Map

// FData.map((Element, idx) => {
//   console.log(idx);
//   console.log(Element.phone);
// });

// filter & Find

let arr = [4, 6, 74, 8, 91, 5, 100, 23, 6, 32, 6, 9, 4, 7, 92, 6, 45];

console.log(arr.filter((val) => val > 20));
console.log(arr.find((val) => val > 20));

// Slice
console.log(arr.slice(0, 7));




//split

let ab = "this is web-developement class";

console.log(ab.split(" "));
console.log(ab.split("-"));

