// Arrow function 
//Arrow functions are a more concise syntax for writing function expressions in JavaScript. They were introduced in ECMAScript 6 (ES6) and provide a shorter way to define functions. Arrow functions have some differences compared to traditional function expressions, particularly in how they handle the "this" keyword.

// Syntax
let print = (message) => {
    console.log(message);
    return 1
}
console.log(print("This is an arrow function example."));
