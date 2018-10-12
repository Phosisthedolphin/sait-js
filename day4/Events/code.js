function helloWorld() {
    alert('Hello World!');
}

var button = document.getElementById('myBtn');

button.addEventListener('mouseover', function (event) {
    alert("Hi!");
})

// Used in case you want to validate information before user able to move on

var link = document.getElementById('myLink');

link.addEventListener('click', function(event) {
    event.preventDefault();
})