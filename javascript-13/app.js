// class Product {
//   constructor(title, amount, description) {
//     this.title = title;
//     this.price = amount;
//     this.details = description;
//   }
// }

// const product1 = new Product("LED TV", 12000, "4K Ultra HD Display");
// const product2 = new Product("Android Phone", 84000, "Android 12 OS");
// const product3 = {
//   title: "Android Phone",
//   price: 84000,
//   details: "Android 12 OS",
// };
// console.log(product1, product2);
// console.log(product3 instanceof Product);

// class Shape {
//   constructor (id, x, y) {
//       this.id = id;
//   }

//   move (x, y) {
//       this.x = x
//       this.y = y
//   }
// }

// const square = new Shape("Square", 5, 5);
// const rectangle = new Shape("Rectangle", 5, 5);
// square.move(7, 8);
// rectangle.move(7, 8);
// console.log(square,rectangle);

const students = [];

class Student {
  static data = "Hello World";
  constructor (fullName, rollNo, batch, subject) {
    this.fullName = fullName;
    this._rollNo = rollNo;
    this.batch = batch;
    this.subject = subject;
    this.attendance = [];
  }

  get rollNo () {
    return this._rollNo;
  }

  markAttendance() {
    this.attendance.push(new Date());
  }

  static sayYourName () {
    console.log("Volunteer");
  }
}

class Volunteer extends Student {
  constructor(fullName, rollNo, batch, subject) {
    super(fullName, rollNo, batch, subject);
    this._haveVolunteered = "HTML";
    this.canVolunteerIn = []
  }

  addVolunteerSkill (skill) {
    this.canVolunteerIn.push(skill);
  }

  get allVolunteerSkills () {
    return this.canVolunteerIn.join(" ");
  }

  set haveVolunteered (skill) {
    if(skill !== "") {
      this._haveVolunteered = skill;
    }
  }

}

const hamza = new Student("Hamza Iqbal", 1234, 1, "JavaScript");
const shahzad = new Volunteer("Shahzad Iqbal", 1235, 1, "JavaScript");
hamza.markAttendance();
shahzad.markAttendance();
shahzad.addVolunteerSkill("HTML");
shahzad.addVolunteerSkill("CSS");
Volunteer.sayYourName();

students.push(hamza);
students.push(shahzad);
shahzad.haveVolunteered = "CSS";
console.log(shahzad._haveVolunteered);