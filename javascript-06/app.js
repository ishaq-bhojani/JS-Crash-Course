// Objects

// let person = {
//   name: "Nadir",
//   cnic: 1234567890,
//   eyesColor: "black",
//   canSpeakEnglish: false,
//   speak: function(sentence) {
//     console.log(sentence + this.name);
//   }
// };

// let person2 = { // person2 = Object
//   name: "Ameen", // name: "Ameen" = Property
//   cnic: 1234567890, // cnic = key
//   eyesColor: "black", // "black" = value
//   canSpeakEnglish: false,
//   speak: function(sentence) {
//     console.log(sentence + this.name);
//   }
// };

// let animal = {
//   name: "Lion",
//   eatsMeat: true,
//   eatsGrass: false
// };
// let animal2 = {
//   name: "Goat",
//   eatsMeat: false,
//   eatsGrass: true
// }

// person2.speak("Hello, I'm ");
// console.log(person.name);

// let student1 = {
//   name: "Hamza",
//   rollNo: 420,
//   teacher: "Nadir",
//   className: "JavaScript"
// };

// let student2 = {
//   name: "Farrukh",
//   rollNo: 421,
//   teacher: "Ameen",
//   className: "CSS"
// };

let prevStudents = localStorage.getItem("students"); // get from LocalStorage
let students = prevStudents ? JSON.parse(prevStudents) : [];
function provideStudent() {
  let std = {
    name: prompt("Enter Name"),
    rollNo: +prompt("Enter Roll no"),
    teacher: prompt("Enter Teachers Name"),
    className: prompt("Enter Your Class"),
  };
  students.push(std);
  console.log(students);
  let stringify = JSON.stringify(students); // Convert it to String
  localStorage.setItem("students", stringify); // Save it to LocalStorage
}

// localStorage.setItem("name", "Ishaq");




