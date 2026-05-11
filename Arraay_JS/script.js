// // Creation Of Array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// for (var i = 0; i < 7; i++) {
//   // Reading of Array
//   console.log(arr);
// }

// console.log(arr); // reading of array

// arr[2] = arr[2] + 10; // Updation of Array
// console.log(arr);

// arr = [];
// console.log(arr);  // deletion of Array

let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90];

console.log(arr);

arr.push(99); // push
console.log(arr);

arr.pop(); // pop
console.log(arr);

arr.unshift(11); //specific not delet
console.log(arr);

arr.shift(); // specific element delet
console.log(arr);

console.log(arr.at(4)); // searching

console.log(arr.indexOf(78)); // index serach

console.log(arr.includes(89)); //  searchig is availabe pr not

let myarr = [56, 31,31, 89, 45, 67, 34, 12, 90,90, 87, 45, 18,2,2,6,6,6];
myarr.sort(); // sorting

myarr.sort((a, b) => a - b); // compare function

console.log(myarr);

console.log(myarr.find((val) => val > 12));

console.log(myarr.find((val) => val == 56));
console.log(myarr.findIndex((val) => val == 6));
console.log(myarr.findLastIndex((val) => val== 6));






// myarr.reverse(); // reverse

// console.log(myarr);

// myarr.forEach((element) => {
//   // For Each Loop
//   console.log(element);
// });
