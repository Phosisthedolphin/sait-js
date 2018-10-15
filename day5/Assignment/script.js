var mainForm = document.getElementById('quizForm');
var submit = document.getElementById('submit');
var qOne = document.quizForm.qOne;
var qOneErr = document.getElementById('qOneErr');
var qTwo = document.quizForm.qTwo;
var qTwoErr = document.getElementById('qTwoErr');
var qThree = document.getElementById('qThree');
var qThreeErr = document.getElementById('qThreeErr');
var qFour = document.quizForm.qFour;
var qFourErr = document.getElementById('qFourErr');
var checkboxes = document.quizForm.qFour;
var checkboxChecked = [];
var radio1Select = document.quizForm.qOne;
var radio1Right = [];
var radio2Select = document.quizForm.qTwo;
var radio2Right = [];
var rightAnswers = 0;

    

submit.addEventListener('click', function(event) {
    event.preventDefault();
    qOneErr.style.display = 'none';
    qTwoErr.style.display = 'none';
    qThreeErr.style.display = 'none';
    qFourErr.style.display = 'none';

    // ********************************************************************************
    // ANSWER ONE
    // ********************************************************************************

    if (!qOne.value) {
        console.log(qOne.value);
        qOneErr.style.display = 'block';
        event.preventDefault();
    }

    for (var i = 0; i < radio1Select.length; i++) {
        if(radio1Select[i].checked && (radio1Select[i].value === 'freeza')) {
            radio1Right.push(radio2Select[i]);
        }
    }

    if(radio1Right.length == 1) {
        console.log('correct');
        rightAnswers++;
    } else {
        console.log('incorrect');
    }

    // ******************************************************************************
    //     ANSWER TWO
    // *********************************************************************************

    if (!qTwo.checked) {
        console.log(qTwo.value);
        qTwoErr.style.display = 'block';
        event.preventDefault();
    }

    for (var i = 0; i < radio2Select.length; i++) {
        if(radio2Select[i].checked && (radio2Select[i].value === 'vegeta')) {
            radio2Right.push(radio2Select[i]);
        }
    }

    if(radio2Right.length == 1) {
        console.log('correct');
        rightAnswers++;
    } else {
        console.log('incorrect');
    }

    // ********************************************************************************
    // ANSWER THREE
    // ********************************************************************************

    if (parseInt(qThree.value) === 3) {
        console.log('correct!');
        rightAnswers++;
    } else {
        console.log('incorrect');
    }

    // ***********************************************************************************
    // ANSWER FOUR
    // ***********************************************************************************
    

    for (var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked && (checkboxes[i].value === 'right')) {
            checkboxChecked.push(checkboxes[i]);
        }
    }

    if(checkboxChecked.length === 2) {
        console.log('correct');
        rightAnswers++;
        console.log(rightAnswers);
    } 
    else {
        console.log('incorrect!');
        console.log(checkboxChecked);
    }

    // ********************************************************************************
    // ANSWER FIVE
    // ********************************************************************************

    if (qFive.value === 'Trunks') {
        console.log('correct!');
        rightAnswers++;
    } else {
        console.log('incorrect');
    }
    console.log(rightAnswers);
    document.getElementById('printResult').innerHTML = rightAnswers;
});

