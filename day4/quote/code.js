// **************************************
// A MAYBE-TOO-RANDOM QUOTE GEN BY JOEL P
// **************************************

// A library of quotes. You can add them indefinitely and the code functionality won't change (unless you reach a certain number obviously, but I don't know how you would)

var quotes = [ {
    author: "Steve Wozniak",
    quote: "Never trust a computer you can't throw out a window."
},
{
    author: "Picasso",
    quote:  "Computers are useless. They can only give you answers."
},
{
    author: "John F. Kennedy",
    quote: "Man is still the most extraordinary computer of all."
},
{
    author: "Emo Phillips",
    quote: "A computer once beat me at Chess, but it was no match for me at kickboxing."
},
{
    author: "Robert Orben",
    quote: "To err is human - and to blame it on the computer is even more so."
}, ];

// FIRST VERY SIMPLE VERSION. This was the first version of the code I experimented with just to understand some basic functionality about how the code might operate. I am leaving it here for fun, really..

// ************************************************************************

// function getRandom() {
//     var randomQuote = Math.floor(Math.random() * quotes.length);
//     if (randomQuote === 0) {
//     console.log(quotes[0]);
// } else if (randomQuote === 1) {
//     console.log(quotes[1]);
// } else if (randomQuote === 2) {
//     console.log(quotes[2]);
// } else if (randomQuote === 3) {
//     console.log(quotes[3]);
// } else if (randomQuote === 4) {
//     console.log(quotes[4]);
// } else {
//     console.log('Error!');
// }}

// getRandom();

// ***************************************************************************


// last is used to store the last value in the array in order to create the button functionality for 'previous'.
var last = 0;

// quoteCount and quoteHistory are arrays used to store a library of pulled array values from the 'quotes' library.

var quoteCount = [];
var quoteHistory = [];

// generates a random number, quotes library refers to this number in order to print a random quote

function getRandom() {
    quoteHistory = quoteCount;
    var randomQuote = Math.floor(Math.random() * quotes.length);
    quoteCount.push(randomQuote);
    var quoteAuthor = quotes[randomQuote].author;
    var quoteQuote = quotes[randomQuote].quote;
    
    
    document.getElementById('quote').innerHTML = quoteQuote;
    document.getElementById('author').innerHTML = quoteAuthor;
}

function textAnim () {
    var quoteRun = document.getElementById('quote');
    quoteRun.classList.toggle('anim-ran');
    document.getElementById('quote').style.marginLeft = "250px";
    document.getElementById('quote').style.opacity = '1';
}

function animReset () {
    var quoteReset = document.getElementById('quote');
    quoteReset.classList.toggle('run-anim');

}

// NOTE: No time left to implement this functionality, but it will push the last value into to the array stack that was popped and then use that value to print the quote.

function nextQuote () {
    animReset();
    textAnim();
    getRandom();
    console.log(quoteHistory);
}

// This is the main focus of the code - to store an array of values and create a true previous button functionality while making the generator 100 percent random. Many generators use a linear sequence, going through the available quotes in order which I specifically wanted to avoid doing here. The generation is 100 percent random, and while that has its problems, I was more concerned here with popping and pushing array values and calling back to them. Fun project!

// To sum up: we first pop out the most current value from the Array. We then store the next last value in the array to a variable called last. I then make two new variables quoteAuther and quoteQuote (terrible, terrible terrible!) takes the variable last and applies that variable to the quotes array in order to pull that quote from the quote library! Presto.

function prevQuote () {
    quoteHistory.pop();
    last = quoteHistory[quoteHistory.length - 1];
    var quoteAuthor = quotes[last].author;
    var quoteQuote = quotes[last].quote;
    document.getElementById('quote').innerHTML = quoteQuote;
    document.getElementById('author').innerHTML = quoteAuthor;
}

// This calls the function. Obviously.

getRandom();