var navStyle = document.getElementById('navbar');

navStyle.style.display = 'flex';
navStyle.style.height = '100px';
navStyle.style.background = 'red';

var navLinks = document.getElementsByTagName('ul')[0];

navLinks.style.display = 'flex';
navLinks.style.flexDirection = 'row';
navLinks.style.justifyContent = 'space-between'
navLinks.style.alignItems = 'right';
navLinks.style.padding = '20px';
navLinks.style.margin = '5px';

var heading = document.getElementById('titl');

heading.style.fontSize = '30px';
heading.style.color = "green";

var imgSplash = document.getElementById('mainImg');

var pageColor = document.getElementsByTagName('body')[0];

if (Modernizr.geolocation) {
    imgSplash.setAttribute('src', './island.jpeg');
} else {
    imgSplash.setAttribute('src', './dog.jpg');
}

if (window.history.length === 0) {
    pageColor.style.background = 'lightblue';
} else {
    pageColor.style.background = 'orange';
}

// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var altitude = position.coords.altitude;
//     var speed = position.coords.speed;
//     document.write(latitude, longitude);
//     }
// function geoError(errorObj) {
//     alert("Uh oh, something went wrong");
// }


// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success, geoError);
//     imgSplash.setAttribute('src', './island.jpeg');
// } else {
//     console.log('geolocation does not exist.');
// }


