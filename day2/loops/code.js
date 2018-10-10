// var nine = 9;
// var times = 1;
// var num = 1;

// while (times < 13) {
//     console.log(nine * times);
//     times ++;
//     if (nine === 6) {
//         console.log('Found the six' + nine);
//         break;
//     }
// } 

// for (times = 1; times < 13; times ++) { 
//     for (num = 1; num < 13; num ++) {
//         console.log(times*num);
//         if (num === 6) {
//             console.log('Found the six' + num);
//             break;
//         }
//     } 
// }

// while (times < 13) {
//     var counter = 1;
//     while (counter < 13) {
//         console.log(counter + " x " + number + " = " + counter*number);
//         counter ++;
//     }
// }

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log(' FIZZ');
//     } else if (i % 5 === 0) {
//         console.log(' Buzz ');
//     } else {
//         console.log(i);
//     }
// }

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + ' is even');
//     } else if (i % 1 === 0) {
//         console.log(i + ' is odd');
//     } else {
//         console.log(i);
//     }
// }

for (var i = 1; i <= 12; i++) {
    if (i === 6) {
        console.log('I hate six');
        break;
    }
    console.log(9*i);
}
