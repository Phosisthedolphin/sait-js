// DON'T USE GLOBAL VAR

function greetPerson(name) {
    console.log(name);
}

// Function to be immediately invoked.

(function() {
    var name = 'heather';
    if (name) {
        greetPerson(name);
    }
})();

// SCOPES
// BLOCK SCOPES

{
    //anything within { } that is not a function
}

if (isPhiladelphia) {
    var alwaysSunny = true;
}

// FUNCTION SCOPES

function doFunctionThings() {
    // this block is a function block
}

// VAR only respects function scopes

// Unlike VAR LET has Scope

// USING VAR

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i); //spits back result of i

// using LET



for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log(i); //spits back 'i is not defined'






function trueCondition() {
    let condition = true;
    // return condition;
    testCondition(condition)
}

function testCondition(condition) {

    if (condition) {
        var a = 'Zeta';
        console.log(a); //Zeta
    }
}

console.log(a); //This should be undefined.






//CONST - for variables that should never change once defined.
// CONST values should be UPPERCASE as a convention.

const discount = 3.4;
discount = 5.6 //will generate error

// const array 

const LANGUAGES = ['JavaScipt', 'Ruby', 'Python', 'Go'];

LANGUAGES = 'JavaScript'; //throws error

LANGUAGES.push('Java'); //this works.


const arr = [1, 2, 3];
const obj = { id: 0, name: 'Alpha'};

arr.push(4);
console.log(arr);

obj.age = 32;

console.log(obj);

//Same thing, newer context.

function oldOne() {
    console.log('Hello world');
}

var newOne = () => {
    console.log('Hello world');
}


let newOneWithParameters = (a, b) => {
    return a + b;
}
 newOneWithParameters(10, 20); // 30

 

 let newOneWithParameters = (a, b) => a + b

 newOneWithParameters(10, 20); // 30


 let double = a => 2 * a

 double(2); //4


 var getMessage = function(name) {
     return 'Hello ' + name + '!';
}

// 1. remove the word function
// 2. place a fat arrow => after the parameters
// 3. if theres onle 1 parameter remove the surrounding parenthesis
// 4. if there is only one expression in the function body, remove {} and return

const getMessage = name => 'Hello ' + name + '!';


const sum = function(num1, num2) {
    return num1 + num2;
}

console.log(sum(3, 4)); //7


const sum = (num1, num2) => num1 + num2;

console.log(sum(3, 4));



const fibonacci = n => {
    if (n < 3) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(9));

Default Parameters

let addNumbers = (a, b = 10) => a + b;

console.log(addNumbers(20));

console.log(addNumbers(20, 30));


let multiply = (a, b = 1) => a * b;

console.log(multiply(5, 4));
console.log(multiply(4));
console.log(multiply());



//REPLACES (for i = 0)
let array = [2, 3, 4, 1];

for (let value of array) {
    console.log(value);
}

// SPREAD/REST OPERATOR
let createArray = (...array) => {
    console.log(array);
}

createArray(10, 20, 40, 60, 90); // [10, 20, 40, 60, 90]

let createListFromArray = (...list) => {
    console.log(list);
}

createListFromArray([10, 20, 30, 40, 50]);

let logNumbers = (a, b, c, d, e, f, g)




let product = (x, y, z) => {
    var numbers = [x, y, z];
    return numbers.reduce((currentProduct, number) => currentProduct * number, 1);
}

console.log(product(3, 4, 5)); // 60
console.log(product(3, 4, 5, 6)); // 360
console.log(product(1, 2, 3, 4, 5, 6)); //720




let product = (...numbers) => {
    return numbers.reduce((currentProduct, number) => currentProduct * number,);
}

console.log(product(3, 4, 5)); //60
console.log(product(3, 4, 5, 6)); //360
console.log(product(1, 2, 3, 4, 5, 6)); //720

// TEMPLATE LITERALS

const student = {
    name: 'Jane Doe',
    city: 'Calgary'
};

let message = 'Hello' + student.name + ' from ' + student.city;

// NOW

let message = `Hello ${student.name} from ${student.city}`;


const user = {
    name: 'Cody',
    loginCount: 1,
    goldStatus: true
};

const className = 'container';
const html = '<div class="' + className + '">'
    + '<h2>Welcome' + (user.goldStatus ? ' to our gold status member. ' : ', ') + user.name + '!' + '</h2>'
        + '<p>Today is ' + new Date() + '</p>'
        + '<p>You have logged in ' + ++user.loginCount + ' times.</p>'
        + '</div>';

document.getElementById('target').innerHTML = html;

const user = {
    name: 'Cody',
    loginCount: 1,
    goldStatus: true
}

const className = 'container';
const html = `<div class="${className}"><h2>Welcome ${(user.goldStatus ? 
    'to our gold status member,' : ',')} ${user.name} !</h2><p>Today is ${new Date()}</p><p>You have logged in ${++user.loginCount} times.</p></div>`;

    document.getElementById('target').innerHTML = html;


// Destructing Array

const points = [20, 30, 40];

const [x, y, z] = points;

console.log(x, y, z); // 20 30 40

// Ignore a value

const [x, , z] = points;


// Destructing an Object

const car = {
    type: 'Toyota',
    color: 'silver',
    model: 2007
};

const {type, color, model} = car;
console.log(type, color, model); // Toyota silver 2007

const {color} = car;
console.log(color); // silver



const myEmployee = {
    active: true,
    department: 'Engineering'
};

function isActiveEngineer(employee) {
    const {active, department} = employee;
    const active = employee.active;
    const department = employee.department;
    return department === 'Engineering' && active;
}

console.log(`Is myEmployee active? ${isActiveEngineer(myEmployee)}`);

let type = 'Toyota';
let color


const trips = [
    { mph: 10, hours: 3 },
    { mph: 30, hours: 2 },
    { mph: 25, hours: 4 }
];

for (let i = 0; i < trips.length; i++) {
    console.log(trips[i].mph * trips[i].hours);
}

const trips = [
    { mph: 10, hours: 3 },
    { mph: 30, hours: 2 },
    { mph: 25, hours: 4 }
];

trips.forEach((trip, index, array) => {
    console.log(trip.mph * trip.hours);
});

//Every Method - checks to see if EVERY method passes a test.

const students = [
    { name: 'Morgan', present: true },
    { name: 'Sam', present: false },
    { name: 'Taylor', present: true }
];

const allPresent = students.every(student => student.present);
console.log(allPresent); //false

//Some Method - checks to see if SOME methods pass a test.

const students = [
    { name: 'Morgan', present: true },
    { name: 'Sam', present: false },
    { name: 'Taylor', present: true },
];

const somePresent = students.some(student => student.present);
console.log(somePresent); //true

const availableLaptops = [
    { name: 'MacBook', RAM: 8 },
    { name: 'Asus', RAM: 32 },
    { name: 'Lenovo', RAM: 16 },
    { name: 'HP', RAM: 4 }
];

const allRam = availableLaptops.every(laptop => laptop.RAM >= 16);
const someRam = availableLaptops.some(laptop => laptop.RAM >= 16);

if (allRam || someRam === true) {
    console.log('true!');
}

// Filter creates a new array by filtering the original array elements

const users = [
    { username: 'ryan10', active: true },
    { username: 'morgan', active: false}
];

const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

const groceries = [
    { name: 'bananas', aisle: 'produce', price: 2 },
    { name: 'flour', aisle: 'baking', price: 5 },
    { name: 'avocados', aisle: 'produce', price: 4 },
    { name: 'lettuce', aisle: 'produce', price: 5 },
    { name: 'olive oil', aisle: 'grocery', price: 10 },
    { name: 'shampoo', aisle: 'beauty', price: 12 }
];

const produceLessThan5 = groceries.filter(grocery => grocery.aisle === 'produce' && grocery.price < 5); 
console.log(produceLessThan5);

//Map creates an array by modifying the original array elements.

const numbers = [2, 6, 10];
const halvedNumbers = numbers.map(number => number / 2);
console.log(halvedNumbers); //1, 3, 5

const trips = [
    { miles: 5, hours: 1},
    { miles: 6, hours: 0.5},
    { miles: 4, hours: 2 }
];

const speeds = trips.map(mapped => mapped.miles / mapped.hours);
console.log(speeds);

//Find finds the first element that passes a test

const jobs = [
    { title: "Electrician" },
    { title: "Developer" },
    { title: "Barista" },
];

const devJob = jobs.find(job => job.title === 'Developer');
console.log(devJob); // { title: 'Developer' }

//An Array of posts
const posts = [
    { id: 23, title: 'Becoming an ES6 Wizard', body: 'Ille vivere. Ut ad te ...' },
    { id: 29, title: 'JavaScript Pro Tips', body: 'Pellentesque euismod ...' },
    { id: 31, title: 'Acing your next JS interview', body: 'Lorem ipsum dolor sit amet...'}
];

// FInd the post with ID 29
const currentId = 29;
const currentPost = posts.find(post => currentId === post.id);

console.log(currentPost.title);
console.log(currentPost.body);

//findIndex finds the index of the first element that passes a test

const numbers = [ 25, 30, 35, 40, 45];
const firstIndex = numbers.findIndex(number => number > 33);
console.log(firstIndex);

//Reduce pass in an initialValue and mofiy it according to the current element value

const numbers = [2, 6, 10];

const sum = numbers.reduce(function(currentSum, number) {
    return currentSum + number;
}, 0);

console.log(sum);

const transactions = [5, 10, 15 ];

const sum = transactions.reduce(function(currentSum, number) {
    return currentSum + number;
}, 0);

console.log(sum);

