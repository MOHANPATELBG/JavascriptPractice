// Type convertion demo in JavaScript
// Type conversion is the process of converting a value from one data type to another.
// JavaScript provides both implicit and explicit type conversion methods.
// Implicit Type Conversion occurs when JavaScript automatically converts a value from one type to another.
// Explicit Type Conversion occurs when we manually convert a value using built-in functions.
// Implicit Type Conversion Examples
let num = 10;
let str = "The number is " + num; // num is implicitly converted to a string
console.log(str); // Output: The number is 10
let bool = true;
let result = bool + 5; // bool is implicitly converted to a number (true -> 1)
console.log(result); // Output: 6
// Explicit Type Conversion Examples
let strNum = "20";
let convertedNum = Number(strNum); // Explicitly converting string to number
console.log(convertedNum); // Output: 20
let numToStr = 30;
let convertedStr = String(numToStr); // Explicitly converting number to string
console.log(convertedStr); // Output: "30"
let strBool = "false";
let convertedBool = Boolean(strBool); // Explicitly converting string to boolean
console.log(convertedBool); // Output: true (non-empty strings are true)
// Summary of Type Conversion
// Implicit conversion happens automatically by JavaScript during operations.
// Explicit conversion is done manually using functions like Number(), String(), and Boolean().
// Understanding type conversion is crucial for avoiding unexpected behaviors in JavaScript code.
// Output:  
// The number is 10
// 6
// 20
// "30"
// true
