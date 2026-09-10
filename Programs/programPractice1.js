// Program to print 9th tableas

for (let i = 1; i <= 10; i++) {
    console.log('9 x ' + i + ' = ' + (9 * i));
}

// program to print even numbers from 1 to 20
let num = 20;
for (let i = 1; i <= num; i++) {
    if(i % 2 === 0) {
        console.log(i + ' is an even number.');
    }
}

// program to print odd numbers from 1 to 20
let n = 20;
for (let i = 1; i <= n; i++) {
    if(i % 2 !== 0) {
        console.log(i + ' is an odd number.');
    }
}

// program to check the the given number is prime or not
let number = 10;
let isPrime = true;
for (let i=2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(number + ' is a prime number.');
} else {
    console.log(number + ' is not a prime number.');
}

// Fibonacci series up to a certain limit
// example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
let a= 0;
let b= 1;
let limit = 10;
console.log('Fibonacci series:');
console.log(a);
console.log(b);
for (let i = 2; i < limit; i++) {
    let nextNum = a + b;
    console.log(nextNum);
    a = b;
    b = nextNum;
}

// program to calculate the factorial of a number
number = 4;
let result = 1 ;
for(let i = 1; i <= number; i++) {
    result *= i;
}
console.log('Factorial of ' + number + ' is: ' + result);

// program to count the number of characters in a string (excluding spaces)
let str = 'MohanPatel B G';
let count = 0;
for(let i = str.length - 1; i >= 0; i--) {
    if(str[i] !== ' ') {
        count++;
    }
}
console.log('Original string length: ' + str.length);
console.log('Number of characters (excluding spaces): ' + count);

// program to check prime number of range between 1 to 10
console.log('Prime numbers between 1 and 10: Way1');
for (let i = 1; i <= 11; i++) {
    let prime = true;
    if (i == 1) {
        prime = false;
    }
    else if (i == 2) {
        prime = true; // 2 is a prime number
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
            }
        }
    }
    if (prime) {
        console.log(i + ' is a prime number.');
    } else {
        console.log(i + ' is not a prime number.');
    }
}
console.log('Prime numbers between 1 and 10: Way2');
for (let i = 1; i <= 11; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log(i + ' is a prime number.');
    }
}

let str2 = "Malayalam";
//let str2 = "mohan";
let reversedStr2 = "";
for (let i = str2.length - 1; i >= 0; i--) {
    reversedStr2 += str2[i];
}

if (str2.toLowerCase() === reversedStr2.toLowerCase()) {
    console.log(str2 + ' is a palindrome.');
} else {
    console.log(str2 + ' is not a palindrome.');
}


