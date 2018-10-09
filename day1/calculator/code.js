var currentAge = prompt("What is your current age?");
var maxAge = 99;
var foodPerDay = 3;
var foodPerYear = foodPerDay * 365;
var lifetimeFood = maxAge - currentAge;
var foodNeeded = lifetimeFood * foodPerYear;
console.log("If you live until age 99, you will need " + foodNeeded + " units of food in order to survive.");