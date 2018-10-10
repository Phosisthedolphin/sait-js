var movies = ['Jurassic Park', 'Star Wars', 'Apocalypse Now', 'Terminator 2'];
var books = ['Lord of the Rings', 'The Hobbit', 'Myst']

// console.log(movies.length);
// console.log(books.length);

var moviesBooks = movies.concat(books);

// console.log (moviesBooks);

function isTitleLong(title) {
    if (title.length > 6) {
        return true;
    }
}

var moviesWithLongTitles = movies.filter(isTitleLong);

console.log(moviesWithLongTitles);