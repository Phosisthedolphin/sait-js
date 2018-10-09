var celsius = prompt("What is the current temperature in celsius");
var toFahr = (celsius * 9) / 5 + 32; 
console.log("Your temperature converted from Celsius to Fahrenheit is " + toFahr);

var fahrenheit = prompt("What is the current temperature in fahrenheit");
var toCels = (fahrenheit - 32) * 5 / 9;
console.log("Your temperature converted from Fahrenheit to Celsius is " + toCels);