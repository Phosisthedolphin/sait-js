// BROWSER/PLATFORM INFO

// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(navigator.platform);

// POSITION/GEOLOCATION STUFF
function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var altitude = position.coords.altitude;
    var speed = position.coords.speed;
    document.write(latitude, longitude);
    }
function geoError(errorObj) {
    alert("Uh oh, something went wrong");
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, geoError);
} else {
    console.log('geolocation does not exist.');
}


// 

// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.colorDepth);
// console.log(screen.orientation);

// document.bgColor = "red";


