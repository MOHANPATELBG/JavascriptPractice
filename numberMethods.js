// Number Mothods

let x = 130;
let y = new Number(150);

console.log('is x a number?', typeof x === 'number'); // true
console.log('is y a number object?', y instanceof Number); // true

console.log('x value : ', x); 
console.log('y value :', y);

// toString: Converts a number to a string
console.log(x.toString()); // "130"
console.log(y.toString()); // "150"

console.log('x is integer: ', Number.isInteger(x)); // true
console.log('y is integer: ', Number.isInteger(y)); // false, because y is a Number object
console.log('is y intereger object value integer? ', Number.isInteger(y.valueOf())); // true
console.log('x is NaN:', Number.isNaN(x)); // false
console.log('y is NaN:', Number.isNaN(y)); // false
console.log('NaN is NaN:', Number.isNaN(NaN)); // true

z = '10'
console.log('z is NaN', Number.isNaN(z)); // '10' is not NaN
console.log('Convert z to number:', Number(z)); // 10
console.log('z: is NaN after conversion:', Number.isNaN(Number(z))); // false

// ParseInt: Parses a string and returns an integer
console.log(Number.parseInt('100'));; // 100
console.log(Number.parseInt('100.50'));; // 100
console.log(Number.parseInt('100abc'));; // 100
console.log(Number.parseInt('abc100'));; // NaN

// ParseFloat: Parses a string and returns a floating point number
console.log(Number.parseFloat('100.50'));; // 100.5
console.log(Number.parseFloat('100.50abc'));; // 100.5
console.log(Number.parseFloat('abc100.50'));; // NaN

//  toPrecision: Formats a number to a specified length
const num = 123.456789;
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toPrecision(6)); // "123.457"   

//  toExponential: Converts a number to exponential notation
console.log(num.toExponential(2)); // "1.23e+2"
console.log(num.toExponential(4)); // "1.2346e+2"

// toLocaleString: Converts a number to a string using local conventions
const number = 1234567.89;
console.log(number.toLocaleString('en-US')); // "1,234,567.89"
console.log(number.toLocaleString('de-DE')); // "1.234.567,89"

//  valueOf: Returns the primitive value of a number object
const numObj = new Number(200);
console.log(numObj.valueOf()); // 200

// toFixed: Formats a number using fixed-point notation
const num1 = 123.456789;
console.log(num1.toFixed(2)); // "123.46"

