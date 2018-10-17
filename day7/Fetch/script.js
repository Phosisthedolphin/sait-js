fetch('https://api.github.com/')
.then(function(response) {
    return response.json();
}) 
.then(function(data) {
    console.log(data);
})
GET /users/

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     for (var i = 0; i < data.length; i++) {
//         console.log(data[i].username);
//     }
//     console.log(data);
// })

// // Using Fetch API to Send Data
// //1. Create the content that you want to send
// // var user = {
// //     username: "htovey",
// //     id: 780
// // }

// // // Fetch the URL
// // fetch('https://jsonplaceholder.typicode.com/users', {

// //     //Set your method
// //     method: 'POST',

// //     //Set your headers
// //     headers: {
// //         'Content-Type': 'application/json'
// //     },

// //     //Set body
// //     body: JSON.stringify(user)

// // })
// // .then(function(response) {
// //     return response.json();
// // })
// // .then(function(data) {
// //     console.log(data);
// // })

// var user = {
//     username: 'joel',
//     id: 600
// }

// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },

//     body: JSON.stringify(user)
// })
// .then(function(response) {
//     return response.json();
// })
// .then(function(data) {
//     console.log(data);
// })

// // sendData('https://jsonplaceholder.typicode.com/users', user);

// fetch('http://jsonplaceholder.typicode.com/404')
// .then(function(response) {
//     if(!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response.json();
// })
// .then(function(data) {
//     return response.json();
// })
// .catch(function(error) {
//     console.log("The error:", error);
// })
