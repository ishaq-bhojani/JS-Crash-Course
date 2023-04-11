// const date = new Date();

// console.log(date.getDate());
// const months = ["January", "Feb", "Mar", "Apr"];
// console.log(months[date.getMonth()]);
// console.log(date.getFullYear());

// console.log(date.getMinutes());

// const doomsDay = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);

// const date = new Date();

// let diff = doomsDay.getTime() - date.getTime();

// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));

const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const amPmElem = document.getElementById("amPm");

setInterval(function () {
  const date = new Date();
  let hours = date.getHours();
  let amPm = "AM";
  if(hours > 11) {
    amPm = "PM";
    if(hours > 12) {
        hours -= 12;
    }
  }
  hoursElem.innerText = hours;
  minutesElem.innerText = date.getMinutes();
  secondsElem.innerText = date.getSeconds();
  amPmElem.innerText = amPm;
}, 1000);
