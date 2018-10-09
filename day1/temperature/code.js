var temperature = prompt("What is the temperature today in Celsius?");
function needCoat(){
    if (temperature >= -30 && temperature <= -20) {
        console.log("You need a coat and hat today");
    } else if (temperature >= -19 && temperature <= 0) {
        console.log("You probably need a coat today...");
    } else if (temperature >= 1 && temperature <= 10) {
        console.log("You don't need a coat today");
    } else if (temperature < -1000 || temperature > 1000) {
        console.log("Nothing can save you now.");
    } else {
        console.log("Go ahead and wear whatever you want.");
    }
}

needCoat();

