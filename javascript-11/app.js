// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       })

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         console.log(data);
//       })

// const imagesContainer = document.getElementById("images");
// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         data.forEach(function (image) {
//             const url = image.url;
//             const imageElem = document.createElement("img");
//             imageElem.src = url;
//             imagesContainer.appendChild(imageElem);
//         });
//       })

// fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     description: 'This is an amazing pencil.'
//   })
// })
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/products/1', {
//   method: 'PUT', /* or PATCH */
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'iPhone Galaxy +1'
//   })
// })
// .then(res => res.json())
// .then(console.log);

fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);