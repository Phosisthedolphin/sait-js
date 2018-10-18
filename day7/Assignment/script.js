var submit = document.getElementById('submit');

var artist = document.lyrics.artist;
console.log(artist);

var song = document.lyrics.song;
console.log(song);

var lyricPage = document.getElementById('lyricSheet');




submit.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(artist.value);
    console.log(song.value);

    var fetchedLink = 'https://api.lyrics.ovh/v1/' + artist.value + '/' + song.value

    
    console.log(fetchedLink);

    fetch('https://api.lyrics.ovh/v1/' + artist.value + '/' + song.value + '/')
    .then(function(response) {
    return response.json();
    })
    .then(function(data) {
    console.log(data);
    var words = data.lyrics;
    words = words.replace(/(?:\r\n|\r|\n)/g, '<br>');
    console.log(words);
    
    lyricPage.innerHTML = '';

    var para = document.createElement('span');
    para.innerHTML = words;
    lyricPage.appendChild(para);
    

    })
})

