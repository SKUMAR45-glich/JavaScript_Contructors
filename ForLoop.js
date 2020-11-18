//Multiple of 2

let n1 = Math.floor(Math.random() * 10);

for (var i = 1; i <= n1; i++) {
    console.log(Math.pow(2, i));
}


//Harmonic 
let n2 = Math.floor(Math.random() * 10);

for (var i = 1; i <= n2; i++) {
    console.log("1 /"+ i);
}

//Prime
let n3 = Math.floor(Math.random() * 10);
let flag1 = 1;
for (var i = 2; i <= n3 / 2; i++) {
    if (n3 % i == 0) {
        flag1 = 2;
    }
}

if (flag1 == 1) {
    console.log("Prime");
}

else {
    console.log("Composite");
}


//Prime in a given Range

let nMin = Math.floor(Math.random() * 100);
let nMax = Math.floor(Math.random() * 180);
let flag2 = 1;

for (var i = nMin; i <= nMax; i++) {
    for (var item = 2; item <= i / 2; item++) {
        if (i % item == 0) {
            flag2 = 2;
        }
    }

    if (flag2 == 1) {
        console.log(i+" ");
    }

}


//Factorial

let nP = Math.floor(Math.random() * 100);
let fact = 1;
for (i = 1; i <=nP; i++) {
    fact = i * fact;
    console.log(fact);
}


//Prime Factors

let nPF = Math.floor(Math.random() * 100);

function primeFactors(n) {

    while (n % 2 == 0) {
        console.log(2 + " ");
    }

    for (var i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i == 0) {
            console.log(i + " ");
            n /= i;
        }
    }

    if (n > 2) {
        console.log(n);
    }
}