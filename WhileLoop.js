//While loop for 256

let nN = Math.floor(Math.random() * 100);

while (nN <= 256) {
    console.log(nN);

    nN = Math.pow(2, nN);
}



//Magic Number

let nM = Math.floor(Math.random() * 1000);
let nU = Math.floor(Math.random() * 1000);

if (nU < (nM / 2)) {
    for (var item = nU; item <= nM; item++) {
        console.log(item);
    }
}

//Till Head is Reached

let head = 1;
let User = (Math.floor(Math.random() * 10))%2;
let flag = 1;
while (flag == 1) {
    if (User == head) {
        console.log("head");
        flag = 2;
    }
    else {
        console.log("continue");

    }
}


//Gambling

let start = 100;
let count = 0;
const bet = 1;
const gamble = 1;
while (start < 200 && start < 0) {
    let choose = (Math.floor(Math.random()) % 2);
    if (choose == gamble) {
        start = start + bet;
        count++;
    }
    else {
        start = start - bet;
        count++;
    }
}
console.log(start+" "+count);