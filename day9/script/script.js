// Please enjoy reading my code.

// (\__/)
// (='.'=)

// You were an awesome instructor Heather! I'll miss constantly irritating you with idiotic questions.
// Godspeed sifting through this nightmare.
// -Joel

function displayDate() {
    let mydate = new Date();
    //Apparently the following three lines prevent some bug...I cannot find our original notes on time and date so ended up hunting for other info about it to create this.
    let year = mydate.getFullYear();
        if(year < 1000){
            year +=1900
        }
    //Built in JS functions to get current day, month, etc.
    let day = mydate.getDay();
    let month = mydate.getMonth();
    let daym = mydate.getDate();
    //An array to store days and months. Calling day as an array index should pull the current day and print it at the end of the function.
    let dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    let montharray = new Array("January","February","March","April","May","June","July","August","Septemeber","October","November","December");
    
    let currentTime = new Date();
    //See above.
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();
    //This is a bit of code to "normalize" the behavior. Found this while doing another tutorial to remember how to do clock functions. Now I'm sure I'll never forget.
        if(h == 24){
            h = 0;
        } else if(h > 12){
            h = h - 0;
        }

        if(h < 10){
            h = "0" + h;
        }

        if(m < 10){
            m = "0" + m;
        }

        if(s < 10){
            s = "0" + s;
        }
        //Finding the element ID, and populating using textContent. Pretty self explanatory.
        let myClock = document.getElementById('time');
        myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        //Repeat this every one second.
        setTimeout('displayDate()', 1000);
}
displayDate();

function agentGen() {
    //Creating two array databases with phone numbers and names in the appropriate index numbers. Iterate through, print to DIV. No time to style (Same goes for much of this, got stuck in a few tricky places unfortunately....)
    let nameArray = new Array("John Simco", "Judy Steiner", "Rod Barley", "Quaid Wilson", "Frank Booth");
    let phoneArray = new Array("403-000-000", "403-111-1111", "403-222-2222", "403-333-3333", "403-444-4444");
    for (i = 0; i < nameArray.length; i ++) {
        let agentInfo = document.getElementById('agent');
        agentInfo.textContent += nameArray[i] + " " + phoneArray[i] + ("\n");
        //Oh and this spits out a bloody error if you are not on that page.
        //ALSO, any JS running anywhere if you are not on that page spits out a CONSOLE.LOG error.
        //I will research into why the hell this is, I just don't have time to figure it out today.
        //I am writing this at about 2:27 PM and still need to get a bloody plane to fly across the screen.
    }
}
agentGen();

function toggleSlideOn() {
    //Simple function for toggling sliding nav on and off.
    document.getElementById('slide-bar').classList.toggle('active');
};

//OOF! GLOBAL VARIABLES! So sorry, but I didn't have time to fully figure out the other way. I promise I'll never use them again **WINK**
var myForm = document.getElementById('userForm');
console.log(myForm);

// var last = myForm.lastname.value;
// console.log(last);

// Forms collection

// var formList = document.forms;
// var firstForm = document.forms[0];

// console.log(myForm.email.type);
// myForm.lastname.focus();

var submitButton = myForm.submit;
var firstNameSubmit = 0;
var lastNameSubmit = 0;
var emailSubmit = 0;

//Function for submitting things. Kept some console logs in there for testing, I guess.
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

    var phone = myForm['phone'].value;
    phoneSubmit = phoneAdd;
    console.log(phone);
    console.log(phoneSubmit);

    var address = myForm['address'].value;

    var postal = myForm['postal'].value;
});

var walkForwards = true;

    function rocket() {
    var img = document.getElementById('rocket');
    var currentLeft = parseInt(img.style.left);

    if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
        walkForwards = false;
        img.style.transform ='scaleX(-1)';
    }

    // If the ROCKET should be walking er...FLYING backward and the left position of the ROCKET image is less than or equal to 0. (AKA when the ROCKET reaches the left side of the page but before it leaves the page)
    //((OKAY I am done pretending this isn't a modified cat walk, you get the idea, but I did add the image transform. That is my contribution to this code.))
    if (!walkForwards && (currentLeft <= 0)) {
        // Make the cat walk forwards instead
        walkForwards = true;
        img.style.transform = 'scaleX(1)';
    }

    
    if (walkForwards) {
        img.style.left = (currentLeft + 10) + 'px';
    } else {
        img.style.left = (currentLeft - 10) + 'px';
    }
    }
    // Call the catWalk function every 50 milliseconds.
    setInterval(rocket, 50);