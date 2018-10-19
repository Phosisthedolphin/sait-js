

// // function doThisLater() {
// //     alert('Time\'s up!');
// // }

// // var timerId = setTimeout(doThisLater, 3000);

// // clearTimeout(timerId);


// function doThisAfter() {
// var square = document.getElementById('animationTest');

// square.style.position = 'absolute';
// square.style.left = '100px';
// square.style.top = '100px';
// }

// var timerId = setTimeout(doThisAfter, 3000);

// // clearTimeout(timerId);



// function readDate() {
// document.getElementById('output').innerHTML = new Date();
// }

// var timer = setInterval(readDate, 1000);
var walkForwards = true;
var direction = true;

function catWalk() {
    var img = document.getElementById('cat');
    var currentLeft = parseInt(img.style.left);

    if (direction && (currentLeft > (window.innerWidth - img.width)) {
        direction = false;
        img.style.transform ='scaleX(-1)';
    }

    if (!direction && (currentLeft <= 0) {
        direction = true;
        img.style.transform ='scaleX(1)';
    }

    if (direction) {
        img.style.left = (currentLeft + 10) + 'px';
    } else {
        img.style.left = (currentLeft - 10) + 'px';
    }
}

setInterval(catWalk, 50);
// var timer = setInterval(readDate, 1000);


