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
}, ]

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

var quoteCount = null;
var quoteHistory = null;

function getRandom() {
    quoteHistory = quoteCount;
    var randomQuote = Math.floor(Math.random() * quotes.length);
    quoteCount = randomQuote;
    var quoteAuthor = quotes[randomQuote].author;
    var quoteQuote = quotes[randomQuote].quote;
    
    
    document.getElementById('quote').innerHTML = quoteQuote;
    document.getElementById('author').innerHTML = quoteAuthor;
}

function nextQuote () {
    getRandom();
}

function prevQuote () {
    var quoteAuthor = quotes[quoteHistory].author;
    var quoteQuote = quotes[quoteHistory].quote;
    document.getElementById('quote').innerHTML = quoteQuote;
    document.getElementById('author').innerHTML = quoteAuthor;
    console.log(quoteCount);
    console.log(quoteQuote);
    console.log(quoteAuthor);
}

// function prevQuote () {
//     console.log(quoteCount);
// }

getRandom();