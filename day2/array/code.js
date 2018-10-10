var foods =['pizza', 'different pizza', 'cheese pizza', 'bacon pizza', 'not pineapple pizza'];

for (var i = 0; i < 4; i++) {
    console.log(foods[i]);
} 

console.log(foods.length);
console.log(foods[2]);

foods[2] = 'asparagus';
console.log(foods[2]);

foods.push('Bacon');
console.log(foods);

for (var i = 0; i < foods.length; i++) {
    console.log(foods[i]);
}