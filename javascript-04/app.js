// Functions
// alert, parseInt = built-in function
// greet = custom function
//  function greet (studentsName) { // Parameter
//     console.log("Hello " + studentsName);
//  }

//  greet("Nadir"); // Argument
//  greet("Ikhlas"); // Argument
//  greet("Ameen"); // Argument

// function employee(fileNo) {
//   return "Working on file no: " + fileNo;
// }

// let data = employee(7);
// console.log(data);

// function add (num1, num2) {
//     return num1 + num2;
// }

// let result = add(5, 7);
// console.log(result);
// document.write(result);

// Recursion

// function writeData(data, times) {
//     document.write(data);
//     if (times > 0) {
//         writeData(data, times - 1);
//     }
// }

// writeData("Hello", 5);

// function factorial (num) {
//     if (num > 1) {
//         return num * factorial(num - 1);
//     }
//     return 1;
// }

// console.log(factorial(4));
// 5 * 4 * 3 * 2 * 1

// Closures => Scopes
// Global Scope => whole file
// local scope => inside function

// let abc = 7; // Global Scope
// function print (def) {
//     //  def = local scope
//     return function (ghi) { // anonymous function
//         console.log(def + ghi)
//     }
// }

// let innerFunction = print(7);
// let innerFunction2 = print(8);
// innerFunction(7)
// innerFunction2(5)


// function saveUrl (url) {
//     return function () {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => console.log(json))
//     }
// }
// // SAVE URL 
// let makesRequest = saveUrl("https://jsonplaceholder.typicode.com/todos");

// // Request attempt
// makesRequest();
// makesRequest();