// // Sync Example
// alert("done");
// console.log("Hello Pakistan");

// // Async Example
// function runAfter1Sec() {
//   setTimeout(function () {
//     console.log("done");
//   }, 2000);
// }
// runAfter1Sec();
// console.log("Hello Pakistan");

// Callbacks
// function runAfter1Sec(val, cb) {
//   setTimeout(function () {
//     let data = 5 + val;
//     cb(data);
//   }, 1000);
// }

// function toBeExecutedWhenDone (dataToGet) {
//     console.log("Yes, It's done", dataToGet);
// }

// runAfter1Sec(10, function (dataToGet) {
//         console.log("Yes, It's done", dataToGet);
//     });
// console.log("Hello Pakistan");

// Callback Hell

// function runAfter1Sec(val, cb) {
//   setTimeout(function () {
//     let data = 5 + val;
//     cb(data);
//   }, 1000);
// }

// runAfter1Sec(10, function (dataToGet) {
//   runAfter1Sec(dataToGet, function(dataToGet1) {
//     runAfter1Sec(dataToGet1, function(dataToGet2) { // Callback Hell
//         console.log(dataToGet2);
//     });
//   });
// });
// console.log("Hello Pakistan");

// Promise

// function runAfter1Sec(val) {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       let data = 5 + val;
//       resolve(data);
//     }, 1000);
//   });
// }

// runAfter1Sec(5)
// .then(function (data) {
//     return runAfter1Sec(data);
// }).then(function (data) {
//     return runAfter1Sec(data);
// }).then(function (data) {
//     return runAfter1Sec(data);
// }).then(function (data) {
//     console.log(data);
// });

// Async/Await

// function runAfter1Sec(val) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let data = 5 + val;
//       if(data % 2 === 0) {
//         resolve(data);
//       } else {
//         reject("Odd number detected");
//       }
//     }, 1000);
//   });
// }

// runAfter1Sec(6)
// .then(function (data) {
//     return runAfter1Sec(data);
// }).catch(function (error) {
//     console.error(error);
// })

// (async function() {
//     try {
//         const data = await runAfter1Sec(6);
//     } catch (err) {
//         console.error(err);
//     }
//   })()



// async function run() {
//   // async functions By defaut return a promise
//   const data = await runAfter1Sec(5);
//   const data1 = await runAfter1Sec(data);
//   const data2 = await runAfter1Sec(data1);
//   const data3 = await runAfter1Sec(data2);
//   return data3;
// }

// run().then(function (data3) {
//   console.log(data3);
// });
