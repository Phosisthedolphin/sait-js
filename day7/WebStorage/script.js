//Set DATA

localStorage.setItem("username", "Janessa");

localStorage.firstName = 'Janessa';

localStorage.setItem('user name', 'Alice')

//Get DATA

var name = localStorage.getItem('username');

//Alternate way to get username
//var name = localStorage.username;
console.log(name);

// Remove DATA

localStorage.removeItem('username');

//Alternate way to remove data
localStorage.username = null;

//Extreme removal measures
localStorage.clear();

console.log(name);
