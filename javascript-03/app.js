// let userFavNum = prompt("Enter you favourite number");

// console.log(+userFavNum + 5);

// Comparison Operators
// ==, ===
// console.log(5 === "5");
// !=, !==
// console.log(5 !== 6);
// <, >, <=, >=
// let user1Age = 7;
// let user2Age = 25;
// console.log(user2Age >= 18);

// let userAge = +prompt("Enter your age");

// if (userAge >= 18) {
//     console.log("You can apply for NIC");
// } else {
//     console.log("You are not eligible")
// }

// let userFavNum = +prompt("Enter a number");
// let computerNum = Math.round(Math.random() * 10);

// if (userFavNum === computerNum) {
//     console.log("You Won!");
// } else {
//     console.log("You Lose! " + computerNum);
// }

// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() * 10);
// let isEven = computerNum % 2 === 0;
// if (isEven && userInput === "even") {
//     console.log("You Won!" + computerNum);
// } else if (!isEven && userInput === "odd") {
//     console.log("You Won!" + computerNum);
// } else {
//     console.log("You Lose! " + computerNum);
// }
// Initialisation
// Condition
// Increment
let table = 18;
for (let i = 1; i <= 10; i++) {
    console.log(table+"  "+ i + " = " + table*i);
}