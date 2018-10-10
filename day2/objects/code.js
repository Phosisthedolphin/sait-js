// var objectName = {
//     propertyName: propertyValue
// };

// var user = {
//     hometown: 'Calgary',
//     hair: 'Brown',
//     likes: ['gaming', 'code'],
//     birthday: {month: 06, day: 18}
// }

var recipe = {
    letsCook: function(food) {
        console.log('I\'m Hungry! Let\'s cook ' + food)
    },
    food: 'Tofu Curry',
    recipeDescription: ('Tomato cream curry', 'Contains tofu and rice'),
    ingredients: ['tofu', 'rice', 'curry sauce'],
    directions: 'Cook rice. Cook curry.',
    rating: 4,
    cookTime: 14,
}

recipe.letsCook('Tofu Curry');

function recipeLog(recipeData) {
    console.log(recipeData.recipeTitle + " " + recipeData.directions);
}
recipeLog(recipe);

recipe.Servings = 'Servings!'
recipe.rating = 3;
delete recipe.cookTime;

console.log(recipe.Servings);
console.log(recipe.recipeTitle);
console.log(recipe['recipeDescription']);
console.log(recipe.ingredients[2]);
console.log(recipe.directions);
console.log(recipe['rating']);
console.log(recipe.cookTime);

var users = [
    {name: 'Jolene', age: 21},
    {name: 'Alexa', age: 18}
];

for (var i = 0; i < users.length; i++) {
    var user = users[i];
    console.log(user.name + ' is ' + user.age + ' years old.');
}

// var movies = [
//     {name: 'Jurrassic Park', rating: 5},
//     {name: 'Star Wars', rating: 4},
//     {name: 'Hell Ride', rating: 1},
// ]

// for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];
//     console.log("I give " + movie.name + " " + movie.rating + " stars.");
// }

