// Array
// let january = "January";
// let febru

// let months = ["January", "February", "March", "April"];
// months[4] = "May"; // Not recommended;

// let shouldIStore = prompt("Array me value rakhun?");

// if(shouldIStore === "yes") {
//     months.push("May");
// }

// let months = ["January", "February", "Sept", "March", "April"];

// months.shift(); // Removes 1st index;
// months.unshift("Jan"); // Add value on 1st Index
// months.push("May"); // Add value on last+1 Index
// months.pop();// Removes last index;
// months.length // Tells the quantity of values

// months.splice(2, 1, "June", "July", "August"); // Remove or replace values
// months.slice(0, 2); // Provide a new copy of array;

// let newArr = months.slice(0, 2);
// console.log(months);
// console.log(newArr);

// let arr = ["Apple", "Orange", "Mango"];
// arr.forEach // loops through array values
// arr.forEach(function(val, index) {
//     console.log(index, val);
// });

// arr.filter()// Filters Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let filteredArr = arr.filter(function (val) {
//     return val % 2 === 0;
//     // if (val % 2 === 0) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
// });

// console.log(filteredArr, arr);

// arr.sort() // Sorts Array values
// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];
// let sortedArr = arr.sort(function(a, b) {
//     if (a > b) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// console.log(sortedArr);

// reduce

// let arr = [1, 9, 3, 4, 5, 6, 8, 2, 10];

// let total = arr.reduce(function(prevValues, currVal) {
//     return prevValues + currVal;
// }, 0);

let arr = ["Happy", "Birthday", "Ameen"];
let finalString = "";

arr.forEach(function (val) {
    finalString = finalString + " " + val;
});

// let finalString = arr.reduce(function(prevValues, currVal) {
//     return prevValues + " " + currVal;
// }, "");

console.log(finalString);

// Array.map() 


