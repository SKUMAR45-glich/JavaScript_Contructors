//1. To get the maximum and minimum of numbers

let a = Math.floor(Math.random() * 1000); 
let b = Math.floor(Math.random() * 1000); 
let c = Math.floor(Math.random() * 1000); 
let d = Math.floor(Math.random() * 1000); 
let e = Math.floor(Math.random() * 1000); 

function getLargest(a, b, c, d, e) {
    let numArray = [b, c, d, e];
    let largest = a;

    for (let item of numArray) {
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}

function getSmallest(a, b, c, d, e) {
    let numArray = [b, c, d, e];
    let smallest = a;

    for (let item of numArray) {
        if (item < smallest) {
            smallest = item;
        }
    }
    return smallest;
}

console.log(getLargest(a, b, c, d, e));
console.log(getSmallest(a, b, c, d, e));


// To compare date

let date = (Math.floor(Math.random() * 300)+1);
let month = (Math.floor(Math.random() * 110) + 1);

var startingDate = new Date(2020, 03, 20);
var endDate = new Date(2020, 06, 20);
var enteredDate = new Date(2020, month, date);

if (enteredDate => startingDate && enteredDate <= endDate) {
    console.log("true");
}
else {
    console.log("false");
}



//To Find the Leap Year

let year = (Math.floor(Math.random() * 10000));

function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(year));



//To Flip a coin as Head or Tail

let coin = Math.floor(Math.random() * 10) % 2;

if (coin == 1) {
    console.log("head");
}
else {
    console.log("tail");
}



//IfElse and Else

let num = Math.floor(Math.random() * 10);
let numTostring = num.toString();

console.log(numTostring);



//Read and Display WeekDay

let a = ((Math.floor(Math.random() * 10) % 8) + 1);

if (a == 1) {
    console.log("Sunday");
}

else if (a == 2) {
    console.log("Monday");
}

else if (a == 3) {
    console.log("Tueday");
}

else if (a == 4) {
    console.log("Wednesday");
}
else if (a == 5) {
    console.log("Thursday");
}
else if (a == 6) {
    console.log("Friday");
}
else {
    console.log("Saturday");
}



//Display Max and Min of Operation

let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let c = Math.floor(Math.random() * 10);

var operation1 = a + b * c;
var operation2 = a % b + c;
var operation3 = c + a / b;
var operation4 = a * b + c;


function getGreatestOperation(a, b, c) {
    let numArray = [b, c];
    let largest = a;

    for (let item of numArray) {
        if (item > largest) {
            largest = item;
        }
    }
    return largest;
}

function getSmallestOperation(a, b, c) {
    let numArray = [b, c];
    let smallest = a;

    for (let item of numArray) {
        if (item < smallest) {
            smallest = item;
        }
    }
    return smallest;
}


var largest = getLargest(operation1, operation2, operation3);

if (largest == operation1) {
    console.log("a + b * c");
}
else if (largest == operation2) {
    console.log("a % b + c")
}
else if (largest == operation3) {
    console.log("c + a / b")
}
else
{
    console.log("a*b+c")
}

var smallest = getSmallest(operation1, operation2, operation3);

if (smallest == operation1) {
    console.log("a + b * c")
}
else if (smallest == operation2) {
    console.log("a % b + c")
}
else if (smallest == operation3) {
    console.log("c + a / b")
}
else
{
    console.log("a*b+c")
}
