var myForm = document.getElementById('userForm');
console.log(myForm);

var last = myForm.lastname.value;
console.log(last);

// Forms collection

// var formList = document.forms;
// var firstForm = document.forms[0];

console.log(myForm.email.type);
myForm.lastname.focus();

var checkboxList = myForm.snowman;

for (var i = 0; i < checkboxList.length; i++) {
    if (checkboxList[i].checked) {
        console.log(checkboxList[i].value);
    }
}

var submitButton = myForm.submit;
var firstNameSubmit = 0;
var lastNameSubmit = 0;
var emailSubmit = 0;

submitButton.addEventListener('click', function(event) {
    myForm.checkValidity();
    myForm.reportValidity();
    event.preventDefault();
    var name = myForm['firstname'].value;
    firstNameSubmit = name;
    console.log(name);
    console.log(firstNameSubmit);


    var lastName = myForm['lastname'].value;
    lastNameSubmit = lastName;
    console.log(lastName);
    console.log(lastNameSubmit);

    var emailAdd = myForm['email'].value;
    emailSubmit = emailAdd;
    console.log(emailAdd);
    console.log(emailSubmit);
})

