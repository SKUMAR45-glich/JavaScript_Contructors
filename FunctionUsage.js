//FunctionUsageforTempConversion

function FahrenheitToCelcius(degF) {
    let degC = (degF * 9 / 5) + 32;
    console.log(degC+"C");
}

function CelciusToFahrenheit(degC) {
    let degF = (degC * 9 / 5) + 32;
    console.log(degF+"F");
}

let nT = Math.floor(Math.random() * 1000);
let choice = (Math.floor(Math.random() * 10) % 2);

if (choice == 1) {
    FahrenheitToCelcius(nT);
}

else {
    CelciusToFahrenheit(nT);
}


//Function for Palindrome

function Plindrome(num) {
    let reverse = 0;
    let n = num;
    let remainder;
    while (num != 0) {
        remainder = num % 10;
        reverse = reverse * 10 + remainder;
        num /= 10;
    }

    if (n == reverse) {
        console.log("It is Palindrome");
    }
    else {
        console.log("Not Palindrome");
    }
}

let numb = Math.floor(Math.random() * 1000);
Plindrome(numb);