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