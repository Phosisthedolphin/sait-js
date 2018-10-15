var submitBtn = document.getElementById('submit');
var errName = document.getElementById('errName');
var errAge = document.getElementById('errAge');
var errAgeYoung = document.getElementById('errAgeYoung');

submitBtn.addEventListener('click', function(event) {
    errName.style.display = 'none';
    errAge.style.display = 'none';
    errAgeYoung.style.display = 'none';

    var name = document.form1.txtName.value;
    var age = document.form1.txtAge.value;
    var ageCheck = parseInt(age);

    if (!name) {
        event.preventDefault();
        errName.style.display = 'block';
    }
    
    if(!age) {
        event.preventDefault();
        errAge.style.display = 'block';
    } else if (ageCheck < 18) {
        event.preventDefault();
        errAgeYoung.style.display = 'block';
    }
});