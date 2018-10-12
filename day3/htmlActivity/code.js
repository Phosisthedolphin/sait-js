var header = document.getElementById('header');

console.log(header);

var listItems = document.querySelectorAll('li');

console.log(listItems);

document.querySelectorAll('#header');
document.querySelectorAll('.nav-items');

console.log(listItems[0].classList);

var para = document.getElementsByTagName('p')[1];
console.log(para);

var imgSplash = document.getElementById('mainImg');

imgSplash.setAttribute('src', './island.jpeg');
console.log(imgSplash);

var navItem = document.getElementsByClassName('nav-item')[0];

navItem.style.background = 'red';

var containerRef = document.getElementsByTagName('ul')[0];

containerRef.innerHTML += '<li>Another List Item</li>';

console.log(containerRef);

var pageBody = document.getElementsByTagName('body')[0];

var paraElement =  document.createElement('p');
var paraText = document.createTextNode('Hello World!');

paraElement.appendChild(paraText);
console.log(paraText);
pageBody.appendChild(paraElement);

