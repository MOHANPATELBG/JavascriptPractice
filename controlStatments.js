//control statements in JavaScript
//Conditional Statements
//1. if statement
let num = 10;
if (num > 0) {
    console.log(num + ' is a positive number.');
}

//2. if...else statement
if (num % 2 === 0) {
    console.log(num + ' is an even number.');
} else {
    console.log(num + ' is an odd number.');
}

//3. if...else if...else statement
if (num > 0) {
    console.log(num + ' is positive.');
} else if (num < 0) {
    console.log(num + ' is negative.');
} else {
    console.log('The number is zero.');
}

//4. switch statement
let day = 3;
let dayName;        
switch (day) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;  
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;  
    default:
        dayName = 'Invalid day';
}
console.log('Day ' + day + ' is ' + dayName);