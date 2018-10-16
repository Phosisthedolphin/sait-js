
$(document).ready(function() {
    $('p').addClass('special');
// $('a').html('Yahoo!');
// $('a').attr('href', 'http://www.yahoo.com');
// $('a').css({'color': 'purple'});
$('body').css({'background': 'red'});
console.log($('a').html());
$('header').css({'height': '300px', 'background': 'blue'});
$('footer').css({'height': '300px', 'background': 'white'});
var links = $('a');

links.each(writeOut);

function writeOut() {
    var link = $(this);

    links.css({'color': 'green'});
}

})

function clickHandler() {
    console.log('clicked!');
}

$('#buttn').on('click', clickHandler);
$('body').on('keypress', function(event) {
    console.log(event);
});

$('#error').hide();

$('#error').fadeIn(5000);
$('#error').animate({
    left: '150px',
})
$('#error').show(1000, function(){
    $(this).addClass('alert');
});




$('#testBox').on('click', clickBox);
var boxAnim = $('#testBox');

function clickBox() {
    boxAnim.animate({
        left: '+=50'
    });
}
