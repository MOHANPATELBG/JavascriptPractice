// Polymorpisum :Method overloading in JavaScript using default parameters and type checking

// Method Overloading Demo in JavaScript
// Method overloading allows a class to have multiple methods with the same name but different parameters.
// JavaScript does not support method overloading natively, but we can achieve similar functionality using default parameters and type checking.

class Calculator {
    // Method to add numbers
    add(a, b, c) {  
        // Check the number of arguments and their types to determine behavior
        if (typeof c !== 'undefined') {
            // If three arguments are provided, return their sum
            return a + b + c;
        } else if (typeof b !== 'undefined') {
            // If two arguments are provided, return their sum
            return a + b;
        } else {
            // If only one argument is provided, return it
            return a;
        }
    }
}
// Creating an instance of the Calculator class
const calc = new Calculator();
// Using the add method with different numbers of arguments
console.log(calc.add(5));               // Output: 5
console.log(calc.add(5, 10));          // Output: 15
console.log(calc.add(5, 10, 15));      // Output: 30
// The add method behaves differently based on the number of arguments provided, demonstrating method overloading.
// Output:
// 5
// 15
// 30
